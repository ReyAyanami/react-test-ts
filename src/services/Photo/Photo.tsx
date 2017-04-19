import {PhotoModel} from '../../models/Photo';
export interface PhotoService {
  getPath(): string;
  fetchPhoto(id: number): Promise<PhotoModel>;
}