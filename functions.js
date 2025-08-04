window.addEventListener('load', function() {

    // Move o banner 2 para dentro do holder-main-banner
    var target = document.querySelector('.main-banner .holder-main-banner');
    var elementToMove = document.querySelector('section.banner-2.banner_2-3');
    if (target && elementToMove) {
        target.appendChild(elementToMove);
    }
      
  // Adiciona classe de inicialização
  document.documentElement.classList.add('js-initialized');

  // --- Funções Auxiliares ---
  function inserirSymmFooter() {
    const footerSection = document.querySelector('.holder-footer-section.section-3');
    if (footerSection && !footerSection.querySelector('.holder-symm')) {
      const newContent = document.createElement('div');
      newContent.className = 'holder-symm flex';
      newContent.innerHTML = `
        <span>Desenvolvimento</span> 
        <a href="https://symmagency.webflow.io/" target="_blank" rel="noreferrer nofollow" class="yampi">
          <img src="https://cdn.awsli.com.br/2775/2775575/arquivos/symm.svg" alt="Symm - Agência de Design" width="110" height="24" class="h-va-middle h-inline-block h-ml10 loaded">
        </a>
      `;
      footerSection.appendChild(newContent);
      return true;
    }
    return false;
  }

  // --- Criação da Seção de Categorias em Destaque ---
  function criarCategoriesHighlight() {
    // Array com os dados dos jogos (imagens)
    const games = [
      {
        name: 'Call of Duty',
        image: 'https://i.imgur.com/uS4MrEE.png',
        alt: 'Call of Duty'
      },
      {
        name: 'God of War',
        image: 'https://i.imgur.com/fKhM7ev.png',
        alt: 'God of War'
      },
      {
        name: 'FC 25',
        image: 'https://i.imgur.com/BqF1UNy.png',
        alt: 'FC 25'
      },
      {
        name: 'Forza',
        image: 'https://i.imgur.com/L4HBfr4.png',
        alt: 'Forza'
      },
      {
        name: 'Grand Theft Auto',
        image: 'https://i.imgur.com/NuCcGl3.png',
        alt: 'Grand Theft Auto'
      },
      {
        name: 'UFC',
        image: 'https://i.imgur.com/2rRaxnV.png',
        alt: 'UFC'
      },
      {
        name: 'Formula 1',
        image: 'https://i.imgur.com/4SOTlWm.png',
        alt: 'Formula 1'
      }
    ];

    // Encontra o elemento .categories_highlight existente
    const existingHighlight = document.querySelector('.categories_highlight');
    
    if (existingHighlight) {
      // Cria o novo container
      const container = document.createElement('div');
      container.className = 'container';

      // Cria a seção de categorias
      const categoriesSection = document.createElement('div');
      categoriesSection.className = 'categories-highlight';
      

      // Cria os cards dos jogos
      games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';

        // Cria a imagem do jogo
        const gameImage = document.createElement('img');
        gameImage.src = game.image;
        gameImage.alt = game.alt;

        gameCard.appendChild(gameImage);
        categoriesSection.appendChild(gameCard);
      });

      container.appendChild(categoriesSection);
      
      // Substitui o conteúdo existente
      existingHighlight.innerHTML = '';
      existingHighlight.appendChild(container);
    }
  }

  // --- Organização dos Banners ---
  requestAnimationFrame(() => {
    const banner1 = document.querySelector('.home .banner-1.banner_1-2');
    const mainBanner = document.querySelector('.home .main-banner');
    if (banner1 && mainBanner) {
      mainBanner.parentNode.insertBefore(banner1, mainBanner);
    }
  });

  // --- Inserção do Footer Symm ---
  if (!inserirSymmFooter()) {
    const observer = new MutationObserver(() => {
      if (inserirSymmFooter()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // --- Movimentação de Containers de Especificações (apenas desktop > 701px) ---
  if (window.innerWidth > 701) {
    requestAnimationFrame(() => {
      // Move o segundo container para dentro de .main-product-info
      const containerToMove = document.querySelector('.product-specifications .container + .container');
      const target = document.querySelector('.main-product-content .main-product-info');
      if (containerToMove && target) {
        target.appendChild(containerToMove);
      }

      // Move o primeiro container para dentro de .main-product-images
      const containerToMoveFirst = document.querySelector('.product-specifications .container');
      const mainProductImages = document.querySelector('.main-product-images');
      if (containerToMoveFirst && mainProductImages) {
        mainProductImages.appendChild(containerToMoveFirst);
      }
    });
  }

  // --- Execução da criação das categorias ---
  requestAnimationFrame(() => {
    criarCategoriesHighlight();
  });
});