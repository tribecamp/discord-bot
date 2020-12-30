import { ClientEvents, TextChannel } from 'discord.js';
import { injectable } from 'inversify';
import { IEvent } from '../interfaces';

@injectable()
export class JoinEvent implements IEvent {
  id: IEvent['id'];

  constructor() {
    this.id = 'guildMemberAdd';
  }

  handler([member]: ClientEvents['guildMemberAdd']): void {
    if (Date.now() - member.user.createdTimestamp < 1000 * 60 * 60 * 24 * 14) {
      const reason = 'Hey daar! We hebben je helaas van de server moeten verwijderen, omdat je account minder dan 14 dagen oud is. Dit doen wij om spam te voorkomen in de server.\nWe zien je binnenkort graag terug! Excuses voor het ongemak.';
      member.user.send(reason).catch(() => null);
      member.kick(reason);
      (member.guild.channels.resolve(process.env.USER_VALIDATION_CHANNEL) as TextChannel).send(`${member.user.tag} (${member.user.id}) is verwijderd omdat het account te jong was.`);
      return;
    }
    member.roles.add(process.env.DISCORD_JOIN_ROLE);
  }
}
