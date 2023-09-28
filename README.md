# BMXStore eCommerce

Este es un proyecto de eCommerce desarrollado con React.js y Axios para gestionar las peticiones HTTP. Esta plataforma te permite explorar y comprar una amplia gama de productos relacionados con el BMX, desde bicicletas hasta accesorios y ropa.

## Funcionalidades

- **Exploración de Productos**: Los usuarios pueden navegar por una amplia gama de productos de BMX, ver detalles y precios.

- **Carrito de Compras**: Los usuarios pueden agregar productos al carrito de compras, ver el resumen de la compra y proceder al proceso de pago.

- **Gestión de Usuario**: Los usuarios pueden registrarse, iniciar sesión y gestionar su perfil.

- **Proceso de Pago**: (Pendiente) Los usuarios pueden realizar pagos seguros para comprar productos utilizando métodos de pago populares.

- **Historial de Compras**: (Pendiente) Los usuarios pueden ver su historial de compras y el estado de sus pedidos.

## Requisitos

Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde https://nodejs.org/.

## Instalación

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

``` bash
git clone https://github.com/tuusuario/ecommerce-bmx.git
```

2. Navega al directorio del proyecto:


``` bash
cd ecommerce-bmx
```

3. Instala las dependencias del proyecto utilizando npm o yarn:

``` bash
npm install
```

o

``` bash
yarn install
```

4. Crea un archivo .env en el directorio raíz del proyecto y configura la URL de la API de backend (si es necesario):

``` bash
REACT_APP_API_URL=https://api-ejemplo.com/bmx
```

5. Asegúrate de reemplazar https://api-ejemplo.com/bmx con la URL real de tu API de backend.

### Uso

Una vez que hayas configurado el proyecto, puedes iniciar la aplicación utilizando el siguiente comando:

``` bash
npm start
```

Esto iniciará el servidor de desarrollo y la aplicación estará disponible en http://localhost:3000.


## Estructura del Proyecto
La estructura del proyecto está organizada de la siguiente manera:

components: Componentes reutilizables de React.
services: Configuración y funciones para realizar peticiones HTTP utilizando Axios.