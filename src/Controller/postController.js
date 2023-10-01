exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created post api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read post api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete post api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated post api"});
}