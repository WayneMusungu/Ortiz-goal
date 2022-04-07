import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() goal: Goal | undefined;
  @Output() isComplete = new EventEmitter<boolean>();

  // We can replace the complete button in the goal-detail component with a delete button that deletes a goal once we decide we want to get rid of it. Let's add this button to the goal-detail template. -->

  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }


  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
