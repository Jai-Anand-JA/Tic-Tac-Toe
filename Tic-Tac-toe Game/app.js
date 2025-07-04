let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let message=document.querySelector(".msg");
let turn=true;

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true)
            {
                box.innerText="X";
                turn=false;
            }
            else{
                box.innerText="O";
                turn=true;
            }
            box.disabled=true;
            checkwinner();
    });
});

const checkwinner=()=>{
    for(let pattern of win)
        {
            let p1=boxes[pattern[0]].innerText;
            let p2=boxes[pattern[1]].innerText;
            let p3=boxes[pattern[2]].innerText;
            if(p1!="" && p2!="" && p3!="")
                {
                    if(p1===p2 && p2===p3)
                        {
                            boxes.forEach((box)=>{
                                box.disabled=true;
                            });
                            message.hidden=false;
                            if(p1==="X")
                            message.innerText='Congratulations! Winner is Player 1';
                            else
                            message.innerText='Congratulations! Winner is Player 2';
                        }
                }
        }
}

resetbtn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        turn=true;
        message.hidden=true;
    });
});