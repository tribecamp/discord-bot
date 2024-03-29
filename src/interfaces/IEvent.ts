import { ClientEvents } from 'discord.js';

export interface IEvent {
  id: keyof ClientEvents;
  handler(args: unknown[]): void | Promise<void>;
}
