function userLogin() {
   var username=$("#username")[0].value;
   var password=$("#password")[0].value;
    myAjax("post","/userLogin.do","username="+username+"&password="+password,function () {
        var data=JSON.parse(xhr.responseText);
        // console.log(data)
        if(data==""){
            alert("查无此人！")
        }else{
            sessionStorage.setItem("userId",data[0].U_id);
            location.href="cake.html";
        }
    })
}