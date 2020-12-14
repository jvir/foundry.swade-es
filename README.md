# swade-es

Spanish, Catalonian and Galician languages for the Savage Worlds Adventure Edition system on Foundry VTT.

Idiomas Español, Catalán y Gallego para el sistema Savage Worlds en Foundry VTT.
Idiomas Català, Espanyol i Gallego per al sistema Savage Worlds a Foundry VTT.
Idiomas Galego, Español e Catalán para o sistema Savage Worlds en Foundry VTT.


 - Traducción de campos básicos.
 - Traducción del compendio de Habilidades (completa, con sistema de enlace a PDF).
 - Traducción del compendio de Ventajas (completa, con sistema de enlace a PDF)).
 - Traducción del compendio de Desventajas (completa, con sistema de enlace a PDF)).
 - Traducción del compendio del Mazo de acción (completa).
 - Autocompletado de habiidades iniciales en la creación de personaje.
 - Enlaces a PDF (no se incluye ningun PDF ni material sujeto de derechos de autor).


## Enlaces a PDF
En la configuración del modulo en un mundo determinado se puede indicar una carpeta en la que podemos poner PDF. Estos PDF puende ser luego enlazados.

Para enlazar un pdf hemos usar un campo en el que podamos escribir html (usualmente los campos de descripción o biografía), el enlace debe ser algo como lo siguiente:

```html
<p class="swade-book fas fa-book" data-book="swade" data-page-start="46" data-page-end="47">
    &nbspc;Ver página 44
</p>
```
Donde:
 - La clase debe ser "swade-book".
 - "data-book" debe ser el nombre del archivo sin incluir la extensión (.pdf) y a ser posible usando caracteres a-z.
 - "data-page-start" es la página inicial que queremos que se muestre del pdf (página del pdf que puede ser distinta a la numeración del libro).
 - "data-page-end" es la página final que queremos mostrar. Debe existir y en caso de querer mostrar una sola página debe ser igual a "data-page-start".
 - En el ejemplo, se han añadido las clases de FontAwesome adecuadas para mostrar el icono de un libro solo a modo de ejemplo.

 Para usar los enlaces proporcionados por el modulo el libro debe estar en la carpeta que indiquemos en la conficuración y tener de nombre "swade.pdf"
 


