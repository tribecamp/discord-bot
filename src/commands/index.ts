import { container } from '../config/ioc.config';
import { ICommand } from '../interfaces';

import { PingCommand } from './PingCommand';
import { GithubCommand } from './GithubCommand';

export const commands: ICommand[] = [
  PingCommand,
  GithubCommand
].map((i) => container.resolve<ICommand>(i));
