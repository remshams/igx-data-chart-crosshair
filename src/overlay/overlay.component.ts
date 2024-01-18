import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewContainerRef,
} from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { IgxOverlayService } from 'igniteui-angular';

@Component({
  selector: 'app-overlay',
  styleUrls: ['./overlay.component.css'],
  templateUrl: './overlay.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ChartComponent],
})
export class OverlayComponent {
  constructor(
    @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.showOverlay();
  }

  public showOverlay() {
    const id = this.overlayService.attach(
      ChartComponent,
      this.viewContainerRef,
    );
    this.overlayService.show(id);
  }
}
