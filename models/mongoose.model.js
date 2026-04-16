let mongoose=require('mongoose');

let userSchema=mongoose.Schema({
    name:String,
    roll:{type:String,unique:true},
    age:{type : String}
});
let User=mongoose.model('User',userSchema);
module.exports=User;
