import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Hair Care Products | Natural Look Professional Products</title>
        <meta name="description" content="Premium hair care products for maintaining your hair system at home. Professional-grade shampoos, conditioners, adhesives, and styling products." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Products />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
