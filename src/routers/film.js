const express = require('express');
const Film = require('../models/Film');
const router = new express.Router();

//films
router.get('/films',async (req,res) =>
{
    try
    {
    const films = await Film.find({});
    if(!films)
    {
        return res.status(404).send();
    }
    res.status(200).send(films);

    }
    catch(error)
    {
        res.status(500).send();
    }

});

module.exports = router;