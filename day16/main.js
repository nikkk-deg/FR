const phonebook = {
    list: {'mom': '89185574404',
    'dad': '89185819010',
    'me': '89185330073'
    },
    callMom(){
        console.log('Please call mym mom, her number is ' + this.list['mom'])
    }
}

phonebook.callMom()