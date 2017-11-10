
/**
 * Question model
 */
export class Question {
    private _prompt1 = '';
    private _solution = '';
    private _zone = '';
    private _branch = '';
    private _qType = '';
    private _iLink = '';
    private _sLink = '';
    private _Choices = '';

    constructor() {
        this._prompt1 = '';
        this._solution = '';
        this._zone = '';
        this._branch = '';
        this._qType = '';
        this._iLink = '';
        this._sLink = '';
        this._Choices = '';
    }

    /**
     * Getters
     */
    public set Choices(v : string) {
        this._Choices = v;
    }
    public get prompt() : string {
        return this._prompt1;
    }
    public get solution() : string {
        return this._solution;
    }
    public get zone() : string {
        return this._zone;
    }
    public get branch() : string {
        return this._branch;
    }
    public get qType() : string {
        return this._qType;
    }
    public get iLink() : string {
        return this._iLink;
    }
    public get sLink() : string {
        return this._sLink;
    }
    public get choices() : string {
        return this._Choices;
    }

    /**
     * Setters
     */
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
    
    public toStr() : string {
        let str = ' || prompt:  ' +this._prompt1 + ' || solution: '
        + this._solution + ' || zone: '
        + this._zone + ' || branch: '
        + this._branch + ' || questionType: '
        + this._qType + ' || imageLink: '
        + this._iLink + ' || soundLink: '
        + this._sLink+ ' || choices: '
        + this._Choices + ' ||';
        return str;
    }
    
}