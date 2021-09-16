function readingStatus(books) {
    for (var i of books) {
        if (i.haveRead) console.log(`${i.author} have read ${i.title} book`)
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