export interface ErrolNotification {
  text: string;
}

export enum ErrolService {
  EMAIL,
  SLACK,
}

export type ErrolServiceConfiguration =
  | {
      service: ErrolService.EMAIL;
      config: ErrolEmailConfiguration;
    }
  | {
      service: ErrolService.SLACK;
      config: ErrolSlackConfiguration;
    };

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
