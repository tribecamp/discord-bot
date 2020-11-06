import { container } from "../config/ioc.config";
import { IEvent } from "../interfaces";

import { MessageEvent } from "./MessageEvent";

export const events: IEvent[] = [
  MessageEvent
].map(i => container.resolve<IEvent>(i));
