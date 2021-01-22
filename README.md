# 🦉 Errol

Errol delivers your notifications wherever you want them. It's a Node.js project that integrates with your favorite services, like Slack, Telegram, and, email.

<!-- prettier-ignore-start -->
|   | Status |
| - | - |
| Build | [![Node CI](https://github.com/koj-co/errol/workflows/Node%20CI/badge.svg)](https://github.com/koj-co/errol/actions?query=workflow%3A%22Node+CI%22) [![Dependencies](https://img.shields.io/librariesio/github/koj-co/errol)](https://libraries.io/github/koj-co/errol) [![GitHub release (latest by date)](https://img.shields.io/github/v/release/koj-co/errol)](https://github.com/koj-co/errol/releases) [![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/koj-co/errol)](https://snyk.io/test/github/koj-co/errol) |
| Health | [![License CI](https://github.com/koj-co/errol/workflows/License%20CI/badge.svg)](https://github.com/koj-co/errol/actions?query=workflow%3A%22License+CI%22) [![CLA Assistant](https://github.com/koj-co/errol/workflows/CLA%20Assistant/badge.svg)](https://github.com/koj-co/errol/actions?query=workflow%3A%22CLA+Assistant%22) [![Pull Request Labeler](https://github.com/koj-co/errol/workflows/Pull%20Request%20Labeler/badge.svg)](https://github.com/koj-co/errol/actions?query=workflow%3A%22Pull+Request+Labeler%22) |
| PRs | [![PR Generator CI](https://github.com/koj-co/errol/workflows/PR%20Generator%20CI/badge.svg)](https://github.com/koj-co/errol/actions?query=workflow%3A%22PR+Generator+CI%22) [![Merge PRs](https://github.com/koj-co/errol/workflows/Merge%20PRs/badge.svg)](https://github.com/koj-co/errol/actions?query=workflow%3A%22Merge+PRs%22) |
<!-- prettier-ignore-end -->

## ⭐️ Usage

To send a notification to all services:

```ts
import { Errol, ErrolService } from "errol"; // TypeScript/ESM
// const { Errol, ErrolService } = require("errol");

const notifications = new Errol([
  {
    service: ErrolService.SLACK,
    token: "your-slack-token",
    channelId: "your-slack-channel",
  },
  {
    service: ErrolService.TELEGRAM,
    accessToken: "your-telegram-token",
    chatId: "your-telegram-chat",
  },
  {
    service: ErrolService.EMAIL,
    from: "you@example.com",
    to: "you@example.com",
    host: "example.com",
    auth: {
      user: "you@example.com",
      pass: "your-password",
    },
  },
]);

// Send a notification
notifications.send("This is my notification!");
```

Currently supported services:

- [x] Slack
- [x] Telegram
- [x] Email
- [ ] Twilio SMS

## 📄 License

[MIT](./LICENSE) © [Koj](https://koj.co)

<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align="center">
  <sub>An open source project by <a href="https://koj.co">Koj</a>. <br> <a href="https://koj.co">Furnish your home in style, for as low as CHF175/month →</a></sub>
</p>
