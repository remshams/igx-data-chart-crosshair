import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  IgxDataChartCoreModule,
  IgxDataChartCategoryModule,
  IgxLegendModule,
  IgxDataChartInteractivityModule,
  IgxDataChartAnnotationModule,
  IgxFinalValueLayerModule,
  IgxCrosshairLayerModule,
  IgxDataToolTipLayerModule,
} from 'igniteui-angular-charts';
import { IgxTooltipModule } from 'igniteui-angular';

@Component({
  selector: 'app-root',
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
    { Year: '2009', USA: 19 },
    { Year: '2010', USA: 24 },
    { Year: '2011', USA: 28 },
    { Year: '2013', USA: 38 },
    { Year: '2014', USA: 31 },
    { Year: '2016', USA: 40 },
    { Year: '2019', USA: 38 },
  ];
}
