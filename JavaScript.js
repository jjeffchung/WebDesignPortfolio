var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function togglemenu(){
  if (menuList.style.maxHeight == "0px"){
    menuList.style.maxHeight = "130px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}


function validateForm() {

  if (document.forms ["myForm"] ["fname"].value == ""){
    alert ("Please, provide your first name.");
  return false;

 } else if (document.forms ["myForm"] ["lname"].value == ""){
 alert ("Please, provide your last name.");
 return false;

 } else if (document.forms ["myForm"] ["emailadd"].value == ""){
  alert ("Please, provide a valid email address.");
return false;

 } else if (document.forms ["myForm"] ["subject"].value == ""){
 alert ("Please, provide some feedback for your topic message.");
 return false;
 }
}
