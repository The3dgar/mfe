# Microfrontend example

- demo: [container link](https://d25r8cz522r7xf.cloudfront.net/)
- Cuenta con workflows de github para despliegue en AWS
- El proyecto se divide en 2 tipos elementos
  - container: donde se configuran todas las partes del proyecto
  - microfrontends:
    - marketing
    - auth
    - dashboard
 - cada microfrontend se puede ejecutar de forma aislada
    
<br>
<br>

This examples are part from the [Microfrontends with React: A Complete Developer's Guide](https://www.udemy.com/course/microfrontend-course/)

# notes
  10. implement multi-tier navigation (navegacion de varios niveles)

    - consideraciones
      1. Both the container + indivial apps need routing features
      2. es posible que las aplicaciones deban agregar páginas nuevas todo el tiempo
      3. es posible necesitar mostrar dos o más microfrontend al mismo tiempo
      4. queremos usar soluciones de enrutador ya creados
      5. es necesario tener configuraciones de navegacion para las sub-aplicaciones en ambos modos (hosted & insolate)
      6. Si diferentes aplicaciones necesitan comunicar información sobre enrutamiento, debe hacerse de la manera más genérica posible.

    - enrutador
      def.
        history: objeto para obtener y configurar la ruta actual que el usuario esta visitando
        tipos:
          para el container: Browser history, para acceder a la barra de direcciones
          para las aplicaciones: memory history, solo para el enrutado interno de la app

  11. performance considerations

    - si la propiedad publicPath no esta seteada, los scripts son cargados del remoteEntry.js relativo a la url de donde viene el remoteEntry.js, esto afecta a rutas compuestas (como /auth/signin) en el microfrontend, se aplica fix en webpack dev

  13. conclusiones
    1. Analizar los requerimientos de la aplicacion, esto define la arquitectura del proyecto
    2. Siempre que se este construyendo algo, preguntarse, "¿si tengo que cambiar esto en el futuro, tengo que cambiar otra sub-aplicacion?"
    3. Eventualmente, todos olvidaran el framework actual, por lo que tambien hay que pensar en hacer las cosas lo más agnosticas posible a la hora de conectar las partes de tu proyecto
    4. No olvidar scopear el CSS entre todos los proyectos
    5. Siempre revisar lo que se va a pasar a produccion, en una etapa antes, sea construyendo toda la aplicacion en tu local, etc..
