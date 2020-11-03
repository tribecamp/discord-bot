import 'reflect-metadata';
import { Client } from 'discord.js';
import { Container } from 'inversify';
import { IClient, IConfig } from '../interfaces';
import { config } from '.';

const container = new Container();

container.bind<IClient>('Client').toConstantValue(new Client());
container.bind<IConfig>('Config').toConstantValue(config);

export { container };
