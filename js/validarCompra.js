var nome = document.getElementById("nome_id")
var endereco = document.getElementById("endereco_id")
var numero_residencia = document.getElementById("numero_id")
var cep = document.getElementById("postalcode_id")
var cidade = document.getElementById("cidade_id")
var bairro = document.getElementById("bairro_id")
var cartao = document.getElementById("cartao")
var pix = document.getElementById("pix")
var boleto = document.getElementById("boleto")
var metodo = document.getElementById("metodoValidar")


var msgNome = document.getElementById("msgNome")
var msgEndereco = document.getElementById("msgEndereco")
var msgNumeroRes = document.getElementById("msgNumeroRes")
var msgPostalCode = document.getElementById("msgPostalCode")
var msgCidade = document.getElementById("msgCidade")
var msgBairro = document.getElementById("msgBairro")
var msgMetodo = document.getElementById("msgMetodo")

var popover = document.getElementById("compra_confirmada")


function validar() {

    if (nome.value == "") {
        msgNome.style.display = "block";
        nome.style.outline = "2px solid #FF0000";
        nome.focus();
        return false;

    }

    if (endereco.value == "") {
        msgEndereco.style.display = "block";
        endereco.style.outline = "2px solid #FF0000";
        endereco.focus();
        return false;

    }

    if (numero_residencia.value == "") {
        msgNumeroRes.style.display = "block";
        numero_residencia.style.outline = "2px solid #FF0000";
        numero_residencia.focus();
        return false;
    }

    if (cep.value == "") {
        msgPostalCode.style.display = "block";
        cep.style.outline = "2px solid #FF0000";
        cep.focus();
        return false;

    }

    if (cidade.value == "") {
        msgCidade.style.display = "block";
        cidade.style.outline = "2px solid #FF0000";
        cidade.focus();
        return false;

    }

    if (bairro.value == "") {
        msgBairro.style.display = "block";
        bairro.style.outline = "2px solid #FF0000";
        bairro.focus();
        return false;

    }

    if (!cartao.checked && !pix.checked && !boleto.checked) {
        msgMetodo.style.display = "block"
        metodo.style.outline = "3px solid #FF0000"
        cartao.focus();
        return false;
    }

    popover.showPopover();

};

function limpar(id, msg) {
    id.style.outline = '';
    msg.style.display = '';
}