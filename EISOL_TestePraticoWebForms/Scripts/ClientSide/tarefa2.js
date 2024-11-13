/// <reference path="../../Scripts/jquery-1.10.2.js" />
/// <reference path="../../Scripts/bootstrap.js" />

// Legal né, essas linhas mágicas aí de cima permitem o Visual Studio a montar o Intellisense do jQuery aqui como ele já faz com o C#.
// Não apague elas, elas são do bem.

"use strict"

var TAREFA2 = TAREFA2 || {
    Carregar: () => {
        $("[id$='_btnEstranho']").on('click', () => {
            return TAREFA2.Autodestruir();
        });
    },
    Autodestruir: () => {
        window.alert('Este computador se autodestruirá em 20 segundos...\r\nTodos os seus códigos serão descartados e não poderão ser recuperados.');
        window.setTimeout(() => {
            window.alert('A autodestruição era brincadeira tá!')
        }, 3000);
        return false;
    },
    AplicarMascaras: () => {
        // Máscara para CPF (formato: 000.000.000-00)
        $("[id$='_txtCpf']").mask("000.000.000-00");

        // Máscara para Telefone (formato: (00) 00000-0000)
        $("[id$='_txtTelefone']").mask("(00) 00000-0000");

        // Máscara para Data de Nascimento (formato: 00/00/0000)
        $("[id$='_txtDataNascimento']").mask("00/00/0000");
    },
    Validar: ()=> {
        // hummmm...
        let isValid = true;
        let errorMessage = "Por favor, preencha os seguintes campos:\n";

        // Verificação do campo Nome
        if (!$("[id$='_txtNome']").val()) {
            isValid = false;
            errorMessage += "- Nome\n";
        }

        // Verificação do campo CPF
        if (!$("[id$='_txtCpf']").val()) {
            isValid = false;
            errorMessage += "- CPF\n";
        }

        // Verificação do campo RG
        if (!$("[id$='_txtRg']").val()) {
            isValid = false;
            errorMessage += "- RG\n";
        }

        // Verificação do campo Telefone
        if (!$("[id$='_txtTelefone']").val()) {
            isValid = false;
            errorMessage += "- Telefone\n";
        }

        // Verificação do campo Email e validação do formato
        const email = $("[id$='_txtEmail']").val();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailRegex.test(email)) {
            isValid = false;
            errorMessage += "- Email (válido)\n";
        }

        // Verificação do campo Sexo
        if ($("[id$='_ddlSexo']").val() === "[Selecione]") {
            isValid = false;
            errorMessage += "- Sexo\n";
        }

        // Verificação do campo Data de Nascimento
        if (!$("[id$='_txtDataNascimento']").val()) {
            isValid = false;
            errorMessage += "- Data de Nascimento\n";
        }

        // Se algum campo estiver inválido, exibe uma mensagem de erro
        if (!isValid) {
            alert(errorMessage);
        }

        return isValid;
    }
}

// Isso aqui são coisas que usamos pra fazer os scripts funcionarem bem com o WebForms
// Pode ser que você tenha um código muito melhor!
// Use este modelo se preferir.

var postBackPage = postBackPage || Sys.WebForms.PageRequestManager.getInstance();

$(document).ready(function () {
    TAREFA2.Carregar();
    TAREFA2.AplicarMascaras();
});

postBackPage.add_endRequest(function () {
    TAREFA2.Validar();
});