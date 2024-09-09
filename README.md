***Trabalho de IHC***

**Descrição:**

Este script JavaScript implementa uma funcionalidade de pesquisa simples em uma página web. O usuário insere uma palavra-chave e o script procura por essa palavra em um conjunto de dados predefinido, exibindo os resultados relevantes.

**Como Usar:**

1. **Estrutura HTML:**
   * **Input:** Um campo de texto com o ID `campo-pesquisa` para o usuário inserir a palavra-chave.
   * **Seção de Resultados:** Uma seção com o ID `resultados-pesquisa` para exibir os resultados.
2. **JavaScript:**
   * **Array de Dados:** Um array chamado `dados` contendo os objetos a serem pesquisados. Cada objeto deve ter as seguintes propriedades:
     * `titulo`: Título do item.
     * `descricao`: Descrição do item.
     * `nomelink1`, `nomelink2`, `nomelink3`: Nomes dos links.
     * `link1`, `link2`, `link3`: URLs dos links.
     * `tags`: Tags associadas ao item.
   * **Função `pesquisar()`:** Chamada ao enviar o formulário ou ao pressionar um botão. A função:
     * Obtém a palavra-chave do input.
     * Itera sobre o array de dados, procurando pela palavra-chave em cada campo.
     * Constrói o HTML dos resultados e insere na seção correspondente.

**Exemplo de Uso:**

```html
<input type="text" id="campo-pesquisa" placeholder="Digite sua pesquisa">
<button onclick="pesquisar()">Pesquisar</button>
<div id="resultados-pesquisa"></div>
