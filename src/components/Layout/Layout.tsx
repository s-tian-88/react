 import { Outlet } from "react-router-dom";
 import { Header } from "../Header";
 import { Footer } from "../Foter";


 const Layout = () => {
     return (
         <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
         </div>
     )
 }

 export { Layout };
