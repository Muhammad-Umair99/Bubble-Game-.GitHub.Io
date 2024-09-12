    function makeBubble  (){
        let clutter = "";

    for (let i = 1; i <= 161; i++) {
        
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter
    }

    let timer = 5;
    function runTimer(){
      let timeint =   setInterval(() => {
            if(timer > 0){
                timer--;
                document.querySelector("#timerVal").textContent = timer;
            }
           else{
            clearInterval(timeint);
        }
          
        }, 1000);
    }

    runTimer();
    makeBubble();
