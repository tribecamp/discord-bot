import { container } from '../config/ioc.config';
import { ICommand } from '../interfaces';

import { PingCommand } from './PingCommand';

export const commands: ICommand[] = [
  PingCommand
].map((i) => container.resolve<ICommand>(i));
