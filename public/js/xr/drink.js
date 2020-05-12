window.onload=function () {
    // console.log(12)
    getAllDrink();
};
function getAllDrink() {
    myAjax("post","/getAllDrink.do","",function () {
        var data=JSON.parse(xhr.responseText);
        // console.log(data);
        // console.log(data.length);
        $(".sectionTwo")[0].innerHTML="";
        // console.log('../../../public/images/image/'+data[0].img)
        for(var i=0;i<data.length;i++){
            $(".sectionTwo")[0].innerHTML+=" <div title='"+data[i].description+"'>\n" +
                "            <a>\n" +
                "                <div class=\"breakfastImage\">\n" +
                "                     <img src=../../images/image/"+data[i].img+" alt=\"\">\n" +
                "                </div>\n" +
                "            </a>\n" +
                "            <a href=\"#\">\n" +
                "                <h3>"+data[i].goodsname+"</h3>\n" +
                "            </a>\n" +
                "            <h4>"+data[i].goodslabel+"</h4>\n" +
                "            <p>\n" +
                "                <small>￥</small>\n" +
                "                <span>"+data[i].flavor+"</span>\n" +
                "            </p>\n" +
                "<a class=\"addCart\" id='"+data[i].G_id+"' style='cursor: pointer'>\n" +
                "                <h1>加入购物车</h1>\n" +
                "                <span>+</span>\n" +
                "            </a>\n" +
                "        </div>";

        }

        $(".sectionTwo>div>a:last-child").click(function () {
            myAjax("post", "/addGoodCartBread.do","G_id="+$(this).attr("id")+"&userId="+sessionStorage.getItem("userId")+"&goodstype=饮品",function () {

            });
            if(sessionStorage.getItem("userId")==null){
                ourAlertNav(500,150,"请先登录",20);
            }else {
                ourAlert(500,150,"加入购物车成功！",20);
            }
        });
    })
}