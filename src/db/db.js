const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_DATABASE_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

//once db is connected we will be notified...
db.on('open',function ()
{
    console.log('database is connected!');
});