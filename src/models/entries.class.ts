import {Task} from "./task.class";

export class Entries{
    date: Number;
    description: string;
    task: Task[];
    
    constructor(obj?: any){

        this.date = obj? obj.date : '';
        this.description = obj? obj.description : '';
        this.task = obj? obj.task: [];

    }

    public toJSON(){
        return{
            date: this.date,
            description: this.description,
        }
    }

}