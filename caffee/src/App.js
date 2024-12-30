
import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Products from './Page menu/Products'; 
import Product from './Page menu/Product';
import Table from './Liste commande/Table';
import PaymentInterface from './Pay page/Pay';


function App() {
    return (
        <>
            <div className='container-fluid'>
                <Routes>
                    <Route path="/pay" element={<PaymentInterface/>} />
                </Routes>
            
                <div className='row'>
                    <div className='col-sm-6'>
                        <Table/>
                    </div>
                    <div className='col-sm-6'>
                        <Products/>
                    </div>

                </div>
            </div>


        </>

    );
}

export default App;
