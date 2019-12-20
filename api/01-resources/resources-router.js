const express = require("express");

const router = express.Router()

const Resources = require('./resources-model')


router.post('/register',  (req, res) => {
        Resources.insert(req.body)
        .then(resource => {
            console.log(resource)
            res.status(201).json(resource)
        })

})

router.get('/', (req, res) => {
    Resources.getAll()
    .then(resources => {
        res.status(200).json(resources)
    })

})




router.delete('/:id', (req, res) => {
    
    Resources.remove(req.params.id)
    .then(count => {
        res.status(200).json(count)
    })

})


router.put('/:id', (req, res) => {

let changes = "whatever"

    Resources.update({name: changes}, req.params.id)
    .then(count => {
        res.status(200).json(count)
    })
})

module.exports = router;