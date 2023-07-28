const STATUSES = {
    TODO: 'To do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
}
const PRIOTITIES = {
    HIGH: "high",
    LOW: "low",
}
const ERRORS = {
    NOT_TASK_YET: '\tThis list has not this task',
    NOT_THIS_STATUS: '\tThere is not tasks with this status',
    SOMETHING_WRONG: '\tTask, status or priority with ERROR!',
    TASK_CANNOT_BE_ADDED: 'Task can not be added or chacnged. ',
    WRONG_STAUTS: '\tStatus is wrong!',
    
}


const toDo = {
    list: [ 
        {name: 'create a post', status: 'In progress', priority: 'low'}, 
      {name: 'test', status: 'Done', priority: 'high'} 
    ],

    makeObject(task = "", status = STATUSES.TODO, priority = PRIOTITIES.HIGH){
        object = {
            name: task,
            status: status,
            priority: priority,
        }
        return object;
    },

    checkEmptyTask(task){
        if(task != ""){
            return true;
        }
        return false;
        
    },

    checkRightStatus(status){
        for (const iterator in STATUSES) {
            if (STATUSES[iterator] == status){
                return true;
            }
        }
        console.log(ERRORS.WRONG_STAUTS)
        return false;
    },

    checkRightPriority(priority){
        for (const iterator in PRIOTITIES) {
            if (PRIOTITIES[iterator] == priority){
                return true;
            }
        }
        return false;
    },

    checkRightForm(task, status, priority){
        if(this.checkEmptyTask(task) && this.checkRightStatus(status) && this.checkRightPriority(priority)){
            return true;
        }
        return false;
    },

    addTask(task, status = STATUSES.TODO, priority = PRIOTITIES.HIGH){
        if (this.checkRightForm(status, status, priority)){
            this.list.push(this.makeObject(task, status, priority));
            return;
        }
        else console.log(ERRORS.SOMETHING_WRONG);        
    },

    changeStatus(task, status){
        if(this.checkRightStatus(status)){
            index = this.list.findIndex(obj => obj.name == task);
            if(index == -1){
                console.log(ERRORS.NOT_TASK_YET);
                return false;
            }
            this.list[index].status = status;
        }
    },

    changePriority(task, priority){
        if(this.checkRightPriority(priority)){
            index = this.list.findIndex(obj => obj.name == task);
            if(index == -1){
                console.log(ERRORS.NOT_TASK_YET);
                return false;
            }
            this.list[index].priority = priority;
        }
    },

    deleteTask(task){
        index = this.list.findIndex(obj => obj.name == task);
            if(index == -1){
                console.log(ERRORS.NOT_TASK_YET);
                return false;
            }
            this.list.splice(index, 1);
    },

    showList(){
        this.list.forEach(element => {
            console.log(`${element.name} : ${element.status}, priority is ${element.priority}`)
        })
    }
}

spisok = toDo;
spisok.addTask("sleep", "Done", "low");
spisok.changePriority("sleep", "high");
spisok.deleteTask("tst");
spisok.showList();
console.log(spisok.list);



