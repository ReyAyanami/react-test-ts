import {
  inject,
  injectable
} from 'inversify';
import FetchApi from '../../../utils/fetch';
import {UserService} from '../User';
import {PhotoService} from '../../Photo/Photo';
import {Services} from '../../../di-container';

@injectable()
export class DefaultUserService implements UserService {

  @inject(Services.PhotoService)
  private photoService: PhotoService;

  fetchUser(id: number) {
    return FetchApi.fetch(new Request(`https://jsonplaceholder.typicode.com/users/${id}`));
  }

  getPhoto() {
    return this.photoService.getPath();
  }
}