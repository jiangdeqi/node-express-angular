$(function () {

    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var img = new Image(); // 创建一个<img>元素

        //横线
        ctx.beginPath();
        ctx.moveTo(275, 275);
        ctx.lineTo(0, 275);
        ctx.lineTo(550, 275);
        //竖线
        ctx.moveTo(275, 275);
        ctx.lineTo(275, 0);
        ctx.lineTo(275, 550);
        ctx.strokeStyle = "#CCC";
        ctx.stroke();
        ctx.mozImageSmoothingEnabled = false;
    }

    //文字添加
    $("#addText").on('click', function () {
        textadd();
    });

    //图片添加
    $("#addImages").on('click', function () {
        img.onload = function () {
            ctx.drawImage(img, 100, 100, 150, 200); //图像，位置x，位置y，宽度 ，高度
        }
        img.src = '../public/images/20161126105137.png'; // 设置图片源地址
    });

    //生成图片
    $("#generateImage").on('click', function () {
        var url = convertCanvasToImage();
        window.open(url.currentSrc);
    });

// 将画布输出图片
function convertCanvasToImage() {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}


var canvas,context;
var img,//图片对象
    imgIsLoaded,//图片是否加载完成;
    imgX=0,
    imgY=0,
    imgScale=1;
 
(function int(){
    canvas=document.getElementById('canvas');
    context=canvas.getContext('2d');
    loadImg();
})();
 
function loadImg(){
    img=new Image();
    img.onload=function(){
        imgIsLoaded=true;
        drawImage();
    }
    img.src = '../public/images/20161126105137.png';
}
 
function drawImage(){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(img,0,0,img.width,img.height,imgX,imgY,img.width*imgScale,img.height*imgScale);
    textadd();//重绘文字
}
 
canvas.onmousedown=function(event){
    var pos=windowToCanvas(canvas,event.clientX,event.clientY);
    canvas.onmousemove=function(event){
        canvas.style.cursor="move";
        var pos1=windowToCanvas(canvas,event.clientX,event.clientY);
        var x=pos1.x-pos.x;
        var y=pos1.y-pos.y;
        pos=pos1;
        imgX+=x;
        imgY+=y;
        drawImage();
    }
    canvas.onmouseup=function(){
        canvas.onmousemove=null;
        canvas.onmouseup=null;
        canvas.style.cursor="default";
    }
}
canvas.onmousewheel=canvas.onwheel=function(event){
    var pos=windowToCanvas(canvas,event.clientX,event.clientY);
    event.wheelDelta=event.wheelDelta?event.wheelDelta:(event.deltaY*(-40));
    if(event.wheelDelta>0){
        imgScale*=2;
        imgX=imgX*2-pos.x;
        imgY=imgY*2-pos.y;
    }else{
        imgScale/=2;
        imgX=imgX*0.5+pos.x*0.5;
        imgY=imgY*0.5+pos.y*0.5;
    }
    drawImage();
}
 
function windowToCanvas(canvas,x,y){
    var bbox = canvas.getBoundingClientRect();
    return {
        x:x - bbox.left - (bbox.width - canvas.width) / 2,
        y:y - bbox.top - (bbox.height - canvas.height) / 2
    };
}


function textadd(){
    ctx.font = "38px serif";
    ctx.fillText($(".textval").val(), 10, 50);
}



});


    
