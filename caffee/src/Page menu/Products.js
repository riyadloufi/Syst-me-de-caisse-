import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemSelected } from '../reduce center/Actions'; // Import the action creator
import Style from './Style.module.css';

function ProductPage({ Catigorie, items, addItemSelected }) {
    const [selectedCategory, setSelectedCategory] = useState(null); // État pour la catégorie sélectionnée

    // Filtrer les items en fonction de la catégorie sélectionnée
    const filteredItems = selectedCategory
        ? items.filter((item) => item.Catigorie === selectedCategory)
        : [];

    return (
        <div className={Style.body_menu}>
            <div className={Style.menu}>
                {/* Affichage de la liste des catégories */}
                {!selectedCategory && (
                    <>
                        <div className='recherche'>
                            <input type='text' placeholder='Rechercher un item' className={Style.rechercher} />
                            <button className='btn btn-primary'>Rechercher</button>
                        </div>
                        <span>Toutes les catégories</span>
                        <ul className={Style.menu_list}>
                            {Array.isArray(Catigorie) &&
                                Catigorie.map((elm) => (
                                    <li
                                        key={elm.id}
                                        className={Style.menu_element}
                                        onClick={() => setSelectedCategory(elm.name)} // Sélectionner la catégorie
                                    >
                                        <img className={Style.imgStyle} src={elm.img} alt={elm.name} /> <br />
                                        <p>{elm.name}</p>
                                    </li>
                                ))}
                        </ul>
                    </>
                )}

                {/* Affichage des produits d'une catégorie */}
                {selectedCategory && (
                    <>
                        <span>
                            <button
                                className="btn btn-secondary"
                                onClick={() => setSelectedCategory(null)} // Revenir à la liste des catégories
                            >
                                Retour
                            </button>{' '}
                            {selectedCategory}
                        </span>
                        <ul className={Style.menu_list}>
                            {filteredItems.map((elm) => (
                                <li
                                    key={elm.id}
                                    className={Style.menu_element}
                                    onClick={() => addItemSelected(elm)} // Ajouter l'élément sélectionné
                                >
                                    <img className={Style.imgStyle} src={elm.img} alt={elm.name} /> <br />
                                    <p>{elm.price}$</p>
                                    <p>{elm.name}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    Catigorie: state.Catigorie, // Liste des catégories
    items: state.items, // Liste des items
});

const mapDispatchToProps = (dispatch) => ({
    addItemSelected: (item) => dispatch(addItemSelected(item)), // Action pour ajouter un item sélectionné
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
