Descripción Completa del Proyecto: "Cambio de Colores"
Este proyecto es una aplicación interactiva web donde los usuarios pueden controlar el cambio de colores de seis contenedores diferentes utilizando dos botones: "Comenzar" y "Terminar". La implementación está dividida en tres tecnologías: HTML, CSS y JavaScript. A continuación, se describe en detalle cómo interactúan estos tres elementos para proporcionar una experiencia visualmente atractiva.
1. Estructura HTML:
El archivo HTML proporciona la estructura básica de la página web, que incluye:
•	Contenedor Principal (#container): Contiene todo el contenido central de la página, incluyendo el título, los contenedores de colores y los botones de control.
•	Contenedores de Colores (#contPrin): Se han creado seis div con la clase contSec que servirán como elementos visuales. Cada uno de estos contenedores cambiará de color cuando el usuario haga clic en los botones.
•	Botones de Control (#botones): Dos botones, "Comenzar" (#b1) y "Terminar" (#b2), permiten a los usuarios iniciar o detener el cambio de colores de los contenedores.
•	Enlace al Script (<script src="scripts/funciones.js"></script>): El archivo JavaScript que maneja la lógica del cambio de colores y la interacción de los botones.
2. Estilos CSS:
El archivo CSS proporciona los estilos visuales y la disposición de los elementos en la página:
•	Estilo Global: Se eliminan márgenes y relleno por defecto para todos los elementos, utilizando * { margin: 0%; padding: 0%; }.
•	Fondo del Cuerpo: Se utiliza un fondo antiquewhite para todo el cuerpo de la página.
•	Contenedor Principal (#container): Está centrado en la página con un fondo aliceblue, bordes redondeados y una sombra de caja para darle profundidad visual. También tiene un display: flex para organizar sus elementos internos verticalmente.
•	Contenedores de Colores (.contSec): Cada contenedor tiene un tamaño de 100px por 100px, un color de fondo predeterminado #d4d4d4, y bordes redondeados.
•	Estilo de los Botones: Los botones "Comenzar" y "Terminar" tienen un diseño estilizado con un fondo #84571d, bordes redondeados, y una sombra de caja. Los botones tienen efectos de transición que cambian el color de fondo y la sombra al pasar el cursor sobre ellos.
3. Lógica JavaScript:
El archivo JavaScript maneja las interacciones de los botones y el cambio de color de cada contenedor. La funcionalidad está organizada en funciones específicas para cada uno de los seis contenedores de colores. A continuación se describen las principales funciones:
•	Cambio de Color de los Contenedores:
o	Cada uno de los contenedores (c1, c2, c3, c4, c5, c6) tiene su propio ciclo de cambio de color. La función cambioColorX cambia el color de cada contenedor entre dos colores específicos de forma alterna, y el intervalo de tiempo se establece con la función setInterval().
o	Ejemplo: Para el contenedor c1, el color alterna entre green y blue. Si el color actual es green, se cambia a blue; de lo contrario, se cambia a green.
•	Iniciar y Detener el Cambio de Colores:
o	Botón "Comenzar" (#b1): Al hacer clic en este botón, se activa la función de cambio de color correspondiente para cada contenedor (usando setInterval), iniciando el ciclo de alternancia de colores.
o	Botón "Terminar" (#b2): Al hacer clic en este botón, se detiene el ciclo de cambio de color utilizando clearInterval(), y el color del contenedor se restablece al color predeterminado (#d4d4d4).
•	Eventos de los Botones:
o	Botón "Comenzar" (#b1): Se asocia con la función de inicio del cambio de color de cada contenedor. El evento de clic en este botón activa el ciclo de colores.
o	Botón "Terminar" (#b2): Se asocia con la función de detener el cambio de color de cada contenedor. El evento de clic en este botón detiene la animación y restablece los colores.
4. Flujo de Interacción:
1.	Inicio: El usuario hace clic en el botón "Comenzar" para activar los cambios de color en los seis contenedores.
2.	Cambio de Color: Los contenedores alternan entre dos colores específicos cada medio segundo.
3.	Detener: Cuando el usuario hace clic en el botón "Terminar", el cambio de color se detiene y los contenedores vuelven a su color original (#d4d4d4).
5. Posibles Mejoras y Expansiones:
•	Colores Personalizados: Los usuarios podrían elegir sus propios colores para la alternancia de los contenedores.
•	Animaciones Adicionales: Se podrían agregar más efectos visuales, como transiciones o animaciones de expansión/reducción de los contenedores durante el cambio de color.
•	Interacción Adicional: Se podrían agregar más botones o controles para modificar la velocidad de cambio de color o para activar/desactivar contenedores específicos.
Conclusión:
Este proyecto es un ejemplo simple y efectivo de cómo combinar HTML, CSS y JavaScript para crear una interfaz web interactiva y atractiva. Permite al usuario experimentar con la manipulación del color en una serie de elementos visuales, proporcionando una buena base para proyectos más complejos.

