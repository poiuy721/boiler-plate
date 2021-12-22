const express=require('express')
const app=express()
const port=5000;
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://poiuy721:1234@cluster0.4jukn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    //useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.get('/',(req,res)=>res.send("hi"));
app.listen(port,()=>console.log(`app listening on port ${port}`));