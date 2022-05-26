import mysql from 'mysql';

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'newdb',
    password:''
  });

  export default conn;