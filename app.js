// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Jhon Jairo Guerreo Zarate - Colombia

//Variable de tipo array almacenará los nombres de los amigos ingresados
let amigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de entrada
    var nombreAmigo = document.getElementById("amigo").value;

    // Verificar que el campo no esté vacío
    if (nombreAmigo.trim() !== "") {
        // Añadir el nombre al array
        amigos.push(nombreAmigo);

        limpiarCaja();
        actualizarLista();

        // MOstrar arreglo en consola de navegador
        console.log(amigos);
    } else {
        //Si esta vacio
        alert("Por favor, inserte un nombre.");
    }
    return;
}





function sortearAmigo() {
    // Verificar que el arreglo no esté vacío
    if (amigos.length > 0) {

        i = amigos.length
        //floor es para redondear el enterio menor mas cercano
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el nombre sorteado aleatorio
        var nombreSorteado = amigos[indiceAleatorio];

        // Eliminar el nombre del array de amigos
        amigos.splice(indiceAleatorio, 1);

        // Actualizar la lista de amigos en el HTML
        mostrarResultado(nombreSorteado);

        // Asi se actualiza la lista apenas se oprime "sortear amigos"
        actualizarLista();

    } else {
        //Si esta vacio
        alert("Por favor, inserte un nombre.");
    }
    return nombreSorteado;
    ;
}








function limpiarCaja() {
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}




function actualizarLista() {

    // Obtener el elemento de la lista
    var lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    // para asegurarse de que no haya duplicados al actualizar
    lista.innerHTML = "";

    // Iterar sobre el arreglo de amigos
    //recorrer el arreglo "amigos" y crear una lita para cada titulo
    for (var i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        var li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el nuevo elemento a la lista en el HTML
        lista.appendChild(li);
    }
    return lista;
}




function mostrarResultado(nombre) {
    let resultado = document.getElementById("resultado");

    // Limpiar la lista antes de agregar un nuevo resultado
    resultado.innerHTML = "";

    // Crear un nuevo elemento <li> con el nombre sorteado
    let li = document.createElement("li");
    li.textContent = `🎉 Amigo sorteado: ${nombre} 🎉`;

    // Agregar el nuevo resultado a la lista
    resultado.appendChild(li);
}