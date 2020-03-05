function Animal(name) {
  this._name = name;
  this._foodAmount = 50;
  var self = this;

  function formatFoodAmount() {
    return self._foodAmount + ' гр.';
  }

  this.dailyNorm = function(amount) {
    if (!arguments.length) {
      return formatFoodAmount();
    }
    if (amount < 50 || amount > 500) {
      return 'Недопустимое количество корма';
    }
    self._foodAmount = amount;
  };

  this.name = name;
  this.feed = function() {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  var animalFeed = this.feed;
  var self = this;

  self.feed = function() {
    animalFeed();
    console.log('Кот доволен ^_^');
    return self;
  };

  self.stroke = function() {
    console.log('Гладим кота.');
    return self;
  };
}

var grayCat = new Cat('Tom');

grayCat
  .feed()
  .stroke()
  .stroke()
  .feed();
