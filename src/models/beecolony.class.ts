import {Entries} from "./entries.class";

export class Beecolony{
    name: string;
    birthDate: Number;
    position: string;
    group: string;
    type: string;
    description: string;
    valuation: string;
    entries: Entries[];

    constructor(obj?: any){

        this.name = obj? obj.name : '';
        this.birthDate = obj? obj.birthDate : '';
        this.position = obj? obj.position : '';
        this.group = obj? obj.group : '';
        this.type = obj? obj.type : '';
        this.description = obj? obj.description : '';
        this.valuation = obj? obj.valuation : '';
        this.entries = obj? obj.entries : [];

    }

    public toJSON(){
        return{
            name: this.name,
            birthDate: this.birthDate,
            position: this.position,
            group: this.group,
            type: this.type,
            description: this.description,
            valuation: this.valuation,
            //entries: this.entries,
        }
    }

}