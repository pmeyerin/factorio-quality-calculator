import { Injectable } from '@angular/core';
import {Module} from "./module";

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  QUALITIES = [[.01, .02, .025], [.013, .026, .032], [.016, .032, .04], [.019, .038, .047], [.025, .05, .062]];
  PRODUCTIVITIES = [[.04, .06, .10], [.05, .07, .13], [.06, .07, .16], [.07, .09, .19], [.1, .15, .25]];

  constructor() { }

  allQualityModules(): Module[] {
    let fullList: Module[] = [];
    for (let rankIndex = 1; rankIndex <=3; rankIndex++) {
      for (let qualIndex = 1; qualIndex <=5; qualIndex++) {
        fullList[fullList.length] = new Module('QUALITY', rankIndex, qualIndex, this.QUALITIES[qualIndex - 1][rankIndex - 1]);
      }
    }
    return fullList;
  }

  allProductivityModules(): Module[] {
    let fullList: Module[] = [];
    for (let rankIndex = 1; rankIndex <=3; rankIndex++) {
      for (let qualIndex = 1; qualIndex <=5; qualIndex++) {
        fullList[fullList.length] = new Module('PRODUCTIVITY', rankIndex, qualIndex, this.PRODUCTIVITIES[qualIndex - 1][rankIndex - 1]);
      }
    }
    return fullList;
  }
}
