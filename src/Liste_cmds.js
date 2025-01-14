


export default function ParamsListCmds() {
    return (
        <div className="order-params-bar">
            <div className="order-params">
                <div className="param">
                    <span>Toutes les commandes </span> <span className="count"> 83</span>
                </div>
                <div className="param">
                    <span>Sur place </span> <span className="count"> 8</span>
                </div>
                <div className="param">
                    <span>Emporté </span> <span className="count"> 3</span>
                </div>
            </div>
            <button className="btn btn-success new-cmd">Nouvelle commande</button>
        </div>
    )
}