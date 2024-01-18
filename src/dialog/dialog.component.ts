import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxDialogModule } from 'igniteui-angular';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-dialog',
  styleUrls: ['./dialog.component.css'],
  templateUrl: './dialog.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IgxDialogModule, ChartComponent],
})
export class DialogComponent {}
