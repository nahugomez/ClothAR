## Initial Structure
- Estructura creada con CRA (Create-React-APP)
- Se instaló TailwindCSS con sus respectivas dependencias (PostCSS & Autoprefixer)
- Se instaló Prettier, y los plugins de Prettier para el manejo de TailwindCSS
- Se instaló Iconify
- Se borraron los archivos innecesarios para el proyecto
- Se inicializó Tailwind (Creación de archivo tailwind.config.json y se incluyó en App.css)
- Se creo la configuración de Prettier (Creación de archivo .prettierrc.json)
- Se creó el archivo .editorconfig

## NavBar Created
- Se creó un componente *NavBar* adaptable a dispositivos
- Se incluyeron dentro los componentes *CartWidget* y *UserWidget*

## ItemListContainer Created
- Se creó el componente *ItemListContainer* que se encarga de obtener los items
- Se creó el componente *ItemList* encargado de renderizar cada uno de los items
- Se creó el componente *Item* renderizado por ItemList
- Se realizaron arreglos al NavBar inicial
- Favicon agregado
- Se instaló React-Spinners

## ItemDetailContainer Created
- Se creó el componente *ItemDetailContainer* que se encarga de hacer un fetch() del item
- Se creó el componente *ItemDetail* que se encarga de renderizar el item
- Se creó el componente *ItemCount* dentro de ItemDetail

## React-Router-Dom Integrated
- Se integró react-router-dom
- Se realizaron cambios en la UI

## ItemCount integrated into ItemDetail
- Se integró ItemCount dentro de ItemDetail

## Context Integrated
- Creación de *CustomProvider*, componente que crea y provee el contexto a los demás componentes del estado de compra del Usuario.
