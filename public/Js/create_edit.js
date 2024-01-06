// Elegir imágen del producto
function showImages(event) {
    console.log('File input change event:', event);

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


//Filtros para los campos del formulario

//Filtro de numeros enteros
function soloNumerosEnteros(evt) {
  const charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    evt.preventDefault();
  }
}

function soloNumeros(evt) {
  soloNumerosEnteros(evt);
}

// Filtro de números enteros y decimales
function enterosDecimales(evt) {
  const charCode = (evt.which) ? evt.which : evt.keyCode;

  if (
    (charCode > 31 && (charCode < 48 || charCode > 57)) &&  // No es un número
    charCode !== 46 && charCode !== 44  // No es punto ni coma
  ) {
    evt.preventDefault();
  }

  const inputValue = evt.target.value;
  if ((inputValue.match(/[.]/g) || []).length > 1) {
    evt.preventDefault();
  }
}




