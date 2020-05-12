var User_id=sessionStorage.getItem("userId");
console.log(User_id);
function submitshenqing() {
    if(User_id!=null){
        var companyname=$("#companyname").val();
        var companyadd=$("#companyadd").val();
        var tastePnum=$("#tastePnum").val();
        var tastePname=$("#tastePname").val();
        var officephone=$("#officephone").val();
        var usertelp=$("#usertelp").val();
        var e_mail=$("#e_mail").val();
        if(companyname!=null&&companyadd!=null&&tastePnum!=null&&tastePname!=null&&officephone!=null&&usertelp!=null&&e_mail!=null){
            myAjax("post","/tasteshenqing.do","companyname="+companyname+"&companyadd="+companyadd+"&tastePnum="+tastePnum+"&tastePname="+tastePname+"&officephone="+officephone+"&usertelp="+usertelp+"&e_mail="+e_mail,function () {
                console.log(xhr.responseText);
                $("#modal_companyname").text(companyname);
                $("#modal_companyadd").text(companyadd);
                $("#modal_tastePnum").text(tastePnum);
                $("#modal_tastePname").text(tastePname);
                $("#modal_officephone").text(officephone);
                $("#modal_usertelp").text(usertelp);
                $("#modal_e_mail").text(e_mail);
            })
        }
    }else {
        location.href="../../html/xr/login.html";
    }
}
function getallComptaste() {
    myAjax("post","/getallComptaste.do",null,function () {
        console.log(xhr.responseText);
        var data=JSON.parse(xhr.responseText);
        console.log(data);
        for(var i=0;i<data.length;i++){
            document.getElementById("t_companytaste").innerHTML+=`<tr>
                        <td>${data[i].companyname}</td>
                        <td>${data[i].companyadd}</td>
                        <td>${data[i].quantity}</td>
                        <td>${data[i].username}</td>
                        <td>${data[i].officephone}</td>
                        <td>${data[i].cellphone}</td>
                        <td>${data[i].email}</td>
                    </tr>`;
        }
    })
}
window.onload=function () { getallComptaste() };