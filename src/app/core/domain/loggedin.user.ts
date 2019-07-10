export class LoggedInUser {
  constructor(accesstoken: string, username: string, fullName: string, email: string, avatar: string) {
    this.accesstoken = accesstoken;
    this.username = username;
    this.fullName = fullName;
    this.email = email;
    this.avatar = avatar;
  }

  public id: string;
  public accesstoken: string;
  public username: string;
  public fullName: string;
  public email: string;
  public avatar: string;
}
