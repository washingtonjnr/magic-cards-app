module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // Regras ESLint padrão recomendadas
    'no-console': 'warn', // Evita o uso de console.log() e afins em produção
    'no-debugger': 'warn', // Evita o uso de debugger em produção
    'no-alert': 'warn', // Evita o uso de alert em produção
    'no-unused-vars': 'warn', // Adverte sobre variáveis declaradas não utilizadas
    'no-var': 'error', // Prefere a declaração de variáveis com const ou let em vez de var
    'prefer-const': 'warn', // Sugere a preferência de uso de const quando possível
    'prefer-template': 'warn', // Sugere o uso de template literals em vez de concatenação de strings
    'no-const-assign': 'error', // Impede a reatribuição de valores a constantes
    'no-this-before-super': 'error', // Impede o uso de 'this' antes de chamar super() no construtor de uma classe
    'no-undef': 'error', // Impede o uso de variáveis não declaradas
    'no-use-before-define': 'error', // Impede o uso de variáveis antes de sua declaração
    'array-callback-return': 'warn', // Sugere o retorno em callbacks de métodos de array
    'constructor-super': 'error', // Impede a omissão de chamadas super() no construtor de classes extendidas
    'no-dupe-args': 'error', // Impede a duplicação de argumentos em funções
    'no-dupe-class-members': 'error', // Impede a duplicação de membros de classe
    'no-dupe-keys': 'error', // Impede a duplicação de chaves em objetos
    'no-duplicate-case': 'error', // Impede a duplicação de casos em instruções switch
    'no-empty': 'error', // Impede o uso de blocos de código vazios
    'no-extra-boolean-cast': 'warn', // Adverte sobre a conversão redundante de valores para boolean
    'no-extra-semi': 'warn', // Adverte sobre ponto e vírgula extras
    'no-func-assign': 'error', // Impede a reatribuição de valores a funções
    'no-invalid-regexp': 'error', // Impede a criação de expressões regulares inválidas
    'no-irregular-whitespace': 'error', // Impede a utilização de caracteres de espaço em branco inválidos
    'no-obj-calls': 'error', // Impede a utilização de funções globais como objetos
    'no-sparse-arrays': 'error', // Impede o uso de arrays com elementos vazios
    'no-unexpected-multiline': 'error', // Impede comportamento inesperado em quebras de linha em expressões
    'no-unreachable': 'error', // Impede a execução de código inacessível devido a instruções como return, throw, etc.
    'no-unsafe-finally': 'error', // Impede o uso de blocos finally que podem não ser executados
    'no-unsafe-negation': 'error', // Impede o uso de negação de maneira que possa induzir a erros
    'use-isnan': 'error', // Exige o uso de isNaN() para verificar NaN
    'valid-typeof': 'error', // Exige que o resultado do typeof seja comparado com uma string válida
    'eqeqeq': ['error', 'always'], // Exige o uso de === e !== em vez de == e !=
    'no-alert': 'error', // Impede o uso de alert, confirm e prompt
    'no-caller': 'error', // Impede o uso do arguments.caller e arguments.callee
    'no-empty-function': 'error', // Impede a criação de funções vazias
    'no-eval': 'error', // Impede o uso de eval()
    'no-floating-decimal': 'error', // Impede a utilização de ponto flutuante sem zero à esquerda
    'no-implied-eval': 'error', // Impede o uso de eval() de forma implícita através de setTimeout, setInterval, etc.
    'no-invalid-this': 'error', // Impede o uso de this fora de classes ou objetos
    'no-lone-blocks': 'error', // Impede o uso de blocos de código sem utilização de controle de fluxo (if, while, etc.)
    'no-multi-spaces': 'error', // Impede múltiplos espaços em branco que não estejam em strings ou comentários
    'no-multi-str': 'error', // Impede o uso de strings multilinha criadas com barras invertidas
    'no-new-func': 'error', // Impede a criação de funções através do construtor Function
    'no-new-wrappers': 'error', // Impede a criação de objetos wrappers para primitivos
    'no-octal': 'error', // Impede o uso de literais octais
    'no-octal-escape': 'error', // Impede o uso de sequências de escape octais
    'no-redeclare': 'error', // Impede a redeclaração de variáveis
    'no-return-assign': 'error', // Impede a atribuição em instruções de retorno
    'no-return-await': 'error', // Impede o retorno de uma instrução await em uma função que não seja assíncrona
    'no-self-assign': 'error', // Impede a atribuição a si mesmo
    'no-self-compare': 'error', // Impede comparações redundantes de variáveis consigo mesmas
    'no-sequences': 'error', // Impede o uso de sequências de expressões
    'no-throw-literal': 'error', // Exige que o argumento do throw seja uma instância de Error
    'no-unmodified-loop-condition': 'error', // Adverte sobre loops cuja condição nunca é alterada
    'no-unused-expressions': 'error', // Impede o uso de expressões não utilizadas
    'no-useless-call': 'error', // Impede o uso desnecessário de call() e apply()
    'no-useless-catch': 'error', // Impede a utilização de capturas de exceção vazias
    'no-useless-concat': 'error', // Impede a concatenação de literais de string sem utilidade
    'no-useless-escape': 'error', // Impede o uso de barras invertidas desnecessárias em strings
  }
};
