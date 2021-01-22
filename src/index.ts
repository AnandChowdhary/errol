/**
 * @copyright Koj <https://koj.co>
 * @link https://github.com/koj-co/errol
 */

import {
  ErrolService,
  ErrolEmailConfiguration,
  ErrolNotification,
  ErrolServiceConfiguration,
  ErrolSlackConfiguration,
} from "./interfaces";
import { createTransport } from "nodemailer";
import { WebClient } from "@slack/web-api";

export class Errol {
  constructor(private configuration: ErrolServiceConfiguration[]) {}

  async send(notification: ErrolNotification) {
    for await (const item of this.configuration) {
      if (item.service === ErrolService.EMAIL) await this.email(item.config, notification);
      else if (item.service === ErrolService.SLACK) await this.slack(item.config, notification);
    }
  }

  private async slack(config: ErrolSlackConfiguration, notification: ErrolNotification) {
    const client = new WebClient(config.token);
    return client.chat.postMessage({
      text: notification.text,
      channel: config.channelId,
    });
  }

  private async email(config: ErrolEmailConfiguration, notification: ErrolNotification) {
    const transport = createTransport(config);
    return transport.sendMail({
      from: config.from,
      to: config.to,
      subject: "Notification",
      text: notification.text,
      html: `<p>${notification.text}</p>`,
    });
  }
}
