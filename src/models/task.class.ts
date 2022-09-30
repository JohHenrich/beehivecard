export class Task{
    header: string;
    description: string;
    amount: number;
    unit: string;
    
    constructor(obj?: any){

        this.header = obj? obj.header : '';
        this.description = obj? obj.description : '';
        this.amount = obj? obj.amount : '';
        this.unit = obj? obj.unit : '';
    }


    public toJSON(){
        
        return{
            header: this.header,
            description: this.description,
            amount: this.amount,
            unit: this.unit,
        }
    }

}