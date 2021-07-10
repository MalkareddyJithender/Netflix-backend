const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema({
    title:
    {
        type:String,
        require:true,
        trim:true
    },
    description:
    {
        type:String,
        require:true,
        trim:true
    },
    genre:
    {
        type:String,
        require:true,
        trim:true
    },
    maturity:
    {
        type:String,
        require:true,
        trim:true
    },
    slug:
    {
        type:String,
        require:true,
        trim:true
    }
});

const Series = mongoose.model('Series',seriesSchema);

module.exports = Series;