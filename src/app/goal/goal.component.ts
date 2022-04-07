import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
  
  
})
export class GoalComponent implements OnInit {
  // goals: Goal[] = [
  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //   {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
  //   {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  //   {id:5,name:'Solve math homework',description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];


  // goals:Goal[] = [
  //   {id:1, name:'Watch finding Nemo'},
  //   {id:2,name:'Buy Cookies'},
  //   {id:3,name:'Get new Phone Case'},
  //   {id:4,name:'Get Dog Food'},
  //   {id:5,name:'Solve math homework'},
  //   {id:6,name:'Plot my world domination plan'},
  // ];
  // goals: Goal[] = [
  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //   {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
  //   {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  //   {id:5,name:'Solve math homework',description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];


  // Let's also change our Goals so we can put the constructor into use.

  goals: Goal[] = [
    
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2100,4,14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2122,7,14)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2234,3,14)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2240,3,14)),
    new Goal(5,'Solve math homework','Damn Math', new Date(2200,3,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2250,3,14)),
  ];
    toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  // Inside the function, we have passed in the isComplete event emitter and index as our arguments then used the splice javascript function to delete the goal at the index.  Keep in mind,  isComplete in this case, will return the value true that we set in the HTML template file of the GoalDetailComponent and index will be the exact index of a goal from the loop in the GoalComponent HTML template file.

  // When we serve our application now, we have the complete button which deletes a goal at a specific index from our goals array when clicked.

  // completeGoal(isComplete, index){
  //   if (isComplete) {
  //     this.goals.splice(index,1);
  //   }
  // }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  // We have created the addNewGoal() function that takes a goal object as an argument. We first need to change the id property of the goal. We get the length of the array of goals and store it in the variable goalLength we then add one to the goalLength and set that as the new id for the goal. We then set the completeDate property of the goal object to a Date Object. Lastly, we push the new goal to our array of goals.

// If our server is still running, we can now add a new goal to the array and it will display on our application.





  constructor() { }

  ngOnInit(): void {
  }

}
