// you could get rid of lines 1 and 3 and our service would still work.
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
    cars = [
      'Ford', 'Cheverolet', 'Buick'
    ];

    myData() {
      return "This is my data, man!";
    }

}
