import {Component, inject} from '@angular/core';
import {QualityCalculatorService} from "../quality-calculator.service";
import {FactoryService} from "../factory.service";

@Component({
  selector: 'app-factory-designer',
  templateUrl: './factory-designer.component.html',
  styleUrls: ['./factory-designer.component.scss']
})
export class FactoryDesignerComponent {
  qualityCalculatorService: QualityCalculatorService = inject(QualityCalculatorService);
  factoryService: FactoryService = inject(FactoryService);

}
