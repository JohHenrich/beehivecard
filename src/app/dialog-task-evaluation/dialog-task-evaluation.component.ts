import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { Task } from 'src/models/task.class';
import { EvaluationTask} from 'src/models/evaluationtask.class';


@Component({
  selector: 'app-dialog-task-evaluation',
  templateUrl: './dialog-task-evaluation.component.html',
  styleUrls: ['./dialog-task-evaluation.component.scss']
})
export class DialogTaskEvaluationComponent implements OnInit {
  queenCell: Boolean = false;
  queen: Boolean = false;
  brood: Boolean = false;
  pens: Boolean = false;
  varroaInfestation: Number;
  bootyWeight: Number;
  note: String;


  task = new Task();
  allEntries = []; ///
  entrieDate!: Date;
  loading = false;
  locationId = '';
  beecolonyId = '';
  entrieId = '';
  taskTreatments = [];

  saveValue = new EvaluationTask();
  amount: number = 1.5;
  combs: number;
  unit = 'kg';

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskEvaluationComponent>) { }

  ngOnInit(): void {
  }
  saveTask() {
    this.loading = true;

  

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entrieId)
      .collection('evaluationTask')
      .add(this.saveValue.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }

}
