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
const extensionClass = ext;
	if (Scratch) {
		if (Scratch.extensions.unsandboxed) {
			Scratch.extensions.register(new ext(Scratch.vm));
		} else {
			throw new Error("Images cannot run in sandboxed mode.");
		} /*
	} else if (globalThis.vm) {
		// Support loading the extension "the old way"
		// (running the code in something like the browser console
		// or E羊icques' load_plugin URL parameter)
		const extensionInstance = new extensionClass(globalThis.vm);
		const serviceName = globalThis.vm.extensionManager._registerInternalExtension(
			extensionInstance
		);
		globalThis.vm.extensionManager._loadedExtensions.set(
			extensionInstance.getInfo().id, serviceName
		); */
	} else {
		throw new Error("Images cannot run in sandboxed mode.");
	};
