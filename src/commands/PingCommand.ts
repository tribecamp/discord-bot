import { injectable } from 'inversify';
import { ICommand, ICommandArgument, IMessage } from '../interfaces';

@injectable()
export class PingCommand implements ICommand {
  id: string;

  args: ICommandArgument[];

  constructor() {
    this.id = 'ping';
    this.args = [];
  }

  async execute(message: IMessage): Promise<void> {
    const greetings = [
      'Aye', "What's up",
      'Hi', 'Hello',
      'Hiya', 'Hola'
    ];

    const { displayName } = message.guild.member(message.author);
    const index = Math.floor(Math.random() * greetings.length);
    await message.channel.send(`${greetings[index]} ${displayName}!`);
  }
}
