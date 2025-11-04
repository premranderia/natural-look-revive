# --- Build Stage ---
FROM node:22-alpine AS builder
WORKDIR /src

# Copy monorepo setup files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY src/ ./src/

# Build the app with environment variables available
RUN pnpm build

# --- Runtime Stage ---
FROM nginx:alpine

# Install curl for health checks and gettext for envsubst
RUN apk add --no-cache gettext curl

# Copy built application
COPY --from=builder /src/dist /usr/share/nginx/html

# Copy nginx template
COPY nginx.template.conf /etc/nginx/templates/default.conf.template

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]