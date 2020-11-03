import { config } from 'dotenv';
import { IClient, ILogger } from 'src/interfaces';
import { container } from '../config/ioc.config';

async function bootstrap() {
  const client = container.get<IClient>('Client');
  const logger = container.get<ILogger>('Logger');

  // Configure dotenv
  config();

  // Authenticate with Discord
  await client.login(process.env.DISCORD_TOKEN);

  logger.info('Server started');
}

bootstrap();
