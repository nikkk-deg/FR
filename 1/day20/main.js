//проба написать стрелочные функции

const phonebook = {
    list: {'mom': '89185574404',
    'dad': '89185819010',
    'me': '89185330073',
    'Max': '89514659178'
    },
}

const addContact = (string, number) => phonebook.list[string] = number;

addContact('Max', '89512711111');
console.log(phonebook.list);
