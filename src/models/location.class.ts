import {Beecolony} from "./beecolony.class";

export class Locations{
    name: string;
    description: string;
    beecolonys: Beecolony[];


    constructor(obj?: any){

        this.name = obj? obj.name : '';
        this.description = obj? obj.description : '';
        this.beecolonys = obj? obj.beecolonys : [];

    }

    public toJSON(){
        return{
            name: this.name,
            description: this.description,
            //beecolonys: this.beecolonys,
        }
    }

}