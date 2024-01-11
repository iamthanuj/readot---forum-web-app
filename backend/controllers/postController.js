const getPosts = (req, res)=>{
    res.status(200).json({message:'Posts'})
}


const createPost = (req, res)=>{
    res.status(200).json({message:'post Created'})
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