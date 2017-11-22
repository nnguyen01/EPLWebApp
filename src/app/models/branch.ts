export class Branch {
    private _name: string;
    private _beaconID: string;
    private _iLink: string;

    constructor(name?: string, beaconID?: string, iLink?: string) {
        this._name = name;
        this._beaconID = beaconID;
        this._iLink = iLink;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get beaconID(): string {
        return this._beaconID;
    }

    set beaconID(newBeaconID: string) {
        this._beaconID = newBeaconID;
    }

    get iLink(): string {
        return this._iLink;
    }

    set iLink(newiLink: string) {
        this._iLink = newiLink;
    }
}