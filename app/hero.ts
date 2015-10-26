// This is a simple class in TypeScript
// In this application, the Hero class is a simple value object
// that represents one of the Heroes in the database

export class Hero {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
