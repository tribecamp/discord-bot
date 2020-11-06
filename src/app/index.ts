import { config } from 'dotenv';
import { events } from '../events';
import { IClient, ILogger } from '../interfaces';
import { container } from '../config/ioc.config';

async function bootstrap() {
  const client = container.get<IClient>('Client');
  const logger = container.get<ILogger>('Logger');

  // Configure dotenv
  config();

  // Authenticate with Discord
  await client.login(process.env.DISCORD_TOKEN);

  // Register events
  events.forEach((event) => {
    client.on(event.id, (...args) => event.handler(args));
  });

  logger.info('Server started');
}

bootstrap();
