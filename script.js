const pesquisa = document.getElementById('pesquisa');

const cards = document.querySelectorAll('.card');

const botoes = document.querySelectorAll('.card a');

const notificacao = document.getElementById('notificacao');

const temaBtn = document.getElementById('tema-btn');

const favoritos = document.querySelectorAll('.favorito');

/* PESQUISA */

pesquisa.addEventListener('input', () => {

  const valor = pesquisa.value.toLowerCase();

  cards.forEach(card => {

    const nome = card.querySelector('h3').textContent.toLowerCase();

    if(nome.includes(valor)) {

      card.style.display = 'block';

    } else {

      card.style.display = 'none';

    }

  });

});

/* NOTIFICAÇÃO */

botoes.forEach(botao => {

  botao.addEventListener('click', () => {

    notificacao.classList.add('show');

    setTimeout(() => {

      notificacao.classList.remove('show');

    }, 2500);

  });

});

/* TEMA ESCURO */

temaBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')) {

    temaBtn.innerHTML = '☀️';

  } else {

    temaBtn.innerHTML = '🌙';

  }

});

/* FAVORITOS */

favoritos.forEach(favorito => {

  favorito.addEventListener('click', () => {

    favorito.classList.toggle('ativo');

    if(favorito.classList.contains('ativo')) {

      favorito.innerHTML = '❤️';

    } else {

      favorito.innerHTML = '🤍';

    }

  });

});