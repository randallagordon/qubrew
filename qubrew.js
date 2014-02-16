"use strict";

var sbmidi = require("spacebrew-midi"),
	inPorts, outPorts

sbmidi.connect({ name: "QuNeo" })

inPorts  = sbmidi.getInPorts()
outPorts = sbmidi.getOutPorts()

sbmidi.openInPort(inPorts.indexOf("QUNEO"))
sbmidi.openOutPort(outPorts.indexOf("QUNEO"))

// Ranges for first QuNeo mode
sbmidi.addInputRange(0x24, 0x33)
sbmidi.addOutputRange(0x00, 0x1F)
