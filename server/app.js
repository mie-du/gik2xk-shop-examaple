var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./models');

var app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Väldigt simplifierat. All kod nedan bör snarare delas upp i dels ensklida routes-filer; productsRoute, usersRoute osv.  Ni bör också använda servicar för snyggt uppdelad kod. */

app.get('/products/:id', async (req, res) => {
  const product = await db.product.findOne({ where: { id: req.params.id } });

  res.send(product);
});

app.post('/products/:id/addToCart', async (req, res) => {
  //userId finns i body, produktid finns i route.
  const userId = req.body.userId;
  const amount = req.body.amount;
  const productId = req.params.id;

  const foundOrCreatedCart = await db.cart.findOrCreate({
    /* Where tar emot villkor samt övrig data man vill spara ifall det blir en create */
    where: { userId, payed: false },
    order: [['createdAt', 'desc']]
  });

  //foundOrCreated returnerar en array. Kopplingstabell vill också bara ha id.
  const cartId = foundOrCreatedCart[0].id;

  const newCartProductRow = await db.cartProduct.upsert({
    cartId,
    productId,
    amount
  });

  res.send(newCartProductRow[0]);
});

app.get('/users/:id/getCart', async (req, res) => {
  const cart = await db.cart.findOne({
    where: { userId: req.params.id },
    order: [['createdAt', 'desc']],
    include: [db.product]
  });

  //om man vill städa upp lite bland produkterna så att inte cartProduct följer med som hela objekt.
  const cartProductItems = cart.products.map((product) => {
    return {
      id: product.id,
      title: product.title,
      body: product.body,
      price: product.price,
      amount: product.cartProduct.amount
    };
  });
  const cleanCart = {
    id: cart.id,
    payed: cart.payed,
    userId: cart.userId,
    products: cartProductItems
  };

  res.send(cleanCart);
});
module.exports = app;
