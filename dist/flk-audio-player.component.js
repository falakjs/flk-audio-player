class AudioPlayer {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        this.name = 'audio-player';
        this.defaultOptions = {
            controls: ['play', 'progress', 'current-time', 'volume', 'settings', 'duration'],
        };
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.src = this.inputs.getOption('src');
        this.options = this.inputs.getProp('options', this.defaultOptions);
        
        if (this.inputs.getAttr('controls')) {
            this.options.controls = this.inputs.getAttr('controls').split(',');
        } else if (this.inputs.getProp('controls')) {
            this.options.controls = this.inputs.getProp('controls');
        }

        if (! this.src) {
            throw new Error('<audio-player> requires src attribute to be valid source.');
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}