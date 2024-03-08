// Definir la función IIFE
const getUsers = async () => {
    // URL de la cual se obtendrán los datos
    const url = "https://randomuser.me/api/?results=10";

    try {
        // Realizar una solicitud HTTP para obtener los datos
        const respuesta = await fetch(url);

        // Convertir la respuesta a formato JSON
        const datos = await respuesta.json();

        // Mostrar el resultado en HTML
        const userContainer = document.getElementById('user-data');
        userContainer.innerHTML = '';

        // Crear elementos HTML para cada usuario
        datos.results.forEach(user => {
            // Crear un párrafo para cada propiedad del usuario
            const parrafo = document.createElement('div');

            // Mostrar la información del usuario en párrafos separados
            parrafo.innerHTML = `<img src="${user.picture.large}"><br>
                                ${user.name.first} ${user.name.last}<br>
                                ${user.email}<br>
                                ${user.phone}<br><br>`;

            // Agregar el párrafo al contenedor principal
            userContainer.appendChild(parrafo);
        });
    } catch (error) {
        // Manejo de errores, en caso de que la solicitud falle
        console.error('Error al obtener los usuarios:', error);
    }
};

// Invocar la función al cargar la página
getUsers();