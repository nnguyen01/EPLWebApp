
/**
 * Question model
 */
export class Question {
    private _prompt1 = ' ';
    private _solution = ' ';
    private _zone = ' ';
    private _branch = ' ';
    private _qType = ' ';
    private _iLink = ' ';
    private _sLink = ' ';
    private _Choices = ' ';

    constructor() {
        this._prompt1 = ' ';
        this._solution = ' ';
        this._zone = ' ';
        this._branch = ' ';
        this._qType = ' ';
        this._iLink = ' ';
        this._sLink = ' ';
        this._Choices = ' ';
    }

    public set prompt(v:string) {
        this._prompt1 = v;
    }
    public set solution(v : string) {
        this._solution = v;
    }
    public set zone(v : string) {
        this._zone = v;
    }
    public set branch(v : string) {
        this._branch = v;
    }
    public set qType(v : string) {
        this._qType = v;
    }
    public set iLink(v : string) {
        this._iLink = v;
    }
    public set sLink(v : string) {
        this._sLink = v;
    }

    public set Choices(v : string) {
        this._Choices = v;
    }

    
    public toStr() : string {
        let str = '|' +this._prompt1 + '|'
        + this._solution + '|'
        + this._zone + '|'
        + this._branch + '|'
        + this._qType + '|'
        + this._iLink + '|'
        + this._sLink+ '|'
        + this._Choices + '|';

        return str;
    }
    


}