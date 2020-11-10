import { injectable } from 'inversify';
import { ICommand, IMessage, ICommandExecutor } from '../interfaces';

@injectable()
export class CommandExecutor implements ICommandExecutor {
  async execute(command: ICommand, message: IMessage, args: string[]): Promise<void> {
    // TODO: validation & print usage before executing
    await command.execute(message, args);
  }
}
