// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos basada en categoryId
    async function fetchItems() {
      const response = await fetch('/data/items.json'); // Reemplaza con tu fuente de datos
      const data = await response.json();
      const filteredItems = categoryId
        ? data.filter(item => item.category === categoryId)
        : data;
      setItems(filteredItems);
    }
    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h1>Items en Categoría: {categoryId || 'Todos'}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;