<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App de Notificações Contábeis</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>EasyContábil</h1>

        <!-- Formulário para adicionar compromissos -->
        <div class="form-container">
            <input type="text" id="title" placeholder="Título do compromisso" />
            <input type="datetime-local" id="date" />
            <button onclick="addCommitment()">Adicionar Compromisso</button>
        </div>

        <!-- Lista de compromissos -->
        <div class="commitments-list">
            <h2>Compromissos</h2>
            <ul id="commitments"></ul>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>



