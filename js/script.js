const pageFlip = new St.PageFlip(

document.getElementById("book"),

{


width:1200,

height:800,


minWidth:280,

maxWidth:1200,


minHeight:187,

maxHeight:800,


size:"stretch",


maxShadowOpacity:0.5,


showCover:true,


mobileScrollSupport:false,


swipeDistance:20,


useMouseEvents:true,


flippingTime:800,


drawShadow:true,


autoSize:true,


startPage:0,


showPageCorners:true,


disableFlipByClick:false,


// เปิดปกเดี่ยวก่อน

usePortrait:true


}

);





// โหลดหน้า

pageFlip.loadFromHTML(

document.querySelectorAll(".page")

);





// เลขหน้า

const pageText =
document.getElementById("pageNum");


const totalPages =
document.querySelectorAll(".page").length;



pageFlip.on("flip",(e)=>{


let page = e.data + 1;


pageText.innerHTML =
page + " / " + totalPages;


});





// ปุ่มคีย์บอร์ด

document.addEventListener("keydown",(e)=>{


if(e.key==="ArrowRight"){

pageFlip.flipNext();

}


if(e.key==="ArrowLeft"){

pageFlip.flipPrev();

}


});





// resize

window.addEventListener("resize",()=>{


pageFlip.update();


});