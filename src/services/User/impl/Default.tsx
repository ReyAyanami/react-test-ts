import {
  inject,
  injectable
} from 'inversify';
import FetchApi from '../../../utils/fetch';
import {User} from '../User';
import {Photo} from '../../Photo/Photo';
import Services from '../../index';

@injectable()
export class DefaultUser implements User {

  @inject(Services.Photo)
  private photoService: Photo;

  fetchUser() {
    return FetchApi.fetch(new Request('https://jsonplaceholder.typicode.com/users/1'));
  }

  getPhoto() {
    return this.photoService.getPath();
  }
}