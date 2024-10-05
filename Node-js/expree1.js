const express=require('express')
const app=express()


app.get('/',(req,res)=>{
    res.send('Hello Home Page')
})
app.get('/ab',(req,res)=>console.log('Ab Page'))


app.listen(3000,()=>console.log('Hi Its Run'))