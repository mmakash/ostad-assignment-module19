exports.create = async(req,res) =>{
    res.status(200).json({status:"Success",data:"Created portfolio api"});
}
exports.read = async(req,res) =>{
    res.status(200).json({status:"Success",data:"read portfolio api"});
}
exports.delete = async(req,res) =>{
    res.status(200).json({status:"Success",data:"delete portfolio api"});
}
exports.update = async(req,res) =>{
    res.status(200).json({status:"Success",data:"updated portfolio api"});
}