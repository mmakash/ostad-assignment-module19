exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created blog api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read blog api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete blog api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated blog api"});
}