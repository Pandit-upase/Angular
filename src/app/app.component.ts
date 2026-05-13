import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Democomp1Component } from './democomp1/democomp1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Democomp1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18app';
}
