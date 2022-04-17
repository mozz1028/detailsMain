$(function(){

    $('.pop').dblclick(function(){
        $(this).fadeOut();
    })

    var clicknum = $(".itemnum").text();


    
    $('.bnr li').eq(0).siblings().fadeOut();
    var nowslide = 0;
    setInterval(function(){
        if(nowslide < 4){
            nowslide++;
        }else{
            nowslide = 0;
        }
        $('.bnr li').eq(nowslide).fadeIn();
        $('.bnr li').eq(nowslide).siblings().fadeOut();
    },3000)
})