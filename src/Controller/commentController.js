exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created comment api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read comment api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete comment api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated comment api"});
};