import { ClientEvents } from 'discord.js';
import { injectable } from 'inversify';
import { IEvent } from '../interfaces';

@injectable()
export class JoinEvent implements IEvent {
  id: IEvent['id'];

  constructor() {
    this.id = 'guildMemberAdd';
  }

  handler([member]: ClientEvents['guildMemberAdd']): void {
    member.roles.add(process.env.DISCORD_JOIN_ROLE);
  }
}
