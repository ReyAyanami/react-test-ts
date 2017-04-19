import {PhotoModel} from '../../models/PhotoModel';
export interface PhotoService {
  getPath(): string;
  fetchPhoto(id: number): Promise<PhotoModel>;
}