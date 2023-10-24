let images = document.getElementsByTagName('img');
for (let img of images) {
    let div = document.createElement('div');
    div.textContent = 'Hello';
    img.replaceWith(div);
}
