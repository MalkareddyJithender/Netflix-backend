const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');
const router = new express.Router();


//user creation endpoint
router.post('/users',async (req,res) =>
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

//user reading endpoint
router.get('/users/me',auth,(req,res) =>
{
    res.status(200).send({
        user:req.user,
        token:req.token
    });
});

//fetching user by id endpoint
router.get('/users/:id',(req,res) =>
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

//user login endpoint...
router.post('/users/signin', async (req,res) =>
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

//user logout endpoint
router.post('/users/signout',auth,async (req,res) =>
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

module.exports = router;