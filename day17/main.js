const phonebook = {
    list: {'mom': '89185574404',
    'dad': '89185819010',
    'me': '89185330073',
    'Max': '89514659178'
    },
    addContact(name, number){
        this.list[name] = number;
    },
    seeAllContacts(){
        for (let name in this.list){
            console.log(name + ' - ' + this.list[name])
        }
    }
}

phonebook.seeAllContacts()