export class EvaluationTask {

    queenCell: Boolean;
    queen: Boolean;
    brood: Boolean;
    pens: Boolean;
    varroaInfestation: Number;
    bootyWeight: Number;
    note: String;
    

    constructor(obj?: any) {

        this.queenCell = obj ? obj.queenCell : false;
        this.queen = obj ? obj.queen : false;
        this.brood = obj ? obj.brood : false;
        this.pens = obj ? obj.pens : false;
        this.varroaInfestation = obj ? obj.varroaInfestation : '0';
        this.bootyWeight = obj ? obj.bootyWeight : '0';
        this.note = obj ? obj.note : '';

    }

    public toJSON() {
        return {
            queenCell: this.queenCell,
            queen: this.queen,
            brood: this.brood,
            pens: this.pens,
            varroaInfestation: this.varroaInfestation,
            bootyWeight: this.bootyWeight,
            note: this.note,

        }
    }

}