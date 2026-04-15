import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

const PageLayout = () => {
    return (  
    <>
    
       <Header /> 
       <Outlet />
       <Footer />
    
    </>
    );
}
 
export default PageLayout;