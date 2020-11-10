import 'reflect-metadata';
import { Client } from 'discord.js';
import { Container } from 'inversify';

import {
  IClient,
  ICommandExecutor,
  IConfig,
  ILogger
} from '../interfaces';

import { Logger, CommandExecutor } from '../models';
import { config } from '.';

const container = new Container();

container.bind<IClient>('Client').toConstantValue(new Client({
  disableMentions: 'everyone'
}));
container.bind<IConfig>('Config').toConstantValue(config);
container.bind<ILogger>('Logger').to(Logger);
container.bind<ICommandExecutor>('CommandExecutor').to(CommandExecutor);

export { container };
