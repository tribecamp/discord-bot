import { injectable } from 'inversify';
import { MessageEmbedOptions } from 'discord.js';
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
      'Hiya', 'Hola',
      'Hi there', 'Fakka',
      'Здравствуйте', '你好'
    ];

    const i = Math.floor(Math.random() * greetings.length);

    const pingEmbed: MessageEmbedOptions = {
      title: `${greetings[i]} ${message.member.displayName}!`,
      color: 16312092,
      footer: {
        text: `🏓 Latency is ${Date.now() - message.createdTimestamp} ms.`
      }

    };

    await message.channel.send({ embed: pingEmbed });
  }
}
