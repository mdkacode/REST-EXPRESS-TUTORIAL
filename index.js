// initiaziling express 

// Module initiazilination START
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // it help us in create or writing file in local machine

// Module initiazilination END

const app = express(); // Invoking express

const port = 3000; // System port 3000

// Middleware START
app.use(bodyParser.json()) // use - for Every Request app.use will invoke

app.use((req,res,next)=>{
    console.log(req.url);
    next(); // this will go to the
})

// Middleware END



// ROUTE  START

app
  .route("/article")
  .post((req,res) => {
    console.log(req.query);
    writeFile('notes',JSON.stringify(req.body)); // this create a file called notes or not
    res.send("POST Created")
  }) // Here we will create POST
  .get((req,res) => {
    const data = {
        "id": 1,
        "title": "Sample Code",
        "content": "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>"
    }
    res.json(data);
  }) // Here we will retrive/get POST by id
  
// Middleware END


// Forget about this code
  const writeFile = (fileName,content) => {
    fs.writeFile(`${fileName}.json`,content, (err)=> {
        if (err) console.log(err);
    })
  }

  // Forget about this code



app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});