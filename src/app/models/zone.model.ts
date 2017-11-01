/**
 * Zone model for names and beacon id's
 * associated with the zone.
 */
export class Zone {
    public ID:number
    public beaconID:string
    
    // Zones should have associated branches
    // in most cases
    public branch:string

    // Not sure if name is redundant because
    // we already have an ID. But I'm going
    // to leave this just in case we indicate
    // it as a 'fiction' or 'science' zone
    public name:string

    public constructor(ID:number, beaconID:string) {
        this.ID = ID;
        this.beaconID = beaconID;
    }

    public getBranch() {
        return this.branch;
    }

    public setBranch() {
        this.branch = branch;
    }

    public getID() {
        return this.ID;
    }

    public setID(ID:number) {
        this.ID = ID;
    }

    public getBeaconID() {
        return this.beaconID;
    }

    public setBeaconID(beaconID:string) {
        this.beaconID = beaconID;
    }
}