import { ClientEvents } from 'discord.js';
import { inject, injectable } from 'inversify';
import { commands } from '../commands';
import { ICommandExecutor, IConfig, IEvent } from '../interfaces';

@injectable()
export class MessageEvent implements IEvent {
  id: IEvent['id'];

  constructor(
    @inject('Config') private config: IConfig,
    @inject('CommandExecutor') private commandExecutor: ICommandExecutor
  ) {
    this.id = 'message';
  }

  handler([message]: ClientEvents['message']): void {
    if (message.content.startsWith(this.config.commandPrefix)) {
      const [command, ...args] = message.content.slice(1).split(' ');
      const targetCommand = commands.find((i) => i.id.toLowerCase() === command.toLowerCase());

      if (targetCommand) {
        this.commandExecutor.execute(targetCommand, message, args);
      }
    }
  }
}
