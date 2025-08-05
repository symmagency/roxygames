# FAQ - Sistema de Perguntas Frequentes

## 📋 Descrição

Sistema de FAQ (Perguntas Frequentes) desenvolvido para a loja de jogos Roxy Games. O sistema é totalmente responsivo e permite fácil personalização das perguntas e respostas.

## 🚀 Funcionalidades

- ✅ FAQ expansível com animações suaves
- ✅ Design responsivo (mobile e desktop)
- ✅ Fácil personalização de perguntas e respostas
- ✅ Funções para adicionar/remover perguntas dinamicamente
- ✅ Estilo moderno com tema escuro
- ✅ Animações de entrada
- ✅ Acessibilidade com navegação por teclado

## 📁 Arquivos

- `faq.js` - Script principal do FAQ
- `style.css` - Estilos CSS (adicionados ao final do arquivo)
- `index.html` - Página principal (atualizada para incluir o script)
- `faq-exemplo-uso.html` - Exemplo de como usar as funções
- `README-FAQ.md` - Esta documentação

## 🛠️ Instalação

1. Certifique-se de que o arquivo `faq.js` está na mesma pasta do seu `index.html`
2. O script já está incluído no `index.html`
3. Os estilos CSS já estão adicionados ao `style.css`

## 📝 Como Usar

### Estrutura dos Dados

O FAQ usa um array de objetos com a seguinte estrutura:

```javascript
const faqData = [
    {
        question: "Sua pergunta aqui?",
        answer: "Sua resposta aqui."
    }
];
```

### Funções Disponíveis

#### 1. Adicionar Nova Pergunta
```javascript
FAQ.adicionarPergunta("Nova pergunta?", "Nova resposta.");
```

#### 2. Remover Pergunta
```javascript
FAQ.removerPergunta(0); // Remove a primeira pergunta (índice 0)
```

#### 3. Atualizar Todo o FAQ
```javascript
const novoFAQ = [
    { question: "Pergunta 1", answer: "Resposta 1" },
    { question: "Pergunta 2", answer: "Resposta 2" }
];
FAQ.atualizarFAQ(novoFAQ);
```

#### 4. Recriar o FAQ
```javascript
FAQ.inserirFAQ();
```

#### 5. Acessar Dados
```javascript
console.log(FAQ.faqData); // Ver todas as perguntas
```

## 🎨 Personalização

### Modificar Perguntas

Para alterar as perguntas, edite o array `faqData` no arquivo `faq.js`:

```javascript
const faqData = [
    {
        question: "Quais formas de pagamento vocês aceitam?",
        answer: "Aceitamos cartão de crédito, débito, Pix e boleto bancário."
    },
    // Adicione mais perguntas aqui...
];
```

### Modificar Estilos

Os estilos estão no arquivo `style.css` com as seguintes classes principais:

- `.faq-container` - Container principal
- `.faq-title` - Título da seção
- `.faq-item` - Item individual do FAQ
- `.faq-header` - Cabeçalho clicável
- `.faq-content` - Conteúdo da resposta
- `.faq-icon` - Ícone de expansão

### Cores Principais

- **Roxo principal**: `#9D41FF`
- **Roxo escuro**: `#6B21A8`
- **Texto**: `#fff` (branco)
- **Texto secundário**: `#E0E0E0`

## 📱 Responsividade

O FAQ é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com espaçamentos maiores
- **Mobile**: Layout compacto com espaçamentos reduzidos
- **Animações**: Suaves em todos os dispositivos

## 🔧 Configuração Avançada

### Alterar Posição do FAQ

Para mudar onde o FAQ aparece na página, edite a função `inserirFAQ()` no arquivo `faq.js`:

```javascript
function inserirFAQ() {
    // Altere este seletor para onde você quer inserir o FAQ
    const targetElement = document.querySelector('.categories_highlight');
    
    if (targetElement) {
        const faqSection = criarFAQ();
        targetElement.parentNode.insertBefore(faqSection, targetElement.nextSibling);
    } else {
        const faqSection = criarFAQ();
        document.body.appendChild(faqSection);
    }
}
```

### Adicionar Mais Animações

Para adicionar mais animações, você pode modificar o CSS:

```css
/* Exemplo de animação adicional */
.faq-item {
    transition: all 0.3s ease;
}

.faq-item:hover {
    transform: translateY(-2px);
}
```

## 🐛 Solução de Problemas

### FAQ não aparece
1. Verifique se o arquivo `faq.js` está sendo carregado
2. Abra o console do navegador (F12) e verifique se há erros
3. Certifique-se de que o `index.html` inclui o script

### Estilos não aplicados
1. Verifique se os estilos CSS foram adicionados ao `style.css`
2. Limpe o cache do navegador (Ctrl+F5)

### Perguntas não atualizam
1. Use as funções `FAQ.atualizarFAQ()` ou `FAQ.adicionarPergunta()`
2. Verifique se não há erros no console

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique o arquivo `faq-exemplo-uso.html` para exemplos práticos
2. Abra o console do navegador para ver mensagens de erro
3. Teste as funções no console do navegador

## 🔄 Versão

**Versão**: 1.0.0  
**Data**: Dezembro 2024  
**Compatibilidade**: Todos os navegadores modernos 