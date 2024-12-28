import {Component, inject} from '@angular/core';
import {QualityCalculatorService} from "../quality-calculator.service";

@Component({
  selector: 'app-fcc-root',
  templateUrl: './fcc-root.component.html',
  styleUrls: ['./fcc-root.component.scss']
})
export class FccRootComponent {
  qualityCalculatorService: QualityCalculatorService = inject(QualityCalculatorService);
}
