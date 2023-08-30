function validateForm() {
    var fileInput = document.getElementById("archivo");
    var errorMessage = document.getElementById("error-message");

    if (fileInput.value === "") {
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        return true;
    }
}