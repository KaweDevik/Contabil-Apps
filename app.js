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

// Função para exibir compromissos na tela
function renderCommitments() {
    const list = document.getElementById('commitments');
    list.innerHTML = ""; // Limpa a lista

    commitments.forEach(commitment => {
        const li = document.createElement('li');
        li.textContent = `${commitment.title} - ${new Date(commitment.date).toLocaleString()}`;
        list.appendChild(li);
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

// Inicializa o app com compromissos existentes (se houver)
renderCommitments();
