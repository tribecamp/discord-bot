import { injectable } from 'inversify';
import { ICommand, ICommandArgument, IMessage } from '../interfaces';

@injectable()
export class GithubCommand implements ICommand {
  id: string;

  args: ICommandArgument[];

  constructor() {
    this.id = 'github';
    this.args = [];
  }

  async execute(message: IMessage): Promise<void> {
    await message.channel.send(`Here is our GitHub Page: <https://github.com/tribecamp>`);
  }
}
