#!/bin/bash

# Transpile C# entities to TS.
tapper --project ../hypeproxy-dotnet/src/HypeProxy/HypeProxy.csproj --output ./build --enum name
cp -R ./src/* ./build

# Generate index.ts global export.
rm -rf ./build/index.ts
find ./build -name "*.ts" ! -name "index.ts" | xargs basename -s .ts | sort | xargs -I '{}' bash -c 'echo "export * from \"./{}\";"' >> ./build/index.ts

# Build the package.
pnpm install
pnpm build

# Cleanup
rm -rf build