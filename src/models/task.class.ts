export class Task {
    header: string;
    type: string;
    amount: number;
    unit: string;

    constructor(obj?: any) {

        this.header = obj ? obj.header : '';
        this.type = obj ? obj.type : '';
        this.amount = obj ? obj.amount : '';
        this.unit = obj ? obj.unit : '';
    }


    public toJSON() {

        return {
            header: this.header,
            type: this.type,
            amount: this.amount,
            unit: this.unit,
        }
    }

}