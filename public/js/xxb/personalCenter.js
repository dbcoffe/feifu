let perSecMenus = document.getElementsByClassName("perSecMenu");
let htmlArray = [
    "personalCenterDataManage",
    "personalCenterAddressManage",
    "personalCenterPasswordManage",
    "personalCenterOrderManage",
    "personalCenterInvoiceManage",
    "personalCenterCouponManage",
    "personalCenterShoppingGuide",
    "personalCenterExchange",
    "personalCenterComplain"
];
for (let i = 0; i < perSecMenus.length; i++) {
    perSecMenus[i].No = i;
    perSecMenus[i].onclick = function () {
        if (this.No <= 2) {
            document.getElementById("dot").style.top = 70 + (this.No) * 40 + 15 + "px";
        } else if (this.No <= 5) {
            document.getElementById("dot").style.top = 110 + (this.No) * 40 + 15 + "px";
        } else {
            document.getElementById("dot").style.top = 150 + (this.No) * 40 + 15 + "px";
        }
        if (!document.getElementsByTagName("iframe")[0].getAttribute("src").includes(htmlArray[this.No])) {
            document.getElementsByTagName("iframe")[0].style.opacity = 0;
            setTimeout(() => {
                for (let j = 0; j < htmlArray.length; j++) {
                    if (j === this.No) {
                        document.getElementsByTagName("iframe")[0].setAttribute("src", htmlArray[j] + ".html");
                    }
                }
                document.getElementsByTagName("iframe")[0].style.opacity = 1;
            }, 500);
        }
    }
}
//客服机器人
(function (w, d, n, a, j) {
    w[n] = w[n] || function () {
        (w[n].a = w[n].a || []).push(arguments);
    };
    j = d.createElement('script');
    j.async = true;
    j.src = 'https://qiyukf.com/script/8ed4e9d02f17249afdd2131d6c7018c1.js';
    d.body.appendChild(j);
})(window, document, 'ysf');


//用户id存储
let userId = 3;
sessionStorage.setItem("userId", userId);

let imgAddTimer;
let alertState;
setInterval(() => {
    alertState = sessionStorage.getItem("alertState");
    if (alertState === "P") {
        // console.log(document.getElementById("coverLayerBlock").getAttribute("class"));
        if(imgAddTimer!==undefined){
            clearInterval(imgAddTimer);
        }
        ourAlert(650, 400);
        // document.getElementById("coverLayerButtonOne").setAttribute("class","display-none");
        // document.getElementById("coverLayerButtonTwo").setAttribute("class","display-none");
        if(document.getElementById("coverLayerBlock").getAttribute("class")===null) {
            document.getElementById("coverLayerBlock").setAttribute("class", "display-none");
        }
        // document.getElementById("coverLayerContent").innerHTML = "";
        for (let i = 0; i < provinceArray.length; i++) {//往coverLayerContent中放入span
            let newProvince = document.createElement("span");
            let newText = document.createTextNode(provinceArray[i]);
            newProvince.appendChild(newText);
            document.getElementById("coverLayerContent").appendChild(newProvince);
        }
        for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
            if (document.getElementById("coverLayerContent").getElementsByTagName("span")[i].innerText === sessionStorage.getItem("province")) {
                document.getElementById("coverLayerContent").getElementsByTagName("span")[i].classList.add("chooseActive");
            }
        }
        for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
            document.getElementById("coverLayerContent").getElementsByTagName("span")[i].onclick = function () {
                for (let j = 0; j < document.getElementById("coverLayerContent").getElementsByTagName("span").length; j++) {//初始化coverLayerContent中的span状态
                    if (document.getElementById("coverLayerContent").getElementsByTagName("span")[j].getAttribute("class") !== null) {
                        document.getElementById("coverLayerContent").getElementsByTagName("span")[j].classList.remove("chooseActive");
                    }
                }
                this.classList.add("chooseActive");//设置coverLayerContent中选中的span状态
            }
        }
        sessionStorage.setItem("alertState", "AP");//重置alertState状态
    } else if (alertState === "C") {
        if(imgAddTimer!==undefined){
            clearInterval(imgAddTimer);
        }
        ourAlert(650, 400);
        // document.getElementById("coverLayerButtonOne").setAttribute("class","display-none");
        // document.getElementById("coverLayerButtonTwo").setAttribute("class","display-none");
        if(document.getElementById("coverLayerBlock").getAttribute("class")===null) {
            document.getElementById("coverLayerBlock").setAttribute("class", "display-none");
        }
        // document.getElementById("coverLayerContent").innerHTML = "";
        for (let k = 0; k < PCD.length; k++) {
            if (PCD[k].province === sessionStorage.getItem("province")) {//判断是哪一个省份
                // console.log(PCD[k].son);
                for (let i = 0; i < PCD[k].son.length; i++) {//往coverLayerContent中放入span
                    let newCity = document.createElement("span");
                    let newText = document.createTextNode(PCD[k].son[i].city);
                    newCity.appendChild(newText);
                    document.getElementById("coverLayerContent").appendChild(newCity);
                }
                for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
                    if (document.getElementById("coverLayerContent").getElementsByTagName("span")[i].innerText === sessionStorage.getItem("city")) {
                        document.getElementById("coverLayerContent").getElementsByTagName("span")[i].classList.add("chooseActive");
                    }
                }//进入选择地区时高亮相应按钮
                for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
                    document.getElementById("coverLayerContent").getElementsByTagName("span")[i].onclick = function () {
                        for (let j = 0; j < document.getElementById("coverLayerContent").getElementsByTagName("span").length; j++) {//初始化coverLayerContent中的span状态
                            if (document.getElementById("coverLayerContent").getElementsByTagName("span")[j].getAttribute("class") !== null) {
                                document.getElementById("coverLayerContent").getElementsByTagName("span")[j].classList.remove("chooseActive");
                            }
                        }
                        this.classList.add("chooseActive");//设置coverLayerContent中选中的span状态
                    }
                }
            }
        }
        sessionStorage.setItem("alertState", "AC");//重置alertState状态
    } else if (alertState === "D") {
        if(imgAddTimer!==undefined){
            clearInterval(imgAddTimer);
        }
        ourAlert(650, 400);
        // console.log(sessionStorage.getItem("province"));
        // document.getElementById("coverLayerButtonOne").setAttribute("class","display-none");
        // document.getElementById("coverLayerButtonTwo").setAttribute("class","display-none");
        if(document.getElementById("coverLayerBlock").getAttribute("class")===null) {
            document.getElementById("coverLayerBlock").setAttribute("class", "display-none");
        }
        // document.getElementById("coverLayerContent").innerHTML = "";
        for (let k = 0; k < PCD.length; k++) {
            // console.log(PCD[k].province===sessionStorage.getItem("province"));
            if (PCD[k].province === sessionStorage.getItem("province")) {//判断是哪一个省份
                // console.log(PCD[k].son);
                for (let i = 0; i < PCD[k].son.length; i++) {//往coverLayerContent中放入span
                    if (PCD[k].son[i].city === sessionStorage.getItem("city")) {//判断是哪一个市
                        // console.log(PCD[k].son[i].district);
                        for (let l = 0; l < PCD[k].son[i].district.length; l++) {
                            let newDistrict = document.createElement("span");
                            let newText = document.createTextNode(PCD[k].son[i].district[l]);
                            newDistrict.appendChild(newText);
                            document.getElementById("coverLayerContent").appendChild(newDistrict);
                        }
                    }
                }
                //==================进入选择地区时高亮相应按钮
                for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
                    if (document.getElementById("coverLayerContent").getElementsByTagName("span")[i].innerText === sessionStorage.getItem("district")) {
                        document.getElementById("coverLayerContent").getElementsByTagName("span")[i].classList.add("chooseActive");
                    }
                }
                for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
                    document.getElementById("coverLayerContent").getElementsByTagName("span")[i].onclick = function () {
                        for (let j = 0; j < document.getElementById("coverLayerContent").getElementsByTagName("span").length; j++) {//初始化coverLayerContent中的span状态
                            if (document.getElementById("coverLayerContent").getElementsByTagName("span")[j].getAttribute("class") !== null) {
                                document.getElementById("coverLayerContent").getElementsByTagName("span")[j].classList.remove("chooseActive");
                            }
                        }
                        //====================设置coverLayerContent中选中的span状态
                        this.classList.add("chooseActive");
                    }
                }
            }
        }
        //=======================重置alertState状态
        sessionStorage.setItem("alertState", "AD");
    } else if (alertState === "I") {
        ourAlert(600, 400);
        // document.getElementById("coverLayerContent").style.backgroundColor="red";
        document.getElementById("coverLayerContent").style.height = 70 + "%";
        if(document.getElementById("coverLayerBlock").getAttribute("class")===null) {
            document.getElementById("coverLayerBlock").setAttribute("class", "display-none");
        }
        document.getElementById("coverLayerContent").innerHTML =
            `
             <div id="imageBox">
                <p style="font-size: 20px">请先添加图片!!!</p>
                <canvas id="myCanvas" width="350" height="250"></canvas>
                <div id="cutBox"></div>
             </div>
             <p class="file-box display-none">
                <input type="file" id="fileImg" class="file-btn">
                <!--<button id="imgSave">保存</button>-->
             </p>
             <p id="imgText" style="font-size: 10px;color: red">温馨提示:推荐初始图片像素400*300及以上</p>
             <div id="showBox"></div>
             <div id="imageCover">+</div>
            `;
        //=================图片选中
        document.getElementById("imageCover").onclick=function(){
            document.getElementById("fileImg").click();
        };
        imgSet();
        // imgAdd();
        // console.log(imgAddTimer);
        imgAddTimer=setInterval(imgAdd,0);
        // clearInterval(imgAddTimer);
        sessionStorage.setItem("alertState", "AI");
    }else if(alertState==="S"){
        if(imgAddTimer!==undefined){
            clearInterval(imgAddTimer);
        }
        ourAlert(300, 200);
        // document.getElementById("coverLayerButtonBlock").setAttribute("class","display-none");
        if(document.getElementById("coverLayerBlock").getAttribute("class")==="display-none") {
            document.getElementById("coverLayerBlock").classList.remove("display-none");
        }
        document.getElementById("coverLayerButtonOne").setAttribute("class","display-none");
        document.getElementById("coverLayerButtonTwo").setAttribute("class","display-none");
        document.getElementById("coverLayerContent").style.height = 70 + "%";
        // document.getElementById("coverLayerContent").style.color = "red";
        document.getElementById("coverLayerContent").innerHTML = `<p style="font-size: 20px;color:black;text-align: center;margin-top: 50px">保存成功!!!</p>`;
        sessionStorage.setItem("alertState","AS");
    }else if(alertState==="B"){
        if(imgAddTimer!==undefined){
            clearInterval(imgAddTimer);
        }
        ourAlert(450, 300);
        if(document.getElementById("coverLayerBlock").getAttribute("class")===null) {
            document.getElementById("coverLayerBlock").setAttribute("class","display-none");
        }
        document.getElementById("coverLayerContent").style.height = 70 + "%";
        // document.getElementById("coverLayerContent").style.backgroundColor = "red";
        document.getElementById("coverLayerContent").innerHTML=`<p>
            <div class="remarkBox">
                <label for="birthdayRemark">生日备注:</label>
                <input type="text" id="birthdayRemark" placeholder="如:闺蜜">
            </div>
            <div class="remarkBox">
                <label for="birthdayDate">出生日期:</label>
                <input type="text" id="birthdayDate" placeholder="如:2019-09-09">
            </div>
            <div class="remarkBox">
                <label for="remindDate">提醒时间:</label>
                <input type="text" id="remindDate" placeholder="如:5天">
            </div>
            </p>`;
        document.getElementById("coverLayerButtonOne").addEventListener("click",function () {
            let remark=document.getElementById("birthdayRemark").value;
            console.log(remark);
            let birthdayDate=document.getElementById("birthdayDate").value;
            let remindDate=document.getElementById("remindDate").value;
            myAjax("post","/insertRemark.do","userId="+sessionStorage.getItem("userId")+"&remark="+remark+"&birthday="+birthdayDate,()=>{})
        });
        sessionStorage.setItem("alertState","AB");
    }else if(alertState==="B2"){
        if(imgAddTimer!==undefined){
            clearInterval(imgAddTimer);
        }
        ourAlert(450, 300);
        if(document.getElementById("coverLayerBlock").getAttribute("class")===null) {
            document.getElementById("coverLayerBlock").setAttribute("class","display-none");
        }
        document.getElementById("coverLayerContent").style.height = 70 + "%";
        // document.getElementById("coverLayerContent").style.backgroundColor = "red";
        document.getElementById("coverLayerContent").innerHTML=`<p>
            <div class="remarkBox">
                <label for="birthdayRemark">生日备注:</label>
                <input type="text" id="birthdayRemark" placeholder="如:闺蜜">
            </div>
            <div class="remarkBox">
                <label for="birthdayDate">出生日期:</label>
                <input type="text" id="birthdayDate" placeholder="如:2019-09-09">
            </div>
            <div class="remarkBox">
                <label for="remindDate">提醒时间:</label>
                <input type="text" id="remindDate" placeholder="如:5天">
            </div>
            </p>`;
        myAjax("get", "/initHelper.do", "userId=" + sessionStorage.getItem("userId"), () => {
            let data=JSON.parse(xhr.responseText);
            // console.log(data);
            // console.log(sessionStorage.getItem("helperNo"));
            for(let i=0;i<data.length;i++){
                // console.log(typeof i);
                // console.log(typeof sessionStorage.getItem("helperNo"));
                if(i===Number(sessionStorage.getItem("helperNo"))){
                    // console.log(data[i]);
                    document.getElementById("birthdayRemark").value=data[i].remark;
                    document.getElementById("birthdayDate").value=data[i].birthday.split("T")[0];
                    document.getElementById("remindDate").value="5天";
                }
            }
        });
        //生日助手输入框内容改变
        document.getElementById("birthdayRemark").onchange=function(){
            sessionStorage.setItem("alertState","AB1");
        };
        document.getElementById("birthdayDate").onchange=function(){
            sessionStorage.setItem("alertState","AB1");
        };
        document.getElementById("remindDate").onchange=function(){
            sessionStorage.setItem("alertState","AB1");
        };
        sessionStorage.setItem("alertState","AB2");
    }else if(alertState==="B3"){
        if(imgAddTimer!==undefined){
            clearInterval(imgAddTimer);
        }
        ourAlert(500, 200);
        // document.getElementById("coverLayerButtonBlock").setAttribute("class","display-none");
        if(document.getElementById("coverLayerBlock").getAttribute("class")==="display-none") {
            document.getElementById("coverLayerBlock").classList.remove("display-none");
        }else {
            document.getElementById("coverLayerBlock").classList.add("display-none");
        }
        // document.getElementById("coverLayerButtonOne").setAttribute("class","display-none");
        // document.getElementById("coverLayerButtonTwo").setAttribute("class","display-none");
        document.getElementById("coverLayerContent").style.height = 70 + "%";
        // document.getElementById("coverLayerContent").style.color = "red";
        document.getElementById("coverLayerContent").innerHTML = `<p style="font-size: 20px;color:black;text-align: center;margin-top: 20px">真的要删除吗?</p>`;
        sessionStorage.setItem("alertState","AB3");
    }
}, 0);

//生日助手提交按钮状态
setInterval(()=>{
    if(sessionStorage.getItem("alertState")==="AB2"){
        document.getElementById("coverLayerButtonOne").classList.add("disabled");
        document.getElementById("coverLayerButtonOne").disabled = true;
    } else{
        document.getElementById("coverLayerButtonOne").classList.remove("disabled");
        document.getElementById("coverLayerButtonOne").disabled = "";
    }
},0);
//生日助手修改信息保存



// setInterval(()=>{
//     if(alertState !== "I"){clearInterval(imgAddTimer)
//     }
// },0);

//头像设置
function imgSet(){
    let imgType;
    let bigCanvasCtx=document.getElementById("myCanvas").getContext("2d");
    $("#fileImg").change(function () {
        $("#myImg").remove();
        let imgFile=this.files[0];
        imgType=this.files[0].name.split(".")[this.files[0].name.split(".").length-1];
        let reader=new FileReader();
        reader.readAsDataURL(imgFile);
        reader.onload=function () {
            $("#imageBox").append("<img src='"+this.result+"' id='myImg'>");
            $("#myImg")[0].onload=function () {
                bigCanvasCtx.clearRect(0,0,350,250);
                bigCanvasCtx.drawImage($("#myImg")[0],0,0,350,250);
            };
        }
    });
    $("#cutBox").mousedown(function (e) {
        $("#showBox").css("outline","none");
        // console.log($(e));
        // console.log($(this).css("left"));
        imgCutTimer=setInterval(()=>{
            $("#showBox").html("<canvas id='newCanvas' width='150' height='150'></canvas>");
            newCanvas=$("#newCanvas")[0].getContext("2d");
            let cutBoxLeft=$("#cutBox").position().left;
            let cutBoxTop=$("#cutBox").position().top;
            let imgData=bigCanvasCtx.getImageData(cutBoxLeft,cutBoxTop,150,150);
            // console.log(imgData);
            newCanvas.putImageData(imgData,0,0);
        },0);
            let clickEvent=e;
            // console.log(clickEvent.offsetX);
            // console.log(clickEvent.offsetY);
            $(this).mousemove(function (e) {
                // console.log($(e));
                // console.log($(this).css("left"));
                let currentEvent=e;
                // console.log(currentEvent.clientX);
                // console.log(currentEvent.clientY);
                $(this).css({
                    left:currentEvent.clientX-clickEvent.offsetX-419.5+"px",
                    top:currentEvent.clientY-clickEvent.offsetY-165+"px"
                });
                if(parseFloat($(this).css("left"))<=0){
                    $(this).css("left","0px");
                }
                if(parseFloat($(this).css("left"))>=200){
                    $(this).css("left","200px");
                }
                if(parseFloat($(this).css("top"))<=0){
                    $(this).css("top","0");
                }
                if(parseFloat($(this).css("top"))>=100){
                    $(this).css("top","100px");
                }
            })
    });
    $("#cutBox").mouseup(function () {
        clearInterval(imgCutTimer);
        $("#cutBox").off("mousemove");
        $("#showBox").html("<canvas id='newCanvas' width='150' height='150'></canvas>");
        newCanvas=$("#newCanvas")[0].getContext("2d");
        let cutBoxLeft=$("#cutBox").position().left;
        let cutBoxTop=$("#cutBox").position().top;
        let imgData=bigCanvasCtx.getImageData(cutBoxLeft,cutBoxTop,150,150);
        // console.log(imgData);
        newCanvas.putImageData(imgData,0,0);
    });
    // document.getElementById("coverLayerButtonOne").addEventListener("click",function () {
    //     if(alertState==="AI") {
    //         // console.log(document.getElementById("myCanvas"));
    //         let imgDataUrl = $("#newCanvas")[0].toDataURL();
    //         userId = sessionStorage.getItem("userId");
    //         $.ajax({
    //             type: "post",
    //             url: "/personalCenterSetImg.do",
    //             data: {imgData: imgDataUrl, imgType: imgType, userId: userId},
    //             success: data => {
    //                 // ourAlert(300,200);
    //                 // console.log(data);
    //                 sessionStorage.setItem("personalImg", data);
    //                 sessionStorage.setItem("imgUpdateState", "true");
    //                 myAjax("get", "/sendImg.do", "imgName=" + data + "&userId=" + userId, () => {
    //                 })
    //             },
    //             error: error => {
    //             }
    //         });
    //         // $("#newCanvas").clearRect(0,0,150,150);
    //     }
    // })
}
function imgAdd(){
    if(document.getElementById("imageBox").getElementsByTagName("img").length!==0){
        // document.getElementById("imageCover").classList.add("display-none");
        document.getElementById("cutBox").classList.remove("display-none");
    }else {
        // document.getElementById("imageCover").classList.remove("display-none");
        document.getElementById("cutBox").classList.add("display-none");
    }
}


//================获取覆盖层中的选中项
document.getElementById("coverLayerButtonOne").addEventListener("click", function () {
    if (sessionStorage.getItem("alertState") === "AP") {
        for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
            if (document.getElementById("coverLayerContent").getElementsByTagName("span")[i].getAttribute("class") === "chooseActive") {
                sessionStorage.setItem("province", document.getElementById("coverLayerContent").getElementsByTagName("span")[i].innerText);
            }
        }
    } else if (sessionStorage.getItem("alertState") === "AC") {
        for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
            if (document.getElementById("coverLayerContent").getElementsByTagName("span")[i].getAttribute("class") === "chooseActive") {
                sessionStorage.setItem("city", document.getElementById("coverLayerContent").getElementsByTagName("span")[i].innerText);
            }
        }
    } else if (sessionStorage.getItem("alertState") === "AD") {
        for (let i = 0; i < document.getElementById("coverLayerContent").getElementsByTagName("span").length; i++) {
            if (document.getElementById("coverLayerContent").getElementsByTagName("span")[i].getAttribute("class") === "chooseActive") {
                sessionStorage.setItem("district", document.getElementById("coverLayerContent").getElementsByTagName("span")[i].innerText);
            }
        }
    }else if(alertState==="AI") {
        // console.log(document.getElementById("myCanvas"));
        let imgDataUrl = $("#newCanvas")[0].toDataURL();
        userId = sessionStorage.getItem("userId");
        $.ajax({
            type: "post",
            url: "/personalCenterSetImg.do",
            data: {imgData: imgDataUrl, imgType: imgType, userId: userId},
            success: data => {
                // ourAlert(300,200);
                // console.log(data);
                sessionStorage.setItem("personalImg", data);
                sessionStorage.setItem("imgUpdateState", "true");
                myAjax("get", "/sendImg.do", "imgName=" + data + "&userId=" + userId, () => {})
            },
            error: error => {
            }
        })
    }else if(sessionStorage.getItem("alertState") === "AB1"){
        let userId=sessionStorage.getItem("userId");
        let remark=document.getElementById("birthdayRemark").value;
        let birthday=document.getElementById("birthdayDate").value;
        console.log(remark);
        console.log(birthday);
        myAjax("get","/saveHelper.do","remark="+remark+"&birthday="+birthday+"&userId="+userId,()=>{})
    }else if(sessionStorage.getItem("alertState") === "AB3"){
        sessionStorage.setItem("deleteState","true");
    }
});

window.onload=function () {
    sessionStorage.setItem("imgUpdateState","false");
    sessionStorage.setItem("alertState","init");
};
