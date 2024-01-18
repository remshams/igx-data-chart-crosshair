import { Component } from '@angular/core';

import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
