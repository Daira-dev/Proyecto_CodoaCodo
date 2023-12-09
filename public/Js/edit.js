// Elegir imágen del producto
function showImages(event) {
    const input = event.target;
    const files = input.files;

    if (files.length >= 1) {
        for (let i = 0; i < files.length; i++) {
            if (i < 2) {
                const reader = new FileReader();
                const previewImage = document.getElementById(`previewImage${i + 1}`);
                const imageContainer = document.getElementById(`${i === 0 ? 'frenteImg' : 'dorsoImg'}`);

                reader.onload = function (e) {
                    previewImage.src = e.target.result;
                    previewImage.style.display = 'block';
                    imageContainer.style.display = 'block';
                };

                reader.readAsDataURL(files[i]);
            } else {
                console.log('Se permiten solo dos imágenes');
                break;
            }
        }
    } else {
        console.log('No se han seleccionado archivos.');
    }
}





