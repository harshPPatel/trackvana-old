export class AuthConstants {
  public static readonly JWT_TOKEN_SECRET: string =
    process.env.JWT_TOKEN_SECRET.toString();
}
