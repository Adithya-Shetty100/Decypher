var a,num=0,cost=0,qty=0,check=0;
var checked=document.querySelector(".checked");
var checkout=document.querySelector(".checkout");

$(".payment").fadeOut(10);
$(function () {
    $(document).scroll(function () {
        var $nav = $("#header");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$(".panda").on("click",".panda1",function(event){
    event.stopPropagation();//to prevent event bubbling
    $(this).parent().fadeOut(500,function(){ 
        $(this).remove();num-=1;
        $(".count").text(" "+num);
    });  // remove necessary as fade out only makes display none so memory wasted
}); // .parent() refers to parent element of selected element and look closely at this operator

$(".s1").click(function(){
    num+=1;
    a="Face masks";
    chosen();
});
$(".s2").click(function(){
    num+=1;a="safe Boots";chosen();});
$(".s3").click(function(){
    num+=1;a="PPE kits";chosen();});
$(".s4").click(function(){
    num+=1;a="face shield";chosen();});
$(".s5").click(function(){
    num+=1;a="Gloves";chosen();});
$(".s6").click(function(){
    num+=1;a="Sanitizer";chosen();});
$(".s7").click(function(){
    num+=1;a="Sanitizer";chosen();});
$(".s8").click(function(){
    num+=1;a="Toilet Paper";chosen();});
$(".s9").click(function(){
    num+=1;a="Ir Thermometer";chosen();});
$(".s10").click(function(){
    num+=1;a="N-95 masks";chosen();});
$(".s11").click(function(){
    num+=1;a="Respirators";chosen();});
$(".s12").click(function(){
    num+=1;a="PPE kit ";chosen();});



function chosen()
{
    $(".count").text(" "+num);
    $(".panda").append('<p><span class="panda1"><i class="far fa-trash-alt btn btn-danger"></i></span>'+ a+'<select name="incart" id="incart" class="mt-4 mr-3"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></p>');
    var e=document.querySelector("#incart");
    qty= e.options[e.selectedIndex].text;
    cost=cost + (qty*800);
    $(".pay").text("Total Cost= Rs."+cost);
    check+=1;
    if(check===1)
    {$(".payment").fadeIn(2000);}
}


        $(".imp").click(function(){
            alert("Your Payment was successful\nThank you and visit again");
        });



    //$("#elementId :selected").text(); // The text content of the selected option for drop down
    //$("#elementId :selected").val(); // The value of the selected option
