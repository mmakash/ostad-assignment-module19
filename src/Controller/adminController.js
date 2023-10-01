exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created admin api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read admin api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete admin api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated admin api"});
}