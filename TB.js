alert("本次更改加入了推荐页轮播与点击效果，导航栏的下拉菜单与登录注册部分动画效果，优化了界面，删除部分BUG");
var name = prompt("请输入您的名字","");
if(name !=""&&name!=null){
    alert("欢迎你"+name);
}
let oLeft = document.querySelector(".left-jiantou");
let oRight = document.querySelector(".right-jiantou");
let oImgList = document.querySelector(".lunbo-img");

let clonefirstImg = oImgList.firstElementChild.cloneNode();
oImgList.appendChild(clonefirstImg);

function RRImg(){
    index++;
    oImgList.style.right = index * 564.59 +"px";
    oImgList.style.transition = "0.3s ease";
    if(index === 5)
    {
        setTimeout(() =>{
            index = 0;
            oImgList.style.right = 0;
            oImgList.style.transition = "none";
        },300);
        
    }
}
let index = 0;
oRight.addEventListener("click",RRImg);
oLeft.addEventListener("click",() => {
    index--;
    oImgList.style.right = index * 564.59 +"px";
    if(index === -1){
        oImgList.style.right = 5 * 564.59 +"px";
        oImgList.style.transition = "none";
        setTimeout(()=>{
            index = 4;
            oImgList.style.right = index * 564.59 +"px";
            oImgList.style.transition = "0.3s ease";
        },0);
    }
})
setInterval(RRImg,2000);
// alert("Hello,World!");
window.onbeforeunload = function (e) {
    e = e | window.event;
    if (e) {
      e.returnValue = '关闭提示';
    }
    return false;
  };