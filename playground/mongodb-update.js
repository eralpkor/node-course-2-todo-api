//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5a72335f79b95e66d56c0c8d')
//    },{
//     $set: {
//         completed: true
//     }
//    },{
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a7210a9e40cb92a2cb4ae61')
    }, {
        $set: {
            name: 'Eralp'
        },
        $inc: {
            age: -25
        }
        }, {
            returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    client.close();
});