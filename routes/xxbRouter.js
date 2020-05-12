const express=require("express");
const router=express.Router();
const feiFuController=require("../controller/xxbController");
router.get("/totalCoupon.do",feiFuController.totalCoupon);
router.get("/showCoupon.do",feiFuController.showCoupon);
router.get("/personalCenterGetUserInformation.do",feiFuController.personalCenterGetUserInformation);
router.post("/personalCenterSetImg.do",feiFuController.personalCenterSetImg);
router.get("/sendImg.do",feiFuController.sendImg);
router.get("/updateImg.do",feiFuController.imgUpdate);
router.get("/saveNew.do",feiFuController.saveNew);
router.get("/initHelper.do",feiFuController.initHelper);
router.get("/saveHelper.do",feiFuController.saveHelper);
router.post("/insertRemark.do",feiFuController.insertRemark);
module.exports=router;