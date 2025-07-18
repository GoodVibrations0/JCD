import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT || 3000;
export const SECRET_KEY = process.env.SECRET_KEY as string;
if(!SECRET_KEY){
    console.error("Missing SECRET_KEY in env");
    process.exit(1);
}

export const DB_CONFIG = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    database: process.env.DB_NAME || 'jdcdb',
    waitForConnections: true,
    connectionLimit:10,
    maxIdle:10,
    idleTimeout:60000,
    queueLimit:0,
    enableKeepAlive:true,
    keepAliveInitialDelay:0
}