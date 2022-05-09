import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('⚠️  No se pudo encontrar el archivo .env  ⚠️');
}

export const config = {
  app: {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    secretJWT: process.env.SECRET_JWT,
  },
  db: {
    connection: process.env.CONNECTION_DB,
  },
};
