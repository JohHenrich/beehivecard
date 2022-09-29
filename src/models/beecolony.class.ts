export class Beecolony{
    name: string;
    birthDate: Number;
    location: string;
    group: string;
    type: string;
    description: string;
    valuation: string;

    constructor(obj?: any){

        this.name = obj? obj.name : '';
        this.birthDate = obj? obj.birthDate : '';
        this.location = obj? obj.location : '';
        this.group = obj? obj.group : '';
        this.type = obj? obj.type : '';
        this.description = obj? obj.description : '';
        this.valuation = obj? obj.valuation : '';
    }

    public toJSON(){
        return{
            name: this.name,
            birthDate: this.birthDate,
            location: this.location,
            group: this.group,
            type: this.type,
            description: this.description,
            valuation: this.valuation,
        }
    }

}