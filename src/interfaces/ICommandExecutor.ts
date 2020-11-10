import { ICommand } from './ICommand';
import { IMessage } from './IMessage';

export interface ICommandExecutor {
  execute(command: ICommand, message: IMessage, args: string[]): Promise<void>;
}
