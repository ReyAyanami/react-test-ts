import {UserModel} from '../../models/User';
export interface UserService {
  fetchUser(id: number): Promise<UserModel>
  getPhoto(): string;
}