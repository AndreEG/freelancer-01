# Freelancer

## Objetivo

El reto consiste en replicar el sitio de **Freelancer**, este será el resultado
a lograr:

![Freelancer Website](docs/fullpage.png)

## HTML

* Para crear la estructura se ha tenido en cuenta que la página cuenta con una barra de navegación fija la cual se encuentra en la parte superior, adicional a ello muestra una pagina principal o de inicio seguida por 3 section.

```
		
	//<body>
        <nav>
        </nav>

        <header>
        </header>

        <section>
        </section>

        <section>
        </section>

        <section>
        </section>

        <footer>
        </footer>
    </body>
		
```

* **NAV** la barra de navegacion tiene como contenido principal 2 DIV el primero contiene el enlace al HEADER y el segundo contiene una lista la cual esta enlazada a los SECTION.

* **HEADER** el header consta de in DIV contenedor que tal cual su nombre lo dice contenera todos los elementos de esta parte.

* **SECTION PORTFOLIO** portfolio tambien tiene un contenedor que consta de un H2, un DIV que contiene la estrella y otro DIV que contiene las imagenes.

* **SECTION ABOUT** about tambien tiene un contenedor que consta de un H2, un DIV con la estrella y dos P; fuera del contenedor ubicamos un A.

* **SECTION CONTACT** consta de un H2, un div contenedor de la estrella y un FORM, el cual a su vez contiene varios DIV con los INPUT dentro.

* **FOOTER** tiene un div que contiene otros 3 DIV cada uno con informacion diferente.

## CSS

Los primeros estilos en CSS fueron los generales, por ejemplo limpiar el BODY los UL e incluso los A. 

* **NAV** los primeros estilos a aplicar en la barrra de navegación fueron su position FIXED, su width y height además de el Z-INDEX que indica su importancia en cuanto a capas. El div contenedor de la palabra que servira de enlace al la pantalla principal y el div que contiene el UL con sus LI fueron modificados con display INLINE BLOCK para que puedan ser visualizados todos en una misma linea; y por ultimo se aplico los respectivos efectos cuando el usuario hace HOVER sobre cualquiera de los LI.

* **HEADER** dentro del header basto con aplicar medidas y centrar todo el contenido.

* **SECTION PORTFOLIO** se le dio medida al contenedor general de las imagenes y a los div que las contenian a su vez; el DISPLAY usado para las mismas fue INLINE BLOCK. que nos permite visualizarlas una seguida de la otra; se ha agregado un color de fondo para que al hacer HOVER la imagen pueda mostrarse transparente y muestre el color de fondo.

* **SECTION ABOUT** about necesitaba que los P esten uno al lado del otro por lo cual se aplico FLOAT; se les dio las dimensiones adecuadas y estilos. Para el boton que aparece debajo de los parrafos se modifico el display de A para poder manipular sus medidas y se cambio el color al hacer HOVER.

* **SECTION CONTACT** el contenido de contact se basa en su mayoria en INPUT los cuales estan acompañados de LABEL dentro de un DIV de clase "input-container" que a su vez estaran contenidos en un FORM; a todos ellos se les ha limpiado los estilos por defecto para aplicar la linea que debe tener debajo de cada input y el INPUT de tipo SUBMIT.

* **FOOTER** el footer esta dividido en 3 DIV que han sido flotados, uno de los cuales contiene un juego de iconos cuyo color y background cambian al hacerle HOVER.

## PAGINA WEB RESPONSIVE

Mediante @media se ha posido dar una dimension mas adecuada a los elementos que lo necesitan cuando la medida de la pantalla no es la misma.


