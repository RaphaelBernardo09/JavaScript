    const anoAtual = new Date().getFullYear();

    const anoNascimento = prompt("Por favor, insira o ano de seu nascimento:");

    const anoNascimentoInt = parseInt(anoNascimento, 10);

    const idade = anoAtual - anoNascimentoInt;

    const nome = prompt("Por favor, insira seu nome:");

    document.write("<h1>Olá, seu nome é " + nome + " e você tem " + idade + " anos.</h1>");