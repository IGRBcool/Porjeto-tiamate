import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import NossoCafe from "../pages/nossoCafé";
import PageLayout from "../layouts/PageLayout";
import Cardápio from "../pages/Cardápio";
import Franquia from "../pages/franquia";
import Contato from "../pages/Contato";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/nosso-café" element={<NossoCafe />} />
                    <Route path="/franquia" element={<Franquia />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/cardápio" element={<Cardápio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;