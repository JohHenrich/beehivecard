export class TaskTreatment {
    medicine: string;
    unit: string;

    constructor(obj?: any) {

        this.medicine = obj ? obj.medicine : '';
        this.unit = obj ? obj.unit : '';
    }

    public toJSON() {
        return {
            medicine: this.medicine,
            unit: this.unit,
        }
    }

}