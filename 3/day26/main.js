class Storage {
    constructor(name){
        this.name = name;
        this.storage = localStorage;
    }
    
    set(value){
        return this.storage.setItem(this.name, value);
    }
    get() {
        return this.storage.getItem(this.name);
    }
    clear() {
    return this.storage.removeItem(this.name);
    }
    isEmpty(){
        if (this.storage.name === undefined){return true};
        return false;
    }
};


const names = new Storage('names');


names.set('nikita');

console.log(names.get());
names.clear();
console.log(names);
console.log(names.isEmpty());

