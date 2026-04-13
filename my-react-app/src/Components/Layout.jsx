import Header from "./Header";
import Footer from "./Footer";
import { Children } from "react";

function Layout({children}){
    return(
        <>
        <Header/>

            <main style={{ minHeight:"80vh", padding:"20px" }}>
                {children}
            </main>


        <Footer/>
        </>
    )
}

export default Layout