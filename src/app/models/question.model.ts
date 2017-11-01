/**
 * Question model class enables creating
 * and editing questions.
 */
export class Question {
    public id:number
    public prompt:string
    public imageLink:string
    public soundLink:string

    public constructor(id:number, prompt:string) {
        this.id = id;
        this.prompt = prompt; 
    }

    public getID() {
        return this.id;
    }

    public setID(id:number) {
        this.id = id;
    }

    public getPrompt() {
        return this.prompt;
    }

    public setPrompt(prompt:string) {
        this.prompt = prompt;
    }

    public getImageLink() {
        return this.imageLink;
    }

    public setImageLink(imageLink:string) {
        this.imageLink = imageLink;
    }

    public getSoundLink() {
        return this.soundLink;
    }

    public setSoundLink(soundLink:string) {
        this.soundLink = soundLink;
    }
}