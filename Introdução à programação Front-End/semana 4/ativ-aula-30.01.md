Exercício
Crie um algoritmo chamado “Growbank”.
Este algoritmo deve solicitar uma entrada do usuário por meio de um input com as seguintes opções:


Informar o saldo atual do usuário e as seguintes opções:

[Seu saldo é: R$ xxx,xx]

1 - Depósito
2 - Saque
3 - Transferência
0 - Sair
Enquanto o usuário selecionar uma das opções diferentes de 0, o algoritmo deve rodar a instrução selecionada pelo usuário;

[Utilizar Switch-case]

Caso opção 1 seja selecionada:
    Solicitar um valor a ser depositado; (valor maior que zero)
    Incrementar no saldo 
    Retornar para o menu anterior

Caso opção 2 seja selecionada:
    Solicitar um valor a ser sacado; (valor maior que zero e menor que o saldo disponível na conta);
    Deve ser apresentado mensagem de erro ao usuário;
    Decrementar o valor sacado do saldo;
    Retornar para o menu anterior;

Caso opção 3 seja selecionada
    Solicitar um valor a ser transferido (valor maior que zero e menor que o saldo disponível)
Deve ser apresentado mensagem de erro ao usuário;
    Decrementar o valor do saldo
    Solicitar para quem deve ser transferido (transferência usando e-mail)
    Retornar ao menu anterior

Caso a opção selecionada seja 0
    Encerrar algoritmo;