let toDoArray = ['помыть посуду', 'позаниматься спортом', 'встретиться с Денисом'];

console.log(toDoArray);

toDoArray.push('лечь спать');
console.log(toDoArray);
deletedElement = toDoArray.pop();
console.log(deletedElement + ' - задача была удалена');
console.log('отработка метода slice - ' + toDoArray.slice(1,3))

toDoArray.splice(1,1);
console.log(toDoArray + ' splice удалил позаниматься спортом');
toDoArray.splice(1,0,'купить еду');
console.log(toDoArray + ' splice добаыил задачу');
toDoArray.shift('добавить 1ую задачу');
console.log(toDoArray);
toDoArray.unshift('удалить 1ую задачу');
console.log(toDoArray);