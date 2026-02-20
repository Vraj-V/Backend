use('ecommerce');

//All complete documents in the products collection
        db.products.find();


//Find documents where the name field is "Wireless Mouse"
    db.products.find({name: "Wireless Mouse"}); 

// Comparison operators
// Find products with price greater than 5000
    db.products.find({price: {$gt: 5000}});

// Find products with price less than or equal to 1000
    db.products.find({price: {$lte: 1000}});

// Find products with price between 1000 and 5000
    db.products.find({price: {$gt: 1000, $lt: 10000}});

// Logical operators:
    db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// Projection (Select Specific Fields)

    // Removing ID field from the output
        db.products.find({}, { _id: 0, name:1,price:1, category:1 });

    // Sorting and Limiting
    db.products.find().sort({ price: -1 }).limit(1)


    // Use in Pagination
    // To get the second page of products with 1 product per page, we can skip the first product and limit the result to 1
    db.products.find().sort({ price: -1 }).skip(1).limit(1)
