import express from "express";
const Router  = express.Router();

let products = [
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Tablet", price: 40000 },
    { id: 4, name: "IPad", price: 60000 },
    { id: 5, name: "IWatch", price: 23000 },
];

Router.get('/',(req,res)=>{
    res.json(products)
});

Router.get('/:id', (req,res)=>{
    const id  = parseInt(req.params.id);

    const product = products.find(p => p.id = id);

    if(!product){
        return res.status(404).json({Error: 'No product found!'});
    }

    res.json(product)
})

export default Router;