const config = {
  stripe: {
    apiKey: 'STRIPE_PUBLISHABLE_KEY',
    checkoutUrl: 'https://cocky-swartz-5cef73.netlify.com/.netlify/functions/createCharge',
    productsUrl: 'https://cocky-swartz-5cef73.netlify.com/.netlify/functions/fetchProducts',
    currency: 'EUR',
  },
};

export default config;
