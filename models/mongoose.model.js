let mongoose=require('mongoose');

let userSchema=mongoose.Schema({
    name:String,
    roll:{type:Number,unique:true},
    age:{type : Number, min: 10, max: 80}
});
let User=mongoose.model('User',userSchema);
module.exports=User;
