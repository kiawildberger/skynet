#!/usr/bin/env node
if(require("command-exists").sync('python3')) {
    require("child_process").exec("/usr/bin/python3 -u ../lib/skynet.py")
} else { console.log("skynet needs python3 to run. please install python3 to continue") }