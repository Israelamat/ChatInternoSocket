# Simple Chat Application

## Descripción
Este proyecto consiste en una aplicación de chat simple basada en Node.js y TCP sockets. La aplicación incluye dos archivos: uno para el cliente y otro para el servidor. Permite a los usuarios conectarse al servidor, establecer un nombre de usuario y participar en un chat.

## Estructura del Proyecto

### `client.js`
Contiene el código del cliente que se conecta al servidor. Permite a los usuarios establecer un nombre de usuario, enviar mensajes al chat y desconectarse.

### `server.js`
Contiene el código del servidor que acepta conexiones de clientes, gestiona los nombres de usuario, y facilita la comunicación entre los clientes.

## Uso

### Cliente
1. Ejecutar el cliente: `node client.js host port`
2. Ingresar un nombre de usuario cuando se solicite.
3. Enviar mensajes al chat.
4. Escribir `END` y presionar Enter para desconectarse.

### Servidor
1. Ejecutar el servidor: `node server.js port`
2. Esperar a las conexiones de los clientes.
3. Los clientes se registran y pueden enviar mensajes que se retransmiten a otros clientes.

## Notas de Desarrollo

- El código está estructurado para facilitar la comprensión de la comunicación cliente-servidor.
- El uso del comando `END` permite a los usuarios salir del chat.

## Contribución

Siéntete libre de contribuir con mejoras o nuevas funcionalidades para esta aplicación. Abriremos un espacio para colaboradores y nuevas propuestas.

**Nota:** Asegúrate de proporcionar instrucciones claras sobre cómo ejecutar tanto el cliente como el servidor.

