# swade-es

Spanish language for the Savage Worlds Adventure Edition system on Foundry VTT.

Lenguaje español (España) para el sistema Savage Worlds Edición Aventura en Foundry VTT

 - Traducción de campos básicos.
 - Traducción del compendio de Habilidades (completa, con sistema de enlace a PDF).
 - Traducción del compendio de Ventajas (inicial).
 - Traducción del compendio de Desventajas (inicial).
 - Traducción del compendio de Poderes (inicial).
 - Traducción del compendio de Escudos (inicial).
 - Traducción del compendio de Armaduras (inicial).
 - Traducción del compendio de Armas (inicial).
 - Traducción del compendio de Equipo (inicial).
 - Traducción del compendio del Mazo de acción (completa).
 - Autocompletado de habiidades iniciales en la creación de personaje.
 - BETA: enlaces a PDF (no se incluye ningun PDF ni material sujeto de derechos de autor).


## WIP:
 - Añadir ams datos a los compendios.


## BETA: Enlaces a PDF
En la configuración del modulo en un mundo determinado se puede indicar una carpeta en la que podemos poner PDF. Estos PDF puende ser luego enlazados.

Para enlazar un pdf hemos usar un campo en el que podamos escribir html (usualmente los campos de descripción o biografía), el enlace debe ser algo como lo siguiente:

```html
<span class="swade-book" data-book="swade" data-page-start="46" data-page-end="47">
    <i class="fas fa-book"></i>
</span>
```
Donde:
 - La clase debe ser "swade-book".
 - "data-book" debe ser el nombre del archivo sin incluir la extensión (.pdf) y a ser posible usando caracteres a-z.
 - "data-page-start" es la página inicial que queremos que se muestre del pdf (página del pdf que puede ser distinta a la numeración del libro).
 - "data-page-end" es la página final que queremos mostrar. Debe existir y en caso de querer mostrar una sola página debe ser igual a "data-page-start".
 - En el ejemplo, dentro del elemento span e puesto simplemente un icono de libro de font-awesome, puede ir cualquier otra cosa.

 Para usar los enlaces proporcionados por el modulo el libro debe estar en la carpeta que indiquemos en la conficuración y tener de nombre "swade.pdf"
 


