use plp_bookstore
db.books.find({genre: "Fiction"})
db.books.find({published_year: 1949})
db.books.find({author: "George Orwell"})
db.books.updateOne({title: "1984"},{$set:{price: 11.00}})
db.books.deleteOne({title: "The Hobbit"})
db.books.find({in_stock: true, publish_year: {$gte: 2010}})
db.books.find({},{title:1,author:1,price:1})
db.books.find().sort({price: 1})
db.books.find().sort({price: -1})
db.books.find().skip(0).limit(5)
db.books.aggregate([{$group: {_id: "$genre", // group by author
                              averagePrice: { $avg: "$price" } // calculates averages
                             }}])
db.books.aggregate([
  {
    $group: {
      _id: "$author", // group by author
      bookCount: { $sum: 1 } // count number of books
    }
  },
  { $sort: { bookCount: -1 } }, // sort descending
  { $limit: 1 } // get top author only
])

db.books.aggregate([
  {
    $group: {
      _id: { 
        decade: { $subtract: [ { $divide: [ "$publish_year", 10 ] }, { $mod: [ { $divide: [ "$publish_year", 10 ] }, 1 ] } ] } 
      },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $multiply: [ "$_id.decade", 10 ] },
      count: 1,
      _id: 0
    }
  },
  { $sort: { decade: 1 } }
])

// indexing

db.books.createIndex({title: 1})
db.books.createIndex({author: 1, publish_year: -1})
db.books.find({title: "To Kill a Mockingbird"}).explain("executionStats")

