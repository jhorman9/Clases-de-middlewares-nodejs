import express from 'express';
import morgan from 'morgan';
import os from 'os';

process.loadEnvFile();
const PORT = process.env.PORT ?? 3000;
const HOST = os.networkInterfaces();
const app = express();
app.use(express.json());

//Ejecuta 2 middlewares en una misma ruta
//  app.get('/', (req, res, next) => {
//    console.log('Soy un middleware');
//    next();
//  }, (req, res, next) => {
//    console.log('Soy el middleware 2');
//    next();
//  }, (req, res) => {
//    res.json({ message: 'Bienvenido a mi servidor' })
//  });

// --------------------------------------------------------------------------------------------------------------

// De esta manera genera un error, diciendo que no se puede enviar header despues de que se enviaron al cliente
// Y se ejecuta en ese caso Respuesta 1 en la peticion del cliente.

// app.get('/', (req, res, next) => {
//   console.log('Soy un middleware');
//   next();
// }, (req, res, next) => {
//   res.json({ message: 'Respuesta 1' })
//   console.log('Soy el middleware 2');
//   next();
// }, (req, res) => {
//   res.json({ message: 'Bienvenido a mi servidor' })
// });

// --------------------------------------------------------------------------------------------------------------

//Ahora, vamos a crear los middleware en funciones y lo pasamos a la peticion requerida.

// const middleware1 = (req, res, next) => {
//   console.log('Soy un middleware');
//   next();
// };

// const middleware2 = (req, res, next) => {
//   console.log('Soy el middleware 2');
//   next();
// };

// const middleware3 = (req, res) => {
//   res.json({ message: 'Bienvenido al servidor' })
// }

// app.get('/', middleware1, middleware2, middleware3);

/* 
  Crear un middleware eque me de informacion de la peticion, 
  saber el metodo que se usa y la ruta a la que quiere acceder y 
  la muestre por consola.
*/
app.use(morgan("tiny"));
// const logger = (req, res, next) => {
//   const { method, url } = req;
//   console.log(`Se realiza una peticion del Metodo: ${method} y Ruta: ${url}`);
//   next()
// };
// app.use(logger);

app.get('/', (req, res) => {
  res.json({ message: 'Soy un get' });
});

app.post('/', (req, res) => {
  res.json({ message: 'Soy un get' });
});

app.put('/', (req, res) => {
  res.json({ message: 'Soy un get' });
});

app.delete('/', (req, res) => {
  res.json({ message: 'Soy un get' });
});

app.listen(PORT, () => {
    const { address } = HOST['Loopback Pseudo-Interface 1'][1];
    console.log(`Escuchando en el servidor http://${address}:${PORT}`);
});

/* 
  
  Middleware a nivel de aplicación

  ¿Porqué se llama middleware a nivel de aplicación?
    Respuesta= Porque se ejecutan directamente en la instancia APP de express.
    ejemplo: 
    const app = express();
    app.use(logger);
 
  Middleware a nivel de rutas

  ¿Porqué se llama middleware a nivel de rutas?
    Respuesta=  

  Middleware de terceros
    Respuesta= Son middleware que otros desarrolladores crearon como por ejemplo morgan.

  Middleware incorporados
    Respuesta= Son middleware que vienen con expressJs
    Ejemplo= 

  Middleware de error

*/