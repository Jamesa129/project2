require('dotenv').config()
const express = require('express')
const {connect, connection} = require('mongoose')
const method = require('method-override')
const app = express()
const PORT = 3000
const Pokemon = require('./models/Pokemon')

// ===== Connection to Database =====
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open', () => console.log('Connected to Mongo'))

// Setup Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
// Use Express middleware to parse JSON.
app.use(express.json())
// app.use((req, res, next) => {
//     console.log('I run for all the routes.')
//     next()
// })

// ===== Routes =====

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Index/route

app.get('/pokemon', (req,res) => {
    res.render('Lore')
})

app.get('/pokemon/store',(req,res)=>{
    Pokemon.find({},(err,foundPokemon)=>{
        res.render('Store',{merch:foundPokemon})
    })
});

// New
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});


app.delete('/pokemon/:id', (req, res) => {
    // Delete funciton has 2 arguments
    /*
        1. the id 
        2. callback
    */
    Pokemon.findByIdAndDelete(req.params.id, (err) => {
        if (!err){
            res.status(200).redirect('/pokemon')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/pokemon/:id', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    // Update funciton has 4 arguments
    /*
        1. the id 
        2. the content of what we want to update 
        3. options object {new:true}
        4. callback
    */
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPokemon) => {
        if (!err) {
            res.status(200).redirect('/pokemon')
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/pokemon', (req, res) => {
    // req.body.readyToEat === 'on'
    // ?
    // req.body.readyToEat = true
    // :
    // req.body.readyToEat = false
    // console.log('BEFORE', req.body.name)
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    // Create 1st arg: the actual object we want to insert inside our database
    // Callback 1st arg: error
    // Callback 2nd arg: the newly created object

    Pokemon.create(req.body, (err, createdPokemon) => {
     
        res.redirect('/pokemon/store')
    })
})

// Edit 
app.get('/pokemon/:id/edit', (req, res) => {
    // Querying our database to find the document we want to edit and send that data to the Edit.jsx page
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        if (!err) {
            res.render('Edit', {pokemon: foundPokemon})
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon})
    } ) 
    // This will display our Show component in the browser. Node will automatically look for a Show file inside the views folder.
})

// Returns giant object with info and methods we can use
// Focus on Query object

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
