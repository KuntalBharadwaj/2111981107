const { default: axios } = require('axios');
const express=require('express')
const app = express();
const fs = require("fs")


const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

const API_URL='http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q'

const companies = ['AMZ', "FLP","SNP","MYN","AZO"]

app.get('/categories/:categoryname/products/:n/:minPrice/:maxPrice',(req,res)=>{
    const categoryName=req.params.categoryname
    console.log("catergory  "+categoryName)
    const n=req.params.n
    const minPrice=req.params.minPrice
    const maxPrice=req.params.maxPrice

    const  Authorization = {
        token_type: 'Bearer',
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3NTEyMTYzLCJpYXQiOjE3MTc1MTE4NjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ5ZTI4YzdlLWQxODYtNDVhMy05MjUzLTViNDllMjQ0YzQxYSIsInN1YiI6InN1c21pdDEyMDIuYmUyMUBjaGl0a2FyYXVuaXZlcnNpdHkuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoidm9sdHJhY2siLCJjbGllbnRJRCI6ImQ5ZTI4YzdlLWQxODYtNDVhMy05MjUzLTViNDllMjQ0YzQxYSIsImNsaWVudFNlY3JldCI6ImxEaHRyTGRNQWpKZlhhVVUiLCJvd25lck5hbWUiOiJTdXNtaXQiLCJvd25lckVtYWlsIjoic3VzbWl0MTIwMi5iZTIxQGNoaXRrYXJhdW5pdmVyc2l0eS5lZHUuaW4iLCJyb2xsTm8iOiIyMTExOTgxMjAyIn0.uDZywTFW9_Bxn3RGvzCxT1778vrKOTbSTW2LxMEh5Ws',
        expires_in: 1717512163
      }

      const config = {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3NTE2NDQwLCJpYXQiOjE3MTc1MTYxNDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ5ZTI4YzdlLWQxODYtNDVhMy05MjUzLTViNDllMjQ0YzQxYSIsInN1YiI6InN1c21pdDEyMDIuYmUyMUBjaGl0a2FyYXVuaXZlcnNpdHkuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoidm9sdHJhY2siLCJjbGllbnRJRCI6ImQ5ZTI4YzdlLWQxODYtNDVhMy05MjUzLTViNDllMjQ0YzQxYSIsImNsaWVudFNlY3JldCI6ImxEaHRyTGRNQWpKZlhhVVUiLCJvd25lck5hbWUiOiJTdXNtaXQiLCJvd25lckVtYWlsIjoic3VzbWl0MTIwMi5iZTIxQGNoaXRrYXJhdW5pdmVyc2l0eS5lZHUuaW4iLCJyb2xsTm8iOiIyMTExOTgxMjAyIn0.L0ySJ1rgt2_-n8Ke5n-Ux0L_0Ndxg5oN_1Y_2AbfRsk'
        }
      };
      

      var products = [];

      

const data22 = JSON.parse(fs.readFileSync("./alldata.json"))
companies.map((e)=>{
    const url = `http://20.244.56.144/test/companies/${e}/categories/${categoryName}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`

    
    axios.get(url, config)
    .then((data) => {
    
        console.log(data.data)
        console.log("next")
        data.data.map((e) => {
            products.push(e)
            data22.push(e)
        })

    })
    .then(() => {
        res.send({
            data: products
        })
    })
    .catch(err => console.log(err))
    fs.writeFileSync("./alldata.json",JSON.stringify(data22))
  
})

  
    // const page=req.params.page

})


app.listen(PORT, () => {
    console.log(`Server is Listenning to ${PORT}`);
})