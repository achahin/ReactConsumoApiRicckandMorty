# Consumo de API personajes Rick and Morty - End Point. Characters

<p>Permite busqueda y filtro  de personajes por nombre,
<br>  y seleccion "💔" /deselección "❌"de favoritos.

## Tecnologías

<ul>
    <li> React </li>
    <li> Bootstrap </li>
    <li>Hook / Custom Hook</li>
    <li>Consumo de API:https://rickandmortyapi.com/api   -  EndPoint: Characters
    </li>
    
</ul>
<hr/>

## Pendientes por programar:

botton ver mas..

<hr/>

## Link de prueba:

http://personajesapirick.herokuapp.com/

## Instalacion

<p>tener instalado node, npm o yarn.
<br> clonar el repositorio, usar la terminal para navegar a la carepta correspodiente, instalar los modulos  e iniciar react. 
Pasos: </p>

```bash
cd [folder]
```

```bash
npm i
```

```
npm start
```

## subida a Heroku:

<p>

Modificar el archivo package.json, agregando engies, con la version usada de npm y
<br>Ejemplo de modificación: <br>
node:
{
"name": "personajes",
"version": "0.1.0",
"private": true,
"engines": {
"npm": "6.14.11",
"node": "14.15.5"
},...

<br>
En consola
----------
<br>
heroku login (ingresar credenciales )
<br>git init
<br>git add .
<br>git commit -m “initial commit”
<br>heroku create ----( o crear el proyecto desde el browser en la consola..)
<br>heroku git:remote -a personajesapirick
<br>git push heroku master
