const stripe = require('stripe')(process.env.sk_test_zhSGHkJ4fRgSAcZLsnJ6zbd0);

exports.handler = (event, context, callback) => {
  return stripe.products.list(
      {limit: 10}).then((products) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        data: products.data
      }),
    };
    callback(null, response);
  }).catch((err) => { // Error response
    console.log(err);
    const response = {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: err.message,
      }),
    };
    callback(null, response);
  });
};
