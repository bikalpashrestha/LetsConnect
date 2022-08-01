const User = require('../../models/userModel');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'MONGODB_URL = mongodb+srv://admin:admin@cluster0.jam2e.mongodb.net/test?retryWrites=true&w=majority';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});
describe('Test for User Schema', () => {
    // the code below is for insert testing
    it('Test for Login User', () => {
        const login = {
            "email": "user01@gmail.com",
            "password": "1234567", 
        };
        return User.find(login)
            .then((res) => {
                expect(res[0].email).toEqual('user01@gmail.com');
            });
    });
});
