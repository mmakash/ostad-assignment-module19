exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created subAdmin api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read subAdmin api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete subAdmin api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated subAdmin api"});
};