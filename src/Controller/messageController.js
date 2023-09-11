exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created message api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read message api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete message api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated message api"});
}