"use strict";

var sbmidi = require("spacebrew-midi"),
	inPorts, outPorts

function isQuNeo(portName) { return portName.indexOf("QUNEO") === -1 ? false : true; }

sbmidi.connect({ name: "QuNeo", description: "QuNeo, via Spacebrew! Code on GitHub: github.com/randallagordon/qubrew and github.com/randallagordon/spacebrew-midi" })

inPorts  = sbmidi.getInPorts()
outPorts = sbmidi.getOutPorts()

sbmidi.openInPort(inPorts.map(isQuNeo).indexOf(true))
sbmidi.openOutPort(outPorts.map(isQuNeo).indexOf(true))

// Ranges for first QuNeo mode
sbmidi.addInputRange(0x24, 0x33)
sbmidi.addOutputRange(0x00, 0x1F)
