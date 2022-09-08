const mongoose = require('mongoose');

const getConnection = async () => {
    try{

   
    const url = "mongodb://user-api:GiwBs5AzQDbu3Emi@ac-m8k3wk4-shard-00-00.firreoe.mongodb.net:27017,ac-m8k3wk4-shard-00-01.firreoe.mongodb.net:27017,ac-m8k3wk4-shard-00-02.firreoe.mongodb.net:27017/carpetaapirest?ssl=true&replicaSet=atlas-zok7n6-shard-0&authSource=admin&retryWrites=true&w=majority"
    await mongoose.connect(url);


    console.log ('conexion exitosa');

  } catch (error){
      console.log(error); 
  }
}
module.exports ={
    getConnection,
}
