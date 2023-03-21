import { useEffect, useState } from 'react';

import { getCart } from '../models/UserModel';

function Cart() {
  /* Varukorg för att lista alla produkter för en användare */
  const [cart, setCart] = useState([]);
  /* Fejkat userId */
  const userId = 1;
  useEffect(() => {
    getCart(userId).then((cart) => setCart(cart));
  }, []);
  console.log(cart);

  //?. är en genväg för att först kolla om cart ens finns, innan vi kollar om det finns en products-egenskap. istället för if(cart && cart.products)
  return (
    cart?.products &&
    cart.products.map((product) => (
      <div key={product.id}>
        {/* jag kan ange product.amount på detta sätt för att vi "städat" i backend. annars hade jag behövt skriva product.cartProduct.amount */}
        {product.title} Antal: {product.amount}
      </div>
    ))
  );
}

export default Cart;
