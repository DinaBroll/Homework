var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги');
console.log(styles);
