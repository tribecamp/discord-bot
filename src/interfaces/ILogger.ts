export interface ILogger {
  info(msg: string): void;
  error(msg: string, error: Error): void;
}
