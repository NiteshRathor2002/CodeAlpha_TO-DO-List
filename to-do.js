let inputs = document.getElementById("hell");
        const text = document.querySelector(".task");
        
        function add(){
            if(inputs.value == ""){
                alert(" enter the task ")}
                else{
                    let newelement = document.createElement("ul");
                    newelement.innerHTML=`${inputs.value}<i class="fa-solid fa-trash"></i>`;
                    text.appendChild(newelement);
                    inputs.value="";
                    newelement.querySelector("i").addEventListener("click",remove);
                    function remove(){
                        newelement.remove();
                    }
                }
            }
            const btn=document.querySelector('#btn');
              btn.addEventListener("click", chnagebg);
              chnagebg();
              function chnagebg(){
                let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
                let a;
            
                function nitesh(a){
                    for(let i=0; i<6; i++){
                        let x = Math.round(Math.random() * 14);
                        let y = hex[x];
                        a += y;
                    }
                    return a;
                }
                let Color1 = nitesh('#');
                let Color2 = nitesh('#');
                var angle = 'to right';
            
                let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
                document.body.style.background = gradient;}