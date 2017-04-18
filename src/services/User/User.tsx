import {UserModel} from '../../models/UserModel';
export interface User {
  fetchUser(): Promise<UserModel>
  getPhoto(): string;
}