exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created user api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read user api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete user api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated user api"});
}