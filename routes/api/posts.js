const express = require('express')
const router = express.Router();

const Posts = require('../../models/Posts');

router.post('/', async (req,res) => {
    const newPost = await Posts(req.body);
    try{
        const post = await newPost.save();
        if(!post) throw Error("Something went wrong")

        res.status(200).json(post);
    }catch(err){
        res.status(400).json({msg: err});
    }
})

router.get('/', async (req,res) => {
    try{
        const posts = await Posts.find();
        if(!posts)throw Error("No item");
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json({msg: err})
    }
})

module.exports = router