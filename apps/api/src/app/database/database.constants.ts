import { AppConstants } from '../app.constants';

export class DatabaseConstants {
  // TODO: Add production DB URL (add it as environment variable?)
  public static DB_HOST: string = AppConstants.IS_PRODUCTION ? '' : 'localhost';
  public static DB_PORT: number = process.env.DB_PORT
    ? Number(process.env.DB_PORT)
    : 5432;
  public static DB_USERNAME: string = process.env.DB_USERNAME.toString();
  public static DB_PASSWORD: string = process.env.DB_PASSWORD.toString();
  public static DB_NAME: string = process.env.DB_NAME.toString();
}
