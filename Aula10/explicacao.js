function changeImage() {
    const img = document. getElementById ('myImage');
    const currentSrc = img. getAttribute ("src")

    if (currentSrc === 'img/images.jfif')
        {img.setAttribute("src", "img/images2.jfif");
        img.setAttribute("alt", "images2");
        }

        else {
            img.setAttribute("src", "img/images.jfif");
            img.setAttribute("alt", "images");
        }
}


function changeType() {
    const input = document. getElementsByTagName ("input")[0] //Indice 0, primeiro elemento da lista de Imput, que são vários.
    const currentType = input.getAttribute("type");

    switch (currentType) {
        case 'text':
            input.setAttribute('type', 'number');
            break;
    }

  
}



