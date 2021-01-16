
  function playSound(e){

    /* getting key so we can apply css effects */
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(key == null) return; //if key other than defined in program is returned we will skip execution
    
    /* getting audio element accordingly so can we play sound further */
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    /* applying css  */
    key.classList.add('playing');
    
    /* if same button played multiple times fast have no effect 
    as it waits till play to be finished so setting time to zero */
    audio.currentTime = 0;
    audio.play();
    }
      
      
      
      /* adding event listener so when transiton ends we will remove the css */
      const keys = document.querySelectorAll('.key');
      keys.forEach(key =>{
        key.addEventListener('transitionend',removeCss)
      })
      
      
      
      /* removing transitions and applied css from button */
      function removeCss(e){
        //check if ended transition is transform from playing class
        if(e.propertyName != 'transform') return;
        e.target.classList.remove('playing')
      }
    
      /* listening to keydown events and play sound */
      window.addEventListener('keydown',playSound); 