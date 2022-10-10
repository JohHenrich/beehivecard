export class Task {
    header: string;
    type: string;
    amount: number;
    amount2: number;
    unit: string;

    constructor(obj?: any) {

        this.header = obj ? obj.header : '';
        this.type = obj ? obj.type : '';
        this.amount = obj ? obj.amount : '';
        this.amount2 = obj ? obj.amount2 : '';
        this.unit = obj ? obj.unit : '';
    }


    public toJSON() {

        return {
            header: this.header,
            type: this.type,
            amount: this.amount,
            amount2: this.amount2,
            unit: this.unit,
        }
    }

}