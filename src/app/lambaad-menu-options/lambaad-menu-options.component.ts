import { Component, Input } from '@angular/core';
import { menuItemsInterface } from '../../myInterfaces/lambaadInterfaces';

@Component({
  selector: 'app-lambaad-menu-options',
  templateUrl: './lambaad-menu-options.component.html',
  styleUrl: './lambaad-menu-options.component.css'
})
export class LambaadMenuOptionsComponent {

  //@Input() sharedResturantInfo991702428! : menuItemsInterface[];
  @Input() sharedRestaurantMenu991702428! : menuItemsInterface[];

  chosenSection! : menuItemsInterface[];
  section!: string;


  selectSection(val: string) {
    this.chosenSection=[];
    this.sharedRestaurantMenu991702428.forEach((e)=>{
      if(e.section === val){
        this.chosenSection.push(e);
      }
    });
  }
}
