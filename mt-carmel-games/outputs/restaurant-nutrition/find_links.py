import urllib.request,re,json,concurrent.futures
urls=['https://www.churchs.com/','https://www.duckdonuts.com/','https://www.pjscoffee.com/','https://www.cariboucoffee.com/','https://newks.com/','https://www.firehousesubs.com/','https://tacobueno.com/','https://www.ocharleys.com/']
def find(u):
 try:
  req=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'})
  with urllib.request.urlopen(req,timeout=20) as f:s=f.read(3000000).decode('utf8',errors='ignore')
  matches=list(dict.fromkeys(re.findall(r'.{0,150}(?:nutriti|allergen).{0,250}',s,re.I)))
  return {'url':u,'matches':matches[:20]}
 except Exception as e:return {'url':u,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:results=list(ex.map(find,urls))
from pathlib import Path
(Path(__file__).parent/'found-links.json').write_text(json.dumps(results,indent=2),encoding='utf8')
print(json.dumps(results))
