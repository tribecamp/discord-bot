import { injectable } from "inversify";
import { ICommand, IMessage } from "../interfaces";

@injectable()
export class PingCommand implements ICommand {
  id: string;

  args: string[];

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

    const index = Math.floor(Math.random() * greetings.length)
    await message.channel.send(`${greetings[index]} ${message.author.username}!`);
  }
}
