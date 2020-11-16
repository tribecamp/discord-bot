import { container } from '../config/ioc.config';
import { ICommand } from '../interfaces';

import { PingCommand } from './PingCommand';
import { GithubCommand } from './GithubCommand';
import { RoadmapCommand } from './RoadmapCommand';
import { BanCommand } from './BanCommand';
import { KickCommand } from './KickCommand';

export const commands: ICommand[] = [
  PingCommand,
  GithubCommand,
  RoadmapCommand,
  BanCommand,
  KickCommand
].map((i) => container.resolve<ICommand>(i));
