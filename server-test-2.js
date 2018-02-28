// znalezienie wsystkich uzytkownikow
//.find()

// User.find({}, function (err, res) {
//   if (err) throw err;
//   console.log("Actual database records are: " + res);
// });

//promises?

const query = User.find({});
const promise = query.exec();
promise.then(function(records) {
console.log('Actual database records are ' + records);
});
promise.catch(function(reason) {
console.log("Something went wrong: ", reason)
});
