document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const contactTable = document.getElementById("contact-table");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtenha os valores inseridos pelo usuário
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;

        // Crie uma nova linha na tabela
        const newRow = contactTable.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        // Adicione os valores à nova linha
        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;

        // Limpe o formulário
        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    });
});