const Component = require(COMPONENT_CLASS_PATH);

class AudioPlayerComponent extends Component {}

module.exports = {
    selector: 'flk-audio-player',
    isChild: false,
    handler: AudioPlayerComponent,
    isUnique: false,
    component: 'AudioPlayer',
    htmlFile: __dirname + '/../../flk-audio-player.component.html',
};