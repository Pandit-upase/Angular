import { DatePipe, DecimalPipe, PercentPipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipesc',
  standalone: true,
  imports: [DatePipe,PercentPipe,DecimalPipe,SlicePipe],
  templateUrl: './pipesc.component.html',
  styleUrl: './pipesc.component.css'
})
export class PipescComponent {
today: Date=new Date();
num=0.75;
myName: string = 'Jonathan Doe';
}
