# Web Development for UX-Engineer

Repositorio de materiales para el curso de introducción al desarrollo web para ux engineers.

Esta es un prueba para un cambio

## Contenido

1. [Sistemas de control de versiones](./1-intro-sistema-control-versiones/)
2. [Maquetando con HTML y CSS](./2-HTML-CSS/)
3. [Introducción a la programación](./3-intro-programacion-js/)

## Instalación

Para instalar el proyecto en tu computadora, sigue estos pasos:

1. Clona el repositorio en tu computadora

```bash
git clone https://github.com/agonsant/web-development-for-ux-engineer.git
```

## Welcome Pack

### Software que usaremos en clase

- Navegador Edge o Chrome
- [NodeJS v20](https://nodejs.org/en)
- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/)
- [Cuenta en Github](https://github.com/)
- [Postman](https://www.postman.com/)

### Extensiones para el VSCode

- [ESLint (Microsoft)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for vscode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [Prettier (Prettier)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Settings para el VSCode

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  }
}
```

### Setup de EditorConfig

Usaremos editor config para mantener la consistencia en el formato a través de diferentes editores.

```md
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
insert_final_newline = true

[*.{js,ts,tsx,jsx,cjs}]
quote_type = single
```
