export class TaskFeed {
    food: string;
    unit: string;

    constructor(obj?: any) {

        this.food = obj ? obj.food : '';
        this.unit = obj ? obj.unit : '';
    }

    public toJSON() {
        return {
            food: this.food,
            unit: this.unit,
        }
    }

}