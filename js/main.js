function PageRearrengement() {
  // Cards
  const cardsWrapper = document.querySelectorAll('.row')[2];
  const cardsContainer = document.querySelectorAll('.col-lg-3');

  const cardArray = Array.from(cardsContainer);
  cardArray.unshift(cardArray.pop())
  cardArray.push(cardArray[2]);

  cardsContainer.forEach(card => {
    cardsWrapper.removeChild(card);
  });

  cardArray.forEach(card => {
    cardsWrapper.appendChild(card);
  });

  const cards = document.querySelectorAll('.card-body');
  cards[1].querySelector('a').style.background = 'green';
  cards[1].querySelector('a').style.borderColor = 'green';

  // Header
  const headerContainer = document.querySelector('.jumbotron');

  headerContainer.style.background = '#6c757d';
  headerContainer.style.color = 'white';
  headerContainer.style.textAlign = 'right';

  headerContainer.querySelector('a').style.background = 'green';
  headerContainer.querySelector('a').style.borderColor = 'green';

  // List
  const listGroup = document.querySelector('.list-group');
  const listGroupItems = listGroup.querySelectorAll('.list-group-item')

  listGroupItems[0].classList.remove('active');

  for (let index = 0; index < 2; index++) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = index === 0 ? 'Quarto item' : 'Quinto item';
    newListItem.className = index === 0 ? 'list-group-item active' : 'list-group-item';
    listGroup.appendChild(newListItem);
  }

  // Menu 
  const menuContainer = document.querySelector('.btn-group-vertical');
  menuContainer.classList.remove('btn-group-vertical');
  menuContainer.classList.add('btn-group-horizontal');
};
PageRearrengement();
