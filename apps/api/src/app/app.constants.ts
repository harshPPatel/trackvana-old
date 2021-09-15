export class AppConstants {
  public static IS_PRODUCTION: boolean =
    process.env.ENVIRONMENT === 'production' ? true : false;

  public static ADMIN_EMAIL = process.env.ADMIN_EMAIL.toString();

  // TODO: remove this once we move to auto-generated workflow
  public static ADMIN_PASSWORD = process.env.ADMIN_PASSWORD.toString();
}
