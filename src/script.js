document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.meowsearchfield');
  if (!input) return;

  const goSearch = () => {
    const query = (input.value || '').trim();
    if (!query) return;
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = url;
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      goSearch();
    }
  });

  // Optional: also make the "Google Search" button trigger the same behavior
  const button = document.querySelector('.searchbtn');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        goSearch();
    });

    const gbutton = document.querySelector('.gsearch-btn');
    gbutton.addEventListener('click', (e) => {
        e.preventDefault();
        goSearch();
    });

    const grandomButton = document.querySelector('.grandom-btn');
    grandomButton.addEventListener('click', (e) => {
        e.preventDefault();
        const randomUrls = [
            'https://elgoog.im/underwater/',
            'https://elgoog.im/thanos/',
            'https://elgoog.im/google-fan/',
            'https://elgoog.im/google-fan/',
            'https://elgoog.im/tetris/',
            'https://elgoog.im/underwater/',
            'https://elgoog.im/pacman/',
            'https://elgoog.im/atari-breakout/',
            'https://elgoog.im/terminal/',
        ];
        const randomUrl = randomUrls[Math.floor(Math.random() * randomUrls.length)];
        window.location.href = randomUrl;
    });

    const aiModeButton = document.querySelector('.gaimode-btn');
    aiModeButton.addEventListener('click', (e) => {
        e.preventDefault();
        const aiUrl = 'https://www.google.com/search?q=&sca_esv=20541e4f21a9d7f7&sxsrf=ANbL-n5ng_mS5RamefxgbUHkbfy4QaGx5Q%3A1769020180171&source=hp&ei=FBtxaa3aCJrOhbIPsdaJiAk&iflsig=AFdpzrgAAAAAaXEpJGlOhKmgOhRX8ZRxnF5YuvvHaUGg&aep=22&udm=50&ved=0ahUKEwittMDboZ2SAxUaZ0EAHTFrApEQteYPCBk&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgA&sclient=gws-wiz';
        window.location.href = aiUrl;
    });
});
