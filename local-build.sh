git pull
rm -rf dist
mv src/HypeProxy.ts ./HypeProxy.ts
tapper --project ../hypeproxy-dotnet/src/HypeProxy/HypeProxy.csproj --output ./src/ --enum name
mv ./HypeProxy.ts src/HypeProxy.ts
find ./src -name "*.ts" ! -name "index.ts" | xargs basename -s .ts | sort | xargs -I '{}' bash -c 'echo "export * from \"./{}\";"' >> ./src/index.ts
pnpm install
pnpm build
