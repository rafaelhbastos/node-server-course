const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('shop/product-list', {
      products: products, 
      pageTitle: 'All products', 
      path: '/products', 
      hasProducts: products.length > 0, 
      activeShop: true
    });
  });
};

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('shop/index', {
      products: products, 
      pageTitle: 'Shop', 
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};