import fs from 'node:fs/promises';
const dir=new URL('.',import.meta.url);
const input=JSON.parse(await fs.readFile(new URL('input.json',dir),'utf8'));
const research=JSON.parse(await fs.readFile(new URL('research-all.json',dir),'utf8'));
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
const sources=[];
for(const [k,r] of Object.entries(research)) for(const block of String(r).split(/-{20,}/)){
 const m=block.match(/\((https?:\/\/[^\s]+)\)\n/); if(!m)continue;
 const u=m[1];const title=block.slice(0,m.index).trim(); const txt=block.slice(m.index+m[0].length,m.index+m[0].length+1800);
 if(!sources.some(x=>x.url===u)) sources.push({url:u,title:title.slice(0,300),text:txt});
}
const bad=/nutritionixx|ordersave|reddit|wikipedia|menupric|menuswith|recipeofhealth|nutritionandingredients|healthyfastfood|inlivo|fastfoodnutrition|dwlz|myfooddiary|fatsecret|nutricalcul|besly|eatminmax|bowlmacros|mealnutrition|nutrimetry|tempolife|foodfacto|glpdining|tablemacros|scribd|scrib|device.report|manuals.plus|calorie|allaboutmenus|frypedia|whatsvegetarian|menus-info|eatwise|doordash|instacart|yellowpages|tripadvisor|uspto|menuweb|menulist|menu-pick|prufapp|rippedrestaurants|nutrition-updated/;
const skip=new Set(['restaurant','restaurants','grill','coffee','steakhouse','steak','house','pizza','cream','famous','chicken','burritos','burrito','barbecue','barbeque','seafood','company','the','and','ice','subs','bar','cafe','food','chili','brothers','prime','fresh','deli','bakery','kitchen','american','real','city','barbq','taco','tacos']);
const rows=input.unique.map((name,i)=>{
 const words=name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/'s\b/g,'').split(/[^a-z0-9]+/).filter(x=>x.length>=3&&!skip.has(x));
 const candidates=sources.map(s=>{let host=new URL(s.url).hostname;let key=norm(host);let score=0;
 if(bad.test(host))return {...s,score:0};
 for(const w of words){if(key.includes(w))score+=8;else if(norm(s.title).includes(w))score+=2;}
 if(norm(s.title).includes(norm(name)))score+=4;
 if(/nutrition|nutritional|nutritionals|nutritional_info|nutritioninfo/i.test(s.title+' '+s.url))score+=3;
 if(/\.ca\b|\.co\.uk|\.com\.au|\.co\.id|\.co\.jp|\.ae\b|\.com\.mx|\.ca\/|canad|uk[/-]|united-kingdom|thailand|\.ph\b|\.ro\b/i.test(s.url+' '+s.title))score-=9;
 return {...s,score};}).filter(s=>s.score>=10).sort((a,b)=>b.score-a.score);
 return {i,name,candidates:candidates.slice(0,4),url:candidates[0]?.url||'',type:''};
});
await fs.writeFile(new URL('candidates.json',dir),JSON.stringify(rows,null,2));
console.log(rows.map(r=>`${r.i}\t${r.name}\t${r.url}`).join('\n'));
