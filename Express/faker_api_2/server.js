const express = require("express");
const app = express();
const PORT = 8000;

const { faker } = require('@faker-js/faker');






const createRandomUser= () => {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    }
};

const createRandomCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        addres: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/user", (req, res) => {
    const user = createRandomUser()
    res.json(user)
});
app.get("/company", (req, res) => {
    const company = createRandomCompany();
    res.json(company)
});

app.get("/user/company", (req, res) => {
    const randomUser = createRandomUser();
    const randomCompany = createRandomCompany();
    const bothObjs = {
        obj1: randomUser,
        obj2: randomCompany
    };
    res.json(bothObjs)
});

app.listen (PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});
