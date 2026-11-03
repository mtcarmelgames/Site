import fs from 'node:fs/promises';
import {FileBlob, SpreadsheetFile} from '@oai/artifact-tool';
const dir = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const wb = await SpreadsheetFile.importXlsx(await FileBlob.load('C:/Users/jeffb/Downloads/US_Major_Restaurant_Chains_Comprehensive.xlsx'));
const sh = wb.worksheets.getItemAt(0);
if(process.argv.includes('--help')){console.log(wb.help('table.resize',{include:'index,examples,notes',maxChars:2500}).ndjson);console.log(JSON.stringify(sh.tables.items.map(t=>({name:t.name,style:t.style}))));process.exit(0);}
console.log((await wb.inspect({kind:'workbook,sheet,table',maxChars:3000,tableMaxRows:4,tableMaxCols:3})).ndjson);
const before = await wb.render({sheetName:sh.name,range:'A1:C12',scale:1,format:'png'});
await fs.writeFile(dir+'before.png', new Uint8Array(await before.arrayBuffer()));
if (process.argv.includes('--inspect')) process.exit(0);
const rows=JSON.parse(await fs.readFile(dir+'selected.json','utf8'));
const count=rows.length;
if(new Set(rows.map(r=>r.name.toLowerCase())).size!==count)throw new Error('Duplicate restaurant names');
if(rows.some(r=>!r.type))throw new Error('Missing type');
sh.getRange('A2:C439').clear({applyTo:'contents'});
sh.getRange(`A2:C${count+1}`).values=rows.map(r=>[r.name,r.url||null,r.type]);
sh.getRange(`A${count+2}:C439`).clear({applyTo:'all'});
sh.getRange('A1:A411').format.columnWidth=46;
sh.getRange('B1:B411').format.columnWidth=105;
sh.getRange('C1:C411').format.columnWidth=55;
sh.getRange(`A2:C${count+1}`).format.wrapText=true;
sh.getRange(`A2:C${count+1}`).format.verticalAlignment='center';
for(let i=0;i<rows.length;i++){
 const r=rows[i];const lines=Math.max(Math.ceil(r.name.length/43),Math.ceil(r.url.length/112),Math.ceil(r.type.length/52),1);
 sh.getRange(`A${i+2}:C${i+2}`).format.rowHeight=lines*15+8;
}
sh.freezePanes.freezeRows(1);
wb.recalculate();
const vals=sh.getRange(`A2:C${count+1}`).values;
if(vals.length!==count||vals.some((r,i)=>r[0]!==rows[i].name||(r[1]||'')!==rows[i].url||r[2]!==rows[i].type))throw new Error('Workbook data mismatch');
console.log((await wb.inspect({kind:'table',range:`'US Restaurant Chains'!A1:C8`,include:'values,formulas',tableMaxRows:8,tableMaxCols:3,maxChars:2500})).ndjson);
console.log((await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30},maxChars:1000})).ndjson);
for(const [name,range] of [['after','A1:C13'],['middle','A192:C201'],['end',`A${count-6}:C${count+1}`]]){
 const img=await wb.render({sheetName:sh.name,range,scale:1,format:'png'});
 await fs.writeFile(dir+name+'.png',new Uint8Array(await img.arrayBuffer()));
}
const output=await SpreadsheetFile.exportXlsx(wb);
await output.save(dir+'US_Restaurant_Chain_Nutrition_Sources.xlsx');
console.log(JSON.stringify({restaurants:count,removed:438-count,sourceLinks:rows.filter(r=>r.url).length,flaggedWithoutUrl:rows.filter(r=>!r.url).length,output:dir+'US_Restaurant_Chain_Nutrition_Sources.xlsx'}));
