import { ICommandArgument } from './ICommandArgument';
import { IMessage } from './IMessage';

export interface ICommand {
  id: string;
  args: ICommandArgument[];
  execute(message: IMessage, args: string[]);
}
