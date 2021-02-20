document.querySelector('#menu').onclick = function() {abrir()};
document.querySelector('#sideBar').onclick = function() {fechar()};

var w = window.innerWidth;

if( w >= 1024 ){
    function abrir() {
        document.querySelector('#sideBar').style.marginLeft = "0%";
        
    };
    function fechar() {
        document.querySelector('#sideBar').style.marginLeft = "-22%";
    };

}else if( w >= 768 && w <= 1023 ){
    document.querySelector('#sideBar').style.marginLeft = "-42%";
    document.querySelector('#menu').style.width = "5%"

    function abrir() {
        document.querySelector('#sideBar').style.marginLeft = "0%";
        
    };
    function fechar() {
        document.querySelector('#sideBar').style.marginLeft = "-42%";
    };

}else if( w >= 361 && w <= 767 ){
    document.querySelector('#sideBar').style.marginLeft = "-92%";
    document.querySelector('#menu').style.width = "5%";

    function abrir() {
        document.querySelector('#sideBar').style.marginLeft = "0%";
        
    };
    function fechar() {
        document.querySelector('#sideBar').style.marginLeft = "-92%";
    };

}else if( w <= 360 ){
    document.querySelector('#sideBar').style.marginLeft = "-92%";
    document.querySelector('#menu').style.width = "5%";

    function abrir() {
        document.querySelector('#sideBar').style.marginLeft = "0%";
        
    };
    function fechar() {
        document.querySelector('#sideBar').style.marginLeft = "-92%";
    };

}

