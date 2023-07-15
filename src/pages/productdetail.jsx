import ProductDetail from "../components/fragments/ProductDetail";
import HeaderDetail from "../components/fragments/HeaderDetail";
import Footer from "../components/fragments/Footer";
import { useLocation } from "react-router-dom";

const ProductDetailPage = () => {
    const location = useLocation();
    return (
        <>
            <HeaderDetail
                judul={location.state.judul}
                subjudul={location.state.subjudul}
            />
            <ProductDetail />
            <Footer />
        </>
    )
}

export default ProductDetailPage;