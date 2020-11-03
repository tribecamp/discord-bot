import 'reflect-metadata';
import { Client } from 'discord.js';
import { Container } from 'inversify';

import {
  IClient,
  IConfig,
  ILogger
} from '../interfaces';

import { Logger } from '../models/Logger';
import { config } from '.';

const container = new Container();

container.bind<IClient>('Client').toConstantValue(new Client());
container.bind<IConfig>('Config').toConstantValue(config);
container.bind<ILogger>('Logger').to(Logger);

export { container };
