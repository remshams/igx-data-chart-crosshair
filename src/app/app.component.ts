import { Component } from '@angular/core';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
