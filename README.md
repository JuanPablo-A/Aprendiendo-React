# APRENDIENDO REACT

> [!IMPORTANT]
> Este es un modulo con fines academicos  

Este es un repositorio enfocado en aprender el framework de *React*, se va a poner en practica todo lo aprendido de *Java Script*.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 	![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Empezamos con el primer proyecto el cual es crear un pagina sencilla de venta de guitarras, **GuitarLA** en la cual solo vamos a colocar la logica del carrito de ventas. Este primer proyecto consta de 3 carpetas.

#### Clonar el repositorio:
```bash
git clone https://github.com/JuanPablo-A/Aprendiendo-React.git
```

Para ejecutar cualquiera de los proyectos, colocate en cualquiera de los proyectos que quieras iniciar:
#### Intalar las dependencias:
```bash
npm install
```

#### Correr el proyecto 
```bash
npm run dev
```

## Proyectos

### 1. GuitarLA:
- `GuitarLA:` En este primer proyecto se encuentra la primera logica de react y usamos los primeros hooks, como lo son ***useEffect***, ***useState***, ***useMemo.***

- `GuitarLA-useCart:` Aca utilizamos toda la logica de nuestro primer proyecto. Esa logica la migramos desde la app principal a nuestro propio hook ***useCart*** 

- `GuitarLA-TS:` En el proyecto lo que se hace es migrar todo el codigo de ***react*** que esta escrito con ***JavaScript*** lo vamos a migrar a ***TypeScript***.

- `GuitarLA-TS-useReducer:` Durante este proyecto migramos el custom hook de useCart a un reducer, para manejar el estado de una forma mas estructurada.

    - **useState:** Se utiliza cuando se necesite almacenar valores que cambian con el tiempo y se quiere que react vuelva a renderizar ese componente cuando ese valor cambie.

        Sintaxis:
        ```ts
        const [count, setCount] = useState(0)
        ```
        
    - **useEffect:** Toma un callback que dependiendo como se declare va a realizar diferentes funciones y **manejar efectos secundarios**, se ejecuta automaticamente cuando el componente esta listo. Se debe usar este hook cuando se necesita ejecutar algo fuera del flujo de renderizado de react, algunos ejemplos incluyen: Acceder a APIs, acceder al local storage o subscripcione de eventos (event listeners).

    > [!NOTE]
    > En React los efectos secundarios, son cualquier cosa que interactue con el mundo externo o que no sea simplemente renderizar una UI 

        Sintaxis:
        ```ts
        useEffect(() => {

            logica de el efecto que se quiere manejar 

        }, [dependencias]);
        ```

    - **useMemo:** Es un hook enfocado al performance, evita que un codigo se ejecute o que un valor cambie si sus dependencias no han cambiado, tambien sirve para memorizar cálculos costosos 

        Sintaxis:
        ```ts
        useMemo(() => logica para calcular un valor, [dependencias])
        ```

    - **useReduccer:** Este hook es una alternativa al uso de useState pero con mas control sobre como y cuando cambia el estado, es ideal para manejar estados que dependen de multiples acciones y cambios relacionados entre si. 

        Sintaxis:
        ```js
        const [state, dispatch] = useReducer(reducer, initialState)
        ```

        - `reducer:` Es una función que recibe el estado actual y una acción, y retorna un nuevo estado.

        - `dispatch:` Es la función que se utiliza para enviar acciones al reducer.


### 2. Calculadora de propinas

Este es el primer proyecto desarrollado desde cero utilizando *TypeScript* y *Tailwind CSS*.

En este proyecto, se implementó un hook personalizado llamado useOrder. Este hook se encarga de gestionar los pedidos, permitiendo añadir nuevos pedidos, eliminar los existentes y limpiar todo el estado de manera eficiente.

La función principal de la calculadora es permitir que, a partir de un pedido, se añada una propina del 10%, 20% o 50%. De esta forma, la calculadora proporciona el monto total a pagar para el usuario.

 - **useCallback:** Es un hook muy similar a useMemo, pero sirve para memorizar funciones. Esto es util porque evita que cada funcion sea llamada despues de cada render 
