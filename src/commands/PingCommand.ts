import { inject, injectable } from "inversify";
import { ICommand, ILogger, IMessage } from "../interfaces";

@injectable()
export class PingCommand implements ICommand {
  id: string;

  args: string[];

  constructor(
    @inject('Logger') private logger: ILogger
  ) {
    this.id = 'ping';
    this.args = [];
  }

  async execute(message: IMessage, args: string[]): Promise<void> {
    this.logger.info(JSON.stringify(args))
    await message.channel.send(`Hi ${message.member.nickname}!`);
  }
}
