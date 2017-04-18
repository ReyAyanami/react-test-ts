import {Photo} from '../Photo';
import {injectable} from 'inversify';

@injectable()
export class DefaultPhoto implements Photo {
  getPath() {
    return 'somepath';
  }
}