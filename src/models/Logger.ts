/* eslint-disable no-console */
import { injectable } from 'inversify';
import chalk from 'chalk';
import { ILogger } from '../interfaces';

@injectable()
export class Logger implements ILogger {
  private log(level: string, msg: string): void {
    console.log(`${chalk.gray(`[${level}]`)} ${msg}`);
  }

  info(msg: string): void {
    this.log(chalk.green('INFO'), msg);
  }

  error(msg: string, error: Error): void {
    this.log(chalk.red('ERROR'), `${msg}\n${error}`);
  }
}
