      var btn = document.getElementById("btn");
      var menu = document.getElementById("menu");
      btn.addEventListener("click",function() {
        if (menu.style.display == "block") {
          menu.style.display = "none";
        } else {
          menu.style.display = "block";
        }
      });