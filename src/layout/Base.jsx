import {Header} from "../components/layout/Header.jsx";
import {Main} from "../components/layout/Main.jsx";
import {Footer} from "../components/layout/Footer.jsx";
import {Outlet} from "react-router-dom";

export default function Base() {
    return (
        <>
            <Header/>
            <Main>
                <section>
                    <Outlet/>
                </section>
            </Main>
            <Footer/>
        </>
    )
}