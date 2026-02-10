// Day 2 
import express from 'express'

let products = [
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Tablet", price: 40000 },
    { id: 4, name: "IPad", price: 60000 },
    { id: 5, name: "IWatch", price: 23000 },
];


const app = express();
app.use(express.json())
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('Hello world!')
});

app.get('/product',(req,res)=>{
    res.json(products)
})

app.post("/product",(req,res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
})
// Find the product by params.id

app.get('/product/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id  === id); //this will find product from array and compare.

    if(!product){
        return res.status(404).json({error:"No product found!"});

    }

    res.json(product);
    
})

// Update the product:

app.put("/product/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({Error:"Product not found"});
    }

    products[index] = {...products[index],...req.body};

    res.json(products[index]);
});

// Delete product
app.delete('/product/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    products = products.filter(p => p.id !== id)

    res.send("deleted Successfully");

})

app.listen(3000,()=>{
    console.log("Running serverJS")
})