const express = require ("express");
const  app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }));

const users =[
    {"id":1, "name" : "revaldy"},
    {"id" : 2, "name" : "budi"}
]

app.get ('/users', (req,res,next)=>{
    res.json({message:'success', data : users})
})

app.post ('/users', (req,res,next)=>{
    let {id, name} = req.body
    users =[...users, {"id":parseInt(id),name}]
    res.json({message:'success insert', data : users})
})

app.get ('/', (req,res,next)=>{
    res.json({message:'success', data :'server success running on port ' + port})
})

app.listen(port,()=>{
    console.log('app running on port' + port)
})