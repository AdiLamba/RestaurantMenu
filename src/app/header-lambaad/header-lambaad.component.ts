import { Component, Input } from '@angular/core';
import { Midterm } from '../../myClasses/lambaadClass';

@Component({
  selector: 'app-header-lambaad',
  templateUrl: './header-lambaad.component.html',
  styleUrl: './header-lambaad.component.css'
})
export class HeaderLambaadComponent {

  @Input() lambaadMyData!: Midterm;

}
