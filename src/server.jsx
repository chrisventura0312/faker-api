const express = require('express');
const faker = require('faker');
const app = express();
const port = 5173;

//createUser and createCompany functions
const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
    };
}

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address:{
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
            },
        };
    }

// API Routes
app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({newUser, newCompany});
});

//Start Server

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
