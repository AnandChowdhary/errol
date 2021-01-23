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
  ErrolTelegramConfiguration,
  ErrolWebhookConfiguration,
  ErrolIFTTTConfiguration,
} from "./interfaces";
import { createTransport } from "nodemailer";
import { WebClient } from "@slack/web-api";
import { TelegramClient } from "messaging-api-telegram";
import got from "got";

export class Errol {
  constructor(private configuration: ErrolServiceConfiguration[]) {}

  async send(notification: ErrolNotification) {
    for await (const item of this.configuration) {
      if (item.service === ErrolService.EMAIL) await this.email(item.config, notification);
      else if (item.service === ErrolService.SLACK) await this.slack(item.config, notification);
      else if (item.service === ErrolService.TELEGRAM)
        await this.telegram(item.config, notification);
      else if (item.service === ErrolService.WEBHOOK) await this.webhook(item.config, notification);
      else if (item.service === ErrolService.IFTTT) await this.ifttt(item.config, notification);
    }
  }

  private async ifttt(config: ErrolIFTTTConfiguration, notification: ErrolNotification) {
    return got.post(`https://maker.ifttt.com/trigger/${config.event}/with/key/${config.key}`, {
      json: { value1: notification.text },
    });
  }

  private async webhook(config: ErrolWebhookConfiguration, notification: ErrolNotification) {
    return got[config.method](config.url, { json: notification });
  }

  private async telegram(config: ErrolTelegramConfiguration, notification: ErrolNotification) {
    const client = new TelegramClient({
      accessToken: config.accessToken,
    });
    return client.sendMessage(config.chatId, notification.text);
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
