function moveBox() {
    let box = document.getElementById("box");
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos >= 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.left = pos + 'px';
        }
    }
}
