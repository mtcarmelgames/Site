import fs from 'node:fs/promises';
const dir=new URL('.',import.meta.url);
const input=JSON.parse(await fs.readFile(new URL('input.json',dir),'utf8'));
const research={...JSON.parse(await fs.readFile(new URL('research-all.json',dir),'utf8')),...JSON.parse(await fs.readFile(new URL('research-extra.json',dir),'utf8'))};
Object.assign(research,JSON.parse(await fs.readFile(new URL('research-more.json',dir),'utf8')));
Object.assign(research,JSON.parse(await fs.readFile(new URL('research-last.json',dir),'utf8')));
Object.assign(research,JSON.parse(await fs.readFile(new URL('research-fixes.json',dir),'utf8')));
const sources=[];
for(const r of Object.values(research)) for(const block of String(r).split(/-{20,}/)){
 const m=block.match(/\((https?:\/\/[^\s]+)\)\n/);if(!m)continue;
 const url=m[1];if(sources.some(s=>s.url===url))continue;
 sources.push({url,title:block.slice(0,m.index).trim().slice(0,400),text:block.slice(m.index+m[0].length,m.index+m[0].length+3500)});
}
const rules=`
31|biscuitbelly.com/wp-content/uploads/2023/12/Allergen-Menu.pdf|Allergen-only PDF (nutrition not found)
48|bubbagump.com/menu/food-bgdb/|Menu with calories (Daytona Beach)
106|dixiechili.com/nutrition.php|Nutrition webpage
124|files.elfsightcdn.com/95d9d512-a886-4db3-81c5-431ed5c5dd9d/4ccb34c4-016d-4687-a9c7-d0db28b6f1e1.pdf|PDF
143|mrgattispizza.com/wp-content/uploads/2018/05/Nutritionals051518.pdf|PDF (2018)
186|jenis.com/pages/ingredients|Ingredients and nutrition by flavor
192|joescrabshack.com/menu/menu-csre/|Menu with calories (Redondo Beach)
196|grcloud.com/apps/kilwins_store/pdf/nutritional_info.pdf|PDF (calories and ingredients)
206|lepeep.com/wp-content/uploads/2026/04/CDA-Gluten-Free-Menu-4-2025-3.pdf|Menu PDF with calories (regional; gluten-free)
219|marbleslab.com/wp-content/uploads/2023/02/ICE-CREAM-Nutrition-Allergens-2-8-23.pdf|PDF (shared with Marble Slab; 2023)
220|assets.ctfassets.net/3dar4x4x74wk/eo5pk1hlY1laRbUdaUlx2|PDF
223|static1.squarespace.com/static/6489967520aa207907d79f3f/t/68bf07a053cff75b71b2d36c|PDF
226|mastrosrestaurants.com/event/allergen-page/|Allergen-only webpage (nutrition not found)
243|nativegrillandwings.com/wp-content/uploads/sites/5/2023/12/NGW_Nutritional-Information_12.8.23.pdf|PDF (2023)
273|a.storyblok.com/f/99717/x/f41566b855/nutritional-guide.pdf|PDF (2024)
292|thelube.com/pdf/qsl-menu-nutritional-information-01-2020.pdf|PDF (2020)
294|rasushi.com/wp-content/uploads/2025/09/Benihana-RA-Sushi-Concessions-Nutritional-Information-Sheet.pdf|PDF (concessions menu only)
300|sitemedia.blob.core.windows.net/redmango/2020/02/RM_Nutrition-Book|PDF (older guide)
321|scramblersrestaurants.com/wp-content/uploads/2025/03/Scramblers-Menu-Nutritional-Info-Mar-2025.pdf|PDF
323|shanesribshack.com/media/2916/shanes-nutrition-guide-website-_11x17_-2222_final_.pdf|PDF (2022)
327|sizzler.com/wp-content/uploads/2024/07/Sizzler-Nutrition.pdf|PDF
335|sonicdrivein.com/nutrition-allergen/|Webpage linking to PDF
351|tcby.com/menu-nutrition/|Menu item nutrition
376|tljus.com/menus/breads/milk-soft|Menu item nutrition (item pages)
390|wahaca.co.uk/mexican-menu-full/|Menu with calories and PDF (UK brand)
2|nutritionix.com/ninety-nine-restaurants/menu/premium|Nutrition explorer (access restricted)
23|benjerry.com/flavors/chocolate-chip-cookie-dough-ice-cream.html|Product nutrition labels (individual flavors)
33|koala-configurations.s3.us-east-1.amazonaws.com/public/assets/Nutrition-10|PDF
40|bobevans.com/nutrition|Web nutrition page (JavaScript; content unverified)
59|media-platform.cdn4dd.com/media/online_ordering_asset/processed/03f4d326|PDF
93|cousinssubs.com/api/media/file/Nutritional%20Info%20-%2010-16-26.pdf|PDF
128|fazolis.com/nutrition/|Webpage linking to nutrition guide
144|genghisgrill.com/menu/|Menu with calories and nutrition links
149|goldencorral.com/nutrition/|Nutrition explorer
171|a.storyblok.com/f/140760/x/3d26059f12|PDF
174|thehumanbean.com/blogs/drink-menu/hot-chocolate|Menu item nutrition (item pages)
191|jimmysegg.com/wp-content/uploads/2025/03/W_2025-02_JE_Menu_Update_-_WestTX.pdf|Menu PDF with calories (West Texas)
195|kfc.com/nutrition|Nutrition calculator (JavaScript required)
214|storyblok.pleinaircdn.com/f/261627/x/33919be238/nutrition-6-20-24.pdf|PDF (2024)
225|nutritionix.com/marcos-pizza/portal|Nutrition explorer
227|mauiwowisplitcdn.blob.core.windows.net/domain/Users/Documents/Default/Nutritional.pdf|PDF
236|assets.ctfassets.net/zqt8tllj2cy0/229Bgcvw5c0RwcUkhyghXG|PDF
238|mooyah.com/menu|Menu with nutrition links
255|orangeleafyogurt.com/files/OrangeLeaf_NutritionalChart_2026.pdf|PDF
271|peiwei.com/nutritional-information/|Nutrition webpage
280|pjscoffee.com/uploads/PJsNutritionalInfo.pdf|PDF (older guide)
282|planetsmoothie.com/assets/pdf/Nutritional-Information.pdf|PDF
290|potbelly.com/menu/Catering|Menu with nutrition calculator
302|cdn.ritasice.com/wp-content/uploads/2024/02/2024-Master-Nutrition-Guide.pdf|PDF (2024)
307|nutritionix.com/romanos-macaroni-grill/menu/premium|Nutrition explorer
320|scooterscoffee.com/media/wysiwyg/nutrition-and-allergen-information.pdf|PDF
341|sweetfrog.com/menu/nutrition/index.php|Webpage linking to PDF
349|storyblok.pleinaircdn.com/f/320970/x/555dae479c/taco_palenque_nutritional_facts.pdf|PDF
352|texasdebrazil.com/nutrition-allergens|Nutrition explorer (EveryBite)
359|thecounter.com/menu/|Webpage linking to PDF
369|timhortons.com/nutrition|Nutrition explorer (JavaScript; check US market)
373|topgolf.com/us/menu/|Menu with nutrition information
380|api.twinpeaksrestaurant.com/wp-content/uploads/Twin-Peaks-Nutritional-Guide_June2025.pdf|PDF
412|zaxbys.com/uploads/ZAX_NAI_Guide_Digital_d1f8bfb2fb.pdf|PDF
0|4rsmokehouse.com/faq|No public nutrition data (official FAQ)
3|awrestaurants.com/nutrition|Nutrition explorer
4|abuelos.com/nutritional-information|Nutrition webpage
6|anotherbrokenegg.com/faqs|Webpage linking to PDF
7|acfp.com/menu|Menu with calories
8|applebees.com/en/nutrition|Nutrition calculator and PDF downloads
9|arbys.com/nutrition|Webpage linking to PDF
12|atlantabread.com/wp-content/uploads/2023/03/2022-Nutritionals.pdf|PDF (2022)
13|aubonpain.com/nutrition|Webpage linking to PDF
14|auntieannes.com/contact-us/common-questions|FAQ linking to nutrition guide
17|bahamabreeze.com/nutrition|Webpage linking to PDF
18|bajafresh.com/nutrition|Webpage linking to PDF
20|barberitos.com/menu/|Menu with nutrition links
22|baskinrobbins.com/content/dam/br/pdf/BRNutrition.pdf|PDF
24|benihana.com/benihana-nutritional-information|Webpage linking to PDF
26|bertuccis.com/wp-content/uploads/2022/08/Bertuccis-Menu-Nutritionals.pdf|PDF (2022)
27|biaggis.com/nutritional-information|Nutrition information webpage
28|bigboy.com/menu|Menu with calories
29|biggby.com/wp-content/uploads/2026/02/BIGGBY_nutrition_February.26.26.pdf|PDF
30|billmillerbbq.com/nutrition-calculator|Nutrition calculator
32|bjsrestaurants.com/marketing-pages/allergen-and-nutritional-guides|Webpage linking to PDF
34|blackbeardiner.com/nutrition|Webpage linking to nutrition guide
35|support.blackriflecoffee.com/article/Nutrition-Facts|Nutrition webpage (black coffee only)
36|blazepizza.com/nutrition-calculator|Nutrition calculator
37|blimpie.com/assets/pdf/BlimpieNutritionalInfo.pdf|PDF
41|bojangles.pleinaircdn.com/menu/nutrition|Nutrition explorer
43|bonefishgrill.com/nutrition-information|Webpage linking to PDF
46|brueggers.com/wp-content/uploads/2026/02/Brueggers-Bagels-Nutritonal-Guide-2026.pdf|PDF
47|brusters.com/flavor-nutrition|Nutrition explorer
49|bubbakoos.com/menu/the-standard-burrito|Menu item nutrition (item pages)
50|dineatbuca.com/nutritional-menus|Webpage linking to PDF
51|buffalowildwings.com/nutrition|Webpage linking to PDF
52|burger21.com/wp-content/uploads/2022/10/NutritionalGuide_10.2022.pdf|PDF (2022)
53|help.bk.com/hc/en-us/articles/36913083446935|FAQ linking to nutrition information
54|burgerfi.com/nutritional-information|Nutrition webpage
56|assets.trinitip.caferio-core.com/5fc18ec8aa3c03000910c905/635fd8e1f2751f0008cf4c0b/CafeRioNutrition.pdf|PDF
57|cpk.mymenuhd.com/MyMenu/Nutrition|Nutrition explorer
60|captainds.com/wp-content/uploads/2026/03/Captain-Ds-Nutrition-and-Allergen-Chart_2026-03-27.pdf|PDF
61|cariboucoffee.com/wp-content/uploads/2020/03/CBOU_Nutrionals_392020.pdf|PDF (2020 file)
62|carlsjr.com/nutritional_info|Webpage linking to PDF
63|carrabbas.com/nutrition|Webpage linking to PDF
64|carvel.com/faqs|FAQ linking to nutrition guide
67|charleys.com/nutrition-info|Nutrition webpage and PDF
68|web.checkersandrallys.com/checkers-and-rallys-nutritional-facts|PDF
69|media.cheddars.com/images/site/pdf/Cheddars_Nutrition_Guide.pdf|PDF
70|thecheesecakefactory.com/nutrition|PDF
71|chevys.com/wp-content/uploads/2020/10/CHE_MISC_NUTRITIONGUIDE_0518_v10_compressed.pdf|PDF (2018 guide)
72|chickensaladchick.com/nutrition|Webpage linking to PDF
73|chick-fil-a.com/Nutrition-Allergens|Nutrition explorer
74|chilis.com/nutrition|Nutrition explorer and PDF downloads
75|chipotle.com/content/dam/chipotle/menu/nutrition/US-Nutrition-Facts-Paper-Menu-3-2025.pdf|PDF
76|chronictacos.com/nutrition|Nutrition webpages by category
78|chuckecheese.com/nutrition-information|Nutrition webpage and PDF
79|churchs.com/wp-content/uploads/2022/08/NutritionalFactSheet_ChurchsChicken_080922.pdf|PDF (2022 file)
80|chuys.com/faqs|FAQ with nutrition information
81|cicis.com/nutrition|Nutrition explorer and PDF downloads
82|cinnabon.com/-/media/cinnabon/nutrition/nutritional-guide-domestic-042025.pdf|PDF
83|citybbq.com/nutrition-allergens|Nutrition information webpage
84|claimjumper.com/files/nutrition-guide-pdf.pdf|PDF
85|cleanjuice.com/nutrition-facts|Webpage linking to PDF
86|coffeetime.com/menu|Menu (Canada; US nutrition unverified)
87|coldstonecreamery.com/nutrition/index.html|Webpage linking to PDF
88|cornerbakerycafe.blob.core.windows.net/media/Default/pdfs/CB%20Nutrition%20PDF%2012_18_24.pdf|PDF (2024)
90|media-cdn.getbento.com/accounts/2b3fa09317b4f49d36c34188bda32d3f/media/2QL5iPWKTzSlBFP7QaZa|PDF (2021)
91|costavida.com/nutrition-allergen-information|Nutrition information webpage
94|crackerbarrel.com/-/media/Project/cb-brandsite/brandsite/pdfs/Nutrition-Guide.pdf|PDF
96|culvers.com/nutrition-and-allergen-guide|Nutrition explorer and PDF downloads
98|dairyqueen.com/en-us/nutrition/food-treats|Nutrition explorer
99|daveandbusters.com/content/dam/dnb/menu-update/menu-pdf/DB_Nutritional_Menu_Spring_3_2_2026.pdf|PDF
100|daylightdonuts.com/nutritionals|Nutrition information webpage
102|deltaco.com/files/pdf/2026/nutritional-02-2026.pdf|PDF
103|d3ciwvs59ifrt8.cloudfront.net/d8f2c56f-c43b-41cc-b40e-7913c8fc471f/7e41fd99-b424-4890-8308-fcbd98f80aa0.pdf|PDF
104|dennys.com/nutrition|Nutrition information webpage
105|dickeys.com/company/nutritional|Nutrition information webpage
108|dominos.com/en/pages/content/nutritional/nutrition|Nutrition calculator and PDF downloads
109|files.donatos.com/2022/04/18/DonatosNutrition-4-18-2022.pdf|PDF (2022)
112|duckdonuts.com/documents/Duck-Donuts-Nutrition-Data-August-31-2023.pdf|PDF (2023)
113|dunkindonuts.com/nutrition|Nutrition explorer and PDF downloads
114|dunnbrothers.com/menu/nutrition-portal|Nutrition explorer
115|files.dutchbros.com/website/menu/nutritional-guide.pdf|PDF
116|eastcoastwings.com/nutritional-info|Webpage linking to PDF
117|media.eddiev.com/images/site/ext/menus/nutrition/nutrition-guide-dinner-locations.pdf|PDF
118|eggsupgrill.com/nutrition/latest/Nutrition-Guide.pdf|PDF
119|einsteinbros.com/contact/faq|FAQ linking to nutrition guide
120|elpolloloco.com/content/pdfs/epl_web_nutrition_guide_mod_2_2026_hr-2C.pdf|PDF
122|eltorito.com/wp-content/uploads/2020/08/el-torito-nutrition-facts.pdf|PDF (2020 file)
125|erbertandgerberts.com/wp-content/uploads/EG_Nutrition_Web.pdf|PDF
126|famousdaves.com/NutritionInfo|Webpage linking to PDF
127|fatburger.com/wp-content/uploads/2022/12/Nutrition.pdf|PDF (2022 file)
131|firstwatch.com/nutrition-and-allergens|Nutrition explorer and PDF downloads
132|fiveguys.com/nutritional-allergy-information|Nutrition webpage and PDF
133|flemingssteakhouse.com/promotions/nutrition|Webpage linking to PDF
136|freddys.com/nutrition-and-allergens|Nutrition explorer
137|friendlysrestaurants.com/nutrition-information|Nutrition calculator
139|frischsnwo.com/wp-content/uploads/2021/08/Frischs-Big-Boy-NW-Ohio-Nutrition-Values-8_2021.pdf|PDF (regional; 2021)
140|fuddruckers.guestresponse.com/contact/our-food-and-nutrition|Nutrition inquiry webpage
141|fuzzystacoshop.com/nutrition|Webpage linking to PDF
145|giordanos.com/wp-content/uploads/Giordanos-Nutritionals.pdf|PDF
146|shop.godfathers.com/nutritional-information|Nutrition webpage
147|goldstarchili.com/menu/3-way|Menu item nutrition (item pages)
148|goldenchick.com/nutrition|Nutrition webpage
150|gordonbierschrestaurants.com/nutrition|Nutrition information webpage
151|graeters.com/pages/nutritional-information|Nutrition webpage
154|gcfb.com/nutritioninfo|Nutrition information webpage
155|greatamericancookies.com/wp-content/uploads/sites/2/2023/02/GAC_Nutrition-Calories_2023-compressed.pdf|PDF (2023)
156|greatharvesttemecula.com/nutrition|Nutrition webpage (Temecula location)
157|grouchos.com/menu|Menu with nutrition links
159|guzmanygomez.com/nutrition|Webpage linking to PDF (US)
160|gyu-kaku.com/wp-content/uploads/2022/02/guide_nutrition1910.pdf|PDF (2019 guide)
161|habitburger.com/nutritional-information|Nutrition webpage
164|hardees.com/nutritional-info|Webpage linking to PDF
167|hooters.com/nutritional-information|Webpage linking to PDF
168|hopdoddy.com/nutritionals|Webpage linking to PDF
169|hotdogonastick.com/wp-content/uploads/2018/05/HDOS_Nutritionals_052918.pdf|PDF (2018)
172|hueymagoos.com/nutritional-allergen-information|Webpage linking to PDF
173|huhot.com/wp-content/uploads/allergy-nutrition-chart.11x17.rev_.07.15.pdf|PDF (2015 file)
175|hungryhowies.com/nutrition-info|Nutrition webpage
178|ihop.com/en/nutrition|Nutrition explorer and PDF downloads
180|in-n-out.com/menu/nutrition-info|Nutrition webpage and PDF
181|itsjustwingspr.com/AllergenNutritionGuide.pdf|PDF (Puerto Rico)
182|assets.jackinthebox.com/pdf_attachment_settings/106/value/Nutritional_Facts.pdf|PDF
183|assets.ctfassets.net/zqt8tllj2cy0/1akQOwShkC1rwJIBneN1TK|PDF
185|jasonsdeli.com/nutrition|Nutrition explorer
187|jerseymikes.com/menu/nutrition|Nutrition explorer
188|jetspizza.com/nutrition|Nutrition information webpage
189|jimnnicks.com/assets/Nutritional-Guide-M12.6-Jan-22-2019.pdf|PDF (2019)
190|resources.jimmyjohns.com/downloadable-files/JimmyJohns_NutritionGuide_072219.pdf|PDF (2019)
198|konagrill.com/nutrition|Webpage linking to PDF
199|krispykreme.com/About/Nutritional-Info|Nutrition explorer
200|krystal.com/nutrition|Nutrition webpage
201|hawaiianbarbecue.com/food/bbq-chicken|Menu item nutrition (item pages)
203|lamadeleine.com/menu/entrees-and-favorites|Menu with nutrition information
205|larosas.com/pdf/NutritionFacts.pdf|PDF
207|ledopizza.com/nutrition|Nutrition explorer
208|leeannchin.com/allergen-information|Nutrition and allergen webpage
209|leesfamousrecipe.com/nutrition-and-allergen|Webpage linking to PDF
211|lennys.com/wp-content/uploads/2022/05/Lennys-2018-Nutritional-Info.pdf|PDF (2018)
212|littlecaesars.com/static/usnutritionguide.pdf|PDF
213|logansroadhouse.com/nutrition-allergen-information|Webpage linking to PDF
215|media.longhornsteakhouse.com/en_us/pdf/longhorn_steakhouse_nutrition.pdf|PDF
216|loumalnatis.com/nutritional-information|Nutrition information webpage
218|maggianos.com/menus|Menu with nutrition links
221|manchuwok.com/wp-content/uploads/2025/02/WOK-BRNDN-NUTRITIONALS-1291371539-ENG-2-1.pdf|PDF (check market)
222|manhattanbagel.com/wp-content/uploads/2022/05/MCB-Nutrition-Guide-Master-1.26.23.pdf|PDF (2023)
224|marbleslab.com/nutritionals|Webpage linking to PDF
228|mcalistersdeli.com/nutrition|Nutrition explorer
230|mcdonalds.com/us/en-us/about-our-food/nutrition-calculator.html|Nutrition calculator
232|menchies.com/nutrition|Nutrition explorer
233|millersalehouse.com/wp-content/uploads/2026/01/MAH-Nutrition-Guide-011926.pdf|PDF
234|mission-bbq.com/wp-content/uploads/MISSION-BBQ-Nutritional-Info.pdf|PDF
235|modpizza.com/nutrition|Nutrition webpage
237|monicals.com/monicals-nutritional-calculator|Nutrition calculator
240|mountainmikespizza.com/nutrition|Nutrition explorer
246|noahs.com/contact/faq/nutritional-info|FAQ linking to nutrition guide
247|noodles.com/eat-well|Nutrition explorer and PDF downloads
248|nothingbundtcakes.com/nutrition|Nutrition webpage
249|order.oberweis.com/pages/nutritional-info|Nutrition webpage
251|order.ocharleys.com/nutrition-information|Webpage linking to PDF
253|olivegarden.com/nutrition|Webpage linking to PDF
254|ontheborder.com/app/uploads/2024/08/OTB-NUTRITIONAL-ALLERGEN_INFO_0224v2new.pdf|PDF
256|ophdfw.com/nutrition-facts|Nutrition webpage (Dallas–Fort Worth)
257|outback.com/nutrition/smart-dining|Nutrition information webpage
258|pfchangs.com/nutrition/menu-nutritionals|Nutrition webpage
259|pancheros.com/nutritional-calculator|Nutrition calculator
260|pandaexpress.com/nutritioninformation|Nutrition explorer
262|panerabread.com/en-us/menu/nutritious-eating/allergen-and-nutrition-information.html|Webpage linking to PDF
263|papajohns.com/company/nutrition-allergen-information.html|Nutrition webpage
264|papamurphys.com/nutrition|Nutrition explorer
269|parisbaguette.com/wp-content/uploads/2025/06/2025-Summer-Nutrition-Chart-v1.0.pdf|PDF
270|peets.com/pages/nutrition-allergen-facts|Webpage linking to PDF
272|penn-station.com/menu_nutrition.php|Nutrition webpage
277|pickupstix.com/nutrition-information|Nutrition webpage
278|pinkberry.com/nutritional-and-allergens/index.php|Nutrition explorer and PDF downloads
279|pizzahut.com/c/content/nutrition|Nutrition information webpage
284|assets-global.website-files.com/5e34767f6a3a0e8257cafc5c/661467d19c9f16c8fbc82698|PDF (2024)
285|pollo-tropical-public-assets.s3.amazonaws.com/2022/PolloTropicalNutritionalandAllergenlistADA.pdf|PDF (2022 file)
287|popeyes.com/nutritional-information|Webpage linking to PDF
288|portillos.com/assets/1/6/NutritionAllergen_Jan2026.pdf|PDF
291|qdoba.com/public/assets/documents/qdoba-nutrition-information.pdf|PDF
293|quiznos.com/wp-content/uploads/2024/07/Quiznos-US-Base-Nutritionals-7.26.24.pdf|PDF (2024)
296|raisingcanes.com/menu|Menu item nutrition
297|web.checkersandrallys.com/checkers-and-rallys-nutritional-facts|PDF
298|nutritionix.com/ram-restaurant-brewery/menu/premium|Nutrition explorer
299|img-ecomm-rl-prod-fye5gqbxdtbghqer.a03.azurefd.net/brandsite/documents/US_Nutrition_1-19-26.pdf|PDF
301|redrobin.com/nutrition-information|Nutrition calculator
303|robeks.com/nutrition|Webpage linking to PDF
304|rockbottom.com/nutrition-and-allergy-info|Nutrition information webpage
308|rosatispizza.com/nutrition|Nutrition information webpage
309|roundtablepizza.com/nutritional-allergens|Webpage linking to PDF
310|rubios.com/nutrition-allergen|Nutrition information webpage
311|rubytuesday.com/faq|FAQ linking to nutrition guide
316|salsaritas.com/nutrition-calculator|Nutrition calculator
318|sarkujapan.com/nutrition|Nutrition webpage
319|schlotzskys.com/-/media/schlotzskys/pdfs/nutrition/sch_902572_schlotzky_s-calories-nutritionals-2023.pdf|PDF (2023)
322|shakeshack.com/nutritionandallergeninfo|PDF
325|shipleydonuts.com/wp-content/uploads/2022/09/2022-Nutritional-Website.pdf|PDF (2022)
326|shoneys.com/nutrition|Nutrition information webpage
328|skylinechili.com/menu|Menu with nutrition links
329|slimchickens.com/nutritional-and-allergen-info|Nutrition information webpage
331|nutritionix.com/smashburger/menu/premium|Nutrition explorer
333|smokeybones.com/wp-content/uploads/2020/01/Core-Menu-Nutritionals-1.13.20.pdf|PDF (2020)
334|smoothieking.com/nutrition|Nutrition explorer
336|sonnysbbq.com/wp-content/uploads/2023/11/Sonnys-BBQ-Menu-Nutritionals-2023.pdf|PDF (2023)
337|starbucks.com/menu/product-nutrition|Menu item nutrition
338|beeftallow.steaknshake.com/pages/nutrition-info|Nutrition information webpage
340|subway.com/en-us/menunutrition/nutrition|Webpage linking to PDF
344|tacobell.com/nutrition/info|Nutrition explorer
345|tacobueno.com/TB_2016_Nutrition_Allergen_Ingredients_v4.pdf|PDF (2016)
346|tacocabana.com/nutrition|PDF
347|tacojohns.com/nutrition-information|Nutrition information webpage
350|tacotime.com/assets/pdf/nutrition/TacoTime_Nutritionals.pdf|PDF
353|nutritionix.com/texas-roadhouse/portal|Nutrition explorer
354|tgifridays.com/nutritional-information|Nutrition information webpage
355|thaiexpressfood.com/assets/pdf/nutritionals.pdf|PDF (US)
356|thebrokenyolkcafe.mymenuhd.com/MyMenu/Restaurant|Nutrition explorer
357|media.thecapitalgrille.com/images/site/ext/menu/TCG_Nutrition_Guide.pdf|PDF
358|coffeebean.com/pages/nutrition|Nutrition webpage
370|togos.com/wp-content/uploads/2026/05/Nutritional-Allergen-Information_June-2024.pdf|PDF (2024)
371|tokyojoes.com/menu|Menu with nutrition links
374|toppers.com/siteassets/media/nutrition-information/toppers-nutrition-guide-2025.pdf|PDF
375|torchystacos.com/wp-content/uploads/Blue-Sky-Menu-Nutritional-Info-2024.pdf|PDF (2024)
377|prod.tropicalsmoothiecafe.com/nutrition|Nutrition information webpage
382|unclejulios.com/nutrition-information|Nutrition information webpage
383|unos.com/nutrition|Webpage linking to PDF
384|velvettaco.com/nutrition|Nutrition information webpage
386|villageinn.com/nutritioninfo|Nutrition information webpage
387|universalorlando.com/contentdata/uor/en/us/files/Documents/voodoo-doughnut-nutrition-menu.pdf|PDF (Universal Orlando location)
388|wafflehouse.com/nutrition|Nutrition webpages by category
389|wagamama.com/en/allergen-information|Allergen page (UK; US nutrition unverified)
391|walkerbros.net/FAQ.html|FAQ with nutrition inquiry information
393|waybackburgers.com/nutritional-info|Webpage linking to PDF
395|wendys.com/nutrition-allergens|Nutrition explorer
396|wetzels.com/nutrition|Webpage linking to PDF
397|wbimageserver.whataburger.com/Nutrition.pdf|PDF
398|whichwich.com/pdf/WW-Nutritional-Info.pdf|PDF
399|whitecastle.com/about-us/restaurant-menu-nutrition-information|Webpage linking to PDF
400|wienerschnitzel.com/nutrition-and-allergy-info|Webpage linking to PDF
401|willys.com/menu|Menu with nutrition links
403|cdn.wingzone.com/WingZone/Wing-Zone-Nutritonal-Information.pdf|PDF
404|simmer-wingsover.s3.amazonaws.com/wingsover/wp-content/uploads/sites/15/2020/10/Nutritional-PDF-2020-Allergen-Website-v4.pdf|PDF (2020)
405|wingstop.com/nutrition|Webpage linking to PDF
407|woodranch.com/nutritional-info|Nutrition webpage
408|wowbao.com/allergen-and-nutrition-guide|Nutrition and allergen guide
409|media.yardhouse.com/images/site/ext/nutrition/yh-nutrition-guide.pdf|PDF
410|yogurtland.com/files/nutritionalfacts.pdf|PDF
411|yoshinoyaamerica.com/nutrition|Nutrition webpage
413|ziggiscoffee.com/menu/|Menu item nutrition
`;
const selected=new Map();
for(const line of rules.trim().split('\n')){const [idx,pattern,type]=line.trim().split('|');const src=sources.find(s=>s.url.toLowerCase().includes(pattern.toLowerCase()));if(src)selected.set(+idx,{...src,type});else console.error('MISSING SOURCE',idx,pattern);}
for(const [i,url,type] of [
 [2,'https://www.nutritionix.com/ninety-nine-restaurants/menu/premium','Nutrition explorer (linked by official site)'],
 [225,'https://www.nutritionix.com/marcos-pizza/portal','Nutrition explorer (linked by official site)'],
 [231,'https://www.nutritionix.com/mellow-mushroom/portal','Nutrition explorer (linked by official site)'],
 [276,'https://www.nutritionix.com/peter-piper-pizza/menu/premium','Nutrition explorer (linked by official site)'],
 [241,'https://www.mrsfields.com/pages/cookie-nutrition-information','Product nutrition webpage'],
 [392,'https://www.wawa.com/fresh-food/nutrition','Nutrition calculator (access blocked during check)'],
 [245,'https://www.nutritionix.com/newks-eatery/portal','Nutrition explorer (linked by official site)'],
 [88,'https://cornerbakerycafe.com/wp-content/uploads/2025/06/CB_Nutrition_Allergen_Info.pdf','PDF'],
 [112,'https://a.storyblok.com/f/307743/x/40e02ec6d1/duck-donuts-nutrition-data-sept-10-2024-new-branding.pdf','PDF (2024)'],
 [221,'https://manchuwok.com/wp-content/uploads/2026/04/WOK-BRNDN-NUTRITIONALS-1291371539-ENG-2-1.pdf','PDF (check market)'],
 [251,'https://a.storyblok.com/f/162041/x/5f9825d9d0/oc-nutrition_february-2026.pdf','PDF'],
 [269,'https://parisbaguette.com/wp-content/uploads/2026/09/2026-Fall-Nutrition-Chart-US.pdf','PDF'],
 [280,'https://www.pjscoffee.com/nutrition/','Nutrition explorer'],
 [288,'https://www.portillos.com/nutrition/','Webpage linking to PDF'],
 [319,'https://assets.ctfassets.net/zqt8tllj2cy0/3wkZtcobeRUvoOcOWjhR44/a2b753f659f5e4f470076c541e2df7f4/SCH_1899730_Nutritional_and_allergen_chart_2.26_v3.Digital_Upload.pdf','PDF'],
 [345,'https://tacobueno.com/wp-content/uploads/2026/06/TB_2016_Nutrition_Allergen_Ingredients_v4-1.pdf','PDF (2016-named file; current site link)'],
 [375,'https://deo-tenant-media.s3.bhs.io.cloud.ovh.net/36d14d49db95a7ed2965f3a28f7c9755/media/9a0f7e0a-7ed9-45fd-aa86-6b96e489b850.pdf','PDF'],
 [182,'https://images.ctfassets.net/5hs630wuugof/5YPXJN6p8U0Esf31agJxUK/05534c155563a67b239740ef0bc51866/Nutrition_Information_2026.PDF','PDF (2026 guide)'],
 [61,'','Nutrition URL unverified (old PDF redirects)'],
 [79,'','Nutrition URL unverified (old PDF returns HTML)']
]) selected.set(i,{url,type});
const aliases=new Set([89,97,138,202,289]);
const ambiguous=new Set([38,45,65,77,110,135,153,162,315,324,343,361,366,394]);
const rows=input.unique.flatMap((name,i)=>aliases.has(i)?[]:[{i,name,url:selected.get(i)?.url.replace(/[?&](msockid|srsltid|_sp|trk)=[^&]*/gi,'').replace(/[?&]$/,'')||'',type:selected.get(i)?.type||(ambiguous.has(i)?'Ambiguous name — needs clarification':'No official nutrition source found'),evidence:selected.get(i)||null}]);
await fs.writeFile(new URL('selected.json',dir),JSON.stringify(rows,null,2));
console.log(JSON.stringify({total:rows.length,filled:rows.filter(r=>r.url).length,pending:rows.filter(r=>!r.url).map(r=>[r.i,r.name])}));
