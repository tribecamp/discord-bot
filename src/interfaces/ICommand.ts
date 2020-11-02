export interface ICommand {
  id: string;
  args: string[];
  execute(args: ICommand['args']): Promise<void>;
}
