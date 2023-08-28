
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



