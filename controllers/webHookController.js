const webHooks = require("./../app");
const web = require("./../models/webhookmodels");
const bodyParser = require("body-parser");
const webHook = require("./../models/webhookmodels");
const { randomUUID } = require("crypto");
const { UUID } = require("bson");
const uuid = require('uuid');
var cache = require('memory-cache');

let uid;
exports.getUUID =async(req,res, next)=>{
    uid = uuid.v4();
    
    res.send(uid);
    next();
}

// exports.countUrlHit =async(req,res)=>{
//     const data = await webHook.find();
//     if(data.length==50){
//         res.send(`https://webhooks.site/${uuid}`)
//     }
// }



var count=0;
exports.WebHooks = async(req,res)=>{
    const webhook = await webHook.create({
        "Content": req.body['Content'],
        "id":req.body['id']
     });
    //  uuid=webhook.Content;
     
    //  if(webHook.uid.find(1)){
    //     count++;
    //  }

     const data= await webHook.find();
     console.log((await webHook.find({id:uid})) == true);
     if(await webHook.find({id:uid})){
        count++;
     }
     console.log(count);
     c=count;
     if(c<2){
        res.json({url: `http://localhost:3002/webhook/v1/${uid}`, hits:c ,content:req.body.Content})
   
     } else res.send({url:"Invalid URL",hits:c}) ;
    //    if(count<5){
    //     res.send(uid)
    //  }
    //  if(data.length<50){
    //     res.send(uuid)
    //  }
    //  else{
    //     res.send("Invalid URL")
    //  }
//    switch(count)
//    {
//    case 1:
//     if(count>=1&&count<=50)
//     res.json({data:uuid});
//     break;
//     case 2:
//         res.send("Invalid URL");
//         break;
//         default:
//             res.send("Invalid number");
//    }
cache.put('', 'value');
}