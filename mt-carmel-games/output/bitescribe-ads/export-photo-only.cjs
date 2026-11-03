const sharp=require('C:/Users/jeffb/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const path=require('path');
const source='C:/Users/jeffb/.codex/generated_images/01a111cb-798d-7862-989d-ddb66564f5a3';
const files=[['square','exec-a802ead3-169a-4cf0-af9f-de7b2a8c0bf7.png',1080,1080],['vertical','exec-8bae515e-46a2-4e52-b18d-6fa7e5c0de19.png',1080,1920],['horizontal','exec-b9721d3b-73f1-40b6-8ca9-43247c1a0d87.png',1200,628],['feed','exec-a4d61343-1d50-4215-9528-c135a67fae1b.png',1080,1350]];
(async()=>{for(const[name,file,width,height]of files){const dest=path.join('output/bitescribe-ads',`bitescribe-photo-${name}-${width}x${height}.png`);await sharp(path.join(source,file)).resize(width,height,{fit:'cover',position:'centre'}).png().toFile(dest);const m=await sharp(dest).metadata();console.log(`${dest}: ${m.width}x${m.height}`);}})().catch(e=>{console.error(e);process.exit(1)});
