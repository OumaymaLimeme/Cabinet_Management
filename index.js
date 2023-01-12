var express=require('express');
var server = express();


var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/CabinetMedical",{useNewUrlParser: true,  useUnifiedTopology: true },function checkdb(error){
  if(error){
    console.log('error');
  }
  else {
    console.log("Db conecteddddd");
  }
});

server.use(express.json());

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});


