const toggle = document.getElementById("toggle"),
      nav = document.getElementById("nav__mobile"),
      close = document.getElementById("close");

      if (toggle) {
        toggle.addEventListener('click',()=>{
         nav.classList.remove('inactive');
         close.classList.add('active');
         toggle.classList.add('inactive');

        })
        
      }

      if(close){
        close.addEventListener('click',()=>{
            nav.classList.add('inactive');
            close.classList.remove('active');
            toggle.classList.remove('inactive');
        })
      }