import mysql from 'mysql2/promise';
import { DB_CONFIG } from '../config/env';

interface User {
  id:number,
  username:string,
  password:string
  email:string
  delete_at?:Date | null
}

const pool = mysql.createPool(DB_CONFIG);

export const getUserByEmail = async (email:string):Promise<User|null>=>{
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ? AND deleted_at IS NULL',[email]);
  const results = rows as User[];

  if(results.length === 0){
    return null;
  }
  else return results[0];
}