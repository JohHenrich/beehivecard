import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { EvaluationTask } from 'src/models/evaluationtask.class';
import { DataService } from 'src/services/data.servie';

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
 

  evaluationEntries: EvaluationTask = new EvaluationTask();
  evaluationCustomId = '';
  taskTreatments = [];
  


  constructor(public data: DataService, private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskEvaluationComponent>) { }

  ngOnInit(): void {
 

  }


  saveTask() {
    this.loading = true;
    if (this.evaluationCustomId) {
      this.firestore
        .collection('locations')
        .doc(this.data.currentLocationId)
        .collection('beecolonys')
        .doc(this.data.currentBecoloneyId)
        .collection('entries')
        .doc(this.data.currentEntrieId)
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
        .doc(this.data.currentLocationId)
        .collection('beecolonys')
        .doc(this.data.currentBecoloneyId)
        .collection('entries')
        .doc(this.data.currentEntrieId)
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
