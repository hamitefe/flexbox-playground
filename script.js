let backContainer = document.querySelector('#back');
let frontContainer = document.querySelector('#front');
setInterval(() => {
    for (let i = 0; i < backContainer.children.length; i++){
        let front = document.querySelector(`#f${i}`);
        let back = document.querySelector(`#b${i}`);
        front.style.position = 'absolute';
        let rect = back.getBoundingClientRect();
        front.style.top = `${rect.top}px`;
        front.style.left = `${rect.left}px`;

    }
}, 1);

