export class Unit {

    unitID: number;     
    activePlateID: number; 
    unitStatusID: number;

    unitNumber: string;
    year: number;
    make: string;
    model: string;
    trim: string;
    vin: string;
    isPoolUnit: boolean;
    inServiceDate: Date;
    term: number;
    costCenter: number;
    factoryStock: boolean;
    
    createdByUserID: number;
    createdByUserName: string;    
    createdOn: Date;
    deletedByUserID: number;
    deletedByUserName: string;
    deletedOn: Date;
        
    //full constructor
    constructor(unitID: number, 
                activePlateID: number, 
                unitStatusID: number, 
                unitNumber: string, 
                year: number, 
                make: string, 
                model: string, 
                trim: string, 
                vin: string, 
                isPoolUnit: boolean, 
                inServiceDate: Date, 
                term: number, 
                costCenter: number, 
                factoryStock: boolean, 
                createdByUserID: number, 
                createdByUserName: string, 
                createdOn: Date, 
                deletedByUserID: number, 
                deletedByUserName: string, 
                deletedOn: Date) {   
                                                
        this.unitID = unitID;     
        this.activePlateID = activePlateID; 
        this.unitStatusID = unitStatusID;

        this.unitNumber = unitNumber;
        this.year = year;
        this.make = make;
        this.model = model;
        this.trim = trim;
        this.vin = vin;
        this.isPoolUnit = isPoolUnit;
        this.inServiceDate = inServiceDate;
        this.term = term;
        this.costCenter = costCenter;
        this.factoryStock = factoryStock;
        
        this.createdByUserID = createdByUserID;
        this.createdByUserName = createdByUserName;    
        this.createdOn = createdOn;
        this.deletedByUserID = deletedByUserID;
        this.deletedByUserName = deletedByUserName;
        this.deletedOn = deletedOn;
    }
        
}