const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();

const url = 'http://20.244.56.144/test/register';

const data = {
    companyName: 'voltrack',
    ownerName: 'Susmit',
    rollNo: '2111981202',
    ownerEmail: 'susmit1202.be21@chitkarauniversity.edu.in',
    accessCode: 'zWpata'
};

const Companydata = {
    companyName: 'voltrack',
    clientID: 'd9e28c7e-d186-45a3-9253-5b49e244c41a',
    clientSecret: 'lDhtrLdMAjJfXaUU',
    ownerName: 'Susmit',
    ownerEmail: 'susmit1202.be21@chitkarauniversity.edu.in',
    rollNo: '2111981202'
};

const url2='http://20.244.56.144/test/auth'

console.log("running")

// axios.post(url, data)
//     .then(response => {
//         const responseData = response;
//         console.log(response);
//         // Define the path to the JSON file
//         const filePath = path.join(__dirname, 'data.json');

//         // Save the data to data.json
//         fs.writeFile(filePath, JSON.stringify(responseData, null, 2), (err) => {
//             if (err) {
//                 console.error('Error writing to file', err);
//             } else {
//                 console.log('Data saved to data.json');
//             }
//         });
//     })
//     .catch(error => {
//         console.error('Error making POST request', error);
//     });






    axios.post(url2, Companydata)
    .then(response => {
        const responseData = response;
        console.log(response);
        // Define the path to the JSON file
        const filePath = path.join(__dirname, 'data.json');

        // Save the data to data.json
        fs.writeFile(filePath, JSON.stringify(responseData, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('Data saved to data.json');
            }
        });
    })
    .catch(error => {
        console.error('Error making POST request', error);
    });




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
