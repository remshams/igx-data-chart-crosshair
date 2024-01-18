import { Component } from '@angular/core';

import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
