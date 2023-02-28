const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

//setting up view engine
app.set('view engine', 'ejs');

//setting up view path
app.set('views' , path.join(__dirname, 'views'));

var contactList = [
    {
        name: "John Doe",
        email: "kenaa@example.com",
        phone: "1234567890",
        message: "Hello World"
    },
    {
        name: "Anu Bar",
        email: "kenaa@example.com",
        phone: "1234567890",
        message: "Hello World"
    },
    {
        name: "Dae",
        email: "kenaa@example.com",
        phone: "1234567890",
        message: "Hello World"
    },
    {
        name: "Doooe",
        email: "kenaa@example.com",
        phone: "1234567890",
        message: "Hello World"
    }
];

app.get('/'  , function(req, res ){
    return res.render('home' , {
        title: "Contacts List",
        contact_list: contactList
        });
});

app.listen(port ,function(err) {
    if ( err ) {console.log('Error in running the server', err);}
    console.log (`Yup!My server is running on port: ${port}`)
});