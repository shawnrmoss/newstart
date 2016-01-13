
import {Injectable} from 'angular2/core';

export class Link {
  constructor(public name: string, public linkName: string) { }
}

export class Unit {
  constructor(public id: number, public year: string, public name: string) { }
}

@Injectable()
export class UnitCentralServices {
  getUnitServiceLinks() { return unitServiceLinksPromise; }
  getUnits() { return unitsPromise; }
  
  getUnit(id: number | string) {
    return unitsPromise
      .then(units => units.filter(c => c.id === +id)[0]);
  }    
}

var SERVICELINKS = [
    new Link('Dashboard', 'UnitDashboad'),
    new Link('Unit Inventory', 'Units'),
    new Link('Plates', 'Units'),
    new Link('Location', 'Units')
];

var UNITS = [
    new Unit(1, '1969', 'El Camino Black Roaster'),
    new Unit(2, '2016', 'Toyota Tundra 4x4'),
    new Unit(3, '2016', 'Toyota Tundat Blue'),
    new Unit(4, '2016', 'Toyota Tundra Green'),
    new Unit(5, '2016', 'Ford F150 Silver'),
    new Unit(6, '2016', 'Ford F150 Black'),
    new Unit(7, '1969', 'El Camino Purple'),
    new Unit(8, '1969', 'El Camino SS'),
    new Unit(9, '2013', 'El Camino'),
    new Unit(10, '2013', 'Ford F250 Grey'),
    new Unit(11, '2013', 'Ford F250 Grey'),
    new Unit(12, '2013', 'Ford F250 Black'),
    new Unit(13, '2013', 'Ford F250 Black'),    
    new Unit(14, '2014', 'GMC 5 Ton Red'),
    new Unit(15, '2014', 'GMC 5 Ton Blue'),
    new Unit(16, '2014', 'GMC 5 Ton White'),
    new Unit(17, '2016', 'Ram 1500 Green'),    
    new Unit(18, '2016', 'Ram 1500 Black'),
    new Unit(19, '2012', 'Ford F150 Red'),
    new Unit(20, '2012', 'Ford F250 Red')    
];

var unitServiceLinksPromise = Promise.resolve(SERVICELINKS);
var unitsPromise = Promise.resolve(UNITS);