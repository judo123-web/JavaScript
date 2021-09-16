function readingStatus(books) {

    for (var i of books) {
        Object.defineProperty(i, "daysAgo", {
            get() {
                today = new Date()
                dateOfRead = new Date(i.dateOfRead.getFullYear(), i.dateOfRead.getMonth() - 1, i.dateOfRead.getDate())
                var difference = (today.getTime() - dateOfRead.getTime())/ (1000 * 3600 * 24);
                var difference = Math.ceil(difference)
                return `${difference} days ago`
            },
            enumerable : false
        })

        
        if (i.haveRead) console.log(`${i.author} have read ${i.title} book ${books[0].daysAgo}`)
        else console.log(`${i.author} haven't read ${i.title} book yet`)
    }
}




var Books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
 ];

readingStatus(Books)