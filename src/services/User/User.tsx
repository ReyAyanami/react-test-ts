import {UserModel} from '../../models/UserModel';
export interface UserService {
  fetchUser(id: number): Promise<UserModel>
  getPhoto(): string;
}