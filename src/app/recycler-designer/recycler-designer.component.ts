import {Component, inject} from '@angular/core';
import {QualityCalculatorService} from "../quality-calculator.service";
import {RecyclerService} from "../recycler.service";

@Component({
  selector: 'app-recycler-designer',
  templateUrl: './recycler-designer.component.html',
  styleUrls: ['./recycler-designer.component.scss']
})
export class RecyclerDesignerComponent {
  qualityCalculatorService: QualityCalculatorService = inject(QualityCalculatorService);
  recyclerService: RecyclerService = inject(RecyclerService);
}
