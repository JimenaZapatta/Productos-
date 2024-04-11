import express, { query, Router } from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
import ProductManager from './ProductManager.js'


ProductManager
const router= router()
const product= new ProductManager()

router.get('/',async (req,res)=>{
    const{limit}=req.query

    if(limit=== undefined||limit<0||isNaN(limit)){

  res.send(await product.getProduc())  }
  else {
    res.send(await product.getProductslimit(limit))
  }
    
});


const lista =[];

const productsRuter= express.Router ()
app.get("/api/products", (req,res) => {
    
    res.send(lista)

});


app.post('/api/products',(req,res)=>{

    
    const {Ids,title,description,codigo,precio,estado,stock,categoria,Imagen}= req.body
    
    const newProducto={
        Ids:lista.length +1,
        title,
        description,
        codigo,
        precio,
        estado,
        stock,
        categoria, 
        Imagen
    }

    if(!Ids||!title||!description||!codigo||!precio||!estado||!stock||!categoria) return res.send({status:'error',error:'falta completar datos'})
       
    else (lista.push(newProducto))
    

    res.send(lista)
    res.status(200).send({status:'succes',payload:lista})
})



app.get("/api/products/:id", (req,res) => {
const {id}=req.params

const productid= lista.find(i=>i.Ids===id)
    res.send(productid)
})

app.put('/api/products/:id',(req,res)=>{
    const {id}=req.params
    const modificarlista= req.body
    const listindex= lista.findIndex(lista=>lista.Ids===parseInt(id))
if(listindex===-1)return res.status(404).send({status:'error',error:'No encontro producto'})

lista[listindex]={Ids:parseInt(id), ...modificarlista}
res.send({status:'success', payload:modificarlista})
})

app. delete('/appi/products/:id',(req,res)=>{
const {id}=req.params

const eliminolista=lista.filter(lista=>lista.Ids===! parseInt(id))

res.send({status:'succes', payload:eliminolista})


})



   

app.listen (8080,error => {
    if(error)console.log(error)
    console.log("Escuchando puerto 8080")})


