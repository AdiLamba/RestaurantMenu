import { Component, Input } from '@angular/core';
import { Midterm } from '../../myClasses/lambaadClass';

@Component({
  selector: 'app-footer-lambaad',
  templateUrl: './footer-lambaad.component.html',
  styleUrl: './footer-lambaad.component.css'
})
export class FooterLambaadComponent {

  @Input() lambaadMyData!: Midterm;

}
