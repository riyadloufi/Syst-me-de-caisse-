import React, { useState } from 'react';
import './StockManager.css';  // Importer un fichier CSS pour la mise en page

const StockManager = () => {
  // État pour gérer la liste des produits
  const [products, setProducts] = useState([]);

  // État pour un nouveau produit à ajouter
  const [newProduct, setNewProduct] = useState({
    name: '',
    quantity: 0,
    price: 0,
  });

  // Ajouter un nouveau produit
  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: newProduct.name,
        quantity: newProduct.quantity,
        price: newProduct.price,
      },
    ]);
    setNewProduct({ name: '', quantity: 0, price: 0 }); // Réinitialiser les champs
  };

  // Supprimer un produit
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Mettre à jour les informations d'un produit
  const handleEditProduct = (id, field, value) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, [field]: value } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="stock-manager">
      <h1>Gestion de Stock</h1>

      {/* Formulaire pour ajouter un nouveau produit */}
      <div className="add-product">
        <h3>Ajouter un produit</h3>
        <input
          type="text"
          placeholder="Nom du produit"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantité"
          value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Prix"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddProduct}>Ajouter</button>
      </div>

      {/* Liste des produits */}
      <div className="product-list">
        <h3>Liste des produits</h3>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => handleEditProduct(product.id, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleEditProduct(product.id, 'quantity', parseInt(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) => handleEditProduct(product.id, 'price', parseFloat(e.target.value))}
                  />
                </td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockManager;
