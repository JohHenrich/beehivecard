import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { Task } from 'src/models/task.class';
import { EvaluationTask } from 'src/models/evaluationtask.class';


@Component({
  selector: 'app-dialog-task-evaluation',
  templateUrl: './dialog-task-evaluation.component.html',
  styleUrls: ['./dialog-task-evaluation.component.scss']
})
export class DialogTaskEvaluationComponent implements OnInit {
  task = new Task();
  allEntries = []; ///
  entrieDate!: Date;
  loading = false;
  locationId = '';
  beecolonyId = '';
  entrieId = '';
  evaluationEntries: EvaluationTask;
  evaluationCustomId = '';
  taskTreatments = [];
  


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskEvaluationComponent>) { }

  ngOnInit(): void {
 

  }


  saveTask() {
    this.loading = true;
    if (this.evaluationCustomId) {
      this.firestore
        .collection('locations')
        .doc(this.locationId)
        .collection('beecolonys')
        .doc(this.beecolonyId)
        .collection('entries')
        .doc(this.entrieId)
        .collection('evaluationTask')
        .doc(this.evaluationCustomId)
        .update(this.evaluationEntries.toJSON())
        .then((result: any) => {
          console.log('Adding evalutionTask finished', result);
          this.loading = false;
          this.dialogRef.close();
        });
    }

    else {
      this.firestore
        .collection('locations')
        .doc(this.locationId)
        .collection('beecolonys')
        .doc(this.beecolonyId)
        .collection('entries')
        .doc(this.entrieId)
        .collection('evaluationTask')
        .add(this.evaluationEntries.toJSON())
        .then((result: any) => {
          console.log('Adding evalutionTask finished', result);
          this.loading = false;
          this.dialogRef.close();
        });
    }
  }

}
