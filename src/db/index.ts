import { Sequelize, Model, DataTypes, NOW } from 'sequelize';
import { UserFactory } from '../schema/user';
import { config } from './config';


const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  // operatorsAliases: false,
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
  },
  define: {
      freezeTableName: true,
  },
});

db.authenticate()
.then(() => {
  console.log('✅ Connection successfully.');
})
.catch((err) => {
  console.error('❌ Unable to connect to the database:', err);
});

export const User = UserFactory(db);