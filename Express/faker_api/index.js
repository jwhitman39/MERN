// import { faker } from '@faker-js/faker'

const faker = require('faker');
const express = require("express");
const app = express();
const PORT = 8000;


const createRandomUser= () => {
    const generatedUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.internet.phoneNumber()
    };
    return generatedUser;
};

const createRandomCompany = () => {
    const generatedCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: faker.internet.address(),
        street: faker.name.street(),
        city: faker.address.city(),
        state: faker.internet.state(),
        zipCode: faker.internet.zipCode(),
        country: faker.internet.country()
    };
    return generatedCompany;
};

app.get("/api/users/new", (req, res) => {
    const randomUser = createRandomUser();
    res.json(randomUser);
});

app.get("/api/companies/new", (req, res) => {
    const randomCompany = createRandomCompany();
    res.json(randomCompany)
})

app.get("/api/user/company", (req, res) => {
    const randomUser = createRandomUser();
    const randomCompany = createRandomCompany();
    const bothObjs = {
        obj1: randomUser,
        obj2: randomCompany
    };
    res.json(bothObjs)
});

app.listen ( PORT, () => console.log('Listening on port: ${PORT}'));