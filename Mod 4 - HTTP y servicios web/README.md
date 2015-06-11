# Módulo 4

## Ejercicio P2P único (obligatorio)

Construir una aplicaciónn de servidor con express que tenga 2 páginas diferentes, enlazadas entre sí con el siguiente comportamiento:

Página 1: Será la página de entrada de la aplicación y tendrá un título y 2 preguntas:
¿Quién descubrió América? y ¿Capital de Portugal?. Cada pregunta tendrá un formulario asociado, con un cajetín de entrada y un botón de envío, que permitirá enviar la respuesta a esa pregunta en particular (es decir habrá 2 formularios en la página). Cada formulario tendrá además un parámetro oculto que envíe un valor diferente que indique al servidor a que pregunta está contestando el cliente;

La página 1 estará asociada a la transacción HTTP: GET /preguntas

Página 2: Será la página que muestre la respuesta a la que está contestando el cliente , e indicará si ha contestado correctamente o no con una frase correctamente construida. En caso de contestar incorrectamente, le indicará además cual es la respuesta correcta. La página incluirá además un enlace asociado al texto Volver a la página inicial

La página 2 estará asociada a la transacción HTTP: GET /respuesta

## Resolución

Archivo [mod_04_p2p_01_ddialar](https://github.com/ddialar/NodeJS-MiriadaX-Servicios-en-la-nube/tree/master/Mod%204%20-%20HTTP%20y%20servicios%20web/mod_04_p2p_01_ddialar)

Para poder arrancar el servidor, una vez descargado el código fuente, ejecutar la siguiente sentencia:

```sh
$ node server.js
```
