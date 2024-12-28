import {inject, Injectable} from '@angular/core';
import {Module} from "./module";
import {ModulesService} from "./modules.service";

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  public displayFactoryModules: Module[] = [];
  public selectedFactoryModules: Module[] = [];

  moduleService: ModulesService = inject(ModulesService);

  constructor() {
    this.displayFactoryModules = this.moduleService.allQualityModules().concat(this.moduleService.allProductivityModules());
  }

  selectFactoryModule(module: Module) {
    console.log("selecting factory module " + module.getDisplayName())
    console.log(this.selectedFactoryModules);
    this.selectedFactoryModules.push(module);
  }

  deleteFactoryModule(module: Module) {
    console.log("deleting factory module " + module.getDisplayName())
    console.log(this.selectedFactoryModules);
    this.selectedFactoryModules.splice(this.selectedFactoryModules.indexOf(module), 1);
  }
}
