const express = require('express');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
    extend: true
}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/style', express.static(path.join(__dirname, 'style')));
app.set('views', path.join(__dirname, '/views'))

let tarefas = ["Estudar NODE", "Ir ao mercado"]

app.post('/', (req,res)=>{
    tarefas.push(req.body.tarefa);
    res.render('index.ejs', {lista: tarefas})
})



app.get('/deletar/:id', (req, res)=>{
 tarefas = tarefas.filter((val, index)=>{
    if(index != req.params.id){
        return val}else(app.get('/'))
 })
 res.render('index.ejs', {lista: tarefas})
})

app.get('/', (req,res)=>{
    res.render('index.ejs',{lista: tarefas})
})


app.listen(3000, ()=>{
    console.log("Rodando")
})


