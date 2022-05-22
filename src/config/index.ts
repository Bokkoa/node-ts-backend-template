
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

export default {
    PORT: process.env.PORT || '8000',
    MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'database',
    MYSQL_USER: process.env.MYSQL_USER || 'root',
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || '',
    APPLICATION_NAME: process.env.APPLICATION_NAME || 'foo app',
    JWT_SECRET: process.env.JWT_SECRET,
    CACHE_KEY: process.env.CACHE_KEY,
    SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}`
}