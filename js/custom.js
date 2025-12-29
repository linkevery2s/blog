$('#nav_m').hide();

const menu_btn = document.querySelector(".h_circle");

menu_btn.addEventListener("click", () =>{
    $('#nav_m').toggle();
});

/*const breakingnews = document.querySelector(".breakingnews");
const krader = document.querySelector(".krader");
const bsmap = document.querySelector(".bsmap");
const stocklist = document.querySelector(".stocklist");
const refugelevel = document.querySelector(".refugelevel");
const search = document.querySelector(".search");

breakingnews.addEventListener("click", () =>{
    location.href = "./breakingnews/";
});

krader.addEventListener("click", () =>{
    location.href = "./krader/";
});

bsmap.addEventListener("click", () =>{
    location.href = "./bsmap/";
});

stocklist.addEventListener("click", () =>{
    location.href = "./stocklist/";
});

refugelevel.addEventListener("click", () =>{
    location.href = "./refugelevel/";
});

search.addEventListener("click", () =>{
    location.href = "./search/";
});*/