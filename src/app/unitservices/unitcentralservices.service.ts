
import {Injectable} from 'angular2/core';

export class Link {
  constructor(public name: string, public linkName: string) { }
}

@Injectable()
export class UnitCentralServices {
  getUnitServiceLinks() { return unitServiceLinksPromise; }  
}

var SERVICELINKS = [
    new Link('Dashboard', 'UnitDashboad'),
    new Link('Unit Inventory', 'Units'),
    new Link('Plates', 'Units'),
    new Link('Location', 'Units')
];

var unitServiceLinksPromise = Promise.resolve(SERVICELINKS);