import { inject, injectable } from 'inversify';
import {
  ICommand, ICommandArgument, IMessage, ILogger
} from '../interfaces';

@injectable()
export class KickCommand implements ICommand {
  id: string;

  args: ICommandArgument[];

  @inject('Logger')
  logger: ILogger

  constructor() {
    this.id = 'kick';
    this.args = [{
      name: 'user',
      required: true
    }];
  }

  async execute(message: IMessage, args: string[]): Promise<void> {
    // If author does not have the mod role, return
    if (!message.member.roles.cache.has(process.env.DISCORD_MOD_ROLE)) {
      await message.channel.send(`<@!${message.author.id}>, you do not have the correct permissions to use this command!`);
      return;
    }

    // If there are no arguments, return
    if (!args[0]) {
      await message.channel.send(`<@!${message.author.id}>, you must provide a user!\nUsage: \`!kick <user>\``);
      return;
    }
    // Convert mention to ID, and get the user.
    const user = message.guild.member(args[0].replace(/[!#&<>@\\]/g, ''));

    // If user does not exist, return
    if (!user) {
      await message.channel.send('This user can not be found in this guild.');
      return;
    }

    // If the role of user is above the role of the author, deny.
    if (message.member.roles.highest.position < user.roles.highest.position) {
      await message.channel.send('The user you want to ban is above your role!');
      return;
    }

    try {
      // Kicks the user.
      await user.kick('Kicked by Tribecamp Bot');
      await message.channel.send(`${user.displayName} got kicked!`);
      return;
    } catch (err) {
      // If bot does not have the correct permissions to kick the specified user, return
      if (err.message === 'Missing Permissions') {
        await message.channel.send(`I do not have enough permissions to kick ${user.displayName}!`);
        return;
      }
      await message.channel.send('Unexpected error! Please try again.');
      this.logger.error(`Error while trying to ban ${user.displayName}`, err);
    }
  }
}
