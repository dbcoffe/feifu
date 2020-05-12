const feiFuModel=require("../dao/xxbDao");
const fs=require("fs");
const feiFuController={
    totalCoupon(request,response){
        // console.log(Number(request.query.type)===3);
        let sql=" where 1=1";
        if(Number(request.query.type)===1){
            sql+=" and 2=2";
        }else if(Number(request.query.type)===2){
            sql+=" and typees='打折劵'";
        }else if(Number(request.query.type)===3){
            sql+=" and typees='满减劵'";
        }else if(Number(request.query.type)===4){
            sql+=" and typees='兑换劵'";
        }else {
            sql+=" and typees='新人劵'"
        }
        if(Number(request.query.state)===1){
            sql+=" and state='true'";
        }else if(Number(request.query.state)===2){
            sql+=" and state='false'";
        }else {
            sql+=" and 3=3";
        }
        feiFuModel.totalCoupon([request.query.userId],sql)
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)});
    },
    showCoupon(request,response){
        let sql=" where 1=1";
        if(Number(request.query.type)===1){
            sql+=" and 2=2";
        }else if(Number(request.query.type)===2){
            sql+=" and typees='打折劵'";
        }else if(Number(request.query.type)===3){
            sql+=" and typees='满减劵'";
        }else if(Number(request.query.type)===4){
            sql+=" and typees='兑换劵'";
        }else {
            sql+=" and typees='新人劵'"
        }
        if(Number(request.query.state)===1){
            sql+=" and state='true'";
        }else if(Number(request.query.state)===2){
            sql+=" and state='false'";
        }else {
            sql+=" and 3=3";
        }
        feiFuModel.showCoupon([request.query.userId,Number(request.query.currentPage),Number(request.query.showNum)],sql)
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)});
    },
    personalCenterGetUserInformation(request,response){
        feiFuModel.personalCenterGetUserInformation([request.query.userId])
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)});
    },
    personalCenterSetImg(request,response){
        // console.log(request.body.imgData);
        let imgData=request.body.imgData;
        let imgType=request.body.imgType;
        let userId=request.body.userId;
        let base64Data=imgData.replace("data:image/png;base64,","");
        // console.log(base64Data);
        let dataBuffer=new Buffer(base64Data,"base64");
        let personalImg=userId+"."+Date.now()+"."+imgType;
        fs.writeFile("public/uploads/"+personalImg,dataBuffer,error=>{
            if(error){
                response.send(error);
            }else {
                response.send(personalImg);
            }
        })
    },
    sendImg(request,response){
        feiFuModel.sendImg([request.query.imgName,request.query.userId])
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)})
    },
    imgUpdate(request,response){
        feiFuModel.imgUpdate([request.query.userId])
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)})
    },
    saveNew(request,response){
        let nameNew=request.query.nameNew+"."+request.query.nicknameNew;
        feiFuModel.saveNew([request.query.imgNew,nameNew,request.query.sexNew,request.query.birthdayNew,request.query.cityNew,request.query.telphoneNew,request.query.userId])
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)});
    },
    initHelper(request,response){
        feiFuModel.initHelper([request.query.userId])
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)})
    },
    insertRemark(request,response){
        feiFuModel.insertRemark([request.body.userId,request.body.remark,request.body.birthday])
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)})
    },
    saveHelper(request,response){
        feiFuModel.saveHelper([request.query.remark,request.query.birthday,request.query.userId])
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)})
    }
};
module.exports=feiFuController;