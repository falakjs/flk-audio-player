# Audio player

This package implements the [plyr](https://github.com/sampotts/plyr)

# Installation
`flk install flk-audio-player`

# Usage

`hello-world.component.js`

```html
<flk-audio-player [src]="this.audioFilePath"></flk-audio-player>
```

# Attributes

## controls
**name**: `[controls]`

**default**: `['play', 'progress', 'current-time', 'volume', 'settings', 'duration']`

Set what controls to display on the audio player.

## options

**name**: `[options]`

**default**: `{}`

Pass list of options to the player.

For full options list check [this table](https://github.com/sampotts/plyr#options).