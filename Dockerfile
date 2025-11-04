# --- Build Stage ---
FROM node:22-alpine AS builder
WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the app
RUN pnpm build

# --- Runtime Stage ---
FROM nginx:alpine

# Install curl for health checks and gettext for envsubst
RUN apk add --no-cache gettext curl

# Copy built application to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx template
COPY nginx.template.conf /etc/nginx/templates/default.conf.template

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
