$('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});
function chamoweva(){
    // document.getElementById("square").style.display="block";
    // document.getElementById("square").style.height="360px";




    let a = document.getElementById("square").offsetHeight;
    console.log(a);
    if(a==0){
        document.getElementById("square").style.height="300px";
        document.getElementById("square").style.padding="20px";
        document.getElementById("changearrow").style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById("square").style.height="0";
        document.getElementById("square").style.padding="0px";
        document.getElementById("changearrow").style.transform = "rotate(360deg)";
    }
    

}

function innerdown(){

   
    var x = document.getElementById("innernav").offsetHeight;
    console.log (x);

    if(x==0){
        document.getElementById("innernav").style.height="100px";
        document.getElementById("innernav").style.padding="4px";
        document.getElementById("navarrow").style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById("innernav").style.height="0";
        document.getElementById("innernav").style.padding="0px";
        document.getElementById("navarrow").style.transform = "rotate(360deg)";
    }
}
