///<reference path="pessoa.ts"/>
///<reference path="cliente.ts"/>
///<reference path="funcionario.ts"/>
var empresa;
(function (empresa) {
    var banco = new empresa.Banco();
    banco.setNome("Bradesco");
    banco.setCodBanco(33);
    var cliente = new empresa.Cliente();
    cliente.setNome("João");
    cliente.setCodCliente(1);
    cliente.setCpf("000.000.000-00");
    cliente.setIdade(30);
    cliente.setCredito(2000);
    cliente.setBanco(banco);
    var cliente2 = new empresa.Cliente();
    cliente2.setNome("Maria");
    cliente2.setCodCliente(2);
    cliente2.setCpf("111.000.000-11");
    cliente2.setIdade(40);
    cliente2.setCredito(3000);
    cliente2.setBanco(banco);
    document.getElementById("nome").textContent = cliente.getNome();
    document.getElementById("idade").textContent = cliente.getIdade().toString();
    document.getElementById("cpf").textContent = cliente.getCpf();
    document.getElementById("codigo").textContent = cliente.getCodCliente().toString();
    document.getElementById("credito").textContent = cliente.getCredito().toString();
    document.getElementById("banco").textContent = cliente.getBanco().getNome();
    banco.addCliente(cliente);
    banco.addCliente(cliente2);
    document.getElementById("chama").addEventListener("click", function () {
        banco.getClientes().forEach(function (element) {
            alert("Cliente: " + element.getNome() + " Banco: " + element.getBanco().getNome());
        });
    });
})(empresa || (empresa = {}));
