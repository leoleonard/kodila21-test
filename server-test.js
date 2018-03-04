const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://testuser:kodilla1@129936.mlab.com:29936/testbase', {
    useMongoClient: true
});

// mongodb://testuser:kodilla1@129936.mlab.com:29936/testbase');



//new user Schema
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    created_at: Date,
    updated_at: Date
});

//Mongoose schema method
userSchema.methods.manify = function(next) {
    this.name = this.name + '-boy';

    return next(null, this.name);
};

//pre-save method
userSchema.pre('save', function(next) {
    //pobranie aktualnego czasu
    const currentDate = new Date();

    //zmiana pola na aktualny czas
    this.updated_at = currentDate;

    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
const User = mongoose.model('User', userSchema);
//instancje klasy User
const kenny = new User({
    name: 'Kenny',
    username: 'Kenny_the_boy',
    password: 'password'
});

kenny.manify(function(err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});

kenny.save(function(err) {
    if (err) throw err;

    console.log('Uzytkownik ' + kenny.name +  ' zapisany pomyslnie');
});

const benny = new User({
    name: 'Benny',
    username: 'Benny_the_boy',
    password: 'password'
});

benny.manify(function(err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});

benny.save(function(err) {
    if (err) throw err;

    console.log('Uzytkownik ' + benny.name +  ' zapisany pomyslnie');
});

const mark = new User({
    name: 'Mark',
    username: 'Mark_the_boy',
    password: 'password'
});

mark.manify(function(err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});

mark.save(function(err) {
    if (err) throw err;

    console.log('Uzytkownik ' + mark.name +  ' zapisany pomyslnie');
});

// rekordy zostały dodane do bazy, nie można dodac ich duplikatu
//
//znalezienie konkretnych rekordów
// User.find({ username: 'Ryszard_the_boy'}).exec(function(err, res) {
//   if (err) throw err;
//   console.log("Record you are looking for is " + res);
// });

// // aktualizacja rekordu
// User.find({username: 'Kenny_the_boy'}, function(err, user) {
//   if (err) throw err;
//   console.log('Old password is ' + user[0].password);
//   user[0].password = 'noweHaslo';
//   console.log("New password is " + user[0].password);
//
//   user[0].save(function(err) {
//     if (err) throw err;
//
//     console.log("Użytkownik  " + user[0].name + " został pomyslnie zaktulizowany");
//   })
// });
//
//
// //usuwanie rekordu
//
// User.findOneAndRemove({ username: 'Kenny_the_boy'}, function(err) {
//   if (err) throw err;
//   console.log("User deleted!");
// })
// //
// // node server-test.js
