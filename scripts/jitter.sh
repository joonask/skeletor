#!/bin/sh

# Simple continuous compilation for CoffeeScript. https://github.com/TrevorBurnham/Jitter

# Install:
# Read https://github.com/TrevorBurnham/Jitter#installing
#
# npm install -g jitter
which jitter &>/dev/null
if [ $? != 0 ]; then
    echo "jitter command not found. https://github.com/TrevorBurnham/Jitter#installing"
    exit 0
fi

jitter -b ../coffeescript ../public/js

