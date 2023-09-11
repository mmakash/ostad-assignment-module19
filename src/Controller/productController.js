exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created product api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read product api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete product api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated product api"});
}