var empleados = [];

const guardar = () => {
    //Captura los datos de las cajas de texto
    let doc = document.getElementById("doc").value;
    let nom = document.getElementById("nom").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    //Crea un JSON
    /**
    {
        documento: 50,
        nombre: "Maria",
        telefono: 5145424,
        email: "r@gmail.co"
    }
     */
    let persona = {};
    persona.documento = doc;
    persona.nombre = nom;
    persona.telefono = tel;
    persona.email = email;

    //Guarda la persona en Empleados
    empleados.push(persona);
    alert("Guardado!");
    limpiar();
}
/*
[
    {
        documento: 50,
        nombre: "Maria",
        telefono: 5145424,
        email: "r@gmail.co"
    },
    {
        documento: 80,
        nombre: "Pedro",
        telefono: 78645,
        email: "p@gmail.co"
    },
    {
        documento: 90,
        nombre: "Ana",
        telefono: 159,
        email: "ana@gmail.co"
    }
]
*/
const listar = () => {
    let listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (const emp of empleados) {
        listado.innerHTML += `<tr>
                                <td>${emp.documento}</td>
                                <td>${emp.nombre}</td>
                                <td>${emp.telefono}</td>
                                <td>${emp.email}</td>
                            </tr>`;
    }
}

const limpiar = () => {
    document.getElementById("doc").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
}