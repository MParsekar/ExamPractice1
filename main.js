var intervalID;
var TIMETOMOVE=15;
function onload() {
    var source = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; //sources here
    for (var i = 0; i < source.length; i++) {
        var imga = document.createElement("img");
        imga.setAttribute("src", source[i]);
        document.getElementsByClassName("images")[0].appendChild(imga);
        imga.classList.add("image");
        document.getElementsByClassName("image")[i].addEventListener("click", function (event) {
            console.log("hi");
            viewImage(event)
        });
    }
}
function viewImage(event) {
    var click = event.target;

    if(click.parentNode.className=="images"){
        if(document.getElementsByClassName("viewImage")[0].children.length){
            // document.getElementsByClassName("viewImage")[0].removeChild(document.getElementsByClassName("viewImage")[0].children[0]);
         }
    
         document.getElementsByClassName("viewImage")[0].appendChild(click);
         
    }
    else{
        if((document.getElementsByClassName("viewImage")[0].children.length)){
           console.log("The image will be lost");
         }
         
        document.getElementsByClassName("images")[0].appendChild(click);
    }
    
   
}
function moveTheImage(click){

}