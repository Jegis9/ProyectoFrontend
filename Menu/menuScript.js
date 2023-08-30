
//INICIO DE CODIGO PARA EL MENU LATERAL DESPLEGABLE

let listaElementos = document.querySelectorAll('.list__nutton--click');

listaElementos.forEach(listaElemento => {

    listaElemento.addEventListener('click',()=>{
       
        listaElemento.classList.toggle('arrow');

        let height =0;
        let menu = listaElemento.nextElementSibling;
        if(menu.clientHeight =="0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;


    })
    
});

//FIN DE CODIGO PARA EL MENU LATERAL DESPLEGABLE


//INICIO RESPONSIVE 
function handleResize() {
    const screenWidth = window.innerWidth;

    const listItems = document.querySelectorAll('.list__item--click');

    listItems.forEach(item => {
        const arrow = item.querySelector('.list__arrow');
        const subMenu = item.querySelector('.list__show');

        if (screenWidth <= 768) {
            arrow.style.display = 'inline';
            subMenu.style.display = 'none';
        } else {
            arrow.style.display = 'none';
            subMenu.style.display = 'block';
        }
    });
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
//FIN RESPONSIBE

//letras
const textElements = document.querySelectorAll('.textoPresentacion span, .subtitulo span, .subtitulo2 span');

function typeText(element, text, interval) {
    return new Promise((resolve) => {
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                element.textContent += text[charIndex];
                charIndex++;
            } else {
                clearInterval(typingInterval);
                resolve();
            }
        }, interval);
    });
}

async function showTextSequentially() {
    for (const element of textElements) {
        const text = element.textContent;
        element.textContent = '';

        await typeText(element, text, 100); 

        await new Promise((resolve) => setTimeout(resolve, 500));
    }
}

showTextSequentially();


