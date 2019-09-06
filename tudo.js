var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getIdade = function () {
            return this._idade;
        };
        Pessoa.prototype.setIdade = function (idade) {
            this._idade = idade;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
///<reference path="pessoa.ts" />
var empresa;
(function (empresa) {
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cliente.prototype.getCodCliente = function () {
            return this._codCliente;
        };
        Cliente.prototype.setCodCliente = function (codigo) {
            this._codCliente = codigo;
        };
        Cliente.prototype.getCredito = function () {
            return this._credito;
        };
        Cliente.prototype.setCredito = function (credito) {
            this._credito = credito;
        };
        return Cliente;
    }(empresa.Pessoa));
    empresa.Cliente = Cliente;
})(empresa || (empresa = {}));
///<reference path="pessoa.ts" />
var empresa;
(function (empresa) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.getCodFuncionario = function () {
            return this._codFuncionario;
        };
        Funcionario.prototype.setCodFuncionario = function (codigo) {
            this._codFuncionario = codigo;
        };
        Funcionario.prototype.getSetor = function () {
            return this._setor;
        };
        Funcionario.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        return Funcionario;
    }(empresa.Pessoa));
    empresa.Funcionario = Funcionario;
})(empresa || (empresa = {}));
var empresa;
(function (empresa) {
    var Banco = /** @class */ (function () {
        function Banco() {
        }
        Banco.prototype.getNome = function () {
            return this._nome;
        };
        Banco.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Banco.prototype.getCodBanco = function () {
            return this._codBanco;
        };
        Banco.prototype.setCodBanco = function (codigo) {
            this._codBanco = codigo;
        };
        return Banco;
    }());
    empresa.Banco = Banco;
})(empresa || (empresa = {}));
