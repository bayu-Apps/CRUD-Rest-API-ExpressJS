const { Client, Result } = require("pg");
const express = require("express");

const app = express();
app.use(express.json());

const con = new Client({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "postgres",
});

con.connect().then(() => console.log("conneted"));

app.post("/postData", (req, res) => {
  const { id, nip, nama_guru, mapel } = req.body;


  const insert_query =
    "INSERT INTO guru (id,nip,nama_guru,mapel) VALUES ($1,$2,$3,$4)";

  con.query(insert_query, [id,nip,nama_guru,mapel], (err, Result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(Result);
      res.send("POSTED DATA");

    }

  });
});

app.get('/fetchData', (req,res) =>{

    const Fetch_query= 'Select * from guru'
    con.query(Fetch_query,(err,Result) =>{
        if(err){
            res.send(err)
        }else{
            res.send(Result.rows)
        }
    })

})

app.get('/fetchbyId/:id', (req,res) =>{
    const id = req.params.id;
    const Fetch_query = 'Select * from guru where id = $1'
    con.query(Fetch_query,[id],(err,Result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(Result.rows)
        }
    })
})

app.put('/update/:id',(req,res) =>{
    const id = req.params.id;
    const { nip, nama_guru, mapel} = req.body;

    const Update_query = "UPDATE guru SET nip=$2, nama_guru=$3, mapel=$4 WHERE id=$1";

    con.query(Update_query,[id, nip, nama_guru, mapel],(err,Result) =>{
        if(err){
            res.send(err)
        }else{
            res.send("UPDATED")
        }
    })

})

app.delete('/delete/:id', (req,res) =>{
    const id = req.params.id;
    const delete_query = "Delete from guru WHERE id=$1"

    con.query(delete_query,[id],(err,Result) =>{
        if(err){
            res.send(err)
        }else{
            res.send(Result)
        }
    })
})

app.listen(3000, () => {
  console.log("SERVER IS RUNNING......");
});


