/**
 * @copyright Koj <https://koj.co>
 * @link https://github.com/koj-co/errol
 * */

import { HTTPAlias } from "got/dist/source";

export interface ErrolNotification {
  text: string;
}

export enum ErrolService {
  EMAIL,
  SLACK,
  TELEGRAM,
  WEBHOOK,
}

export type ErrolServiceConfiguration =
  | {
      service: ErrolService.EMAIL;
      config: ErrolEmailConfiguration;
    }
  | {
      service: ErrolService.SLACK;
      config: ErrolSlackConfiguration;
    }
  | {
      service: ErrolService.TELEGRAM;
      config: ErrolTelegramConfiguration;
    }
  | {
      service: ErrolService.WEBHOOK;
      config: ErrolWebhookConfiguration;
    };

export interface ErrolWebhookConfiguration {
  url: string;
  method: HTTPAlias;
}

export interface ErrolTelegramConfiguration {
  accessToken: string;
  chatId: string;
}

export interface ErrolSlackConfiguration {
  token: string;
  channelId: string;
}

export interface ErrolEmailConfiguration {
  from: string;
  to: string;
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}
