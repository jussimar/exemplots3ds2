///<reference path="pessoa.ts" />
namespace empresa{
    export class Cliente extends Pessoa implements IConta{
        private _codCliente:number;
        private _credito:number;
        private _banco:Banco;

        mostraConta(codCliente:number){
            return codCliente + "Sua Conta";
        }

        public getCodCliente(){
            return this._codCliente;
        }
        public setCodCliente(codigo:number){
            this._codCliente = codigo;
        }

        public getCredito(){
            return this._credito;
        }
        public setCredito(credito:number){
            this._credito =  credito;
        }

        public getBanco(){
            return this._banco;
        }

        public setBanco(banco:Banco){
            this._banco = banco;
        }

    }
}