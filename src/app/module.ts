export class Module {
  type: string;
  rank: number;
  quality: number;
  value: number;

  constructor(type: string, rank: number, quality: number, value: number) {
    this.type = type;
    this.rank = rank;
    this.quality = quality;
    this.value = value;
  }

  getDisplayName(): string {
    if (this.rank <= 1) {
      return this.type + ' I';
    } else if (this.rank == 2) {
      return this.type + ' II';
    }
    return this.type + ' III';
  }

  getQualityDisplayColor(): string {
    if (this.quality <= 1) {
      return 'gray';
    } else if (this.quality == 2) {
      return 'green';
    } else if (this.quality == 3) {
      return 'blue';
    } else if (this.quality == 4) {
      return 'purple;'
    }
    return 'orange';
  }
}
