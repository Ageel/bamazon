var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Hasna288",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // runSearch();
});

// var runSearch = function() {
//   inquirer.prompt({
//     name: "action",
//     type: "list",
//     message: "What is the ID of the product you would like to buy?",
//     choices: ["1", "2",
//       "3", "4"]
//   }).then(function(answer) {

//     switch (answer.action) {
//       case "1":
//         artistSearch();
//         break;

//       case "2":
//         multiSearch();
//         break;

//       case "3":
//         rangeSearch();
//         break;

//       case "4":
//         songSearch();
//         break;
//     }
//   });
// };

// var artistSearch = function() {
//   inquirer.prompt({
//     name: "artist",
//     type: "input",
//     message: "What artist would you like to search for?"
//   }).then(function(answer) {
//     var query = "SELECT position, song, year FROM top5000 WHERE ?";
//     connection.query(query, { artist: answer.artist }, function(err, res) {
//       for (var i = 0; i < res.length; i++) {
//         console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
//       }
//       runSearch();
//     });
//   });
// };

// var multiSearch = function() {
//   var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].artist);
//     }
//     runSearch();
//   });
// };

// var rangeSearch = function() {
//   inquirer.prompt([{
//     name: "start",
//     type: "input",
//     message: "Enter starting position: ",
//     validate: function(value) {
//       if (isNaN(value) === false) {
//         return true;
//       }
//       return false;
//     }
//   }, {
//     name: "end",
//     type: "input",
//     message: "Enter ending position: ",
//     validate: function(value) {
//       if (isNaN(value) === false) {
//         return true;
//       }
//       return false;
//     }
//   }]).then(function(answer) {
//     var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//     connection.query(query, [answer.start, answer.end], function(err, res) {
//       for (var i = 0; i < res.length; i++) {
//         console.log("Position: " + res[i].position + " || Song: " + res[i].song
//           + " || Artist: " + res[i].artist + " || Year: " + res[i].year);
//       }
//       runSearch();
//     });
//   });
// };

// var songSearch = function() {
//   inquirer.prompt({
//     name: "song",
//     type: "input",
//     message: "What song would you like to look for?"
//   }).then(function(answer) {
//     console.log(answer.song);
//     connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
//       console.log("Position: " + res[0].position + " || Song: " + res[0].song
//         + " || Artist: " + res[0].artist + " || Year: " + res[0].year);
//       runSearch();
//     });
//   });
// };