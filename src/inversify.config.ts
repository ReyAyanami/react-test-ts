///<reference path="services/User/User.tsx"/>
import 'reflect-metadata';
import {Container} from 'inversify';

import getDecorators from 'inversify-inject-decorators';
import {User} from './services/User/User';
import Services from './services/index';
import {DefaultUser} from './services/User/impl/Default';
import {Photo} from './services/Photo/Photo';
import {DefaultPhoto} from './services/Photo/impl/Default';

const myContainer = new Container();
myContainer.bind<User>(Services.User)
           .to(DefaultUser);
myContainer.bind<Photo>(Services.Photo)
           .to(DefaultPhoto);

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