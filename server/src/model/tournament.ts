export class Tournament{
    private tid: number;
    private name: String;
    
    constructor(tid: number, name: String){
        this.tid = tid;
        this.name = name;
    }

    getTid(): number{
        return this.tid;
    }
    getName(): String{
        return this.name;
    }
}