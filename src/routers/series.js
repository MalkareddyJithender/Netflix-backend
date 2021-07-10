const express = require('express');
const Series = require('../models/Series');
const router = new express.Router();


//series 
router.get('/series',async (req,res) =>
{
    try
    {
    const series = await Series.find({});
    if(!series)
    {
        return res.status(404).send();
    }
    res.status(200).send(series);

    }
    catch(error)
    {
        res.status(500).send();
    }

});

module.exports = router;