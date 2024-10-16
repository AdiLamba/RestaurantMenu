import { Component } from '@angular/core';
import mtExamData from '../assets/data/mtExam.json';
import { Midterm } from '../myClasses/lambaadClass';
import { menuItemsInterface, restaurantInfoInterface } from '../myInterfaces/lambaadInterfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lambaadMTExam';

  //I Initially had created a json entry and imported via interface and shared that way initially since
  //the header/footer asked to share before any instruction was given as to how. I have reversed all of these
  //to do the class method as requested later in the exam.
  //lambaadPersonal: mtExamPersonalInterface = mtExamData.mtPersonal;
  
  lambaadRestaurantInfoJSON: restaurantInfoInterface = mtExamData.restaurantInfo;
  lambaadRestaurantMenuJSON: menuItemsInterface[] = mtExamData.menuItems;

  lambaadPersonal: Midterm = {
    LASTlambaad: "Lamba",
    FIRSTlambaad: "Aditya",
    EMAILlambaad: "lambaad@sheridancollege.ca",
    PROGRAMNAMElambaad: "SDNE",
    LOGINlambaad: "lambaad"
  };

}
