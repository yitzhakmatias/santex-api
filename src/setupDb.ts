import { Sequelize } from 'sequelize';

import { config } from '@root/config';

export default new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'postgres',
  port: config.DB_PORT
});
