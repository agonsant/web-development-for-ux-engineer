# Pokedex

El objetivo es realizar un proyecto de una Pokédex.

## Diseños

El diseño de la aplicación nos vendrá dado por el siguiente [archivo de Figma](https://www.figma.com/community/file/979132880663340794).

![Pokedex](./imgs/pokedex-thumbnail.png)

## Primeros pasos con el proyecto. La maquetación

En esta primera parte nos vamos a encargar de la maquetación de la página web. Cuando nos enfrentamos a un nuevo proyecto, o funcionalidad dentro de uno existente, un buen punto de partida sería la maquetación de la interfaz sin recibir datos de ningún servidor, simplemente mostrando datos fijos.

La aplicación constará de una página principal con un listado de pokemons y cada uno de ellos tendrá una página de detalle.

### Guía orientativa de pasos a seguir

1. Crear un repositorio en Github con el nombre `ux-engineer-pokedex-[Nombre_del_grupo]`. Debemos incluir el LICENSE, README.md y el `.gitignore de node`. Clonar el repositorio en vuesto ordenador.
2. Crear nuestra carpeta `src` y un archivo `index.html` y otro `detail.html` dentro de ella.
3. Crear una carpeta `styles` dentro de src y dentro de ella un archivo `styles.css`.
4. Subir los cambios a Github como primer app commit.
5. Conectar el repositorio con [Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) para desplegar la página web y con SonarCloud para analizar el código.
6. Realizar la maquetación de la página principal. Debemos dividir en funcionalidades/cambios que aporten valor al usuario de la aplicación e ir atajando esos cambios de uno en uno. Por ejemplo, primero maquetar el header, luego la card de un pokemon, luego el footer, etc.

   ![home](./imgs/pokedex-list-example.png)

> [!NOTE]
> A la hora de enfocar la maquetación, mi consejo es que realicéis primero la estructura HTML y CSS de la funcionalidad que estás atacando y luego le añadamos el renderizado a través de las API's del DOM, con los datos del JS. Una vez que terminéis esa funcionalidad, lo repetiremos con las siguientes en bucle.

7. Realizar la maquetación de la página de detalle, eligiendo **sólo 1** de los pokemon que hay en el diseño.

## Introduciendo dinamismo en la aplicación.

Una vez que tenemos la maquetación usando HTML y CSS, vamos cambiar a escuchar las interacciones del usuario y a mostrar los datos de los pokemons en la aplicación utilizando JS y su API del DOM.

De momento consumiremos los datos guardados en una variable de JS, pero en el siguiente paso los consumiremos de una API.

Además también realizaremos la carga inicial de la página creando el HTML de manera dinámica.

### Guía orientativa de pasos

1. Crear un archivo `data.js` en la carpeta `src/scripts` y guardar en él los datos de los pokemons en una variable de tipo array de objetos. Copia los objetos de los primeros 20 pokemons. Para ello debemos visitar la API de cada pokemon e ir guardando uno a uno.

Por ejemplo, para el primer pokemon, Bulbasaur, visitamos la URL [`https://pokeapi.co/api/v2/pokemon/1/`](https://pokeapi.co/api/v2/pokemon/1/), copiamos el objeto y lo pegamos como elemento de la variable array que hemos creado.

Para el siguiente pokemon, Ivysaur, visitamos la URL [`https://pokeapi.co/api/v2/pokemon/2/`](https://pokeapi.co/api/v2/pokemon/2/), copiamos el objeto y lo pegamos como elemento de la variable array que hemos creado.

Y así sucesivamente hasta tener los 20 primeros pokemons.

2. Crear un archivo `main.js` en la carpeta `src/scripts` y enlazarlo en el `index.html` al final del body junto con el `data.js`. Importante que el script `data.js` esté antes que el `main.js`.

3. Crear una función `renderPokemon` que reciba un objeto pokemon y devuelva un string con el HTML de la card de un pokemon con los datos del objeto.

4. Crear una función `renderPokemons` que reciba un array de objetos pokemon y renderice la lista completa de pokemons en HTML utilizando la función del punto 3.

5. Escuchar el evento del buscar y filtrar los pokemons por nombre.

6. Implementar la página de detalle de un pokemon renderizando el HTML utilizando las API's del DOM. Para los datos copiar un pokemon fijo del API, por ejemplo, [Pikachu](https://pokeapi.co/api/v2/pokemon/25/).

## Consumiendo la API de pokemons

> [!NOTE]
> Comming soon...
