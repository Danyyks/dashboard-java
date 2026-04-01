export const modules = [
  {
    id: 'intro-java',
    title: 'Introdução ao Java',
    description: 'Descubra o que é Java, para que serve e como começar a programar',
    explanation: `Java é uma linguagem de programação muito popular, criada em 1995 pela Sun Microsystems (hoje Oracle).

Mas por que Java é tão especial?

Java é usado em milhões de dispositivos ao redor do mundo: desde aplicativos de celular (como Android), sites, sistemas bancários, até videogames!

O grande diferencial do Java é que você escreve o código UMA vez e ele funciona em qualquer lugar: no seu computador, no celular, no servidor da internet... isso acontece porque Java usa uma "máquina virtual" chamada JVM (Java Virtual Machine).

Além disso, Java é uma linguagem Orientada a Objetos, o que significa que organizamos nosso código em "objetos" que representam coisas do mundo real - mas não se preocupe, vamos aprender isso aos poucos!`,
    codeExamples: [
      {
        title: 'Seu primeiro programa em Java',
        code: `public class OlaMundo {
    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");
    }
}`,
        explanation:
          'Este é o programa mais básico em Java! Ele simplesmente exibe a mensagem "Olá, Mundo!" na tela. Todo programa Java começa com uma classe (nesse caso, "OlaMundo") e um método especial chamado "main", que é o ponto de partida do programa.',
      },
      {
        title: 'Exibindo várias mensagens',
        code: `public class MeuPrograma {
    public static void main(String[] args) {
        System.out.println("Bem-vindo ao Java!");
        System.out.println("Vamos aprender juntos!");
        System.out.println("É mais fácil do que parece!");
    }
}`,
        explanation:
          'Você pode usar System.out.println() várias vezes para exibir múltiplas mensagens. Cada chamada exibe uma linha diferente na tela.',
      },
    ],
    exercises: [
      {
        title: 'Olá, Mundo Personalizado',
        difficulty: 'Fácil',
        description:
          'Escreva um programa Java que exiba seu nome na tela com uma mensagem de boas-vindas.',
        steps: [
          'Crie uma classe pública chamada OlaMundo (ou qualquer nome com inicial maiúscula)',
          'Dentro da classe, crie o método main: public static void main(String[] args)',
          'Dentro do main, use System.out.println() para exibir a mensagem',
          'Substitua "[Seu Nome]" pelo seu nome real',
          'Compile e execute o programa',
        ],
        expectedOutput: `Olá, [Seu Nome]! Bem-vindo ao Java!`,
      },
      {
        title: 'Minhas Informações',
        difficulty: 'Fácil',
        description:
          'Crie um programa que exiba três informações sobre você: seu nome, sua cidade e o curso que você faz.',
        steps: [
          'Crie uma nova classe chamada MinhasInformacoes',
          'Adicione o método main dentro dela',
          'Use System.out.println() três vezes, uma para cada informação',
          'Na primeira linha, exiba "Nome: " seguido do seu nome',
          'Na segunda, exiba "Cidade: " seguido da sua cidade',
          'Na terceira, exiba "Curso: " seguido do seu curso',
        ],
        expectedOutput: `Nome: [Seu Nome]
Cidade: [Sua Cidade]
Curso: [Seu Curso]`,
      },
      {
        title: 'Cartão de Visitas',
        difficulty: 'Médio',
        description:
          'Crie um programa que exiba um cartão de visitas formatado com separadores visuais, contendo nome, profissão e e-mail.',
        steps: [
          'Crie uma classe chamada CartaoDeVisitas',
          'Adicione o método main',
          'Primeiro, imprima uma linha de separação com "========================"',
          'Depois imprima cada dado em uma linha (Nome, Profissão, E-mail)',
          'Por último, imprima outra linha de separação',
          'Use System.out.println() para cada linha',
        ],
        expectedOutput: `========================
  Nome: [Seu Nome]
  Profissão: Desenvolvedor(a)
  E-mail: seuemail@exemplo.com
========================`,
      },
      {
        title: 'Tabuada Impressa',
        difficulty: 'Médio',
        description:
          'Crie um programa que exiba a tabuada do número 3, do 1 ao 5, usando apenas System.out.println(). Não use loops — escreva cada linha manualmente.',
        steps: [
          'Crie uma classe chamada TabuadaDeTres',
          'Adicione o método main',
          'Calcule mentalmente cada resultado: 3x1=3, 3x2=6, 3x3=9...',
          'Use System.out.println() para cada linha da tabuada',
          'O formato de cada linha deve ser: "3 x 1 = 3"',
          'Escreva as 5 linhas da tabuada',
        ],
        expectedOutput: `3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15`,
      },
      {
        title: 'Arte com Asteriscos',
        difficulty: 'Difícil',
        description:
          'Crie um programa que desenhe um quadrado 4x4 feito de asteriscos (*) usando System.out.println(). Cada linha deve ter exatamente 4 asteriscos.',
        steps: [
          'Crie uma classe chamada ArteAscii',
          'Adicione o método main',
          'Pense: quantas linhas tem um quadrado 4x4? (4 linhas)',
          'Cada linha deve conter exatamente os caracteres "****"',
          'Use System.out.println("****") para cada linha',
          'Repita isso 4 vezes para formar o quadrado completo',
        ],
        expectedOutput: `****
****
****
****`,
      },
    ],
    tips: [
      'Java é case-sensitive: "System" é diferente de "system"',
      'Todo programa Java precisa de uma classe e um método main',
      'Use nomes descritivos para suas classes, começando sempre com letra maiúscula',
      'A extensão dos arquivos Java é sempre .java',
    ],
  },
  {
    id: 'variaveis',
    title: 'Variáveis e Tipos de Dados',
    description: 'Aprenda a armazenar e trabalhar com diferentes tipos de informações',
    explanation: `Variáveis são como "caixinhas" onde guardamos informações no nosso programa.

Imagine que você tem várias caixas em casa: uma para guardar brinquedos, outra para livros, outra para roupas. Em programação é a mesma coisa!

Cada variável tem:
• Um NOME: para identificarmos (ex: "idade", "nome")
• Um TIPO: define o que ela pode guardar (números, textos, etc.)
• Um VALOR: a informação que está guardada nela

Em Java, existem vários tipos de dados:
• int: números inteiros (1, 2, 100, -5)
• double: números com vírgula (3.14, 10.5)
• String: textos ("João", "Olá!")
• boolean: verdadeiro ou falso (true/false)
• char: um único caractere ('A', 'x', '5')`,
    codeExamples: [
      {
        title: 'Criando variáveis básicas',
        code: `public class Variaveis {
    public static void main(String[] args) {
        // Números inteiros
        int idade = 15;
        int alunos = 30;

        // Números com vírgula
        double altura = 1.75;
        double preco = 19.90;

        // Textos
        String nome = "Maria";
        String cidade = "São Paulo";

        // Verdadeiro ou falso
        boolean aprovado = true;
        boolean chovendo = false;

        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
        System.out.println("Altura: " + altura);
    }
}`,
        explanation:
          'Aqui criamos várias variáveis de diferentes tipos. Note que para criar uma variável, escrevemos: tipo + nome + = + valor. As duas barras (//) são usadas para comentários, que o Java ignora.',
      },
      {
        title: 'Operações com variáveis',
        code: `public class Calculos {
    public static void main(String[] args) {
        int numero1 = 10;
        int numero2 = 5;

        int soma = numero1 + numero2;
        int subtracao = numero1 - numero2;
        int multiplicacao = numero1 * numero2;
        int divisao = numero1 / numero2;

        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação: " + multiplicacao);
        System.out.println("Divisão: " + divisao);
    }
}`,
        explanation:
          'Podemos fazer operações matemáticas com variáveis numéricas. Os operadores são: + (soma), - (subtração), * (multiplicação), / (divisão).',
      },
    ],
    exercises: [
      {
        title: 'Minhas Variáveis',
        difficulty: 'Fácil',
        description:
          'Declare variáveis para armazenar seu nome (String), sua idade (int) e sua altura em metros (double). Depois exiba cada uma delas.',
        steps: [
          'Crie uma classe chamada MinhasVariaveis com o método main',
          'Declare uma variável String para o nome: String nome = "Seu Nome";',
          'Declare uma variável int para a idade: int idade = 20;',
          'Declare uma variável double para a altura: double altura = 1.75;',
          'Use System.out.println() para exibir cada variável com um rótulo',
          'Use o operador + para juntar o rótulo com o valor: "Nome: " + nome',
        ],
        expectedOutput: `Nome: [Seu Nome]
Idade: [Sua Idade]
Altura: [Sua Altura]`,
      },
      {
        title: 'Soma de Dois Números',
        difficulty: 'Fácil',
        description:
          'Crie variáveis para dois números inteiros, some-os e exiba o resultado no formato "X + Y = Z".',
        steps: [
          'Crie uma classe chamada SomaDoisNumeros com o método main',
          'Declare int numero1 = 15; e int numero2 = 8;',
          'Crie uma terceira variável int resultado = numero1 + numero2;',
          'Use System.out.println() para exibir a conta completa',
          'Junte tudo com o operador +: numero1 + " + " + numero2 + " = " + resultado',
        ],
        expectedOutput: `15 + 8 = 23`,
      },
      {
        title: 'Calculadora de IMC',
        difficulty: 'Médio',
        description:
          'Crie variáveis para peso (double) e altura (double), calcule o IMC usando a fórmula IMC = peso / (altura * altura) e exiba o resultado.',
        steps: [
          'Crie uma classe chamada CalculadoraIMC com o método main',
          'Declare double peso = 70.0; (use um valor de sua escolha)',
          'Declare double altura = 1.75; (use um valor de sua escolha)',
          'Calcule: double imc = peso / (altura * altura);',
          'Exiba o peso, a altura e o IMC calculado',
          'Dica: o resultado terá muitas casas decimais, isso é normal por enquanto',
        ],
        expectedOutput: `Peso: 70.0 kg
Altura: 1.75 m
IMC: 22.857142857142858`,
      },
      {
        title: 'Conversor de Temperatura',
        difficulty: 'Médio',
        description:
          'Crie uma variável para a temperatura em Celsius (double) e converta para Fahrenheit usando a fórmula: F = C * 9.0 / 5 + 32. Exiba ambos os valores.',
        steps: [
          'Crie uma classe chamada ConversorTemperatura com o método main',
          'Declare double celsius = 25.0;',
          'Calcule: double fahrenheit = celsius * 9.0 / 5 + 32;',
          'Atenção: use 9.0 (não 9) para forçar divisão decimal',
          'Exiba a temperatura em Celsius e em Fahrenheit',
        ],
        expectedOutput: `Temperatura em Celsius: 25.0°C
Temperatura em Fahrenheit: 77.0°F`,
      },
      {
        title: 'Calculadora Completa',
        difficulty: 'Difícil',
        description:
          'Declare dois números inteiros (ex: 20 e 4). Calcule e exiba a soma, subtração, multiplicação, divisão inteira e o resto da divisão (operador %) entre eles.',
        steps: [
          'Crie uma classe chamada CalculadoraCompleta com o método main',
          'Declare int a = 20; e int b = 4;',
          'Crie variáveis separadas para cada operação: soma, subtracao, multiplicacao, divisao, resto',
          'Para o resto da divisão, use o operador %: int resto = a % b;',
          'Exiba todas as operações com seus resultados, uma por linha',
          'Formato: "20 + 4 = 24", "20 - 4 = 16", etc.',
        ],
        expectedOutput: `20 + 4 = 24
20 - 4 = 16
20 * 4 = 80
20 / 4 = 5
20 % 4 = 0`,
      },
    ],
    tips: [
      'Escolha nomes de variáveis que façam sentido: "idade" é melhor que "x"',
      'Em Java, usamos camelCase: primeiroNome (primeira palavra minúscula, próximas com maiúscula)',
      'String começa com letra maiúscula porque é um tipo especial',
      'Não use acentos ou espaços em nomes de variáveis',
    ],
  },
  {
    id: 'condicionais',
    title: 'Estruturas Condicionais',
    description: 'Tome decisões no seu código com if, else e switch',
    explanation: `Estruturas condicionais permitem que nosso programa tome DECISÕES!

É como na vida real: "SE estiver chovendo, ENTÃO leve guarda-chuva, SENÃO leve óculos de sol"

Em Java, usamos principalmente duas estruturas:

1. IF / ELSE (SE / SENÃO)
   • Testa uma condição
   • Se for verdadeira, executa um bloco de código
   • Se for falsa, pode executar outro bloco

2. SWITCH (ESCOLHA)
   • Útil quando temos várias opções específicas
   • Como um menu: escolha a opção 1, 2, 3...

Para fazer comparações, usamos:
• == (igual a)
• != (diferente de)
• > (maior que)
• < (menor que)
• >= (maior ou igual)
• <= (menor ou igual)`,
    codeExamples: [
      {
        title: 'Usando IF e ELSE',
        code: `public class Condicional {
    public static void main(String[] args) {
        int idade = 16;

        if (idade >= 18) {
            System.out.println("Você é maior de idade!");
            System.out.println("Pode tirar carteira de motorista.");
        } else {
            System.out.println("Você é menor de idade.");
            System.out.println("Ainda não pode dirigir.");
        }

        // Condições múltiplas
        int nota = 7;

        if (nota >= 7) {
            System.out.println("Aprovado!");
        } else if (nota >= 5) {
            System.out.println("Recuperação");
        } else {
            System.out.println("Reprovado");
        }
    }
}`,
        explanation:
          'O IF verifica se uma condição é verdadeira. Se for, executa o código dentro das chaves {}. O ELSE é executado quando a condição é falsa. Podemos usar ELSE IF para testar múltiplas condições.',
      },
      {
        title: 'Usando SWITCH',
        code: `public class DiaSemana {
    public static void main(String[] args) {
        int dia = 3;

        switch (dia) {
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda-feira");
                break;
            case 3:
                System.out.println("Terça-feira");
                break;
            case 4:
                System.out.println("Quarta-feira");
                break;
            default:
                System.out.println("Outro dia");
        }
    }
}`,
        explanation:
          'O SWITCH é útil quando queremos comparar uma variável com vários valores específicos. Cada CASE representa uma opção. O BREAK impede que o código continue executando os próximos casos. O DEFAULT é executado se nenhum caso for verdadeiro.',
      },
    ],
    exercises: [
      {
        title: 'Positivo, Negativo ou Zero',
        difficulty: 'Fácil',
        description:
          'Crie um programa que declare um número inteiro e verifique se ele é positivo, negativo ou zero, exibindo a mensagem correspondente.',
        steps: [
          'Crie uma classe chamada VerificaNumero com o método main',
          'Declare int numero = -5; (escolha qualquer número para testar)',
          'Use if para verificar se numero > 0: exiba "O número é positivo"',
          'Use else if para verificar se numero < 0: exiba "O número é negativo"',
          'Use else para o caso restante: exiba "O número é zero"',
          'Teste com valores diferentes (positivo, negativo e zero)',
        ],
        expectedOutput: `O número -5 é negativo`,
      },
      {
        title: 'Pode Votar?',
        difficulty: 'Fácil',
        description:
          'Crie um programa com uma variável de idade (int) e verifique se a pessoa pode votar. No Brasil, o voto é obrigatório a partir dos 18 anos, facultativo a partir dos 16.',
        steps: [
          'Crie uma classe chamada PodeVotar com o método main',
          'Declare int idade = 17;',
          'Use if para verificar se idade >= 18: exiba "Voto obrigatório"',
          'Use else if para verificar se idade >= 16: exiba "Voto facultativo"',
          'Use else para o restante: exiba "Não pode votar ainda"',
          'Teste trocando o valor da idade',
        ],
        expectedOutput: `Idade: 17 anos
Situação: Voto facultativo`,
      },
      {
        title: 'Classificação de Notas',
        difficulty: 'Médio',
        description:
          'Crie um programa que receba uma nota (double) e classifique o aluno: A (nota >= 9), B (nota >= 7), C (nota >= 5) ou Reprovado (nota < 5).',
        steps: [
          'Crie uma classe chamada ClassificacaoNota com o método main',
          'Declare double nota = 8.5;',
          'Use if / else if encadeados para verificar cada faixa',
          'Comece sempre pela condição MAIOR (>= 9), pois o Java testa na ordem',
          'Exiba a nota e a classificação obtida',
          'Teste com notas diferentes para validar cada caso',
        ],
        expectedOutput: `Nota: 8.5
Classificação: B`,
      },
      {
        title: 'Nome do Dia da Semana',
        difficulty: 'Médio',
        description:
          'Crie um programa com uma variável int dia (de 1 a 7) e use switch para exibir o nome do dia correspondente. Trate o caso de número inválido.',
        steps: [
          'Crie uma classe chamada DiaDaSemana com o método main',
          'Declare int dia = 4;',
          'Crie um switch(dia) com cases de 1 a 7',
          '1 = Domingo, 2 = Segunda-feira, 3 = Terça-feira, 4 = Quarta-feira, 5 = Quinta-feira, 6 = Sexta-feira, 7 = Sábado',
          'Não esqueça do break em cada case',
          'Adicione um default com: "Número inválido. Digite de 1 a 7."',
        ],
        expectedOutput: `Dia 4: Quarta-feira`,
      },
      {
        title: 'Mini Calculadora com Condicionais',
        difficulty: 'Difícil',
        description:
          'Crie variáveis para dois números (double) e uma operação (char: +, -, *, /). Use switch para realizar o cálculo correto. Se a operação for "/" e o segundo número for 0, exiba "Erro: divisão por zero!".',
        steps: [
          'Crie uma classe chamada MiniCalculadora com o método main',
          'Declare double num1 = 10.0;, double num2 = 0.0;, char operacao = \'/\';',
          'Crie um switch(operacao) com cases para \'+\', \'-\', \'*\', \'/\'',
          'No case \'*\': calcule e exiba o resultado normalmente',
          'No case \'/\': ANTES de calcular, use if para checar se num2 == 0',
          'Se num2 for 0, exiba o erro. Se não, calcule e exiba o resultado',
          'Adicione default para operação desconhecida',
        ],
        expectedOutput: `Operação: 10.0 / 0.0
Erro: divisão por zero!`,
      },
    ],
    tips: [
      'Use == para comparar valores, não = (que é para atribuir)',
      'Sempre use chaves {} no if/else, mesmo que tenha apenas uma linha',
      'O SWITCH funciona bem com int, String e char',
      'Você pode combinar condições usando && (E) e || (OU)',
    ],
  },
  {
    id: 'loops',
    title: 'Loops (for, while)',
    description: 'Repita ações automaticamente com estruturas de repetição',
    explanation: `Loops (ou laços de repetição) são usados quando queremos repetir uma ação várias vezes.

Imagine que você precisa escrever "Eu vou estudar" 100 vezes. Seria muito cansativo, não é? Com loops, o computador faz isso automaticamente!

Java tem três tipos principais de loops:

1. FOR (PARA)
   • Usado quando sabemos QUANTAS vezes queremos repetir
   • Exemplo: repetir 10 vezes

2. WHILE (ENQUANTO)
   • Usado quando NÃO sabemos quantas vezes vamos repetir
   • Continua enquanto uma condição for verdadeira
   • Exemplo: enquanto não encontrar a resposta certa

3. DO-WHILE (FAÇA-ENQUANTO)
   • Similar ao WHILE, mas executa pelo menos uma vez
   • Verifica a condição no final

O FOR é o mais comum e mais usado no dia a dia!`,
    codeExamples: [
      {
        title: 'Loop FOR básico',
        code: `public class LoopFor {
    public static void main(String[] args) {
        // Contar de 1 até 5
        for (int i = 1; i <= 5; i++) {
            System.out.println("Número: " + i);
        }

        // Tabuada do 5
        System.out.println("\\nTabuada do 5:");
        for (int i = 1; i <= 10; i++) {
            int resultado = 5 * i;
            System.out.println("5 x " + i + " = " + resultado);
        }
    }
}`,
        explanation:
          'O FOR tem três partes: inicialização (int i = 1), condição (i <= 5), e incremento (i++). O loop continua executando enquanto a condição for verdadeira. O i++ significa "adicione 1 ao i".',
      },
      {
        title: 'Loop WHILE',
        code: `public class LoopWhile {
    public static void main(String[] args) {
        // Contagem regressiva
        int contador = 5;

        while (contador > 0) {
            System.out.println("Contagem: " + contador);
            contador--;  // Diminui 1
        }

        System.out.println("Acabou!");

        // Somando números
        int numero = 1;
        int soma = 0;

        while (numero <= 5) {
            soma = soma + numero;
            numero++;
        }

        System.out.println("Soma total: " + soma);
    }
}`,
        explanation:
          'O WHILE continua repetindo enquanto a condição for verdadeira. É importante lembrar de modificar a variável dentro do loop (como contador--), senão o loop nunca termina!',
      },
    ],
    exercises: [
      {
        title: 'Contar de 1 a 10',
        difficulty: 'Fácil',
        description:
          'Use um loop FOR para exibir os números de 1 a 10, cada um em uma linha.',
        steps: [
          'Crie uma classe chamada ContarAte10 com o método main',
          'Escreva um for com início i = 1, condição i <= 10, e incremento i++',
          'Dentro do loop, use System.out.println(i) para exibir o número',
          'O loop vai repetir 10 vezes, imprimindo 1, 2, 3... até 10',
          'Execute e confira se a saída está correta',
        ],
        expectedOutput: `1
2
3
4
5
6
7
8
9
10`,
      },
      {
        title: 'Tabuada do 7',
        difficulty: 'Fácil',
        description:
          'Use um loop FOR para exibir a tabuada completa do número 7, do 1 ao 10.',
        steps: [
          'Crie uma classe chamada TabuadaDeSete com o método main',
          'Crie um for com i de 1 até 10',
          'Dentro do loop, calcule: int resultado = 7 * i;',
          'Exiba no formato: "7 x " + i + " = " + resultado',
          'O loop vai gerar automaticamente as 10 linhas da tabuada',
        ],
        expectedOutput: `7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`,
      },
      {
        title: 'Soma de 1 a 100',
        difficulty: 'Médio',
        description:
          'Use um loop FOR para somar todos os números de 1 a 100 e exiba o resultado final.',
        steps: [
          'Crie uma classe chamada SomaAte100 com o método main',
          'Declare int soma = 0; ANTES do loop (acumulador)',
          'Crie um for com i de 1 até 100',
          'Dentro do loop, adicione: soma = soma + i; (ou soma += i;)',
          'APÓS o loop (fora das chaves), exiba o valor de soma',
          'O resultado esperado é 5050 (Gauss já calculou isso!)',
        ],
        expectedOutput: `A soma de 1 a 100 é: 5050`,
      },
      {
        title: 'Números Pares',
        difficulty: 'Médio',
        description:
          'Use um loop FOR para exibir todos os números pares entre 1 e 20 (inclusive). Um número é par quando o resto da divisão por 2 é zero (numero % 2 == 0).',
        steps: [
          'Crie uma classe chamada NumerosPares com o método main',
          'Crie um for com i de 1 até 20',
          'Dentro do loop, use um if para verificar: if (i % 2 == 0)',
          'Se for par, exiba o número com System.out.println(i)',
          'Números pares entre 1 e 20: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20',
        ],
        expectedOutput: `2
4
6
8
10
12
14
16
18
20`,
      },
      {
        title: 'Triângulo de Asteriscos',
        difficulty: 'Difícil',
        description:
          'Use loops aninhados (um for dentro de outro) para desenhar um triângulo de asteriscos com 5 linhas. A linha 1 tem 1 asterisco, a linha 2 tem 2, e assim por diante.',
        steps: [
          'Crie uma classe chamada TrianguloAsteriscos com o método main',
          'Crie um loop externo: for (int linha = 1; linha <= 5; linha++)',
          'Dentro dele, crie um loop interno: for (int col = 1; col <= linha; col++)',
          'No loop interno, use System.out.print("*") — sem ln, para não pular a linha',
          'APÓS o loop interno (mas dentro do externo), use System.out.println() para pular de linha',
          'Dica: System.out.print() escreve sem quebra de linha; System.out.println() quebra',
        ],
        expectedOutput: `*
**
***
****
*****`,
      },
    ],
    tips: [
      'Tenha cuidado com loops infinitos! Sempre garanta que a condição vai se tornar falsa',
      'Use nomes claros para variáveis de controle: i, j, k são comuns mas contador, indice são mais legíveis',
      'O FOR é perfeito para percorrer arrays e listas',
      'Você pode usar break para sair de um loop antes dele terminar naturalmente',
    ],
  },
  {
    id: 'funcoes',
    title: 'Funções / Métodos',
    description: 'Organize seu código criando funções reutilizáveis',
    explanation: `Funções (ou métodos, em Java) são como "mini-programas" dentro do nosso programa principal!

Pense assim: se você sempre faz a mesma receita de bolo, é mais fácil ter a receita escrita em um lugar e usar ela sempre que precisar, certo? Funções funcionam assim!

Vantagens de usar funções:
• ORGANIZAÇÃO: código mais limpo e fácil de entender
• REUTILIZAÇÃO: escreva uma vez, use várias vezes
• MANUTENÇÃO: se precisa mudar algo, muda em um lugar só

Toda função tem:
• NOME: identifica a função (ex: calcularSoma)
• PARÂMETROS: informações que ela recebe (opcional)
• TIPO DE RETORNO: o que ela devolve (ou void se não devolver nada)
• CORPO: o código que ela executa

Exemplo simples:
tipo nomeFunc(parametros) {
    // código aqui
    return resultado;
}`,
    codeExamples: [
      {
        title: 'Funções básicas',
        code: `public class Funcoes {
    // Função que não retorna nada (void)
    public static void saudacao() {
        System.out.println("Olá! Bem-vindo!");
        System.out.println("Vamos aprender Java!");
    }

    // Função que recebe parâmetro
    public static void saudarPessoa(String nome) {
        System.out.println("Olá, " + nome + "!");
        System.out.println("Que bom te ver por aqui!");
    }

    // Função que retorna um valor
    public static int somar(int a, int b) {
        int resultado = a + b;
        return resultado;
    }

    public static void main(String[] args) {
        saudacao();
        saudarPessoa("João");

        int soma = somar(5, 3);
        System.out.println("Resultado: " + soma);
    }
}`,
        explanation:
          'Criamos três funções diferentes: uma sem parâmetros e sem retorno, outra que recebe um nome, e uma que recebe dois números e retorna a soma. Depois chamamos todas elas no main.',
      },
      {
        title: 'Funções com múltiplos parâmetros',
        code: `public class Calculadora {
    public static double calcularMedia(double n1, double n2, double n3) {
        double soma = n1 + n2 + n3;
        double media = soma / 3;
        return media;
    }

    public static boolean estaAprovado(double media) {
        if (media >= 7.0) {
            return true;
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        double media = calcularMedia(8.5, 7.0, 9.0);
        System.out.println("Média: " + media);

        boolean aprovado = estaAprovado(media);
        if (aprovado) {
            System.out.println("Parabéns! Você foi aprovado!");
        } else {
            System.out.println("Estude mais para a próxima!");
        }
    }
}`,
        explanation:
          'Aqui criamos uma mini calculadora de notas. A função calcularMedia recebe três notas e retorna a média. A função estaAprovado verifica se a média é suficiente e retorna true ou false.',
      },
    ],
    exercises: [
      {
        title: 'Método de Saudação',
        difficulty: 'Fácil',
        description:
          'Crie um método chamado saudar que receba um String nome e não retorne nada (void). O método deve exibir "Olá, [nome]! Seja bem-vindo(a)!". Chame o método no main com dois nomes diferentes.',
        steps: [
          'Crie uma classe chamada MetodoSaudacao com o método main',
          'ANTES do main, crie o método: public static void saudar(String nome)',
          'Dentro do método saudar, use System.out.println("Olá, " + nome + "! Seja bem-vindo(a)!")',
          'No main, chame saudar("Ana"); e depois saudar("Carlos");',
          'Veja que o mesmo método funciona com nomes diferentes!',
        ],
        expectedOutput: `Olá, Ana! Seja bem-vindo(a)!
Olá, Carlos! Seja bem-vindo(a)!`,
      },
      {
        title: 'Método que Retorna Soma',
        difficulty: 'Fácil',
        description:
          'Crie um método chamado somar que receba dois inteiros (a e b) e retorne a soma deles (int). No main, chame o método e exiba o resultado.',
        steps: [
          'Crie uma classe chamada MetodoSoma com o método main',
          'Crie o método: public static int somar(int a, int b)',
          'Dentro do método, use return a + b;',
          'No main, chame: int resultado = somar(12, 8);',
          'Exiba: System.out.println("12 + 8 = " + resultado);',
          'Experimente chamar somar() com outros valores também',
        ],
        expectedOutput: `12 + 8 = 20`,
      },
      {
        title: 'Verificar Par ou Ímpar',
        difficulty: 'Médio',
        description:
          'Crie um método chamado ehPar que receba um int numero e retorne true se for par, false se for ímpar. No main, teste com três números e exiba o resultado para cada um.',
        steps: [
          'Crie uma classe chamada VerificaPar com o método main',
          'Crie o método: public static boolean ehPar(int numero)',
          'Dentro do método, use: return numero % 2 == 0;',
          'O operador % retorna o RESTO da divisão. Se o resto por 2 for 0, é par',
          'No main, chame ehPar(4), ehPar(7) e ehPar(10)',
          'Exiba os resultados no formato: "4 é par? true"',
        ],
        expectedOutput: `4 é par? true
7 é par? false
10 é par? true`,
      },
      {
        title: 'Calcular Potência',
        difficulty: 'Médio',
        description:
          'Crie um método chamado potencia que receba base (int) e expoente (int) e calcule base^expoente usando um loop FOR. Retorne o resultado como int. Teste com 2^8 no main.',
        steps: [
          'Crie uma classe chamada CalculaPotencia com o método main',
          'Crie o método: public static int potencia(int base, int expoente)',
          'Dentro do método, declare int resultado = 1;',
          'Use um for de 1 até expoente, multiplicando: resultado = resultado * base;',
          'Após o loop, use return resultado;',
          'No main, chame potencia(2, 8) e exiba o resultado',
        ],
        expectedOutput: `2 elevado a 8 = 256`,
      },
      {
        title: 'Calculadora com Métodos',
        difficulty: 'Difícil',
        description:
          'Crie métodos separados para somar, subtrair, multiplicar e dividir (todos recebem dois doubles). No main, declare dois números e exiba o resultado de todas as operações.',
        steps: [
          'Crie uma classe chamada CalculadoraMetodos com o método main',
          'Crie 4 métodos: somar, subtrair, multiplicar, dividir — todos recebem double a, double b e retornam double',
          'No método dividir, antes de dividir, verifique se b == 0 e retorne 0 caso seja (ou trate o erro)',
          'No main, declare double x = 15.0; e double y = 3.0;',
          'Chame cada método e exiba os resultados formatados',
        ],
        expectedOutput: `15.0 + 3.0 = 18.0
15.0 - 3.0 = 12.0
15.0 * 3.0 = 45.0
15.0 / 3.0 = 5.0`,
      },
    ],
    tips: [
      'Use nomes descritivos para funções: calcularTotal é melhor que calc',
      'Uma boa função faz UMA coisa bem feita, não várias coisas',
      'Se sua função tem "e" no nome (ex: salvarEImprimir), talvez deva ser duas funções',
      'Funções static podem ser chamadas sem criar objetos (veremos isso em OO)',
    ],
  },
  {
    id: 'orientacao-objetos',
    title: 'Orientação a Objetos',
    description: 'Entenda classes, objetos e os conceitos básicos de OO',
    explanation: `Orientação a Objetos (OO) é uma forma de organizar código que imita o mundo real!

Pense assim: no mundo real, tudo são OBJETOS. Um cachorro, um carro, uma pessoa... cada objeto tem:
• CARACTERÍSTICAS (atributos): cor, tamanho, nome...
• COMPORTAMENTOS (métodos): latir, acelerar, falar...

Em programação:
• CLASSE: é o "molde", a receita (ex: Classe Cachorro)
• OBJETO: é algo criado a partir do molde (ex: meu cachorro Rex)

Exemplo prático:
• Classe Carro é o projeto de um carro
• Cada carro específico (meu Fusca azul) é um OBJETO

Vantagens da OO:
✓ Código mais organizado e fácil de entender
✓ Reutilização: crie o molde e use quantas vezes quiser
✓ Manutenção mais fácil
✓ Representa melhor o mundo real

Os 4 pilares da OO são: Encapsulamento, Herança, Polimorfismo e Abstração (vamos ver isso depois!)`,
    codeExamples: [
      {
        title: 'Criando uma classe simples',
        code: `// Classe Cachorro (o molde)
class Cachorro {
    // Atributos (características)
    String nome;
    String raca;
    int idade;

    // Método (comportamento)
    void latir() {
        System.out.println(nome + " diz: Au au!");
    }

    void apresentar() {
        System.out.println("Olá! Meu nome é " + nome);
        System.out.println("Sou um " + raca);
        System.out.println("Tenho " + idade + " anos");
    }
}

public class Programa {
    public static void main(String[] args) {
        // Criando objetos (cachorros específicos)
        Cachorro rex = new Cachorro();
        rex.nome = "Rex";
        rex.raca = "Labrador";
        rex.idade = 3;

        Cachorro bob = new Cachorro();
        bob.nome = "Bob";
        bob.raca = "Bulldog";
        bob.idade = 5;

        // Usando os métodos
        rex.apresentar();
        rex.latir();

        System.out.println();
        bob.apresentar();
        bob.latir();
    }
}`,
        explanation:
          'Criamos a classe Cachorro com atributos (nome, raça, idade) e métodos (latir, apresentar). Depois, no main, criamos dois objetos diferentes (Rex e Bob) a partir da mesma classe. Cada um tem suas próprias características!',
      },
      {
        title: 'Classe com construtor',
        code: `class Pessoa {
    String nome;
    int idade;

    // Construtor: método especial para criar objetos
    Pessoa(String n, int i) {
        nome = n;
        idade = i;
        System.out.println("Pessoa criada: " + nome);
    }

    void fazerAniversario() {
        idade++;
        System.out.println(nome + " fez aniversário!");
        System.out.println("Nova idade: " + idade);
    }
}

public class Programa {
    public static void main(String[] args) {
        // Criando com construtor
        Pessoa maria = new Pessoa("Maria", 20);
        Pessoa joao = new Pessoa("João", 25);

        maria.fazerAniversario();
        joao.fazerAniversario();
    }
}`,
        explanation:
          'O CONSTRUTOR é um método especial que é executado quando criamos um novo objeto. Ele tem o mesmo nome da classe e não tem tipo de retorno. Facilita a criação de objetos já com valores iniciais.',
      },
    ],
    exercises: [
      {
        title: 'Classe Animal',
        difficulty: 'Fácil',
        description:
          'Crie uma classe Animal com os atributos nome (String) e som (String). Adicione um método emitirSom() que exiba "[nome] faz: [som]". No main, crie dois animais diferentes e chame o método.',
        steps: [
          'Crie uma classe Animal (sem "public" por enquanto)',
          'Adicione os atributos: String nome; e String som;',
          'Crie o método: void emitirSom() { System.out.println(nome + " faz: " + som); }',
          'Na classe principal (com o main), crie: Animal cachorro = new Animal();',
          'Atribua valores: cachorro.nome = "Rex"; cachorro.som = "Au au!";',
          'Chame cachorro.emitirSom(); e faça o mesmo para outro animal',
        ],
        expectedOutput: `Rex faz: Au au!
Mia faz: Miau!`,
      },
      {
        title: 'Classe Carro',
        difficulty: 'Fácil',
        description:
          'Crie uma classe Carro com os atributos marca (String), modelo (String) e ano (int). Adicione um método exibirDados() que exiba todas as informações. Instancie dois carros no main.',
        steps: [
          'Crie uma classe Carro com os três atributos',
          'Crie o método void exibirDados() que exiba cada atributo em uma linha',
          'No main, crie: Carro carro1 = new Carro();',
          'Atribua valores a carro1.marca, carro1.modelo e carro1.ano',
          'Chame carro1.exibirDados();',
          'Crie um segundo carro (carro2) com dados diferentes e exiba também',
        ],
        expectedOutput: `Marca: Toyota
Modelo: Corolla
Ano: 2022
---
Marca: Honda
Modelo: Civic
Ano: 2020`,
      },
      {
        title: 'Classe Aluno com Construtor',
        difficulty: 'Médio',
        description:
          'Crie uma classe Aluno com nome (String) e nota (double). Adicione um construtor que receba esses valores. Crie um método verificarSituacao() que exiba se o aluno foi aprovado (nota >= 7) ou reprovado.',
        steps: [
          'Crie a classe Aluno com os atributos String nome e double nota',
          'Crie o construtor: Aluno(String nome, double nota) e atribua os valores com this.nome = nome; this.nota = nota;',
          'Crie o método void verificarSituacao()',
          'Dentro do método, use if/else para verificar se nota >= 7 e exiba o resultado',
          'No main, crie: Aluno aluno1 = new Aluno("Pedro", 8.5);',
          'Chame aluno1.verificarSituacao(); e repita com um aluno reprovado',
        ],
        expectedOutput: `Pedro - Nota: 8.5 - Aprovado!
Lucia - Nota: 5.0 - Reprovado.`,
      },
      {
        title: 'Produto Mais Barato',
        difficulty: 'Médio',
        description:
          'Crie uma classe Produto com nome (String) e preco (double). Instancie 3 produtos no main e descubra qual é o mais barato, exibindo seu nome e preço.',
        steps: [
          'Crie a classe Produto com atributos nome e preco',
          'No main, crie três produtos: Produto p1 = new Produto(); (sem construtor)',
          'Atribua nome e preco para cada produto',
          'Crie uma variável Produto maisBarato = p1; para iniciar a comparação',
          'Use if para comparar: if (p2.preco < maisBarato.preco) maisBarato = p2;',
          'Repita a comparação com p3 e depois exiba o produto mais barato',
        ],
        expectedOutput: `Produto mais barato:
Caneta - R$ 1.50`,
      },
      {
        title: 'Conta Bancária',
        difficulty: 'Difícil',
        description:
          'Crie uma classe ContaBancaria com titular (String) e saldo (double). Adicione um construtor, um método depositar(double valor) e um método sacar(double valor) — o saque deve validar se há saldo suficiente. Crie uma conta no main e faça operações.',
        steps: [
          'Crie a classe ContaBancaria com String titular e double saldo',
          'Crie o construtor: ContaBancaria(String titular, double saldoInicial)',
          'Crie void depositar(double valor): some o valor ao saldo e exiba uma mensagem',
          'Crie void sacar(double valor): use if para verificar se saldo >= valor. Se sim, subtraia e exiba mensagem. Se não, exiba "Saldo insuficiente!"',
          'Crie void exibirSaldo() para mostrar o saldo atual',
          'No main, crie uma conta, deposite R$500, saque R$200, tente sacar R$400 (deve falhar) e exiba o saldo final',
        ],
        expectedOutput: `Conta de: João Silva
Depósito de R$500.0 realizado. Saldo: R$500.0
Saque de R$200.0 realizado. Saldo: R$300.0
Saldo insuficiente! Saldo atual: R$300.0
Saldo final: R$300.0`,
      },
    ],
    tips: [
      'Nomes de classes sempre começam com letra MAIÚSCULA (Cachorro, Pessoa, Carro)',
      'Use "new" para criar novos objetos a partir de uma classe',
      'Atributos são as "características", métodos são as "ações"',
      'Um construtor facilita criar objetos com valores iniciais já definidos',
    ],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Armazene múltiplos valores em uma única variável',
    explanation: `Arrays (ou vetores) são como uma "lista" de variáveis do mesmo tipo!

Imagine uma estante com várias gavetas numeradas. Cada gaveta pode guardar um item. Um array funciona assim!

Por que usar arrays?
• Guardar muitos valores relacionados (ex: notas de 30 alunos)
• Organizar dados de forma estruturada
• Facilitar operações em múltiplos valores

Características dos arrays:
• Guardam múltiplos valores do MESMO tipo
• Têm tamanho FIXO (definido na criação)
• As posições começam em 0 (não em 1!)
• Usamos índices para acessar cada posição

Exemplo:
int[] numeros = {10, 20, 30};
• numeros[0] = 10
• numeros[1] = 20
• numeros[2] = 30

Arrays são muito úteis com loops FOR, pois podemos percorrer todos os elementos facilmente!`,
    codeExamples: [
      {
        title: 'Criando e usando arrays',
        code: `public class ExemploArrays {
    public static void main(String[] args) {
        // Forma 1: criando array com valores
        int[] numeros = {10, 20, 30, 40, 50};

        // Acessando elementos
        System.out.println("Primeiro número: " + numeros[0]);
        System.out.println("Terceiro número: " + numeros[2]);

        // Forma 2: criando array vazio
        String[] nomes = new String[3];
        nomes[0] = "Ana";
        nomes[1] = "Bruno";
        nomes[2] = "Carlos";

        // Percorrendo array com FOR
        System.out.println("\\nLista de nomes:");
        for (int i = 0; i < nomes.length; i++) {
            System.out.println((i + 1) + ". " + nomes[i]);
        }
    }
}`,
        explanation:
          'Existem duas formas principais de criar arrays: com valores iniciais entre chaves {}, ou declarando o tamanho com "new". Usamos colchetes [] para acessar posições. A propriedade "length" nos dá o tamanho do array.',
      },
      {
        title: 'Arrays e operações',
        code: `public class OperacoesArrays {
    public static void main(String[] args) {
        double[] notas = {8.5, 7.0, 9.0, 6.5, 8.0};

        // Calcular média
        double soma = 0;
        for (int i = 0; i < notas.length; i++) {
            soma = soma + notas[i];
        }
        double media = soma / notas.length;
        System.out.println("Média: " + media);

        // Encontrar maior nota
        double maiorNota = notas[0];
        for (int i = 1; i < notas.length; i++) {
            if (notas[i] > maiorNota) {
                maiorNota = notas[i];
            }
        }
        System.out.println("Maior nota: " + maiorNota);

        // Contar quantas notas acima de 7
        int acimaDeSet = 0;
        for (double nota : notas) {
            if (nota >= 7.0) {
                acimaDeSet++;
            }
        }
        System.out.println("Notas >= 7: " + acimaDeSet);
    }
}`,
        explanation:
          'Arrays são perfeitos para fazer operações em múltiplos valores. Aqui calculamos média, encontramos o maior valor e contamos quantos atendem a uma condição. Note o "for-each" (for (double nota : notas)) que é uma forma mais simples de percorrer arrays.',
      },
    ],
    exercises: [
      {
        title: 'Lista de Nomes',
        difficulty: 'Fácil',
        description:
          'Crie um array de Strings com 5 nomes de amigos ou personagens. Use um loop FOR para exibir todos os nomes numerados (1. Nome, 2. Nome...).',
        steps: [
          'Crie uma classe chamada ListaNomes com o método main',
          'Declare o array: String[] nomes = {"Ana", "Bruno", "Carlos", "Diana", "Eduardo"};',
          'Crie um for com i de 0 até nomes.length - 1 (ou use i < nomes.length)',
          'Dentro do loop, exiba: (i + 1) + ". " + nomes[i]',
          'Lembre: o índice começa em 0, mas queremos mostrar ao usuário a partir do 1',
        ],
        expectedOutput: `1. Ana
2. Bruno
3. Carlos
4. Diana
5. Eduardo`,
      },
      {
        title: 'Soma dos Elementos',
        difficulty: 'Fácil',
        description:
          'Crie um array com 5 números inteiros à sua escolha. Use um loop FOR para calcular e exibir a soma total de todos os elementos.',
        steps: [
          'Crie uma classe chamada SomaArray com o método main',
          'Declare int[] numeros = {10, 25, 8, 42, 15}; (ou qualquer 5 números)',
          'Declare int soma = 0; antes do loop',
          'No loop, some cada elemento: soma = soma + numeros[i];',
          'Após o loop, exiba o valor total de soma',
        ],
        expectedOutput: `Números: 10, 25, 8, 42, 15
Soma total: 100`,
      },
      {
        title: 'Maior e Menor Valor',
        difficulty: 'Médio',
        description:
          'Dado o array int[] valores = {34, 7, 23, 56, 12, 45, 3}, encontre e exiba o maior e o menor valor sem usar métodos prontos do Java.',
        steps: [
          'Crie uma classe chamada MaiorMenor com o método main',
          'Declare o array: int[] valores = {34, 7, 23, 56, 12, 45, 3};',
          'Inicialize int maior = valores[0]; e int menor = valores[0];',
          'Percorra o array com for a partir do índice 1',
          'Use if (valores[i] > maior) para atualizar maior',
          'Use if (valores[i] < menor) para atualizar menor',
          'Após o loop, exiba o maior e o menor',
        ],
        expectedOutput: `Maior valor: 56
Menor valor: 3`,
      },
      {
        title: 'Contagem de Aprovados',
        difficulty: 'Médio',
        description:
          'Dado o array double[] notas = {8.5, 4.0, 7.0, 6.5, 9.0, 3.5, 7.5}, conte quantos alunos foram aprovados (nota >= 7) e quantos foram reprovados. Exiba os dois valores.',
        steps: [
          'Crie uma classe chamada ContaAprovados com o método main',
          'Declare o array de notas',
          'Declare int aprovados = 0; e int reprovados = 0;',
          'Use um for-each: for (double nota : notas)',
          'Dentro do loop, use if (nota >= 7.0) para incrementar aprovados, senão incrementa reprovados',
          'Após o loop, exiba a quantidade de cada',
        ],
        expectedOutput: `Total de alunos: 7
Aprovados: 4
Reprovados: 3`,
      },
      {
        title: 'Array Invertido',
        difficulty: 'Difícil',
        description:
          'Crie um array com 5 números inteiros. Exiba o array na ordem original e depois exiba todos os elementos na ordem inversa (do último para o primeiro), sem usar métodos prontos.',
        steps: [
          'Crie uma classe chamada ArrayInvertido com o método main',
          'Declare int[] numeros = {1, 2, 3, 4, 5};',
          'Use um for normal (i de 0 a length-1) para exibir a ordem original',
          'Para inverter, use um for que começa do FIM: for (int i = numeros.length - 1; i >= 0; i--)',
          'Dentro do segundo loop, exiba numeros[i]',
          'Dica: numeros.length é 5, então o último índice é 4 (length - 1)',
        ],
        expectedOutput: `Ordem original: 1 2 3 4 5
Ordem inversa: 5 4 3 2 1`,
      },
    ],
    tips: [
      'Arrays começam em 0! O primeiro elemento é array[0], não array[1]',
      'O tamanho do array é fixo após a criação - não pode aumentar ou diminuir',
      'Cuidado com o erro "ArrayIndexOutOfBoundsException" - acontece quando tentamos acessar uma posição que não existe',
      'Use FOR tradicional quando precisa do índice, use FOR-EACH quando só precisa dos valores',
    ],
  },
];
