let express= require("express");
let app = express();
let mongoos = require("mongoose");
let port = 3016;

let mongoosUrl = "mongodb://localhost/realEstate"

mongoos.set('strictQuery', false)
mongoos.connect(mongoosUrl,{
useNewUrlParser:true
}).then(()=>{
    console.log("connecte to data base");
}).catch((e)=>{console.log(e);})


app.use(express.json())
app.listen(port,()=>{
    console.log(`server is at the ${port}`);
})

app.post("/user",(req,res)=>{
 console.log(req.body);
    res.send("hello")
})


require("./userdetails");
let user = mongoos.model("UserInfo");

app.post("/login",async(req,res)=>{
    const{Email,password,conformpassword}=req.body;
    if(password==conformpassword){
        try{
            await user.create({
               email:Email,
               Password:conformpassword,
            })
              res.send("okay sucessful")
           } catch(error){
            console.log(error);
            res.send("error: enter the valid credintals")
         }
    }else{
        console.log("enter the same password as above");
        res.send("enter the same password as above")
    }
   
})

app.post("/signein",async(req,res)=>{
    // const{UserId,password}=req.body;
    // if(password== /*datafrom database.find()*/ && UserId == /* user id from data base*/ ){
    //     /* send to the Home page page */
    // }else{
    //     res.send("error: enter the valid credintals")
    // }
   
})
