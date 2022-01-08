import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  processFirstName(event: Event) {
    let hie = (<HTMLInputElement> event.target);
    console.log("The name attribute is : ", hie.name);
    console.log("The type attribute is : ", hie.type);
    console.log("The required attribute is : ", hie.required);
    console.log("The value of the control is : " + hie.value);
  }

  processNormalButton(event: Event) {
    // Alternative way of casting:
    let be = event.target as HTMLButtonElement;
    console.log("The button type is : " + be.type);
    console.log("Button name is  : " + be.name);
    console.log("Button text is : " + be.innerText);
  }

  processCheckBox(event: Event) {
    let hie = event.target as HTMLInputElement;
    console.log("The value of the control is : " + hie.value);
    console.log("Is the checkbox checked : " + hie.checked);
  }

}



