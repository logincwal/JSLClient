
let menu = {
    "tender": "view/tender/tenderMain.html",
    "homePage": "view/homepage/homepage.html",
};

function setIframeSrc(obj) {
    let id = obj.id;
    let url = menu[id];
    // 取得iframe窗口 
    var iframeMain = $("#mainFrame");
    // 转换成DOM对象后再赋值刷新 
    iframeMain.get(0).src = url;
    // 设置样式  
    obj.className = "menu-top-active";
    $("a.menu-top-active").get(0).className = "";
}

function autoSetFrame(){
    let iframe = $("#mainFrame");
    var mainheight = iframe.contents().find("body").height();
    iframe.height(mainheight);

}