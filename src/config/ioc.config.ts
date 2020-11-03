import 'reflect-metadata';
import { Client } from 'discord.js';
import { Container } from 'inversify';
import { IClient } from '../interfaces';

const container = new Container();

container.bind<IClient>('Client').toConstantValue(new Client());

export { container };
