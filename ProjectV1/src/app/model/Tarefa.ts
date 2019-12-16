export class Tarefa {

    private nome: string;
    private responsavel: string;

    public constructor(_nome: string, _responsavel: string) {
        this.nome = _nome;
        this.responsavel = _responsavel;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    public getResponsavel(): string {
        return this.responsavel;
    }

    public setResponsavel(_responsavel: string): void {
        this.responsavel = _responsavel;
    }

}
