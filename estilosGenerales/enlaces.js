/*CORRESPONDE HACER LA VALIDACION, SI LA CONTRASEÑA ES VALIDA ENTONCE DEJARA INGRESAR A 
LA PAGINA DE MENU PRINCIPAL */
document.getElementById("Menu").addEventListener("click", function() {
    window.location.href = "/Menu/menu.html";
});

/*SI LA COMPRA SE HACE, PASA A FACTURACION */
document.getElementById("Facturacion").addEventListener("click", function() {
    window.location.href = "/proveedores/index.html";
});
