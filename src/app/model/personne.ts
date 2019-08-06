export class Personne {
  id: number;
  name: string;
  firstname: string;
  job: string;
  path: string;
  age: number;
  cin: number;

  constructor(id: number = 0,
              name: string = '',
              firstname: string = '',
              job: string = '',
              path: string = '',
              age: number = 0,
              cin: number = 0) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.job = job;
    this.path = path;
    this.age = age;
    this.cin = cin;
  }

}
