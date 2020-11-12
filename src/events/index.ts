import { container } from '../config/ioc.config';
import { IEvent } from '../interfaces';

import { JoinEvent } from './JoinEvent';
import { MessageEvent } from './MessageEvent';

export const events: IEvent[] = [
  JoinEvent,
  MessageEvent
].map((i) => container.resolve<IEvent>(i));
