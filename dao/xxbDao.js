const dbpool=require("../config/dbpoolconfig");
const feiFuModel={
    totalCoupon(parameter,sql){
        // console.log("======================================"+parameter);
        return new Promise((resolve,reject)=>{
            dbpool.connect("select count(*) as totalNum from t_coupon,t_couponhave"+sql+" and t_coupon.M_id=t_couponhave.M_id and U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    showCoupon(parameter,sql){
        return new Promise((resolve,reject)=>{
            // console.log(parameter);
            dbpool.connect("select * from t_coupon,t_couponhave"+sql+" and t_coupon.M_id=t_couponhave.M_id and U_id=? limit ?,?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    personalCenterGetUserInformation(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_user,t_birthdayhelpr where t_user.U_id=t_birthdayhelpr.U_id and t_user.U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    sendImg(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update t_user set touxiang=? where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    imgUpdate(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select touxiang from t_user where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    saveNew(parameter){
        // console.log(parameter);
        return new Promise((resolve,reject)=>{
            dbpool.connect("update t_user set touxiang=?,username=?,sex=?,birthday=?,address=?,telphone=? where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    initHelper(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_birthdayhelpr where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    insertRemark(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("insert into t_birthdayhelpr values(?,?,?)",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    saveHelper(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update")
        })
    }
};
module.exports=feiFuModel;