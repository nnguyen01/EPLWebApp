export class Branch {
    constructor(name?: string, beaconID?: string, iLink?: string) { }

    get name(): string {
        return this.name;
    }

    set name(name: string) {
        this.name = name;
    }

    get beaconID(): string {
        return this.beaconID;
    }

    set beaconID(beaconID: string) {
        this.beaconID = beaconID;
    }

    get iLink(): string {
        return this.iLink;
    }

    set iLink(iLink: string) {
        this.iLink = iLink;
    }
}