const zcModel=require("../dao/zcDao");
const zcController={
    getyuyueinfo(req,resp){
        zcModel.Daogeiyuyueinfo([null],(result)=>{
            resp.send(result);
        })
    },
    getVideo1Comments(req,resp){
        zcModel.DaogetVideo1Comments([null],(result)=>{
            resp.send(result);
        })
    },
    getVideo2Comments(req,resp){
        zcModel.DaogetVideo2Comments([null],(result)=>{
            resp.send(result);
    })
    },
    getVideo3Comments(req,resp){
        zcModel.DaogetVideo3Comments([null],(result)=>{
            resp.send(result);
    })
    },
    getVideo4Comments(req,resp){
        zcModel.DaogetVideo4Comments([null],(result)=>{
            resp.send(result);
    })
    },
    tasteshenqing(req,resp){
        zcModel.Daotasteshenqing([req.body.companyname,req.body.companyadd,req.body.tastePnum,req.body.tastePname,req.body.officephone,req.body.usertelp,req.body.e_mail],(result)=>{
            resp.send(result);
        })
    },
    tijiaoyuyue(req,resp){
        zcModel.Daotijiaoyuyue([req.body.quantity,req.body.times,req.body.telphone,req.body.username],(result)=>{
            resp.send(req.body);
        })
    },
    getallComptaste(req,resp){
        zcModel.DaogetallComptaste([null],(result)=>{
            resp.send(result);
        })
    },
    huoquUsername(req,resp){
        zcModel.DaohuoquUsername([req.body.U_id],(result)=>{
            resp.send(result);
        })
    },
    pinglunVideo1(req,resp){
        console.log(req.body.username);
        zcModel.DaopinglunVideo1([req.body.U_id,req.body.Video_id,req.body.username,req.body.comment_time,req.body.comment_text,null],(result)=>{
            resp.send(result);
        })
    }
};
module.exports=zcController;