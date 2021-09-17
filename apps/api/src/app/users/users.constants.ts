export class UserConstants {
  public static PASSWORD_REGEX = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
  );
}
