# Bienvenido a Github

En este ejercicio aprenderemos a usar Github, una plataforma de control de versiones que nos permitirá colaborar en proyectos de desarrollo de software.

Para ello vamos a crear nuestro repositorio de bienvenida y perfil de usuario.

## Objetivos

- Aprender los fundamentos de Git
- Aprender el uso de la plataforma Github
- Crear un repositorio en Github
- Crear un perfil de bienvenida.
- Aprender a trabajar con markdown

## Creación de una cuenta en Github y primeros pasos en la plataforma

- [Referencia](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github#signing-up-for-a-new-personal-account)

Lo primero que tenemos que hacer, si no lo hemos hecho ya, es crearnos una cuenta de usuario en Github con nuestro correo electrónico.

Una vez que hayamos creado nuestra cuenta, podemos practicar con la plataforma creando un repositorio de prueba donde gestionaremos un repositorio usando Github. El siguiente tutorial es solo para empezar a movernos con la plataforma, no lo conectaremos con nuestro ordenador de momento.

- [Hello World Github Tuto](https://docs.github.com/en/get-started/start-your-journey/hello-world)

## Creación de nuestro perfil de bienvenida

- [Referencia](https://docs.github.com/en/get-started/start-your-journey/setting-up-your-profile)

> [!WARNING]
> Este tutorial de referencia no lo vamos a seguir al pie de la letra ya que nos guía sólo usando la plataforma y nosotros lo vamos a hacer desde nuestro ordenador.

Ahora que ya empezamos a movernos con la plataforma, vamos a crear nuestro perfil de bienvenida.

Github permite crear un repositorio con el nombre de nuestro usuario y un archivo `README.md` que se mostrará en la página principal de nuestro perfil.

Para ello, vamos a seguir los siguientes pasos:

1. Crear un repositorio con el nombre de nuestro usuario como hicimos en el apartado anterior en Github.
2. Antes de poder clonar el repositorio en nuestro ordenador, debemos configurar una `"Password para repositorios"` que se llama `Personal Access Token`. En este segundo paso vamos a crear un token de acceso personal para poder clonar el repositorio en nuestro ordenador, siguiendo los [siguientes pasos](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)

> [!WARNING]
> Guarda el token en un lugar seguro, ya que no podrás verlo de nuevo. Igualmente si lo pierdes, puedes revocarlo y crear uno nuevo.

3. Clonar en nuestro ordenador el repositorio. Para ello usaremos el comando `git clone` seguido de la URL del repositorio. Puedes encontrar los pasos detallados en [la documentación oficial de Github](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=webui&platform=windows#cloning-an-empty-repository).

> [!NOTE]
> Cuando hagamos la clonación nos pedirá el usuario y la contraseña. En este caso, en vez de la contraseña, usaremos el token que hemos creado en el `paso 2`.

4. Una vez clonado el repositorio, tendremos una carpeta en nuestro ordenador con el nombre de nuestro usuario. Dentro de esta carpeta, crearemos un archivo `README.md` con el contenido que queramos mostrar en nuestro perfil. El formato del archivo es Markdown, por lo que podemos añadir texto, imágenes, enlaces, etc. De momento vamos a escribir un texto de bienvenida.

```md
# Bienvenido a mi perfil de Github

Soy un@ bebeloper 🤠 de software que le gusta aprender cosas nuevas y compartir conocimiento. En este perfil encontrarás mis proyectos personales y colaboraciones en proyectos de código abierto.
```

> [!TIP]
> Puedes usar la [chuleta de markdown](https://www.markdownguide.org/cheat-sheet/) para dar formato al texto y la de [emojis](https://www.webfx.com/tools/emoji-cheat-sheet/) para añadirlos a tu.

5. Una vez que hayamos escrito el contenido, guardamos el archivo y podemos subir nuestros cambios a Github para verlos. Para ello hacemos:

> git add README.md

Este comando añade el archivo `README.md` a la lista de archivos que queremos subir a Github, pero todavía no los hemos subido. Este paso es fácilmente reversible.

> git commit -m "add greeting message"

Este comando guarda los cambios en el `repositorio local` con un mensaje descriptivo, pero todavía no lo tenemos en Github

> git push -U origin main

Este comando sube los cambios al `repositorio remoto` en Github. Ahora si vamos a nuestro perfil de Github, veremos el archivo `README.md` con el contenido que hemos escrito.

> [!NOTE]
> El comando git push -U origin main es la primera vez que lo hacemos. A partir de esos primeros cambios, podemos hacer `git push` y se subirán los cambios al repositorio remoto.

## Mejora tu perfil de Github

Ahora que ya sabemos cómo crear un perfil de bienvenida, podemos mejorar nuestro perfil añadiendo más información sobre nosotros, nuestros proyectos, colaboraciones, etc.

Para ello podemos ir añadiendo más información en el archivo `README.md` que hemos creado e ir subiendo los cambios.

Para subir los cambios, es importante que lo vayamos haciendo por secciones y **no todo de golpe**. Es importante que los cambios (o features como lo llamamos en desarrollo) sean pequeños y fáciles de revisar.

> [!CAUTION]
> No subas información sensible a tu perfil de Github, como contraseñas, tokens, información personal delicada, etc.

En el siguiente enlace tenéis muchos ejemplos de perfiles de Github que podéis tomar como referencia para mejorar vuestro perfil.

- [Awesome Github Profile READMEs](https://zzetao.github.io/awesome-github-profile/)
