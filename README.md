# An example of Google Apps Script

An example to send notifications to a slack channel from Google Forms.

## Usage

Enable Google Apps Script API at
[https://script.google.com/home/usersettings](https://script.google.com/home/usersettings).

Create a slack bot, and create a web-hook for the bot at
[https://api.slack.com/apps](https://api.slack.com/apps).

```console
yarn install
yarn clasp login
```

Replace the timezone in [src/appsscript.json](src/appsscript.json).

```console
yarn clasp create --title gas-example --type forms --rootDir src
```

Add a trigger in `Triggers`.

| Property of the trigger | Value |
|-------------------------|-------|
| Choose which function to run | `onSubmit` |
| Select event source | `From form` |
| Select event type | `On form submit` |

Go to `Project Settings`. Under `Script Properties`, create a script property
with `webhook` as key. The value is your web-hook URL.

## Notes

### Managing triggers

[A comment](https://github.com/google/clasp/issues/641#issuecomment-501212587)
in [Issue 641](https://github.com/google/clasp/issues/641) says that you
cannot manage triggers with `clasp`, i.e. APIs.
