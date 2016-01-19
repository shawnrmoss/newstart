export class Unit {

    public unitID: number;     
    public activePlateID: number; 
    public unitStatusID: number;

    public unitNumber: string;
    public year: number;
    public make: string;
    public model: string;
    public trim: string;
    public vin: string;
    public isPoolUnit: boolean;
    public inServiceDate: Date;
    public term: number;
    public costCenter: number;
    public factoryStock: boolean;
    
    public createdByUserID: number;
    public createdByUserName: string;    
    public createdOn: Date;
    public deletedByUserID: number;
    public deletedByUserName: string;
    public deletedOn: Date;
        
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