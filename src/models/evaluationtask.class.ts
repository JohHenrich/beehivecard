export class EvaluationTask {

    queenCell: Boolean;
    queen: Boolean;
    brood: Boolean;
    pens: Boolean;
    varroaInfestation: Number;
    bootyWeight: Number;
    note: String;
    

    constructor(obj?: any) {

        this.queenCell = obj ? obj.queenCell : '0';
        this.queen = obj ? obj.queen : '0';
        this.brood = obj ? obj.brood : '0';
        this.pens = obj ? obj.pens : '0';
        this.varroaInfestation = obj ? obj.varroaInfestation : '0';
        this.bootyWeight = obj ? obj.bootyWeight : '0';
        this.note = obj ? obj.note : '0';

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