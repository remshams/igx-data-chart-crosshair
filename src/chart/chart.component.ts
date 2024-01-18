import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {
  IgxDataChartCoreModule,
  IgxDataChartCategoryModule,
  IgxLegendModule,
  IgxDataChartInteractivityModule,
  IgxDataChartAnnotationModule,
  IgxFinalValueLayerModule,
  IgxCrosshairLayerModule,
  IgxDataToolTipLayerModule,
  IgxItemToolTipLayerModule,
} from 'igniteui-angular-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxFinalValueLayerModule,
    IgxCrosshairLayerModule,
    IgxDataToolTipLayerModule,
    IgxItemToolTipLayerModule,
  ],
})
export class ChartComponent {
  data = [
    { Year: '2009', USA: 19 },
    { Year: '2010', USA: 24 },
    { Year: '2011', USA: 28 },
    { Year: '2012', USA: 26 },
    { Year: '2013', USA: 38 },
    { Year: '2014', USA: 31 },
    { Year: '2015', USA: 19 },
    { Year: '2017', USA: 50 },
    { Year: '2018', USA: 34 },
    { Year: '2019', USA: 38 },
  ];

  data2 = [
    { Year: '2009', USA: 20 },
    { Year: '2010', USA: 25 },
    { Year: '2011', USA: 29 },
    { Year: '2012', USA: 27 },
    { Year: '2013', USA: 39 },
    { Year: '2014', USA: 32 },
    { Year: '2015', USA: 20 },
    { Year: '2016', USA: 30 },
    { Year: '2017', USA: 51 },
    { Year: '2018', USA: 35 },
    { Year: '2019', USA: 39 },
  ];
}
