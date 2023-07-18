import mongoose from 'mongoose';

const Connection = () => {
    mongoose.connect('mongodb://0.0.0.0:27017/E_Commerce', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "E_Commerce" }).then(() => {
        console.log("Connected with mongodb")
    }).catch((err) => {
        console.log(err)
    });
}

export default Connection