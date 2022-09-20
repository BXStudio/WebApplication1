export class SuperHero {
  private id: number;
  private name: string;
  private power: string;
  private location: string;

  constructor(id: number, name: string, power: string, location: string) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.location = location;
  }
}
