// var baseUrl = "http://127.0.0.1:8080/JSLServer/";
var baseUrl = "http://127.0.0.1:8080/";

function getUrlData(url) {
    var param = { keyWord: "集团有限" };
    $.ajax({
        url: baseUrl + url,
        dataType: 'json',
        type: 'post',
        data: param,
        success: function (data, textStatus) {
            // 取得返回的json对象 
            var jsonData = eval(data);
            alert(jsonData.status);
            alert(jsonData.list.length)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            
        }
    });
}