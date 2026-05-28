import { Component } from '@angular/core';

@Component({
  selector: 'app-democomp1',
  standalone: true,
  imports: [],
  templateUrl: './democomp1.component.html',
  styleUrl: './democomp1.component.css'
})
export class Democomp1Component {

  title='demoStandalone';

imgsrc:string='https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg';
height:number=200;
width:number=200; 
}
