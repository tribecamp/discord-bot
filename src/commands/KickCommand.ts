import { Message } from 'discord.js';
import { injectable } from 'inversify';
import { ICommand, ICommandArgument, IMessage } from '../interfaces';

@injectable()
export class KickCommand implements ICommand {
  id: string;

 args: ICommandArgument[];

 constructor() {
   this.id = 'kick';
   this.args = [{
     name: 'user',
     required: true
   }];
 }

 async execute(message: IMessage, args: string[]): Promise<Message> {
   // If author does not have the mod role, return
   if (!message.member.roles.cache.has(process.env.DISCORD_MOD_ROLE)) return message.channel.send(`<@!${message.author.id}>, you do not have the correct permissions to use this command!`);

   // If there are no arguments, return
   if (!args[0]) return message.channel.send(`<@!${message.author.id}>, you must provide a user!\nUsage: \`!kick <user>\``);

   // Convert mention to ID, and get the user.
   const user = message.guild.member(args[0].replace(/[!#&<>@\\]/g, ''));

   // If user does not exist, return
   if (!user) return message.channel.send('This user can not be found in this guild.');

   try {
     // Kicks the user.
     await user.kick('Kicked by Tribecamp Bot');
     return message.channel.send(`${user.displayName} got kicked!`);
   } catch (err) {
     // If bot does not have the correct permissions to kick the specified user, return
     if (err.message === 'Missing Permissions') return message.channel.send(`I do not have enough permissions to kick ${user.displayName}!`);
     return message.channel.send(`Unexpected error!\n(\`${err}\`)`);
   }
 }
}
