import { ClientEvents } from 'discord.js';

export interface IEvent {
  id: keyof ClientEvents;
  handler(args: unknown[]): Promise<void>;
}
