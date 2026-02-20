use('ecomm');
// Creating Index
    // db.products.createIndex({ name: 1 })

// Viewing Indexes
    // db.products.getIndexes()

    // Explain Query Execution
    // db.products.find({ name: "Monitor" }).explain("executionStats")

// Dropping Indexes
    // db.products.dropIndex({ name: 1 })

//Query performance
    // db.products.find({ price: { $gt: 5000 } }).explain("executionStats")

// Aggregation Pipeline
    // db.orders.aggregate([
    // { $group: { _id: null, totalRevenue: { $sum: "$total" } } }
    // ])

//Group by Status:
db.orders.aggregate([
{ $group: { _id: "$status", totalOrders: { $sum: 1 } } }
])