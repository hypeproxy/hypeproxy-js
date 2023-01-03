#!/bin/bash
export MINOR_VERSION=$(grep -o "<Version>3.0.\(.*\)<\/Version>" ./hypeproxy-dotnet/src/HypeProxy/HypeProxy.csproj | sed 's/<Version>3.0.\(.*\)<\/Version>/\1/' | awk '{print $1}')
sed -i "s/\"version\": \"3.0.\(.*\)\"/\"version\": \"3.0.$MINOR_VERSION\"/" ./package.json
