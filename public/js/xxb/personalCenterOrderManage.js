//================订单管理
let liArray=document.getElementById("titleSon").getElementsByTagName("li");
let orderBoxArray=document.getElementsByClassName("orderBox");
for(let i=0;i<liArray.length;i++){
    liArray[i].No=i;
    liArray[i].onclick=function () {
        for(let j=0;j<liArray.length;j++){
            if(!orderBoxArray[j].getAttribute("class").includes("display-none")){
                orderBoxArray[j].classList.add("display-none");
            }
            if(liArray[j].getAttribute("class")==="active"){
                liArray[j].classList.remove("active");
            }
        }
        this.classList.add("active");
        orderBoxArray[this.No].classList.remove("display-none");
    }
}