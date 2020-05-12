var User_id=sessionStorage.getItem("userId");
console.log(User_id);
function getallyuyueinfo() {
    myAjax("post","/getyuyueinfo.do",null,()=>{
        var data=JSON.parse(xhr.responseText);
    document.getElementById("t_yuyueInfo").innerHTML="";
    for(var i=0;i<data.length;i++){

        document.getElementById("t_yuyueInfo").innerHTML+=
            "<tr>"+
            "<td>"+data[i].username+"</td>"+
            "<td>"+data[i].telphone+"</td>"+
            "<td>"+data[i].quantity+"</td>"+
            "<td>"+data[i].times+"</td>"+
            "</tr>";
    }
})
}
window.onload=function () {
    getallyuyueinfo()
};
function tijiaoyuyue() {
    if(User_id!=null){
        var yuyuetiyan_name=$("#yuyuetiyan_name").val();
        var yuyuetiyan_tel=$("#yuyuetiyan_tel").val();
        var yuyuetiyan_Pnum=$("#yuyuetiyan_Pnum").val();
        var yuyuetiyan_time=$("#yuyuetiyan_time").val();
        myAjax("post","/tijiaoyuyue.do",
            "username="+yuyuetiyan_name+"&telphone="+yuyuetiyan_tel+"&quantity="+yuyuetiyan_Pnum+"&times="+yuyuetiyan_time,
            ()=>{
            console.log(xhr.responseText);
        $("#modal_username").text(yuyuetiyan_name);
        $("#modal_tel").text(yuyuetiyan_tel);
        $("#modal_quantity").text(yuyuetiyan_Pnum);
        $("#modal_times").text(yuyuetiyan_time);
    })
    }else{
        location.href="../../html/xr/login.html";
    }

}