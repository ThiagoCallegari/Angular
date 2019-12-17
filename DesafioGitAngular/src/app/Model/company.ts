export class Company {

    private name: string;
    private catchPhrase: string;
    private bs: string;

    public constructor(_name: string, _catchPhrase: string, _bs:string) {
        this.name = _name;
        this.catchPhrase = _catchPhrase;
        this.bs = _bs;
    }

    public getName(): string {
        return this.name;
    }

    public setName(_name: string): void {
        this.name = _name;
    }

    public getCatchPhrase(): string {
        return this.catchPhrase;
    }

    public setCatchPhrase(_catchPhrase: string): void {
        this.catchPhrase = _catchPhrase;
    }

    public getBs(): string {
        return this.bs;
    }

    public setBs(_bs: string): void {
        this.bs = _bs;
    }
}