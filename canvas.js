window.onload = () => {
    var canvas = document.querySelector("#canvas");
    var contexto = canvas.getContext("2d");
    var image = new Image();

    function baseName(str) {
        var base = new String(str).substring(str.lastIndexOf("\\") + 1);
        return base;
    }

    var upperTextField = document.querySelector("#upperText");
    var lowerTextField = document.querySelector("#lowerText");
    var btnImg = document.querySelector("#select-img");
    var submitButton = document.querySelector("#submit");

    btnImg.oninput = (event) => {
        var image = new Image();

        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            contexto.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
        var src = `img/${baseName(event.target.value)}`;
        image.src = src;
    }

    submitButton.onclick = (event) => {
        contexto.strokeStyle = "black";
        contexto.font = "30pt Impact";
        contexto.lineWidth = 4;
        contexto.textAlign = 'center';
        contexto.strokeText(upperTextField.value, canvas.width / 2, 60);
        contexto.strokeText(lowerTextField.value, canvas.width / 2, canvas.height-30);
        contexto.fillStyle = "white";
        contexto.lineWidth = 3;
        contexto.fillText(upperTextField.value, canvas.width / 2, 60);
        contexto.fillText(lowerTextField.value, canvas.width / 2, canvas.height-30);
    }

}