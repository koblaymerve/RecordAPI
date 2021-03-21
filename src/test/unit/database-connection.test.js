const mongoose = require('mongoose');
const Mongoose = mongoose.Mongoose;

const mongodb = require('../../database/mongodb-init');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

describe('database connection test', function () {
    it('works', function (done) {
        const goose = new Mongoose;
        const db = goose.connection;

        goose.connect(process.env.DB_URI, options);

        db.on('open', function () {
            db.close(function () {
                done();
            });
        });
    })
    afterAll(() => {
        mongoose.connection.close();
        done();
    })
});