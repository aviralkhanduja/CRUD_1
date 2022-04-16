const Task=require('../models/tasks');
exports.createTask=function(req,res){
    req.body.Status=false;
    Task.create(req.body,function(err,newEntry){
        if(err){
            return console.log('error',err);
        }
        console.log('*****',newEntry);
        return res.redirect('/');
    });
};

exports.delTask=function(req,res){
   console.log(req.body);
   Object.keys(req.body).forEach(function(key){
    Task.findByIdAndDelete(key,function(err){
        if(err){
            return console.log('error in deleting...',err);
        }    
    });
   });
   return res.redirect('/');
}; 
exports.setStatus=function(req,res){
    Task.findOneAndUpdate(
        { _id: req.query._id },
        { new: true }
      ).exec(function(err, docs) {
        if (err) {
          console.log(err);
        } else {
            if(docs.Status){
                docs.Status=false;
            }
            else{
                docs.Status=true;
            }
            docs.save();
        }
});
    return res.redirect('/'); 
}; 