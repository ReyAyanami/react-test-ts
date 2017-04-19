import {PhotoService} from '../Photo';
import {injectable} from 'inversify';
import FetchApi from '../../../utils/fetch';

@injectable()
export class DefaultPhotoService implements PhotoService {
  fetchPhoto(id: number) {
    return FetchApi.fetch(new Request(`https://jsonplaceholder.typicode.com/photos/${id}`));
  }

  getPath() {
    return 'somepath';
  }
}