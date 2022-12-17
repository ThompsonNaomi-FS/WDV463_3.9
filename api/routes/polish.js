const express = require('express');
const { resolve } = require('path');
const router = express.Router();

const Polish = require('../models/polish')


// middleware to get student so we can reuse the function
const getPolish = async (req, res, next) => {
    let polish // empty variable
    try {
        polish = await Polish.findById(req.params.id)
        if ( polish === null){
            return res.status(404).json({ message: "Polish not found" })
        }
    } catch (err) { 
        return res.status(500).json({ message: error.message})
    }
    res.polish = polish;
    next();
};

// GET ALL
router.get('/', async (req, res) => {
    try {
        const polish = await Polish.find()
        res.json(polish)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// GET ONE
router.get('/:id', getPolish, async (req, res) => {
    res.json(res.polish)
});

// POST CREATE
router.post('/', async (req, res) => {
    const polish = new Polish({
    name: req.body.name,
    brand: req.body.brand,
    color: req.body.color,
    type: req.body.type
    })

    try {
        const newPolish = await polish.save();
        res.status(201).json(newPolish);
    } catch(error) {
        res.status(400).json({ message: error.message});
    }
});

// PATCH UPDATE
router.patch('/:id', getPolish, async (req, res) => {
    if(req.body.name != null){
        res.polish.name = req.body.name
    }
    if(req.body.brand != null){
        res.polish.brand = req.body.brand
    }
    if(req.body.color != null){
        res.polish.color = req.body.color
    }
    if(req.body.type != null){
        res.polish.type = req.body.type
    }
    try {
        const updatedPolish = await res.polish.save()
        res.json(updatedPolish)
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
});

// DELETE
router.delete('/:id', getPolish, async (req, res) => {
    try {
        await res.polish.remove()
        res.json({ message: "Removed polish"})
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;