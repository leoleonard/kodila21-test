db.collection_one.find().pretty()

db.collection_one.insert({
  name: "Burek",
  age: 4,
  tags: ["dog", "bark"]
})

db.collection_one.insert({
  name: "Reksio",
  age: 5,
  tags: ["dog", "bark", "loyal"]
})

db.collection_one.find({name: {$ne: "Burek"}})
// zwraca rekord nie zawierającu name: Burek

db.collection_one.find({name: "Burek", age: 5})
// przecinek działa jak operator logiczny AND (oba warunki muszą bycc spełnione)

db.collection_one.find({$and: [{name: {$eq: "Burek", age: {$eq: 1}}}]})
// $and oraz $or działa jak operator logiczny OR


// selektory zapytań porównawczych

$eq - szuka: wartość = zapytanie
$gt - wartość < zapytanie
$gte - wartość <= zapytanie
$lt - wartość > zapytanie
$lte - wartość >= zapytanie
$ne - wartość =! zapytanie
$in - wartość przekazana w tablicy
$nin - wartośc =! przekazanej w tablicy
