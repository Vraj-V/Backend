import express from "express";
const Router  = express.Router();
const app = express()

app.set('view enginer','ejs');
let products = [ 
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "Laptop", price: 50000 }
];

Router.get('/',(req,res)=>{
    res.json(products)
});

Router.get('/:id', (req,res)=>{
    const id  = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if(!product){
        return res.status(404).json({Error: 'No product found!'});
    }

    res.json(product)
})



Router.post('/',(req,res)=>{
    products.push(req.body);
    res.status(201).json(req.body)
});


export default Router;