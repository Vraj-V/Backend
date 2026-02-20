use('ecommerce');
//1. Update the stock of "Wireless Mouse" to 15
// it will update the first document that matches the condition, if there are multiple documents with the same name, only the first one will be updated.

    db.products.updateOne(
        {name: "Wireless Mouse"},
        {$set :{stock: 15}}
    )

//2. Update the price of all products in the "Electronics" category to 999
// it will update all documents that match the condition, if there are multiple documents with the same category, all of them will be updated.
        db.products.updateMany(
            {category: "Electronics"},
            {$set: {price: 999}}
    )


// 3. use $inc operator to increment the stock of all products in the "Electronics" category by 10
    db.products.updateMany(
    { category: "Electronics" },
    { $inc: { stock: 10 } }
    )

// 4. use $mul operator to multiply the price of all products in the "Electronics" category by 1.1 (10% increase)

    db.products.updateMany(
    { category: "Electronics" },
    { $mul: { price: 1.1 } }
    )

// 5. use $rename operator to rename the "ratings" field to "averageRating" in all products

    db.products.updateMany(
    {},
    { $rename: { ratings: "Rating" } }
    )

// 6. use $unset operator to remove the "tags" field from all products
    db.products.updateMany(
    {},
    { $unset: { tags: "" } }
    )

// 7. use $currentDate operator to update the "lastUpdated" field to the current date for all products

    db.products.updateMany(
    {},
    { $currentDate: { lastUpdated: true } }
    )

// 8. use $push operator to add a new tag "Mouse" to the "tags" array of the "Wireless Mouse" product
    db.products.updateOne(
    { name: "Wireless Mouse" },
    { $push: { tags: "Mouse" } }
    )
