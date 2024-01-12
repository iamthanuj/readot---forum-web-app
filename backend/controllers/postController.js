const getPosts = (req, res)=>{
    res.status(200).json({message:'Posts'})
}


const createPost = (req, res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text')
    }


    console.log(req.body)
    res.status(200).json({message:req.body})
}


const updatePost = (req, res)=>{
    res.status(200).json({message:`${req.params.id} is updated`})
}


const deletePost = (req, res)=>{
    res.status(200).json({message:`${req.params.id} is deleted`})
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
}