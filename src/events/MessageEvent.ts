import { ClientEvents } from 'discord.js';
import { inject, injectable } from 'inversify';
import { commands } from '../commands';
import { IConfig, IEvent } from '../interfaces';

@injectable()
export class MessageEvent implements IEvent {
  id: IEvent['id'];

  constructor(
    @inject('Config') private config: IConfig
  ) {
    this.id = 'message';
  }

  handler([message]: ClientEvents['message']): void {
    if (message.content.startsWith(this.config.commandPrefix)) {
      const [command, ...args] = message.content.slice(1).split(' ');
      const targetCommand = commands.find((i) => i.id === command);

      if (targetCommand) {
        targetCommand.execute(message, args);
      }
    }
  }
}
