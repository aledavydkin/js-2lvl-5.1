export default function sort(obj, arr) {
  if (!Array.isArray(arr)) {
    throw new Error('В функцию передали не массив');
  }
  const unSort = [];
  for (const prop in obj) {
    if (!arr.some((el) => el === prop)) unSort.push(prop);
  }
  unSort.sort();
  arr.reverse().forEach((el) => {
    if (Object.prototype.hasOwnProperty.call(obj, el)) unSort.unshift(el);
  });
  const result = unSort.map((key) => ({ [key]: obj[key] }));
  return result;
}

const data = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const test = sort(data, ['name', 'defence']);
console.log(test);
