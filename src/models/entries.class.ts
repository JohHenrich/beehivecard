import { Task } from "./task.class";
import { GeneralTask} from "./generaltask.class";

export class Entries {
    date: Number;
    description: string;
    task: Task[];
    generalTask: GeneralTask[];

    constructor(obj?: any) {

        this.date = obj ? obj.date : '';
        this.description = obj ? obj.description : '';
        this.task = obj ? obj.task : [];
        this.generalTask = obj ? obj.generalTask : [];
    }

    public toJSON() {
        return {
            date: this.date,
            description: this.description,
        }
    }

}