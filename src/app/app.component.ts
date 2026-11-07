import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { T7Component } from './t7/t7.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,T7Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task7';
}
