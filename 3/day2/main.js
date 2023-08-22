function Logger(){
    this.start = function(){
        this.startTime = new Date();
        this.sum = 0;
        for(let i =0; i<1000000000; i++){
            this.sum+=i;
        }
        console.log(this.sum);

    }

    this.stop = function(){
        this.endTime = new Date();
    }
     
    

    this.result = function(){
        return this.endTime - this.startTime;
    }
}

let logger = new Logger();
logger.start()
logger.stop()
console.log(logger.result()/1000 + "s");
