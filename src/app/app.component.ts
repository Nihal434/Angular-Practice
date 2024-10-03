import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularProject';

  obj = {
    "name":"RAm",
  }
  num=90;
  wantsToDisable = false;
  wantsToDisable2 = false;

  m1(){
    console.log("clicked");
  }
  mouseOver(){
    alert("mouse over done");
  }

  myVal = 20;

  //directives
  data:any={
    username:'Ram',
    password:123
  }

  numbers:any=[1,2,3,4]
  students:any=[
    {
      id:1,
      name:"Ram",
      age:20
    },
    {
      id:2,
      name:"Ram1",
      age:20
    },
    {
      id:3,
      name:"Ram2",
      age:20
    }
  ]
  color = 'yellow'
  myColor = 'yellow'
  isHighlight=false;
  changeBackground(){
    this.isHighlight=!this.isHighlight;

  }

  pointer = 0
  up(){
    this.pointer+=1;
  }
  down(){
    if(this.pointer>0){
      this.pointer-=1;
    }
  }

  fontSize='20px';
  increaseFont(){
    this.fontSize = (parseInt(this.fontSize)+2) + 'px';
  }
  decreaseFont(){
    this.fontSize = (parseInt(this.fontSize)-2) + 'px';
  }
}
