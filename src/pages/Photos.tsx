import 'reflect-metadata';
import * as React from 'react';
import Services from '../services';
import {lazyInject} from '../inversify.config';
import {PhotoModel} from '../models/PhotoModel';
import {PhotoService} from '../services/Photo/Photo';

class PhotosComponent extends React.Component<{}, { photo: PhotoModel }> {

  @lazyInject(Services.PhotoService)
  private photoService: PhotoService;

  componentDidMount() {
    this.photoService
        .fetchPhoto(1)
        .then(photo => this.setState({photo}));
  }

  render() {
    //noinspection TypeScriptUnresolvedVariable
    const photo: PhotoModel = this.state ? this.state.photo : this.state;
    return photo ? (
      <div>
        <div>{photo.title}</div>
        <img src={photo.thumbnailUrl}/>
      </div>
    ) : (
      <div>loading or no photos</div>
    );
  }
}

const PhotosComponentWrapper = () => (
  <PhotosComponent />
);

export default PhotosComponentWrapper;
