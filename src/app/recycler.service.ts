import {inject, Injectable} from '@angular/core';
import {Module} from "./module";
import {ModulesService} from "./modules.service";

@Injectable({
  providedIn: 'root'
})
export class RecyclerService {
  displayRecyclerModules: Module[] = [];
  selectedRecyclerModules: Module[] = [];

  moduleService: ModulesService = inject(ModulesService);

  constructor() {
    this.displayRecyclerModules = this.moduleService.allQualityModules();
  }

  selectRecyclerModule(module: Module) {
    this.selectedRecyclerModules.push(module);
  }

  deleteRecyclerModule(module: Module) {
    this.selectedRecyclerModules.splice(this.selectedRecyclerModules.indexOf(module), 1);
  }
}
