import { injectable } from 'inversify';
import { ICommand, ICommandArgument, IMessage } from '../interfaces';

@injectable()
export class RoadmapCommand implements ICommand {
  id: string;

  args: ICommandArgument[];

  constructor() {
    this.id = 'roadmap';
    this.args = [];
  }

  async execute(message: IMessage): Promise<void> {
    await message.channel.send('You may view our Roadmap here: <https://trello.com/b/QWzohYvh/tribecamp-roadmap>');
  }
}
