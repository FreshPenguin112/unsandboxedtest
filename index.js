(function(Scratch) {
  'use strict';
  class ext {
    constructor(runtime, id) {
        //ext stuff
        this.runtime = runtime;
        this.menuIconURI = null;
        this.blockIconURI = null;
        this.colorScheme = ["#41e2d0", "#0DA57A"];
    }
    getInfo() {
        return {
            id: "gameutils",
            name: "GameUtils",
            blockIconURI: this.blockIconURI,
            menuIconURI: this.menuIconURI,
            color1: this.colorScheme[0],
            color2: this.colorScheme[1],
            blocks: [{
                "opcode": "LoadProject"
                "blockType": "command",
                "text": "Load Project from [url]",
                "arguments": {
                    "url": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, ]
        }
    }
    async LoadProject(args, util) {
        try {
            const req = await fetch(args.ul)
            if (req.status == 200) {
                vm.loadProject(await req.blob())
            } else {
                console.error("Could not load project"
                }
            } catch (e) {
                console.error(e)
            }
        }
    }
  }
  Scratch.extensions.register(new MyExtension());
})(Scratch);
