const mongodb = require('mongodb');

async function init() {
    let res, rej;

    /** @type {Promise<import('mongodb').MongoClient>} */
    const promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    })

    const auth = {
        user: 'student_reader',
        password: '3JvBdT&ZH0j6'
    };
    mongodb.connect(
        `mongodb://${auth.user}:${auth.password}@ds137488.mlab.com:37488/appharbor_8wrznzfx`,
        { useUnifiedTopology: false, useNewUrlParser: true },
        (err, db) => {
            if (err) rej(err);
            else res(db);
        }
    );

    return promise;
}

module.exports = init();
