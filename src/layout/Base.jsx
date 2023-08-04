import {Header} from "../components/Header.jsx";
import {Main} from "../components/Main.jsx";
import {Footer} from "../components/Footer.jsx";
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