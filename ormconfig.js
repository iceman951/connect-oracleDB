const dbConfig = {
  synchronize: false,
  migrationsRun: false,
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  sid: process.env.DATABASE_SID,
  entities: [],
};

module.exports = dbConfig;
