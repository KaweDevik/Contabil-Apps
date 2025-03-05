// Array para armazenar compromissos
let commitments = [];

// Função para adicionar um compromisso
function addCommitment() {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;

    if (title && date) {
        const newCommitment = { title, date };
        commitments.push(newCommitment);
        renderCommitments();
        checkNotifications(newCommitment);
        clearFields();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para criar um item de compromisso
function createCommitmentElement(commitment, index) {
    const li = document.createElement('li');
    li.textContent = `${commitment.title} - ${new Date(commitment.date).toLocaleString()}`;

    // Botão de excluir
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-button'); // Classe
    deleteButton.onclick = () => {
        if (confirm(`Você tem certeza que deseja excluir o compromisso "${commitment.title}"?`)) {
            deleteCommitment(index);
        }
    };

    li.appendChild(deleteButton);
    return li;
}

// Função para exibir compromissos na tela
function renderCommitments() {
    const list = document.getElementById('commitments');
    list.innerHTML = ""; // Limpa a lista

    commitments.forEach((commitment, index) => {
        const commitmentElement = createCommitmentElement(commitment, index);
        list.appendChild(commitmentElement);
    });
}

// Função para limpar os campos do formulário
function clearFields() {
    document.getElementById('title').value = "";
    document.getElementById('date').value = "";
}

// Função para verificar notificações
function checkNotifications(commitment) {
    const now = new Date();
    const commitmentTime = new Date(commitment.date);

    // Verifica se o compromisso é em menos de 1 minuto
    const timeDifference = commitmentTime - now;
    if (timeDifference > 0 && timeDifference <= 60000) {
        setTimeout(() => {
            alert(`Lembrete: O compromisso "${commitment.title}" está prestes a acontecer!`);
        }, timeDifference);
    }
}

// Função para excluir um compromisso
function deleteCommitment(index) {
    commitments.splice(index, 1); // Remove o compromisso
    renderCommitments(); // Atualiza a lista exibida
}

// Inicializa o app com compromissos existentes
renderCommitments();
