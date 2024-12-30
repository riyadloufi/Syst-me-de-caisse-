import { Route, Routes } from "react-router-dom"
import App from "./App"
import PaymentInterface from "./Pay page/Pay"
import StockManager from "./Stock/StockManager"
import Stock_Home from "./Stock/Stock_Home"
import Header from './Header/Header';

export default function RouterManeger() {
    return (
        <>
            <Header></Header>
            <Routes>

                {/* ------ Home Page ------ */}
                <Route path='/Home' element={<App />} />


                {/* ------ Pay ------ */}

                <Route path='/Pay/:Total' element={<PaymentInterface />} />

                {/* ------ Stock ------ */}
                <Route path='/Stock_Home' element={<Stock_Home />} />

                <Route path='/Stock_Home/StockManager' element={<StockManager />} />

            </Routes>
        </>
    )
}