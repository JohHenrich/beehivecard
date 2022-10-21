export class  GeneralTask {
    
    droneframe: Number;
    broodframes: Number;
    emptyframe: Number;
    feedframe: Number;
    middlewallframe: Number;
    honeyroom: Number;
    framehive: Number;
    beeescape: Number;
    barricade: Number;
    diaper: Number;


    constructor(obj?: any) {

        this.droneframe = obj ? obj.droneframe : '0';
        this.broodframes = obj ? obj.broodframes : '0';
        this.emptyframe = obj ? obj.emptyframe : '0';
        this.feedframe = obj ? obj.feedframe : '0';
        this.middlewallframe = obj ? obj.middlewallframe : '0';
        this.honeyroom = obj ? obj.honeyroom : '0';
        this.framehive = obj ? obj.framehive : '0';
        this.beeescape = obj ? obj.beeescape : '0';
        this.barricade = obj ? obj.barricade : '0';
        this.diaper = obj ? obj.diaper : '0';
        
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