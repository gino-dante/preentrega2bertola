import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch('/data/items.json'); // Reemplaza con tu fuente de datos
      const data = await response.json();
      const selectedItem = data.find(item => item.id === itemId);
      setItem(selectedItem);
    }
    fetchItem();
  }, [itemId]);

  return (
    <div>
      {item ? (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;