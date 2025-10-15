# dmc-devops

Repositorio del sitio de documentación técnica de DMC DevOps.
La documentación se construye con VitePress y se despliega automáticamente a GitHub Pages mediante GitHub Actions.

# Arquitectura del proyecto

Frontend de documentación: VitePress (Markdown + Vue)
CI/CD: GitHub Actions
Hosting: GitHub Pages (branch gh-pages)
Dominio del sitio: https://oferrer121990.github.io/dmc-devops/
Objetivo: ofrecer documentación clara, versionable y con despliegue automatizado en cada push a main.

# Desarrollo local

Requisitos: Node 20+

## instalar dependencias
npm ci

### entorno de desarrollo (recarga en caliente)
npm run docs:dev

## abre http://localhost:5173

## build de producción
npm run docs:build

## previsualización del build
npm run docs:preview