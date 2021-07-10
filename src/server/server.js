const express = require('express');
require('../../dotenv');
require('../db/db');
// require('../seed');
const User = require('../models/User');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');
const Series = require('../models/Series');
const Film = require('../models/Film');

//Initialize app
const app = express();

//middlewares
app.use(express.json());
app.use(cors({origin:true}));

//api-routes
app.get('/',(req,res) =>
{
    res.send('HELLO WORLD!!!')
});

//resorce(user) reading endpoint
app.get('/users/me',auth,(req,res) =>
{
    res.status(200).send({
        user:req.user,
        token:req.token
    });
});



//resource(user) creation endpoint
app.post('/users',async (req,res) =>
{
    try
    {
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    res.status(201).send({user,token});
    }
    catch(error)
    {
        res.status(400).send();
    }
});

app.get('/users/:id',(req,res) =>
{
    const _id = req.params.id;
    User
      .findById(_id)
      .then((user) =>
      {
        if(!user)
        {
           return res.status(404).send();
        }

        res.status(200).send({
            user:user,
            token:user.tokens[user.tokens.length - 1]
        });
      })
      .catch((error) =>
      {
        res.status(500).send(error);
      })
});


//user sign in endpoint...
app.post('/users/signin', async (req,res) =>
{
    const email = req.body.email;
    const password = req.body.password;
    try
    {
        const user = await User.findByCredentials(email,password);
        const token = await user.generateAuthToken();

        res.status(200).send({user,token});
    }
    catch(error)
    {
        console.log(error.message);
        res.status(400).send({
            name:error.name,
            message:error.message
        });
    }

});

app.post('/users/signout',auth,async (req,res) =>
{
    try
    {
    req.user.tokens = req.user.tokens.filter((token) =>
    {
        return token.token !== req.token;
    });

    await req.user.save();
    res.send();
    }
    catch(error)
    {
        res.status(500).send();
    }
});

//series 
app.get('/series',async (req,res) =>
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

//films
app.get('/films',async (req,res) =>
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

// start the server
app.listen(3001,() =>
{
    console.log('server is up on port 3001');
});

// async function jithu ()
// {
//     const hashedPassword = await bcrypt.hash('jithu123456',8);
//     console.log(hashedPassword);
//     return hashedPassword;
// };

//  jithu();
