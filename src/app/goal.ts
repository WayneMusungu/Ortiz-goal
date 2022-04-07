// export class Goal {
//     id:number | undefined;
//     name:string | undefined;
//     description:string | undefined;
    

// }

// We have changed how we create the Goal blueprint class by using a constructor function. We have created a property showDescription and assigned it to the data type boolean. Inside the constructor function, we have passed the goal properties we had before, as arguments of the constructor and declared that the showDescription property should be initialized as false so that the description is not displayed.
// Why use a constructor function? A constructor function enables us to define the initialization logic for creating an object.


// In Angular a pipe takes in data and transforms it into the desired output so we will add a completeDate property in our constructor for the goal blueprint abd set its datatype to Goal


export class Goal {
  public showDescription: boolean;
  constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    this.showDescription=false;
  }
}

