import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToCart, getOne } from '../models/ProductModel';

function ProductItem() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});

  /* Vanlig useEffect för att hämta produkt via id i url, motsvarande getOne för inlägg i videorna. */

  useEffect(() => {
    getOne(productId).then((product) => setProduct(product));
  }, [productId]);

  /* State för amount-fältet separat */
  const [amount, setAmount] = useState(1);

  function onAddToCart() {
    /* Fejkat userId. Går bra att bara fejka amount också, men i detta fall har jag lagrat det i ett state (rad 11)*/

    addToCart(productId, 1, amount).then((msg) => console.log(msg));
  }

  return product ? (
    <div key={product.id}>
      {product.title}
      <br />
      {/* Fält för att lägga till en ny produkt tillsammans med inputruta med hur många. Detta kan ni lösa hur ni vill. Kan vara plustecken eller liknande också */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={onAddToCart}>Lägg till i varukorg</button>
    </div>
  ) : (
    <div>Ingen produkt</div>
  );
}

export default ProductItem;
