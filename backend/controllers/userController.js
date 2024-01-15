
//@desc register user
//@route POST/api/users
//@access public
const registerUser = (req, res)=>{
    res.status(200).json({message:'User Registered'})
}


//@desc Authenticate user
//@route POST/api/users/login
//@access public
const loginUser = (req, res)=>{
    res.status(200).json({message:' login user'})
}


//@desc Get user data
//@route GEt/api/users/me
//@access public
const getUser = (req, res)=>{
    res.status(200).json({message:' login user'})
}


module.exports = {
    registerUser,
    loginUser,
    getUser,
}