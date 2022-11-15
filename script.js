var navLinks = document.getElementById("navLinks");
        function openMenu(){
            navLinks.style.right = "0%";
        }
        function hideMenu(){
            navLinks.style.right = "-100%";
        }
window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navLinks").style.padding = "30px 10px";
            document.getElementById("logo").style.fontSize = "25px";
          } else {
            document.getElementById("navLinks").style.padding = "80px 10px";
            document.getElementById("logo").style.fontSize = "35px";
          }
        }