## Comandos Úteis

*   yarn tsc --init - gera tsconfig.json
*   yarn prisma init - Inicializa o prisma
*   yarn prisma migrate dev - Gera as entidades no banco
*   yarn prisma format - Ajusta os relacionamentos entre tabelas automaticamente
*   yarn prisma generate - caso a tabela já esteja criada e exista uma atualização, ela atualiza sem afetar a estrutura já criada


```` 
    o código do <b>tsconfig.json</b> foi obtido à partir do link à baixo, para trabalhar corretamente com o prisma.io

    https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres#create-project-setup
````

## Scripts

````
    "scripts": {
        "dev": "ts-node-dev --exit-child --transpile-only   --ignore-watch node_modules src/server.ts"
  },
````

*   <b>ts-node-dev</b>  - Roda a aplicação com typeScript;
*   <b>--exit-child</b> - Com o prisma, é necessário para dar reload automático ao salvar um arquivo;
*   <b>--transpile-only</b> - deixa mais rápida a aplicação pois não efetua validações;
*   <b>--ignore-watch node_modules</b> - Não irá monitorar alterações na pasta