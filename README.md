# MongoDB Indexing Script

This project contains a MongoDB script (`queries.js`) that creates indexes and demonstrates performance improvements using the `explain()` method.

## Prerequisites

- **MongoDB** installed and running locally OR a MongoDB Atlas cluster.
- **mongosh** (MongoDB Shell).
- A database named `plp_bookstore` with a `books` collection.

## Files

- `queries.js` → Contains the following commands:
  -  Use plp_bookstore databse
  -  Basic Crud operations like retreiving books by year, author etc
  -  Advanced queries like sorting, skipping, and limiting
  -  Aggregation pipelines
  - Create an index on the `title` field.
  - Create a compound index on `author` and `publish_year`.
  - Run `explain()` to show performance improvements.

## Running the Script

1. Clone or copy the files to your local environment.
2. Open a terminal and navigate to the folder containing `indexes.js`.
3. Run the script in mongosh:

   ```bash
   mongosh "mongodb://localhost:27017/plp_bookstore" indexes.js


