import { config } from 'dotenv';
import { events } from '../events';
import { IClient, ILogger } from '../interfaces';
import { container } from '../config/ioc.config';

async function bootstrap(): Promise<void> {
  const client = container.get<IClient>('Client');
  const logger = container.get<ILogger>('Logger');

  // Configure dotenv
  config();

  // Authenticate with Discord
  await client.login(process.env.DISCORD_TOKEN);

  // Set status
  await client.user.setPresence({
    activity: {
      name: 'the Tribecamp Server',
      type: 'WATCHING'
    },
    status: 'online'
  });

  // Register events
  events.forEach((event) => {
    client.on(event.id, (...args) => event.handler(args));
  });

  logger.info('Server started');
}

bootstrap();
