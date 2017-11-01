/**
 * Library branch model indicating
 * the branch name, location and 
 * associated zones.
 */
export class Zone {
    public name:string
    public zones:Array

    // Not sure how we're representing 
    // branch locations just yet
    public location:string

    public constructor(name:string)
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public setName(name:string) {
        this.name = name;
    }

    public getZones() {
        return this.zones;
    }

    // Preliminary setter, may change later on
    pubilc setZones(zones:Array[zone]) {
        this.zones = zones;
    }
}