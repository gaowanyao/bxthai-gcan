var BxthaiApi = require('./index.js');
// console.log(BxthaiApi);

var Bxthai = new BxthaiApi("ea39f29fa165","463957a03598","");

// console.log(Bxthai);

// var ticker = Bxthai.ticker(console.log);
// var ticker = Bxthai.ticker(logResponse);
Bxthai.ticker(function(err,data){
  // console.log(err);
  // console.log(data);
  // console.log(data[1]);
  console.log(data[1]['last_price']);


});
// Bxthai.pairings(console.log);
// Bxthai.trades("",console.log);


// function logResponse(err, data)
// {
//     if (err)
//     {
//
//       console.log(err);
//         console.log('error name %s', err.name);
//         console.log('error message %s', err);
//     }
//
//     console.log('\ndata: %s', JSON.stringify(data));
// }
