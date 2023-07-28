const STATUSES = {
    TODO: 'To do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
}
const ERRORS = {
    NOT_TASK_YET: '\tThis list has not this task',
    NOT_THIS_STATUS: '\tThere is not tasks with this status',
    WRONG_STATUS: '\tWrong status: only To do, In progress, Done',
    TASK_CANNOT_BE_ADDED: 'Task can not be added or chacnged. ',
}

const toDo = {
    list: {
        'finish To Do task': STATUSES.TODO,
        'finish To Do task1': STATUSES.DONE,
        'finish To Do task2': STATUSES.DONE,
        'finish To Do task3': STATUSES.TODO,
    },
    checkIsStatusInStatuses(status){
        for(let key in this.list){
            if(status == this.list[key]){
                return true;
            }
        }
        console.log(ERRORS.TASK_CANNOT_BE_ADDED + ERRORS.WRONG_STATUS)
        return false;
    },

    checkIsTaskInList(task){
        if (task in this.list){
            return true;
        }
        console.log(task + ' ' + ERRORS.NOT_TASK_YET);
        return false;
    },

    changeStatus(task, status){
        if (this.checkIsTaskInList(task) && this.checkIsStatusInStatuses(status)){
            this.list[task] = status;
        }
    },

    addTask(task, status){
        if (this.checkIsStatusInStatuses(status)){
            this.list[task] = status;
        }        
    },

    deleteTask(task){
        if (this.checkIsTaskInList(task)){
            delete this.list[task];
        }
    },
    showOneStatusTasks(status){
        let flag = false;
        console.log(status + ':')
        for (let key in this.list){
            if (this.list[key] == status){
                console.log('\t' + key)
                flag = true
            }
        }
        if (flag == false){
            console.log(ERRORS.NOT_THIS_STATUS)
        }
    },
    showList(){
        this.showOneStatusTasks(STATUSES.TODO);
        this.showOneStatusTasks(STATUSES.IN_PROGRESS);
        this.showOneStatusTasks(STATUSES.DONE);
    },
},
//example of run code To Do
// notes = toDo;
// notes.addTask('sleep', 'сделать');
// notes.addTask('sleep2', 'To do');
// notes.changeStatus('sleep', 'In Progress');
// notes.changeStatus('sleep2', 'а процессе');
// notes.changeStatus('sleep2', 'Done');
// notes.showList();
// notes.deleteTask('finish To Do task')
// notes.deleteTask('finish To Do task0')
// notes.deleteTask('finish To Do task1')
// notes.deleteTask('sleep')
// notes.showList()