use('ecommerce');
// 1. deleteOne() - Deletes a single document that matches the specified filter. If multiple documents match, only the first one will be deleted.

    db.contacts.deleteOne({ name: "Alice" })

// 2. deleteMany() - Deletes all documents that match the specified filter.
    db.orders.deleteMany({ status: "Delivered" })


// 3. drop() - Removes an entire collection from the database.
    db.products.drop();


// 4. dropDatabase() - Removes the entire database.
    db.dropDatabase();

// 5. findOneAndDelete() - Finds a single document that matches the specified filter and deletes it, returning the deleted document.
    db.products.findOneAndDelete({ name: "Wireless Mouse" })

// 6. findOneAndReplace() - Finds a single document that matches the specified filter, replaces it with a new document, and returns the original document.
    db.products.findOneAndReplace(
    { name: "Mechanical Keyboard" },
    {
        name: "Mechanical Keyboard Pro",
        price: 2999,
        category: "Electronics",
        stock: 50,
        ratings: 4.9,
        tags: ["keyboard", "mechanical", "pro"],
        createdAt: new Date()
    }
    )