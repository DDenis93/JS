function fontStyle(){
  let element = document.querySelector("#editor");
  element.style.fontFamily = document.getElementById("myFont").value;
}
function sizeStyle(){
  let element = document.querySelector("#editor");
  element.style.fontSize = document.getElementById("mySize").value + "pt";
}
function colorStyle(){
  let element = document.querySelector("#editor");
  element.style.color = document.getElementById("myColor").value;
}
function leftStyle(){
  let element = document.querySelector("#editor");
  element.style.textAlign = "left";
}
function centerStyle(){
  let element = document.querySelector("#editor");
  element.style.textAlign = "center";
}
function rightStyle(){
  let element = document.querySelector("#editor");
  element.style.textAlign = "right";
}
function italicStyle(){
  let element = document.querySelector("#editor");
  if(getComputedStyle(element).fontStyle == "italic"){
    element.style.fontStyle = "normal";
  }
  else{
    element.style.fontStyle = "italic";
  }
}
function boldStyle(){
  let element = document.querySelector("#editor");
  //alert(getComputedStyle(element).fontWeight); возвращает жирность текста
  if(getComputedStyle(element).fontWeight == 400){
    element.style.fontWeight = "bold";
  }
  else{
    element.style.fontWeight = 400;
  }
}
function underlineStyle(){
  let element = document.querySelector("#editor");
  if(getComputedStyle(element).textDecorationLine == "none"){
    element.style.textDecorationLine = "underline";
  }
  else{
    element.style.textDecorationLine = "none";
  }
}