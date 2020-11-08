/* eslint-disable no-console */
import { injectable } from 'inversify';
import { ILogger } from '../interfaces';

@injectable()
export class Logger implements ILogger {
  private log(level: string, msg: string): void {
    console.log(`[${level}] ${msg}`);
  }

  info(msg: string): void {
    this.log('INFO', msg);
  }

  error(msg: string, error: Error): void {
    this.log('ERROR', `${msg}\n${error}`);
  }
}
