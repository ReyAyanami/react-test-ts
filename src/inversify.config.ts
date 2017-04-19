import 'reflect-metadata';
import {Container} from 'inversify';

import getDecorators from 'inversify-inject-decorators';
import {UserService} from './services/User/User';
import Services from './services/index';
import {DefaultUserService} from './services/User/impl/Default';
import {PhotoService} from './services/Photo/Photo';
import {DefaultPhotoService} from './services/Photo/impl/Default';

const myContainer = new Container();
myContainer.bind<UserService>(Services.UserService)
           .to(DefaultUserService);
myContainer.bind<PhotoService>(Services.PhotoService)
           .to(DefaultPhotoService);

const {
  lazyInject,
  lazyInjectNamed,
  lazyInjectTagged,
  lazyMultiInject
} = getDecorators(myContainer);

export {
  myContainer,
  lazyInject,
  lazyInjectNamed,
  lazyInjectTagged,
  lazyMultiInject
};