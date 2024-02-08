import eventSystem from './Eventos.js'

console.error("Load Data")
class Data {
    constructor() {
      console.log("Data Constructor")
      this.list = [
          {
              title:"Pullups",
              video:"eGo4IYlbE5g?si=LYEMPl48zJjM-O21",
              categories:"upperbody, core",
              added:false,
              id:1,
          },
          {
              title:"Squats",
              video:"gsNoPYwWXeM?si=N9_3XUc-MEMWoghq",
              categories:"lowerbody",
              added:false,
              id:2,
          },
          {
              title:"Abs",
              video:"uUKAYkQZXko?si=pe3PZjcccaLJ1TxS",
              categories:"core",
              added:false,
              id:3,
          },
          {
              title:"Biceps",
              video:"RtHkWCTOvC0?si=mrcJ3S4eudPoCjRJ",
              categories:"upperbody",
              added:false,
              id:4,
          }
      ]
      
      this.routine = [];
    }


    addRoutine(item) {
      console.log("addRoutine")
        this.routine.push(item);

        eventSystem.publish("ON_ROUTINE_ADDED", item)
    }

    removeRoutine(item) {
      console.log("removeRoutine")

        const index = this.routine.indexOf(item);
        if (index > -1) {
            this.routine.splice(index, 1);
        }
    }

    
  }
  

const data = new Data();
  
// Export the singleton instance
export {data};