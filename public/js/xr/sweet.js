function ourAlert(width, height,text,fontSize) {
    document.getElementById("coverLayer").style.opacity = "0";
    document.getElementById("coverLayerOut").style.opacity = "0";
    document.getElementById("coverLayerOut").classList.remove("display-none");
    document.getElementById("coverLayer").classList.remove("display-none");
    document.getElementById("coverLayer").style.width = width + "px";
    document.getElementById("coverLayer").style.height = height + "px";
    document.getElementById("coverLayerContent").style.width = width*0.8 + "px";
    document.getElementById("coverLayerContent").style.height = height*0.8 + "px";
    document.getElementById("coverLayer").style.top = 60 + "px";
    document.getElementById("coverLayer").style.left = parseFloat(document.body.offsetWidth) / 2 - width / 2 + "px";
    document.getElementById("coverLayer").style.transition="all ease-in-out .4s";
    document.getElementById("coverLayer").style.webkitTransition="all ease-in-out .4s";
    document.getElementById("coverLayerContent").innerText="";
    let alertText=document.createTextNode(text);

    // document.getElementById("coverLayerContent")[0].innerHTML="";
    document.getElementById("coverLayerContent").appendChild(alertText);
    document.getElementById("coverLayerContent").style.fontSize=fontSize+"px";
    setTimeout(() => {
        document.getElementById("coverLayer").style.opacity = "1";
        document.getElementById("coverLayerOut").style.opacity = "1";
        document.getElementById("coverLayer").style.top = 120 + "px";
    }, 1);
    document.getElementById("coverLayerBlock").onclick=function () {//叉叉的点击事件
        document.getElementById("coverLayer").style.opacity = "0";
        document.getElementById("coverLayerOut").style.opacity = "0";
        document.getElementById("coverLayer").style.top = 60 + "px";
        setTimeout(()=>{
            document.getElementById("coverLayerOut").classList.add("display-none");
            document.getElementById("coverLayer").classList.add("display-none");
        },401);
    };
}

window.onload=function () {
    getAllSweet();
};
function getAllSweet() {
    myAjax("post","/getAllSweet.do","",function () {
        var data=JSON.parse(xhr.responseText);
        // 数组去重
        for(var j=0;j<data.length;j++){
            for(var k=j+1;k<data.length;k++){
                if(data[j].G_id==data[k].G_id){
                    data.splice(j+1,1);
                    k--;
                }
            }
        }
        // console.log(data[0].goodslabel);
        // console.log(data);
        document.getElementsByClassName("sectionTwo")[0].innerHTML="";
        // ti="香甜可口";
        for(var i=0;i<data.length;i++){
                document.getElementsByClassName("sectionTwo")[0].innerHTML+="<div>\n" +
                    "            <a href='sweetDetails.html?G_id="+data[i].G_id+"' style='cursor: pointer'>\n" +
                    "                <div class='flowerImage'>\n" +
                    "                     <img src=../../images/image/"+data[i].img+" alt=\"\">\n" +
                    "                </div>\n" +
                    "            </a>\n" +
                    "            <a href='sweetDetails.html?G_id="+data[i].G_id+"' style='cursor: pointer'>\n" +
                    "                <h3>"+data[i].goodsname+"</h3>\n" +
                    "            </a>\n" +
                    "            <h4>"+data[i].description+"</h4>\n" +
                    "            <p>\n" +
                    "                <small>￥</small>\n" +
                    "                <span>"+data[i].flavor+"</span>\n" +
                    "            </p>\n" +
                    // "            <a href='../../html/xr/carttest.html?G_id="+data[i].G_id+"&G_name="+data[i].goodsname+"&G_miaoshu="+data[i].specification+"" +
                    // "&G_jiage="+data[i].price+"&G_pic="+data[i].img+"' class=\"addCart\">\n" +
                    "<a class=\"addCart\" id='"+data[i].G_id+"' style='cursor: pointer'>\n" +
                    "                <h1>加入购物车</h1>\n" +
                    "                <span>+</span>\n" +
                    "            </a>\n" +
                    "        </div>";
        }

        $(".sectionTwo>div>a:last-child").click(function () {
            myAjax("post", "/addGoodCartBread.do","G_id="+$(this).attr("id")+"&userId="+sessionStorage.getItem("userId")+"&goodstype=甜点",function () {

            });
            ourAlert(400,150,"加入购物车成功！",20);
        });


    })
}