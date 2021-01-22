export interface ErrolNotification {
  text: string;
}

export enum ErrolService {
  EMAIL,
  SLACK,
  TELEGRAM,
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
    };

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
