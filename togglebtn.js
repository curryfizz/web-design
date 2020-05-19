
 function toggledarkmode(){
    var background = document.body;
    var carddark = document.getElementsByClassName("card");
    var generaldark = document.getElementsByClassName("general");
    var overviewcellsdark = document.getElementsByClassName("overviewcells");
    var circleslider = document.getElementsByClassName("buttonshapecircle");
    var buttonback = document.getElementsByClassName("buttonshapemain");
    var linedark = document.getElementsByClassName("line")

    background.classList.toggle("darkmodebackground");
    carddark[0].classList.toggle("carddarkmode");
    for(var i= 0; i<generaldark.length; i++){
      generaldark[i].classList.toggle("generaldarkmode");
    }
    for(var j =0; j<overviewcellsdark.length; j++){
      overviewcellsdark[j].classList.toggle("generaldarkmode")
    }
    buttonback[0].classList.toggle("darkback");
    circleslider[0].classList.toggle("circledark");
    line[0].classList.toggle("linedarkmode");
  }
