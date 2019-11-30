//
// const express = require('express');
// const compression = require('compression');
//
// const _port = 4100;
// const _app_folder = 'dist/temp-mon-js';
//
// const app = express();
// app.use(compression());
// app.use(express.json());
//
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });
//
// // ---- SERVE STATIC FILES ---- //
// app.route('/api/temps').get((req, res) => {
//   data.forEach(element => {
//     console.log('name = ' + element.name);
//     element.data.forEach(temp => {
//       console.log('  value = ' + temp.value);
//       console.log('  date  = ' + temp.date);
//     });
//   });
//   res.send(data);
// });
//
// app.post('/api/temps', function(req, res) {
//   console.log(' body  ' + req.body);
//   console.log(' Temp  ' + req.body.temp);
//   console.log(' Name ' + req.body.name);
//
//   var temp = req.body.temp;
//   var name = req.body.name;
//
//   var now = new Date();
//   console.log(' Now  ' + now.toISOString());
//
//   var found = false;
//   data.forEach(element => {
//     if (element.name == name) {
//       element.data.push({ value: temp, date: now.toISOString() });
//       found = true;
//     }
//   });
//
//   if (!found) {
//     data.push({
//       name: name,
//       data: [{ value: temp, date: now.toISOString() }]
//     });
//   }
//   res.end('ok');
// });
//
// app.get('*.*', express.static(_app_folder));
//
// // ---- SERVE APLICATION PATHS ---- //
// app.all('*', function(req, res) {
//   res.status(200).sendFile(`/`, { root: _app_folder });
// });
//
// // ---- START UP THE NODE SERVER  ----
// app.listen(_port, function() {
//   console.log(
//     'Node Express server for ' +
//       app.name +
//       ' listening on http://localhost:' +
//       _port
//   );
// });
//
// var data = [
//   /* {
//     name: 'garage',
//     data: [
//       { value: 5, date: '2019-11-19T16:00:00.00Z' },
//       { value: 6, date: '2019-11-20T16:00:00.00Z' },
//       { value: 10, date: '2019-11-23T16:00:00.00Z' },
//       { value: 11, date: '2019-11-25T16:00:00.00Z' }
//     ]
//   },
//   {
//     name: 'chambre',
//     data: [
//       { value: 21, date: '2019-11-20T12:00:00.00Z' },
//       { value: 22, date: '2019-11-21T12:00:00.00Z' },
//       { value: 25, date: '2019-11-23T12:00:00.00Z' },
//       { value: 26, date: '2019-11-24T12:00:00.00Z' },
//       { value: 27, date: '2019-11-25T16:00:00.00Z' }
//     ]
//   } */
// ];
