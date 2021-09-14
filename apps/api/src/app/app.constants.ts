export class AppConstants {
  public static IS_PRODUCTION: boolean =
    process.env.ENVIRONMENT === 'production' ? true : false;
}
