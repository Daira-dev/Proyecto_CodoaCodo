function enviarConsulta(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Mensaje enviado",
        showConfirmButton: false,
        timer: 1500
      });
}

document.querySelector(".btn_1").addEventListener("click", function () {
    enviarConsulta();
  });
