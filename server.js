const express = require('express');
const cors = require('cors')
const fs = require('fs');
const app = express();
const port = 3000;
const host = "0.0.0.0";
app.use(cors());
app.get("/log",(req,res)=>{
  fs.appendFile('target/log.html', `<p>LOG AT ${new Date()}<p>`, 'utf8', (err) => {
    if (err) {
      console.error('Error appending to file:', err.message);
      return;
    }
    res.log('Data appended successfully!');
  });
})
app.get('/', (req, res) => {
  fs.readFile('target/log.html', 'utf8', (err, data) => {
      // console.log("data: ",data);
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
  // res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});