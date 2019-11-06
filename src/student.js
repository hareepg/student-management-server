const dbPromise = require('./db');

async function create(student) {
    const connection = await dbPromise;
    
    const db = connection.db();
    const students = db.collection('students');
    const record = await students.insertOne(student);
    return record.insertedId;
}

async function get() {
    const connection = await dbPromise;
    
    const db = connection.db();
    const students = db.collection('students');
    const all = await students.find().toArray();
    return all.map(s => ({
        firstName: s.firstName,
        lastName: s.lastName,
        email: s.email,
        phone: s.phone,
        userId: s.userId
    }));
}

module.exports.create = create;
module.exports.get = get;