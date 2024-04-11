let dirinput = document.querySelector('#directioni')
let gapinput = document.querySelector("#gapi");
let justifyinput = document.querySelector("#justifyi");
let aligninput = document.querySelector("#aligni");
let childinput = document.querySelector("#childi");
dirinput.oninput = updateDirection;
justifyinput.oninput = updateJustify;
gapinput.oninput = updateGap;
aligninput.oninput = updateAlign;
childinput.oninput = updateChild;
updateAlign()
updateDirection()
updateGap();
updateJustify()
updateChild()

function updateDirection(){
    let direction = ["row","row-reverse", "column", "column-reverse"][dirinput.value];
    document.getElementById("direction").textContent = direction;
    backContainer.style.flexDirection = direction;
}

function updateChild(){
    let len = backContainer.children.length;
    if (len < childinput.value) {
        console.log('insert')
        console.log(len-childinput.value);
        for (let i = 0; i < childinput.value-len; i++){
            let len2 = backContainer.children.length;
            let el = document.createElement("div");
            el.className = "block";
            el.id= `b${len2}`;
            backContainer.appendChild(el);
        

            let el2 = document.createElement("div");
            el2.className = "block";
            el2.id= `f${len2}`;
            el2.textContent = len2+1;
            frontContainer.appendChild(el2);
        }
    } else if (len > childinput.value){
        console.log('remove')
        for (let i = len-1; i>childinput.value-1; i--){
            backContainer.children[i].remove();
            frontContainer.children[i].remove();
        }
    } else {
        console.log("equal")
    }
    
    document.getElementById("child").textContent = childinput.value;
}

function updateJustify(){
    let direction = ["start","space-between","space-evenly", "center", "space-around", "end"][justifyinput.value];
    document.getElementById("justify").textContent = direction;
    backContainer.style.justifyContent = direction;
}

function updateAlign(){
    let direction = ["start","space-between","space-evenly", "center", "space-around", "end"][aligninput.value];
    document.getElementById("align").textContent = direction;
    backContainer.style.alignItems = direction;
}


function updateGap(){
    let num = gapinput.value;
    document.getElementById("gap").textContent = num;
    backContainer.style.gap = `${num}px`;
}