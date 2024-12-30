import { Link } from 'react-router-dom';
export default function Stock_Home() {
    return (
        <>
            <Link to={'/Stock_Home/StockManager'}>
                <button >Voir les produit dans le stock</button>
            </Link>
        </>
    )
}