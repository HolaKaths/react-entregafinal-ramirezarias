
const Promesas = () => {

    console.log("Tarea A");
    console.log("Tarea B");



    setTimeout( ()=> {
        console.log("Tarea 1");
    }, 3000)

    setTimeout( ()=> {
        console.log("Tarea 2");
    }, 1000)

  
    
    const tusPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if(estado) {
                resolve("Promesa cumplida, me regalaron lo que queria");
            } else {
                reject("Promesa rechazada, me dieron carbón");
            }
        })
    }

    console.log(tusPromesas(false));

   

    tusPromesas(false)
        .then((respuesta) => {
            console.log(respuesta);
        })
        .catch((error) => {
            console.log(error)
        })

        //Ahora practicamos con un array de datos: 

        const array = ["Tinki Winki", "Lala", "Po", "Dipsy"]; 

        const solicitarTeletubbies = (estado) => {
            return new Promise((resuelto, rechazado) => {
                if(estado) {
                    resuelto(array);
                } else {
                    rechazado("No hay teletubbies hoy");
                }
            })
        }

        solicitarTeletubbies(true)
            .then(respuesta => {
                console.table(respuesta);
            })
            .catch(error => console.error(error))
            .finally( ()=> console.log("Proceso terminado"))
            
  
  
        return (
    <div>Promesas</div>
  )
}

export default Promesas

