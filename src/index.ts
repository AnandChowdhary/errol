/**
 * @copyright Koj <https://koj.co>
 * @link https://github.com/koj-co/errol
 */

import {
  ErrolService,
  ErrolEmailConfiguration,
  ErrolNotification,
  ErrolServiceConfiguration,
} from "./interfaces";

export class Errol {
  constructor(private configuration: ErrolServiceConfiguration[]) {}

  async send(notification: ErrolNotification) {
    for await (const item of this.configuration) {
      if (item.service === ErrolService.EMAIL) await this.email(item.config, notification);
    }
  }

  private async email(config: ErrolEmailConfiguration, notification: ErrolNotification) {}
}
