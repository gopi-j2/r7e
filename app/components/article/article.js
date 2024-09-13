spa.$('article', {
  style: '.',
  data: {
    cards: [ { title: 'Card 1', }, { title: 'Card 2', }, { title: 'Card 3', }, { title: 'Card 4', }, { title: 'Card 5', }, { title: 'Card 6', }, { title: 'Card 7', }, { title: 'Card 8' }, { title: 'Card 9', }, { title: 'Card 10' } ]
  }
});

spa.$extend('article', {
  renderCallback: function(){
    let $cardsList = document.getElementById('cardsList');

    new Sortable($cardsList, {
      handle: '.handle',
      animation: 150
    })
  },
});