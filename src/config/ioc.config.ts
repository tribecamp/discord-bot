import 'reflect-metadata';
import { Client, Intents } from 'discord.js';
import { Container } from 'inversify';

import {
  IClient,
  IConfig,
  ILogger
} from '../interfaces';

import { Logger } from '../models/Logger';
import { config } from '.';

const container = new Container();

container.bind<IClient>('Client').toConstantValue(new Client({
  disableMentions: 'everyone',
  ws: {
    intents: new Intents(515)
  }
}));
container.bind<IConfig>('Config').toConstantValue(config);
container.bind<ILogger>('Logger').to(Logger);

export { container };
