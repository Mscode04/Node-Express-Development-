const express=require('express')
const app=express()
const path=require('path')


app.use((req,res,next)=>{
    console.log('use run');
    next()
    
})
app.get('/',(req,res)=>{
    res.send('Hello Home Page')
})
app.get('/ab',(req,res)=>{
    res.sendFile(path.join(__dirname,'sg.html'))
})
app.post('/ab',(req,res)=>{
    res.send('hi')
})


app.listen(3000,()=>console.log('Hi Its Run'))