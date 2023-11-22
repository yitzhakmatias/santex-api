import { Sequelize } from 'sequelize';

import { config } from '@root/config';

export default new Sequelize('app', '', '', {
  dialect: 'sqlite',
  storage: `./` + config.DB_STORAGE
});
