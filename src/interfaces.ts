export interface ErrolNotification {
  text: string;
}

export interface ErrolEmailConfiguration {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}
