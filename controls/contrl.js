let user =require('../models/mongoose.model');


let insrt=async (req,res)=>{
    let {sname, sage ,sroll}=req.body;
    let enqri = new user({
        name : sname,
        age : sage,
        roll : sroll
    })
    await enqri.save().then(()=>{
        res.send({message : "insertion successful"})
    }).catch((err)=>{
        res.send({message : "insertion failed", error: err})
    
})
}

let showall=async (req,res)=>{
    await user.find().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send({message : "Error fetching data", error: err})
    })
}

let deldata=async (req,res)=>{
    let roll=req.params.roll;
    await user.deleteOne({roll:roll}).then(()=>{
        res.send({message : "deletion successful",status: 1})
    }).catch((err)=>{
        res.send({message : "deletion failed", status: 0,error: err})
    })
    // res.send({message: "Delete endpoint hit", roll: req.params.roll});
}
let getone =async (req,res)=>{
    let roll=req.params.roll;
    await user.findOne({roll:roll}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send({message : "Error fetching data", error: err})
    })
}


let updateData=async (req,res)=>{
    let roll=req.params.roll;
    let {sname, sage, sroll}=req.body; 
    await user.updateOne({roll:roll},{$set:{name:sname, age:sage, roll:sroll}}).then(()=>{
        res.send({message : "update successful",status: 1})
    }).catch((err)=>{
        res.send({message : "update failed", status: 0,error: err})
    })
}

module.exports={insrt, showall, deldata,updateData,getone};