import { colors } from "../util/Colors";

export class Conta{
    

    //Atributos da Classe
    private _numero: number;
    private _agencia: number;
    private _titular: string;
    private _tipo: number;
    private _saldo: number;

    // Metodo construtor
	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number) {
		this._numero = numero
		this._agencia = agencia;
		this._titular = titular;
		this._tipo = tipo;
		this._saldo = saldo;
	}


    /**
     * Getter 
     * @return {number}
     */
	public get (): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get titular(): string {
		return this._titular;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter 
     * @param {number} value
     */
	public set (value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter titular
     * @param {string} value
     */
	public set titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set saldo(value: number) {
		this._saldo = value;
	}

    //Metodos auxiliares

    public sacar(valor: number): boolean{
        if(valor > this._saldo){
            console.log(colors.fg.red, "Saldo Insuficiente", colors.reset);
            return false;
        }

        this._saldo -= valor;
        return true;
    }

    public depositar(valor: number): void {
        if(valor < 0)
            console.log(colors.fg.red, "O valor deve ser positivo", colors.reset);
        else
            this._saldo += valor;
    }

    public visualizar(): void{

        let tipo: string;

        switch(this._tipo){

            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupanca"
                break;
            default:
                tipo = "Tipo Invalido"

        }
        console.log("****************************************************");
        console.log("                 DADOS DA CONTA                     ");
        console.log("****************************************************");
        console.log(`Numero da conta: ${this._numero}`);
        console.log(`Numero da agencia: ${this._agencia}`);
        console.log(`Numero da titular: ${this._titular}`);
        console.log(`Tipo da conta: ${tipo}`);
        console.log(`Saldo da conta: ${this._saldo.toFixed(2)}`);
        
    }

}