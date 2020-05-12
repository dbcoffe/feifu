const feiFuModel=require("../dao/hwDao");
const feiFuController={
    getFirstgoods(req,resp){
        feiFuModel.getFirstgoods()
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    getSecondgoods(req,resp){
        feiFuModel.getSecondgoods()
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    getThirdgoods(req,resp){
        feiFuModel.getThirdgoods()
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    getFourthgoods(req,resp){
        feiFuModel.getFourthgoods()
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    buy(req,resp){
        feiFuModel.buy([req.body.Aname,req.body.Afl,req.body.Aprice,req.body.Aimg,req.body.Auser])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    numbuy(req,resp){
        feiFuModel.numbuy([req.body.Aname,req.body.Afl,req.body.Aimg,req.body.Auser,req.body.Aprice])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    getnum(req,resp){
        feiFuModel.getnum([req.body.Auser])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
};
module.exports=feiFuController;