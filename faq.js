// FAQ - Loja de Jogos
// Array com as perguntas e respostas do FAQ
const faqData = [
    {
        question: "Quais formas de pagamento vocês aceitam?",
        answer: "Aceitamos cartão de crédito, débito, Pix e boleto bancário."
    },
    {
        question: "Como recebo meu jogo após a compra?",
        answer: "Você receberá o código de ativação por e-mail imediatamente após a confirmação do pagamento."
    },
    {
        question: "Os jogos são originais?",
        answer: "Sim. Todos os jogos vendidos são originais, com garantia de ativação nas plataformas oficiais (Steam, Xbox, PlayStation, etc)."
    },
    {
        question: "Em quanto tempo meu pedido é liberado?",
        answer: "Pagamentos via cartão e Pix são liberados em poucos minutos. Boleto pode levar até 2 dias úteis."
    },
    {
        question: "Não recebi meu código. O que faço?",
        answer: "Verifique sua caixa de spam. Caso não encontre, entre em contato pelo nosso suporte com o número do pedido."
    },
    {
        question: "Posso pedir reembolso?",
        answer: "Sim, desde que o código não tenha sido ativado. Após a ativação, não é possível realizar reembolso."
    }
];

// Função para criar o FAQ
function criarFAQ() {
    // Cria o container principal do FAQ
    const faqContainer = document.createElement('div');
    faqContainer.className = 'faq-container';
    faqContainer.id = 'faq-section';

    // Cria o título da seção
    const faqTitle = document.createElement('h2');
    faqTitle.className = 'faq-title';
    faqTitle.textContent = 'Perguntas Frequentes';

    // Cria o container das perguntas
    const faqList = document.createElement('div');
    faqList.className = 'faq-list';

    // Cria cada item do FAQ
    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.setAttribute('data-index', index);

        // Cria o cabeçalho da pergunta
        const faqHeader = document.createElement('div');
        faqHeader.className = 'faq-header';
        faqHeader.addEventListener('click', () => toggleFAQ(index));

        // Cria o texto da pergunta
        const faqQuestion = document.createElement('h3');
        faqQuestion.className = 'faq-question';
        faqQuestion.textContent = item.question;

        // Cria o ícone de expansão
        const faqIcon = document.createElement('span');
        faqIcon.className = 'faq-icon';
        faqIcon.innerHTML = '+';

        // Adiciona os elementos ao cabeçalho
        faqHeader.appendChild(faqQuestion);
        faqHeader.appendChild(faqIcon);

        // Cria o conteúdo da resposta
        const faqContent = document.createElement('div');
        faqContent.className = 'faq-content';

        const faqAnswer = document.createElement('p');
        faqAnswer.className = 'faq-answer';
        faqAnswer.textContent = item.answer;

        faqContent.appendChild(faqAnswer);

        // Adiciona os elementos ao item
        faqItem.appendChild(faqHeader);
        faqItem.appendChild(faqContent);

        // Adiciona o item à lista
        faqList.appendChild(faqItem);
    });

    // Monta o FAQ completo
    faqContainer.appendChild(faqTitle);
    faqContainer.appendChild(faqList);

    return faqContainer;
}

// Função para alternar a exibição das respostas
function toggleFAQ(index) {
    const faqItem = document.querySelector(`[data-index="${index}"]`);
    const faqContent = faqItem.querySelector('.faq-content');
    const faqIcon = faqItem.querySelector('.faq-icon');
    const isOpen = faqItem.classList.contains('active');

    // Fecha todos os outros itens
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        content.style.maxHeight = '0px';
        icon.innerHTML = '+';
    });

    // Abre o item clicado se não estava aberto
    if (!isOpen) {
        faqItem.classList.add('active');
        faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
        faqIcon.innerHTML = '−';
    }
}

// Função para inserir o FAQ na página
function inserirFAQ() {
    // Procura por um local adequado para inserir o FAQ
    // Pode ser após as categorias em destaque ou no final da página
    const targetElement = document.querySelector('.categories_highlight');
    
    if (targetElement) {
        // Insere após as categorias em destaque
        const faqSection = criarFAQ();
        targetElement.parentNode.insertBefore(faqSection, targetElement.nextSibling);
    } else {
        // Se não encontrar as categorias, insere no final do body
        const faqSection = criarFAQ();
        document.body.appendChild(faqSection);
    }
}

// Função para atualizar o FAQ (útil para modificar perguntas/respostas)
function atualizarFAQ(novoFAQData) {
    // Remove o FAQ existente
    const faqExistente = document.getElementById('faq-section');
    if (faqExistente) {
        faqExistente.remove();
    }
    
    // Atualiza os dados
    Object.assign(faqData, novoFAQData);
    
    // Recria o FAQ
    inserirFAQ();
}

// Função para adicionar uma nova pergunta ao FAQ
function adicionarPergunta(pergunta, resposta) {
    faqData.push({
        question: pergunta,
        answer: resposta
    });
    
    // Recria o FAQ com a nova pergunta
    const faqExistente = document.getElementById('faq-section');
    if (faqExistente) {
        faqExistente.remove();
    }
    inserirFAQ();
}

// Função para remover uma pergunta do FAQ
function removerPergunta(index) {
    if (index >= 0 && index < faqData.length) {
        faqData.splice(index, 1);
        
        // Recria o FAQ sem a pergunta removida
        const faqExistente = document.getElementById('faq-section');
        if (faqExistente) {
            faqExistente.remove();
        }
        inserirFAQ();
    }
}

// Inicializa o FAQ quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Aguarda um pouco para garantir que outros scripts carregaram
    setTimeout(() => {
        inserirFAQ();
    }, 100);
});

// Exporta as funções para uso externo (se necessário)
window.FAQ = {
    criarFAQ,
    inserirFAQ,
    atualizarFAQ,
    adicionarPergunta,
    removerPergunta,
    toggleFAQ,
    faqData
}; 