const Task=require('../models/tasks');
exports.display=function(req,res){
    var todayDate = new Date().toISOString().slice(0, 10);
    todayDate=todayDate.toString();
    Task.updateMany({Duedate:{$lt:todayDate}},{Status:true},function(err,list){
        if(err){
            return console.log('error in fetching...',err);
        }
        console.log('Update Successfull!',list);    
    });
    Task.find({},function(err,list){
        if(err){
            return console.log('error in fetching...',err);
        }
        return res.render('home',{
            title:'Tasks List',
            tasks_list:list
        });    
    });
};
