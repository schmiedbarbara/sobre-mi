# Mi Calculadora 🔮

_Este proyecto fue creado en el marco del curso Paginas Web con Componentes Dinamicos, guiado por el FAMAF; 
Este sitio web data de una sencilla calculadora creada con el fin de poder realizar operaciones simples de suma, resta, multiplicacion y division. ¡Vamos a recorrerla juntos! 🚀_

## Comenzando 🍄

_Las condiciones presentadas a continuación te permitirán obtener una experiencia completa del sitio._

### Nota que 📋

_Acá van algunas cosas a tener en cuenta antes de comenzar a realizar tus operaciones!_


- Al comenzar, se requiere que selecciones una operación para poder brindarte un resultado. Nota que, si completas las casillas numéricas sin elegir una operación, automáticamente se te va a indicar como requisito.
En la misma línea, si eligís una operación y no indicas los valores numéricos, no se podrá continuar con el resultado, recordá solamente indicar valores numéricos, de lo contrario no funcionará!

- También, consideré la posibilidad de que quieras probar la misma cuenta pero con distinta operación, por lo que se puede volver a seleccionar una opción para generar nuevos resultados! 📟


**IMPORTANTE**❗ 
- No podes dividir por 0! Si colocas un cero en el segundo operando, se te va a indicar que no es posible proseguir, sin embargo, si colocas el cero en el primer operando, es posible que se te reitere que la operación no es posible por lo extenso de su resultado, (en ninguno te muestra el resultado) *¿¡no me creés?! Probalo!*

- Por último, es mi deber anticiparte que no se podrán mostrar los resultados muy extensos que generen tus cuentas, dado lo pequeño de nuestra interfaz! Trabajaré para mejorarlo en un futuro! 🖼️

### Algunos fallos 🔧

_Hay ciertos errores que no pude solucionar porque aún así presentaban errores incluso más notorios 😖_

```
Primer fallo:
```


Tuve algunos problemas para ubicar correctamente los botones en el form, si coloco solo uno de ellos, la página responde bien, sin embargo, al poner ambos botones (reset) y (calcular), la página era capaz de dar un resultado, sin embargo lo borraba al instante, reiniciando la página con los valores por completo, haciendo que sea imposible dar un buen funcionamiento. 


```
Otro fallo:
```

Cuando uno genera un cálculo con un resultado demasiado pequeño, lo que sucede es que se empieza a contar como "pequeño" a partir del número 0, en un principio, había logrado que el resultado deje de mostrarse al ser menor que cero, sin embargo al poco tiempo dejó de funcionar y mostraba números decimales demasiado extensos, dejarlo en "resultado<1" fue lo mejor que pude solucionarlo. 

Por otro lado, las divisiones que den resultado numeros decimales, se redondean para ser mostrados, y conservar la estética de la página. 
```
Último fallo registrado:
```
Noté que, al intentar dividir un número por cero, no solo aparece un mensaje pidiendo que se cambie ese valor, sino que parece ejecutarse el cálculo, por lo que el mensaje de que "no puede mostrarse un número tan pequeño" vuelve a aparecer tras el primer mensaje, esto sucedió cuando cambié los ---condicionales--- por un ---switch case--- para el menú desplegable.

**Mi recomendación es tocar los botones y no el enter del dispositivo en el cual se utiliza el sitio web, para que el contenido no se borre antes de ser mostrado en la interfaz** 🙃

## Estilo 👾
_Espero que el visual de la página sea de agrado, y a pesar de sus limitaciones funcione correctamente como se espera! 💟_


## Construido con 💯

_A continuación, me gustaría darle créditos a la página a las que recurrí para el proyecto_

+ [Form Attributes](https://www.w3schools.com/html/html_form_attributes_form.asp) - Para HTML
+ [CSS Content](https://www.w3schools.com/css/default.asp) - Para CSS
+ [JS Validation](https://www.w3schools.com/js/js_validation.asp) - JS con HTML

## Mas contenido 📖
Si te gustó este proyecto, podes encontrar otros en mi GitHub! [schmiedbarbara](https://github.com/schmiedbarbara)

## Agradecimientos 🎁
_A mis profes de Argentina Programa 4.0!_


---
🍙 con ❤️ por [schmiedbarbara](https://github.com/schmiedbarbara) 🤭