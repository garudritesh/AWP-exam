function submit() {

    var displaybox = document.querySelector("#cloneItem").cloneNode(true);

    displaybox.style.display = "inherit";


    var name1 = document.querySelector("#name").value;
    var pass1 = document.querySelector("#pass").value;
    var mail1 = document.querySelector("#mail").value;

    if (name1 == "") {
        window.alert("enter username")
        return false;
    }

    if (document.querySelector("#pass").value == "") {
        window.alert("enter password")
        return false;
    }
    if (document.querySelector("#mail").value == "") {
        window.alert("enter mailid")
        return false;
    }

    displaybox.children[0].children[1].innerHTML = name1;


    displaybox.children[1].children[1].innerHTML = pass1;


    displaybox.children[2].children[1].innerHTML = mail1;

    var ss = document.querySelector("#display1");
    ss.appendChild(displaybox);


    document.querySelector("#name").value = "";
    document.querySelector("#pass").value = "";
    document.querySelector("#mail").value = "";
    /*  if(name1= "")
      {
          window.alert("please enter username");
          return false;
      }
      if(pass1= "")
      {
          window.alert("please enter password");
          return false;
      }
      if(mail1= "")
      {
          window.alert("please enter mailid");
          return false;
      }*/


}