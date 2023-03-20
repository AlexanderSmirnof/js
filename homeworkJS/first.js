const result = +prompt('Введите число', '')
if (typeof +result !== 'number') {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
  alert('Ошибка, введено не число')
} else if (result % 2 === 0) {
  alert('четное')
} else {
  alert('нечетное')
}