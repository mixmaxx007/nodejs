let express=require('express')
let bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/status',function(req,res){
    res.send('hello node js server')
})
app.get('/hello/:person',function(req,res){
    console.log('hello'+req.params.person)
    res.send('sall hello with'+req.params.person)
})
app.get('/user/:userID',function(req,res){
    res.send('ผู้ใช้งานคนที่ : '+ req.params.userID)
})
app.get('/users',function(req,res){
    res.send('ผู้ใช้ทั้งหมด')
})
 
app.post('/user/',function(req,res){
res.send('สร้างผู้ใช้'+JSON.stringify(req.body))
})
app.put('/user/:userID',function(req,res){
    res.send('แก้ไขผู้ใช้'+ req.params.userID + ' : '+JSON.stringify(req.body))
})
app.delete('/user/:userID',function(req,res){
    res.send('ลบผู้ใช้'+ req.params.userID + ' : '+JSON.stringify(req.body))
})

let port=8081

app.listen(port,function(){
    console.log('server running on port'+ port)
})