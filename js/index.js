console.log("Your index.js file is loaded correctly!"); 
//for Work section
$(".tab").on("click",function() {
    console.log("You clicked on .tab");
    if ($(this).hasClass("tab1")) {
        $(".tab1").addClass("selected");
        $(".tab2").removeClass("selected");
        $(".tab3").removeClass("selected");
        $(".tab4").removeClass("selected");
        $(".tab5").removeClass("selected");
        $("#proj1").css("display","grid");
        $("#proj2").css("display","none");
        $("#proj3").css("display","none");
        $("#proj4").css("display","none");
        $("#proj5").css("display","none");

    }
    else if ($(this).hasClass("tab2")) {
        $(".tab1").removeClass("selected");
        $(".tab2").addClass("selected");
        $(".tab3").removeClass("selected");
        $(".tab4").removeClass("selected");
        $(".tab5").removeClass("selected");
        $("#proj1").css("display","none");
        $("#proj2").css("display","grid");
        $("#proj3").css("display","none");
        $("#proj4").css("display","none");
        $("#proj5").css("display","none");
    }
    else if ($(this).hasClass("tab3")) {
        $(".tab1").removeClass("selected");
        $(".tab2").removeClass("selected");
        $(".tab3").addClass("selected");
        $(".tab4").removeClass("selected");
        $(".tab5").removeClass("selected");
        $("#proj1").css("display","none");
        $("#proj2").css("display","none");
        $("#proj3").css("display","grid");
        $("#proj4").css("display","none");
        $("#proj5").css("display","none");
    }
    else if($(this).hasClass("tab4")) {
        $(".tab1").removeClass("selected");
        $(".tab2").removeClass("selected");
        $(".tab3").removeClass("selected");
        $(".tab4").addClass("selected");
        $(".tab5").removeClass("selected");
        $("#proj1").css("display","none");
        $("#proj2").css("display","none");
        $("#proj3").css("display","none");
        $("#proj4").css("display","grid");
        $("#proj5").css("display","none");
    }
    else if($(this).hasClass("tab5")) {
        $(".tab1").removeClass("selected");
        $(".tab2").removeClass("selected");
        $(".tab3").removeClass("selected");
        $(".tab4").removeClass("selected");
        $(".tab5").addClass("selected");
        $("#proj1").css("display","none");
        $("#proj2").css("display","none");
        $("#proj3").css("display","none");
        $("#proj4").css("display","none");
        $("#proj5").css("display","grid");
    }
});

//for Skills section
$("#catGD").on("click", function(){
    $("#dropGD").slideToggle();
  });
$("#catRes").on("click", function(){
    $("#dropRes").slideToggle();
});
$("#catUIDes").on("click", function(){
    $("#dropUIDes").slideToggle();
});
$("#catSoft").on("click", function(){
    $("#dropSoft").slideToggle();
});
//for Loading Screen
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3500);
//for backToTop UI Interaction
//$(window).scroll(function() {
    //if($(window).scrollTop() + $(window).height() == $(document).height()) {
        
    //}
 //});
 // in mobile view
 $(".hamburger").on("click", function(){
    $(".mobNav").slideToggle();
});
$(".mobA").on("click", function(){
    $(".mobNav").slideToggle();
});
