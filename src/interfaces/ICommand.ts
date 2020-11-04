import { IMessage } from "./IMessage";

export interface ICommand {
  id: string;
  args: string[];
  execute(message: IMessage, args: ICommand['args']): Promise<void>;
}
