function processaFormLogin(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    resultadoLogin = loginUser(username, password);
    if (resultadoLogin) {
        window.location.href = 'principal.html';
    }
    else {
        alert('Usuário ou senha incorretos');
    }
}

function salvaLogin(event) {
    event.preventDefault();

    let login = document.getElementById('txt_login').value;
    let nome = document.getElementById('txt_nome').value;
    let email = document.getElementById('txt_email').value;
    let tipo_sanguineo = document.getElementById('txt_tipo_sanguineo').value;
    let cidade = document.getElementById('txt_cidade').value;
    let estado = document.getElementById('txt_estado').value;
    let cpf = document.getElementById('txt_cpf').value;
    let senha = document.getElementById('txt_senha').value;
    let senha2 = document.getElementById('txt_senha2').value;
    if (senha != senha2) {
        alert('As senhas informadas não conferem.');
        return
    }

    addUser(nome, login, senha, email, tipo_sanguineo, cidade, estado, cpf);
    alert('Usuário salvo com sucesso. Proceda com o login para ');

    $('#loginModal').modal('hide');
}

document.getElementById('login-form').addEventListener('submit', processaFormLogin);


document.getElementById('btn_salvar').addEventListener('click', salvaLogin);
function addUser(event) {
    event.preventDefault();

    var username = document.getElementById("reg-username").value;
    var password = document.getElementById("reg-password").value;

    if (username && password) {
        var user = {
            username: username,
            password: password
        };

        var savedUsers = localStorage.getItem("users");
        if (savedUsers) {
            var usersArray = JSON.parse(savedUsers);
            usersArray.push(user);
            savedUsers = JSON.stringify(usersArray);
        } else {
            savedUsers = JSON.stringify([user]);
        }

        localStorage.setItem("users", savedUsers);

        document.getElementById("reg-username").value = "";
        document.getElementById("reg-password").value = "";

        alert("Novo usuário registrado com sucesso!");
        $('#loginModal').modal('hide');
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

document.getElementById("btn_salvar").addEventListener("submit", addUser);