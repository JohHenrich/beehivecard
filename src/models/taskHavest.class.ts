export class TaskHavest {
    combweight: number;
    unit: string;

    constructor(obj?: any) {

        this.combweight = obj ? obj.combweight : '';
        this.unit = obj ? obj.unit : '';
    }

    public toJSON() {
        return {
            combweight: this.combweight,
            unit: this.unit,
        }
    }

}