function Cat(name) {
  var foodAmount = 50;

  var formatFoodAmount = function() {
    return foodAmount + ' гр.';
  };

  this.name = name;

  this.feed = function() {
    console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
  };
}

var grayCat = new Cat('Tom');

grayCat.feed();
