<h1 align="center">Bōto <i>ぼうと</i></h1>
<p align="center">Another simple Discord music bot.</p>


## 📋 About
I started this project because I couldn't find any simple music bot that worked the way I want it to. You are free to do whatever you want with the project code, I have uploaded it on GitHub for personal convenience.

## ✨ Features
- [x] Basic music control commands _(play, pause, skip...)_
- [x] Queue system _(still work in progress)_
- [ ] Playlist support _(planned)_

## ⚠️ Dependencies
- FFmpeg
- Node dependencies _(npm install)_

## ⬇ Installation
### Using the source code
The project is at a VERY early stage, but right now it can be executed if you do the follwing steps:
```bash
git clone https://github.com/PanIntegralus/boto.git
cd boto
npm install
```
Then create a file named ``config.json`` in the project root with this options:
```json
{
    "token": "<YOURBOTTOKENHERE>",
    "clientID": "<BOTIDHERE>",
    "prefix": "!",
    "botOwnerID": "<BOTOWNERIDHERE>"
}
```
You can change the prefix to whatever you want.

To run the bot:
```bash
node index.js
```

### Using Docker
Coming soon, when the project reaches a more stable version.
