import json, concurrent.futures, urllib.request, urllib.error, re,sys
from pathlib import Path
base=Path(__file__).parent
rows=json.loads((base/'selected.json').read_text(encoding='utf-8'))
ids=set(map(int,sys.argv[1].split(','))) if len(sys.argv)>1 else None
def check(r):
    req=urllib.request.Request(r['url'],headers={'User-Agent':'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req,timeout=18) as f:
            data=f.read(200000)
            typ=f.headers.get('Content-Type','')
            return {'i':r['i'],'status':f.status,'url':f.url,'mime':typ,'html_error':bool(re.search(rb'<title>[^<]*(?:404|not found)',data,re.I))}
    except urllib.error.HTTPError as e: return {'i':r['i'],'status':e.code}
    except Exception as e: return {'i':r['i'],'status':'unverified','error':str(e)[:100]}
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:
    results=list(ex.map(check,[r for r in rows if r['url'] and (ids is None or r['i'] in ids)]))
(base/('link-checks-updated.json' if ids else 'link-checks.json')).write_text(json.dumps(results,indent=2))
print(json.dumps({'checked':len(results),'statuses':{str(s):sum(x['status']==s for x in results) for s in set(x['status'] for x in results)},'errors':[x for x in results if x.get('html_error') or x['status'] in [404,410]]}))
