import eventSystem from './Eventos.js'
import {data} from './Data.js'
//import {eventSystem, Events} from './EventSystem.js'
class Controller {
    constructor(){
        console.log("Controller aqui")
        this.data = data

        
        eventSystem.subscribe("ON_ROUTINE_ADDED", (routine) => {
            console.log("routine added")
        })
        
    }
}

export default Controller