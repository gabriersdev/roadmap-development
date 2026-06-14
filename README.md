# Roadmap de Desenvolvimento

Um roteiro de aprendizagem curado e de código aberto para quem deseja iniciar na área de programação. O projeto centraliza os conceitos fundamentais e ferramentas essenciais utilizando materiais de qualidade e gratuitos disponíveis na internet.

## Estrutura do Roteiro

O conteúdo está organizado de forma sequencial para facilitar o aprendizado lógico:

1.  Lógica de Programação
2.  Front-end Básico (HTML, CSS e JavaScript)
3.  Versionamento de Código (Git e GitHub)
4.  Markdown
5.  Produtividade e Organização
6.  Frameworks Front-end
7.  Programação Orientada a Objetos (Java)
8.  Banco de Dados
9.  Fundamentos de Sistemas Operacionais
10. Algoritmos e Estrutura de Dados
11. Padrões de Arquitetura e Design
12. APIs e Segurança WEB

## Tecnologias Utilizadas no Repositório

Este projeto de documentação é construído utilizando [VitePress](https://vitepress.dev/), um gerador de sites estáticos baseado em Vue.js otimizado para documentações.

## Gerenciamento de Conteúdo (Roadmap Data)

Para facilitar a manutenabilidade do projeto, todos os cursos, projetos, desafios e recomendações estão centralizados em um único arquivo JavaScript: `docs/data/roadmapData.js`.
As páginas em Markdown (dentro de `docs/roadmap/`) utilizam um componente Vue global (`<RoadmapLists>`) que lê automaticamente os dados desse arquivo.

### Estrutura dos Dados

O arquivo exporta um objeto `roadmapData`, onde cada chave corresponde à categoria de uma página (ex: `logic`, `frontend`, etc.).

Dentro de cada categoria, você pode utilizar as seguintes propriedades (todas opcionais):

- `courses` (Array): Lista de cursos recomendados.
- `researchTopics` (Array): Tópicos sugeridos para pesquisa e aprofundamento.
- `todo` (Array): Exercícios práticos ou listas de tarefas.
- `toRead` (Array): Artigos, livros ou documentações sugeridas para leitura.
- `recommendations` (Array): Recomendações extras em geral.
- `projects` (Array): Ideias de projetos práticos.

### Atributos dos Elementos

Para as propriedades que aceitam links (como `courses`, `todo`, `toRead`, `recommendations` e `projects`), os elementos do Array podem ser objetos com a seguinte estrutura:

```javascript
{
  title: "Nome do Curso ou Material", // (Obrigatório) O texto que será exibido
  url: "https://link-do-material.com" // (Opcional) O link para o conteúdo. Se omitido, renderiza apenas como texto.
}
```

Para `researchTopics`, o array suporta textos simples (Strings):

```javascript
researchTopics: [
  "HTML Básico",
  "Flexbox e CSS Grid"
]
```

### Exemplo Completo

```javascript
export const roadmapData = {
  logic: {
    courses: [
      { title: "Lógica de Programação - IFSUL", url: "https://mundi.ifsul.edu.br/..." },
      { title: "Lógica Avançada (Apenas Texto)", url: null }
    ],
    researchTopics: [
      "Algoritmos de Ordenação",
      "Tipos de Dados"
    ],
    todo: [
      { title: "Lista de Exercícios", url: "https://site.com/exercicios" }
    ]
  }
};
```
## Como Executar Localmente

### Pré-requisitos
* Node.js (versão 18 ou superior)

### Instalação

1.  Clone este repositório:
    ```bash
    git clone https://github.com/lotus-media/blog.git
    cd blog
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run docs:dev
    ```

O servidor local estará disponível, por padrão, em `http://localhost:5173/`.

### Como Contribuir

Contribuições são bem-vindas. Sinta-se à vontade para abrir _Issues_ sugerindo novos materiais gratuitos, correções de links ou melhorias no conteúdo, bem como enviar _Pull Requests_ para agregar diretamente ao repositório.

## Licença

Este projeto é de código aberto. Consulte o arquivo `LICENSE` para mais detalhes (caso aplicável).
