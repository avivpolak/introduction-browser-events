"use strict"
//hide text
document.getElementById('elem').addEventListener("click", hide) 
 
function hide () {
    document.getElementById('text').hidden = true;
  }



//hideself
function hideself(){
  this.hidden = true;
}
document.getElementById('elemn').addEventListener("click",hideself)
