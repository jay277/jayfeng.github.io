var myImage= document.querySelector('img');
myImage.onclick = function(){
    let mySrc=myImage.getAttribute("src");
    if(mySrc==="images/firefox-icon.png"){
        myImage.setAttribute('src',"images/firefox-icon2.png");
    }else{
        myImage.setAttribute('src',"images/firefox-icon.png");      
        }
}
var myButton=document.querySelector("button");
var myHeading=document.querySelector("h1");
function setUsername(){
    var myName=prompt("Please enter your name.");
    if (!myName||myName===null){
        setUsername();
    }else{
     localStorage.setItem("name",myName);
     myHeading.innerHTML="Mozilla is coll, "+myName;    
    }    
    
    //localStorage.setItem("name",myName);
    //myHeading.innerHTML = 'Hello world! '+myName;
     
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick=function(){setUsername();}
