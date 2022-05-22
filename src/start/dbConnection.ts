

import {Sequelize} from 'sequelize'

import Config from '../config'

const { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER } = Config;

const database =  new Sequelize(
                                MYSQL_DATABASE, 
                                MYSQL_USER, 
                                MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
    logging: true,
});

export default database