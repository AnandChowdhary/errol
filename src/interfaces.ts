export interface ErrolNotification {
  text: string;
}

export enum ErrolService {
  EMAIL,
}

export type ErrolServiceConfiguration = {
  service: ErrolService;
  config: ErrolEmailConfiguration;
};

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
