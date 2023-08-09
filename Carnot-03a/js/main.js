$(function() {
    function headerTexts(button,text,hiddentext) {
        $(hiddentext).hide();
        $(button).click(function () {
            $(text).toggle();
            $(hiddentext).toggle();
            $(this).toggleClass("activebutton");
        });
    }
    headerTexts(".btn1","#text1","#hidden1");
    headerTexts(".btn2","#text2","#hidden2");
    headerTexts(".btn3","#text3","#hidden3");
});