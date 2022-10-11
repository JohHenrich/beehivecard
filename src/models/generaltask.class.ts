export class  GeneralTask {
    
    droneframe: Number;
    broodframes: string;
    emptyframe: Number;
    feedframe: string;
    middlewallframe: Number;
    honeyroom: string;
    framehive: Number;
    beeescape: string;
    barricade: Number;
    diaper: string;


    constructor(obj?: any) {

        this.droneframe = obj ? obj.droneframe : '';
        this.broodframes = obj ? obj.broodframes : '';
        this.emptyframe = obj ? obj.emptyframe : '';
        this.feedframe = obj ? obj.feedframe : '';
        this.middlewallframe = obj ? obj.middlewallframe : '';
        this.honeyroom = obj ? obj.honeyroom : '';
        this.framehive = obj ? obj.framehive : '';
        this.beeescape = obj ? obj.beeescape : '';
        this.barricade = obj ? obj.barricade : '';
        this.diaper = obj ? obj.diaper : '';
        
    }

    public toJSON() {
        return {
            droneframe: this.droneframe,
            broodframes: this.broodframes,
            emptyframe: this.emptyframe,
            feedframe: this.feedframe,
            middlewallframe: this.middlewallframe,
            honeyroom: this.honeyroom,
            framehive: this.framehive,
            beeescape: this.beeescape,
            barricade: this.barricade,
            diaper: this.diaper,
        }
    }

}