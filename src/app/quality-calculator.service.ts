import {inject, Injectable} from '@angular/core';
import {ModulesService} from "./modules.service";
import {RecyclerService} from "./recycler.service";
import {FactoryService} from "./factory.service";

@Injectable({
  providedIn: 'root'
})
export class QualityCalculatorService {
  RECYCLER_FAILURE_RATE = .75;

  calculatedSuccessOdds: number = 0;

  moduleService: ModulesService = inject(ModulesService);
  recyclerService: RecyclerService = inject(RecyclerService);
  factoryService: FactoryService = inject(FactoryService);

  constructor() {
  }

  calculateFactoryQuality() {
    return this.factoryService.selectedFactoryModules
      .filter(value => value.type === 'QUALITY')
      .map(value => {
      return value.value;
    }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  calculateFactoryProductivity() {
    return this.factoryService.selectedFactoryModules
      .filter(value => value.type === 'PRODUCTIVITY')
      .map(value => {
      return value.value;
    }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  calculateRecyclerQuality() {
    return this.recyclerService.selectedRecyclerModules
      .map(value => {
        return value.value;
      }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  doRecyclerCalculation() {
    console.log("Doing full calculation");
    console.log("recycler modules: ", this.recyclerService.selectedRecyclerModules);
    console.log("factory modules: ", this.factoryService.selectedFactoryModules);
    let factoryQuality = this.calculateFactoryQuality();
    let factoryProductivity = this.calculateFactoryProductivity();
    //We are also looking at how many quality items are produced before going to the recycler.
    let initialLegendaries = (1 + factoryProductivity) * (.001 * factoryQuality);
    console.log("Expecting initial legendaries " + initialLegendaries);
    let initialEpics = (1 + factoryProductivity) * (.009 * factoryQuality);
    console.log("Expecting initial epics " + initialEpics);
    let initialRares = (1 + factoryProductivity) * (.09 * factoryQuality);
    console.log("Expecting initial rares " + initialRares);
    let initialUncommons = (1 + factoryProductivity) * (.9 * factoryQuality);
    console.log("Expecting initial uncommons " + initialUncommons);
    let initialCommons = (1 + factoryProductivity) * (1 - factoryQuality);
    console.log("Expecting initial commons " + initialCommons);
    this.calculatedSuccessOdds = initialLegendaries +
      initialEpics * this.calculateEpicToLegendary(this.calculateRecyclerQuality(), this.RECYCLER_FAILURE_RATE) +
      initialRares * this.calculateRareToLegendary(this.calculateRecyclerQuality(), this.RECYCLER_FAILURE_RATE) +
      initialUncommons * this.calculateUncommonToLegendary(this.calculateRecyclerQuality(), this.RECYCLER_FAILURE_RATE) +
      initialCommons * this.calculateCommonToLegendary(this.calculateRecyclerQuality(), this.RECYCLER_FAILURE_RATE);
  }

  /**
   * Likelihood that a common item will turn into a legendary item rather than be eaten by the recycler, given as many
   * iterations as necessary for one eventuality or the other
   * @param quality chance of an item having higher quality than the input
   * @param failureRate Chance of recycler eating the item.
   */
  calculateCommonToLegendary(quality: number, failureRate: number) {
    return quality * (.001*this.limitSurvivalCalculation(quality, failureRate) +
      .009*this.limitSurvivalCalculation(quality, failureRate)*this.calculateEpicToLegendary(quality, failureRate) +
      .09*this.limitSurvivalCalculation(quality, failureRate)*this.calculateRareToLegendary(quality, failureRate) +
      .9*this.limitSurvivalCalculation(quality, failureRate)*this.calculateUncommonToLegendary(quality, failureRate))
  }

  /**
   * Likelihood that an uncommon item will turn into a legendary item rather than be eaten by the recycler, given as many
   * iterations as necessary for one eventuality or the other
   * @param quality chance of an item having higher quality than the input
   * @param failureRate Chance of recycler eating the item.
   */
  calculateUncommonToLegendary(quality: number, failureRate: number) {
    return quality * (.01*this.limitSurvivalCalculation(quality, failureRate) +
      .09*this.limitSurvivalCalculation(quality, failureRate)*this.calculateEpicToLegendary(quality, failureRate) +
      .9*this.limitSurvivalCalculation(quality, failureRate)*this.calculateRareToLegendary(quality, failureRate));
  }

  /**
   * Likelihood that a rare item will turn into a legendary item rather than be eaten by the recycler, given as many
   * iterations as necessary for one eventuality or the other
   * @param quality chance of an item having higher quality than the input
   * @param failureRate Chance of recycler eating the item.
   */
  calculateRareToLegendary(quality: number, failureRate: number) {
    return quality * (.1*this.limitSurvivalCalculation(quality, failureRate) +
      .9*this.limitSurvivalCalculation(quality, failureRate) * this.calculateEpicToLegendary(quality, failureRate));
  }

  /**
   * Likelihood that an epic item will turn into a legendary item rather than be eaten by the recycler, given as many
   * iterations as necessary for one eventuality or the other
   * @param quality chance of an item having higher quality than the input
   * @param failureRate Chance of recycler eating the item.
   */
  calculateEpicToLegendary(quality: number, failureRate: number) {
    return quality * this.limitSurvivalCalculation(quality, failureRate);
  }

  /**
   * This is our f(Q, k) after assessing the limit as k approaches infinity.
   * lim(k->infinity) f(Q, k) = (1 - F)/(F + Q - F Q)
   * @param quality chance of an item having higher quality than the input
   * @param failureRate Chance of recycler eating the item.
   */
  limitSurvivalCalculation(quality: number, failureRate: number) {
    return (1 - failureRate)/(failureRate + quality - (failureRate *  quality));
  }
}
