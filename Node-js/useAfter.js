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
app.get('/ab',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'sg.html'))
    next()
})
app.use((req,res)=>{
    console.log('end');
})
app.post('/ab',(req,res)=>{
    res.send('hi')
})

app.listen(3000,()=>console.log('Hi Its Run'))