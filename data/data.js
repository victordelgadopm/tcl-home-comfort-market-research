/* Single source of truth for the site. Edit facts here; every fact points to a source id. */
window.DATA = {
meta: {
  title: "TCL Home Comfort: Product Market Research",
  author: "Victor Delgado",
  asOf: "November 2026",
  disclaimer: "AI-assisted research from public sources by Victor Delgado, still to be vetted. Not affiliated with or endorsed by TCL. Prices and specs change, so each item shows its source and should be checked before anyone relies on it."
},
findings: [
  { h: "TCL's range is broader than it looks", t: "Window, through-the-wall, portable, dehumidifier, air purifier and mini split lines, including a 12K window heat pump and Elite mini splits that are all heat pumps." },
  { h: "The biggest gap is heat, and it is a price gap", t: "TCL's window heat pump is $749.99. Midea and Gradient's cold-climate units cost $2,800 to $3,800. TCL's own documents give three different cold limits, and Home Depot buyers recommend the unit 33% of the time." },
  { h: "Two traps I checked before suggesting anything", t: "Midea's U-shaped window unit was recalled for drainage and mold, and dehumidifier pint ratings changed in 2020, so an old 70-pint unit equals a new 50-pint unit." }
],
categories: [
 { id:"window", name:"Window AC",
   tcl:[
    {model:"H8W25WQ", name:"Q Series 8K inverter", specs:[["List price","$399 (at review)"],["Room size","350 sq ft"],["Weight","61.7 lb"],["Features","Energy Star, Matter (per review)"]], conf:"review", note:"Model number from TCL's product page. The price is from a review, as TCL's page showed it sold out.", src:["tcl_h8","techhive","toms"]},
    {model:"H12W4MW", name:"Q Series 12K inverter", specs:[["List price","$499 (at review)"],["Room size","550 sq ft"],["Window","26 to 36 in. wide"],["Features","Energy Star, Matter"]], conf:"tcl", src:["tcl_h12","toms"]},
    {model:"H15W4KW", name:"Smart 15K inverter", specs:[["Room size","550 to 700 sq ft"],["Noise","36 to 40 dB"],["Features","Energy Star, Matter"]], conf:"tcl", src:["tcl_h15"]}
   ],
   comp:[
    {model:"MAW08V1QWT, MAW10V1QWT, MAW12V1QWT", name:"Midea U-shaped inverter", brand:"Midea", specs:[["Price sold at","$280 to $500 (CPSC)"],["Sizes","8K, 10K, 12K"],["Design","Window sash drops into a U-slot"],["Status","Recalled June 2025"]], conf:"tcl", src:["cpsc","midea_u"]}
   ],
   compare:"Same size range and price band, and both are inverter and smart. Midea's window drops into a U-slot and uses the window to seal. Tom's Guide found the TCL 8K insulates less and feels underpowered by comparison."
 },
 { id:"heatpump", name:"Window heat pump",
   tcl:[
    {model:"H12W4KWH", name:"Q Series 12K heat pump", specs:[["Heating","11,700 BTU (100% at 47°F)"],["At 5°F","72% of rated heating, about 8,400 BTU"],["Cold range","Manual: heats down to -6°F outdoors. Spec sheet: 72% at 5°F. A Home Depot answer: about 42°F."],["Efficiency","CEER 14.4, 1,190 W, 115V"],["Window","29.5 to 41 in. wide"]], conf:"tcl", src:["hd_hp_pdf","lowes_hp","hd_hp_page","tcl_hp_manual"], note:"TCL's spec sheet and Home Depot description say heat pump, but titles at Home Depot, Lowe's, Best Buy and Zoro say heater or supplemental heat. Retail only, not on TCL's own store. Home Depot reviews: 3.9 of 5 from 17, 33% recommend."}
   ],
   comp:[
    {model:"All-Weather 120V", name:"Gradient window heat pump", brand:"Gradient", specs:[["Cooling","9,300 BTU"],["Heating","9,000 BTU at 47°F and 17°F, 7,200 BTU at 5°F, 7,026 BTU at -13°F"],["Install","No drilling or permits (product page)"],["Weight","140 lb total"]], conf:"tcl", src:["gradient_page","gradient_spec"], note:"Product page and the May 2025 brochure agree. An older spec sheet I used earlier gave different low-temperature figures, so I dropped it."},
    {model:"MAH09H1AGR", name:"Midea packaged window heat pump 9K", brand:"Midea", specs:[["Price","$2,800 to $3,000 at launch"],["Cold","Heats to -22°F without electric backup"],["Size","About 300 to 500 sq ft"],["Sold","Through distributors, installers at launch"]], conf:"review", src:["fc_midea"]},
    {model:"MAW08H1ZWT", name:"Midea 8K Heat & Cool window unit", brand:"Midea", specs:[["Heating","Manual mentions an electric heater, so likely electric heat"],["Size","8,000 BTU"]], conf:"tcl", src:["midea_8k","midea_manual"]}
   ],
   compare:"TCL costs about a quarter as much ($749.99 against $2,800 to $3,800) and has more heating capacity (11,700 BTU at 47°F against 9,000). Gradient and Midea go colder (-13°F and -22°F) and TCL's own documents give three different cold limits. Home Depot buyers recommend the TCL unit 33% of the time."
 },
 { id:"ttw", name:"Through-the-wall",
   tcl:[
    {model:"H12T9XH", name:"12K through-the-wall", specs:[["Heat","11,600 BTU supplemental, type not stated"],["Price","$649.99 (Best Buy)"],["Reviews","3.6 of 5 from 34 (Home Depot)"],["Weight","64 to 76 lb across TCL's through-the-wall pages, professional install recommended"],["Inverter","None of TCL's through-the-wall pages says inverter"]], conf:"retail", src:["bb_ttw","hd_ttw_qa","tcl_ttw"]}
   ],
   comp:[
    {model:"KHVS12B33A", name:"Friedrich slide-out chassis", brand:"Friedrich", specs:[["Heat","Heat pump 11,400 BTU plus electric heat"],["Cooling","12,600 BTU, inverter, 230V"],["Efficiency","CEER 14.4, Energy Star"],["Price","$1,799, discontinued and sold out (Town Appliance)"]], conf:"retail", src:["friedrich"]},
    {model:"WHVT14B33A", name:"Friedrich WallMaster 15K", brand:"Friedrich", specs:[["Cooling","15,200 BTU, inverter, heat and cool"],["Price","$1,699.97, special order"],["Rating","3.4 of 5 (PC Richard)"],["Voltage","230V, 20A circuit"]], conf:"retail", src:["pcrichard_wm"]}
   ],
   compare:"TCL costs about $1,000 less. Friedrich advertises inverter and sold a heat pump model (now discontinued); TCL's pages never say inverter. Both rate low: TCL 3.6 of 5 at Home Depot, Friedrich 3.4 at PC Richard."
 },
 { id:"portable", name:"Portable AC",
   tcl:[
    {model:"H10PD56W", name:"Q Series dual-hose inverter, 10K DOE", specs:[["Price","$359.99 (Best Buy)"],["Room size","450 sq ft"],["Design","Dual hose, inverter"]], conf:"retail", src:["bb_portable","zoro_portable"], note:"Model number cross-referenced from a retailer listing."},
    {model:"H10PDH56W", name:"Same series with heater", specs:[["Heat","\"Supplemental heating\", TCL does not name the type"],["Heat mode","TCL support: recommended above 46°F outdoors"]], conf:"tcl", src:["zoro_portable","tcl_support_heat"]}
   ],
   comp:[
    {model:"APT0825UW1WD", name:"Hisense 8K dual-hose inverter, heat and cool", brand:"Hisense", specs:[["Size","8,000 BTU"],["Design","Dual-hose, inverter, Matter"],["Heat","Heat pump (Hisense US page)"]], conf:"tcl", src:["hisense_us"], note:"Listed on Hisense's US site. A related Canadian model is AP0825TW1SAHP."}
   ],
   compare:"TCL's portable reviews are strong (Staples 4.86 of 5 from 22; Best Buy about 4.4 of 5, 86% recommend). On heat, TCL says \"supplemental heating\" and recommends heat mode above 46°F outdoors without naming the type. Hisense states heat pump."
 },
 { id:"dehum", name:"Dehumidifier",
   tcl:[
    {model:"H50D44W", name:"50-pint smart", specs:[["Coverage","Up to 4,500 sq ft"],["Features","Energy Star, Wi-Fi"],["Price","$264.99 (Quill)"],["Drain","Bucket plus garden-hose port"]], conf:"retail", src:["quill_h50"]},
    {model:"T50DC9SPB", name:"50-pint smart with pump", specs:[["Pump","Yes, per product name"],["Range","20 to 50 pints, 17 listings"]], conf:"tcl", src:["tcl_dehum"]}
   ],
   comp:[
    {model:"FGAC5044W1", name:"Frigidaire Gallery 50-pint", brand:"Frigidaire", specs:[["Features","Energy Star, Wi-Fi"]], conf:"retail", src:["frig_5044"]},
    {model:"GHDD3535W1", name:"Frigidaire 35-pint 2-in-1", brand:"Frigidaire", specs:[["Function","Dehumidifier plus allergy filter"],["Features","Wi-Fi, Energy Star"],["Price","$314 earlier"],["Reviews","4.9 of 5 from 29 (AJ Madison)"],["Status","Shown as no longer available at AJ Madison"]], conf:"retail", src:["frig_2in1"]}
   ],
   compare:"Direct match at 50 pints. Pints compare only under the same rating: TCL's 50-pint (2020 rating) equals the old 70-pint, so a larger unit is not a gap."
 },
 { id:"purifier", name:"Air purifier",
   tcl:[
    {model:"Breeva A5", name:"5-stage, smart", specs:[["Coverage","365 to 883 sq ft"]], conf:"tcl", src:["tcl_purifier"]},
    {model:"Breeva A3", name:"5-stage, smart", specs:[["Coverage","256 to 596 sq ft"],["Price","$79.99 at Amazon (per a reviewer)"],["Airflow","CADR 159 CFM, H13 HEPA"],["Warranty","12 months"]], conf:"tcl", src:["tcl_purifier","apf_a3"]},
    {model:"Breeva A2", name:"4-stage, smart", specs:[["Coverage","182 to 441 sq ft"]], conf:"tcl", src:["tcl_purifier"]},
    {model:"Breeva A1C, A1W, A1", name:"3-stage", specs:[["Coverage","161 to 438 sq ft"],["Smart","A1W only"]], conf:"tcl", src:["tcl_purifier"]}
   ],
   comp:[
    {model:"Core 300S", name:"Levoit smart true HEPA", brand:"Levoit", specs:[["Price","$149.99"],["Airflow","CADR 141 CFM, 3-stage"],["Noise","22 to 50 dB"],["Warranty","2 years, filter $29.99"]], conf:"tcl", src:["levoit_300s"]}
   ], compare:"TCL's A3 costs about half as much and has a higher CADR (159 against 141). Levoit has the longer warranty (2 years against 12 months) and a lower noise floor. A reviewer found the A3 loud at max speed (65.8 dBA)."
 },
 { id:"split", name:"Mini split and HVAC",
   tcl:[
    {model:"H12SEH19XAE", name:"Elite 12K", specs:[["Efficiency","23 SEER2, 9.5 HSPF2"],["Type","Heat pump"]], conf:"tcl", src:["tcl_elite"]},
    {model:"H24SEH19XAE", name:"Elite 24K", specs:[["Efficiency","21 SEER2, 9.5 HSPF2"],["Type","Heat pump"]], conf:"tcl", src:["tcl_elite"]},
    {model:"TH12SVH23XW", name:"Ready-to-install 12K", specs:[["Efficiency","23 SEER2, 230V"],["Sold at","Home Depot"]], conf:"retail", src:["hd_split"]},
    {model:"Multi-Match", name:"Multi-zone systems", specs:[["Zones","Up to 5 indoor units"],["Indoor types","Cassette, slim duct, floor/ceiling"]], conf:"tcl", src:["tcl_multi"]},
    {model:"Ultimate 24K", name:"Cold-climate model", specs:[["Rating","Heating to -22°F (retailer)"]], conf:"retail", src:["msw_24"]}
   ],
   comp:[
    {model:"Diamante Pro 12K", name:"Pioneer 12K high wall", brand:"Pioneer", specs:[["Price","$898 on sale ($1,279 list)"],["Efficiency","20 SEER2, 9.5 HSPF2, 230V"],["Warranty","5 years parts and compressor"]], conf:"tcl", src:["pioneer_12k"]},
    {model:"Leto 12K", name:"Senville 12K", brand:"Senville", specs:[["Price","$817 (115V)"],["Warranty","5-year limited"]], conf:"retail", src:["senville_12k"]},
    {model:"DIY-12-HP-WM-115C25", name:"MrCool DIY 4th Gen 12K", brand:"MrCool", specs:[["Price","$1,914 on sale ($2,392.50 list), sold out"],["Efficiency","22 SEER"],["Install","25 ft pre-charged lines, do-it-yourself"]], conf:"retail", src:["mrcool_12k"]}
   ], compare:"TCL's T-PRO 12K is $1,749 to $1,849 on its own store (out of stock), about double Pioneer and Senville and level with MrCool's do-it-yourself system. TCL's Elite line rates 23 SEER2 against Pioneer's 20. MrCool's edge is the pre-charged do-it-yourself install."
 }
],
heat: { // BTU/h of heating by outdoor temperature (F)
  tcl:[[47,11700],[5,8424]],
  gradient:[[47,9000],[5,7200]],
  note:"TCL's 5°F point is calculated from its spec sheet (72% of rated heating). TCL's manual lists heating operation down to -6°F, and a Home Depot answer says about 42°F, so treat the cold range as unresolved until TCL publishes one figure."
},
prices:[
  {label:"Dehumidifier, TCL 50-pint H50D44W", brand:"tcl", v:264.99},
  {label:"Dehumidifier 2-in-1, Frigidaire 35-pint", brand:"comp", v:314},
  {label:"Portable dual-hose, TCL Q Series 10K", brand:"tcl", v:359.99},
  {label:"Window 8K, TCL Q Series (list)", brand:"tcl", v:399},
  {label:"Window 10K, TCL Q Series (list)", brand:"tcl", v:449},
  {label:"Window 12K, TCL Q Series (list)", brand:"tcl", v:499},
  {label:"Through-the-wall 12K, TCL H12T9XH", brand:"tcl", v:649.99},
  {label:"Through-the-wall 12K, Friedrich KHVS12B33A", brand:"comp", v:1799}
],
midea_range:{label:"Window, Midea U (sold at)", lo:280, hi:500},
pints:[ {old:30,nw:20,sq:400}, {old:50,nw:30,sq:800}, {old:70,nw:50,sq:1200} ],
timeline:[
  {d:"Mar 2020", t:"Midea U-shaped units go on sale, later sold under 10 brands."},
  {d:"Mid May 2025", t:"Units disappear from Costco, Amazon, Home Depot and Midea's site."},
  {d:"Jun 5, 2025", t:"CPSC recall 25-320: about 1.7 million US units, 40 models. Pooled water does not drain and mold can grow."},
  {d:"Jun 9, 2025", t:"Class action filed (Catalano v. Midea America) calling the recall inadequate."},
  {d:"Remedy", t:"Refund or a free repair with a new drain plug or a kit with a bubble level. 152 mold reports, 17 with symptoms."}
],
patents:"Two design patents (D847320, filed 2017, granted 2019; D1045044, filed 2022, granted 2024) cover the unit's look only. I found no patent on the function. This needs a proper IP review.",
voice:[
  {h:"Portables", t:"Window kit does not fit some windows (panels cut for 30 to 35 in. windows, missing slider adapter). Short, stiff, uninsulated hose and short cord. Drain hose and reservoir. Weight of 60 to 75 lb.", s:"Best Buy and Staples reviews. Many were received in exchange for the product."},
  {h:"Window units", t:"Quiet and efficient. The 8K needs holes drilled to secure it, weighs 61.7 lb, and has to come out each winter. Tom's Guide measured about 49 dBA at six feet and said it feels underpowered next to the Midea U, so size up.", s:"TechHive and Tom's Guide reviews, one reviewer each."},
  {h:"Window heat pump", t:"Home Depot: 3.9 of 5 from 17 reviews, 33% recommend; complaints are build quality, faults and noises. Staples: 4.8 of 5 from 5 reviews, all free-product. TCL's spec sheet and Home Depot description say heat pump, but titles at Home Depot, Lowe's, Best Buy and Zoro say heater or supplemental heat.", s:"Home Depot, Staples, Lowe's, Best Buy and Zoro listings."},
  {h:"Dehumidifiers", t:"Noise, a small tank, and one failure at a month.", s:"Three reviews on one Best Buy listing. Thin evidence."},
  {h:"Mini splits", t:"Poorly translated instructions and extra parts needed.", s:"One Home Depot listing."},
  {h:"Support and warranty", t:"Templated replies, long holds, and a hard warranty process.", s:"Several small sources."}
],
ideas:[
  {n:1, h:"Window heat pump that heats in the cold, at a mid price", gap:"yes", comp:"yes", sig:"partial", read:"Best-supported idea",
   why:"TCL's 12K is $749.99 and its documents give three cold limits (-6°F manual, 72% at 5°F spec sheet, about 42°F retailer answer). Midea (9K, to -22°F, $2,800 to $3,000) and Gradient (9,300 BTU, $3,800) sit far above it.",
   signal:"Press: cheaper units often heat only above about 40°F and cost is the main barrier. Home Depot: TCL's 12K is 3.9 of 5 from 17 reviews and 33% recommend. Midea pilot users report heat in single digits.",
   test:"Pull TCL's returns and support tickets for the 12K by reason. Test $1,199 to $1,799 with retailers. Ask the factory what a colder-rated unit would cost."},
  {n:2, h:"Heat pump through-the-wall unit", gap:"yes", comp:"partial", sig:"partial", read:"Test",
   why:"TCL's H12T9XH has 11,600 BTU supplemental heat at $649.99 and its pages never say inverter. Friedrich's WallMaster 15K is inverter at $1,699.97, and its heat pump KHVS12B33A ($1,799) is discontinued.",
   signal:"Indirect. TCL's H12T9XH is 3.6 of 5 from 34 reviews at Home Depot. Friedrich's 15K is 3.4 of 5 at PC Richard. Both low, so quality is the opening.",
   test:"Ask TCL if the units are inverter. Size the wall-sleeve replacement market. Ask a retailer why Friedrich dropped its heat pump."},
  {n:3, h:"Heat pump portable", gap:"partial", comp:"yes", sig:"partial", read:"Test",
   why:"TCL calls its portable heat supplemental heating and does not name the type; TCL support recommends heat mode above 46°F. Hisense lists an 8K dual-hose inverter portable with a heat pump on its US site.",
   signal:"Portables with heat sell: Westinghouse 14K with heat is $549.99, 4.5 of 5 from 394 reviews (Tractor Supply listing). TCL's 10K is 4.86 of 5 from 22 at Staples and about 4.4 of 5 at Best Buy.",
   test:"Ask TCL what its heater is. Compare heat-mode returns with cooling returns. Price against Hisense in store."},
  {n:4, h:"Dehumidifier with a built-in filter (2-in-1)", gap:"yes", comp:"partial", sig:"partial", read:"Weaker",
   why:"TCL sells dehumidifiers and Breeva purifiers separately. Frigidaire's GHDD3535W1 combines a 35-pint dehumidifier with an allergy filter and Wi-Fi, but is shown as no longer available at AJ Madison.",
   signal:"Frigidaire's 2-in-1: 4.9 of 5 from 29 reviews, so buyers like the idea. Availability is the question.",
   test:"Find out why Frigidaire's is unavailable. Check customer overlap between TCL dehumidifier and Breeva buyers."}
],
fixes:[
  ["Portable AC","Window kit does not fit some windows, short stiff hose and cord, drain hose and reservoir, 60 to 75 lb","Adjustable panel with slider and casement adapters, longer insulated hose and cord, better drain, handles"],
  ["Window AC","Drilling to secure the unit, 61.7 lb (8K), heat pump wording and cold range differ across manual, spec sheet and retailers","Tool-free mount, install video, handles, and one heat claim and cold range on every document"],
  ["Dehumidifier","Only 3 reviews: noise, small tank, one failure at a month","Publish noise levels and add a pump option on more models (pump on 5 of 17 listings)"],
  ["Through-the-wall","Low ratings (3.6 and 3.4), 75 lb, professional install, inverter never stated","State inverter and efficiency if true, add install support"],
  ["Mini split","Poorly translated instructions, extra parts needed","Rewrite instructions, include common installer parts, correct listing Q&A"],
  ["All products","Templated support replies and a hard warranty process (several sources)","Faster first-season replacement and a clearer warranty"]
],
setaside:[
  ["Window unit built to stay in all winter","Not a gap. TCL's care page and Midea's manual both say to remove window units at season end. Gradient markets year-round comfort, but I found no statement that its unit stays in all winter."],
  ["Larger dehumidifiers","Same size class as TCL once ratings match. Frigidaire's 69.7-pint is the old rating for about 50 pints new."],
  ["U-shaped window design","Recalled for drainage and mold, and the look is covered by design patents."],
  ["Window units above 15K BTU","TCL's 18K is no longer sold at Best Buy and the 12K heat pump already weighs 92.6 lb."],
  ["Humidifiers, fans, heaters","None on TCL's US site, but I found no customer demand, only that Midea sells them."]
],
unconfirmed:[
  "TCL's heat pump cold range: three figures exist (-6°F in the manual, 72% at 5°F on the spec sheet, about 42°F in a retailer answer). TCL should publish one.",
  "TCL's portable and through-the-wall heat: TCL says \"supplemental heating\" and never names the type. Hisense and Friedrich name theirs.",
  "Inverter on TCL's through-the-wall units: none of TCL's pages for them says inverter. Friedrich's does.",
  "Midea's 8K Heat & Cool window unit: the manual mentions an electric heater, so it is likely electric, not a heat pump.",
  "H15W4KW weight: TCL's page does not list it, so it is left out.",
  "Competitor prices move. Mini split, purifier and heat pump prices are as seen on the seller pages in November 2026."
],
later:{
  now:["Public lineup, specs and prices","Competitor models matched by category","Review themes with sample sizes shown","Ideas screened on three tests"],
  after:["Business case per idea: market size, margin, tooling and certification cost, plus a price test","Requirements and specs: turn the review fixes into a product brief with Marketing and Sales","Pricing and promo: benchmark against Midea, Gradient and Frigidaire by retailer and size, and track promo depth","Line reviews and launch: retailer comparison sheets, matching listing copy, launch milestones","Validate with TCL data: sales by size, tier and retailer; returns and support tickets by model; margin","Feasibility with R&D, the factory and compliance"]
},
sources:{
 hd_hp_page:["Home Depot, TCL H12W4KWH listing","https://www.homedepot.com/p/Q-Series-12-000-DOE-BTU-115-Volt-Smart-Inverter-Window-AC-Cools-550-sq-ft-w-Heater-Remote-Wi-Fi-Enabled-in-White-H12W4KWH/336174572"],
 tcl_hp_manual:["TCL H12W4KWH user manual (copy on manuals.plus)","https://manuals.plus/m/cc10f297db6527c2af0c6a5e80b0bab8f4797f3b9b61456bc9dd82ec881e9f6c"],
 fc_midea:["Fast Company, Midea window heat pump review","https://www.fastcompany.com/91448042/midea-heat-pump-review"],
 hdigest_cold:["HouseDigest, do window heat pumps work in cold climates","https://www.housedigest.com/2043056/do-window-heat-pumps-really-work-cold-climate"],
 midea_manual:["Midea MAW08H1ZWT and MAW12H2ZWT user manual","https://www.midea.com/content/dam/midea-aem/us/air-conditioners/window-air-conditioners/maw12h2zwt/MAW12H2ZWT-User-Manual.pdf"],
 hd_ttw_qa:["Home Depot, TCL H12T9XH questions","https://www.homedepot.com/p/questions/TCL-12-000-DOE-BTU-230-Volts-Through-the-Wall-Air-Conditioner-Cools-550-sq-ft-with-Heater-Remote-and-Wi-Fi-in-White-H12T9XH/335843561/1"],
 tcl_ttw:["TCL US, through-the-wall collection","https://us.tcl.com/collections/through-the-wall-air-conditioners"],
 pcrichard_wm:["PC Richard, Friedrich WallMaster WHVT14B33A","https://www.pcrichard.com/friedrich-wallmaster-series-15200-btu-heat-cool-smart-through-the-wall-air-conditioner-with-inverter-3-fan-speeds-and-remote-control-white/WHVT14B33A.html"],
 tcl_support_heat:["TCL support, minimum outdoor temperature in heat mode","https://support.tcl.com/en_US/common-questions-PAC/minimum-outdoor-temperature-for-portable-air-conditioners-to-run-in-heat-mode"],
 hisense_us:["Hisense US, 8K heat and cool portable","https://www.hisense.com/us/en/air-product/hisense-smart-inverter-dual-hose-8-000-btu-heat-cool-portable-ac-apt0825uw1wd"],
 apf_a3:["Air Purifier First, TCL Breeva A3","https://www.airpurifierfirst.com/review/tcl-breeva-a3/"],
 levoit_300s:["Levoit Core 300S","https://levoit.com/products/core-300s-smart-true-hepa-air-purifier"],
 pioneer_12k:["Pioneer, Diamante Pro 12K","https://pioneerminisplit.com/products/pioneer-diamante-pro-high-wall-series-12-000-btu-20-seer2-230v-ductless-mini-split-air-conditioner-inverter-heat-pump-with-16-ft-kit"],
 senville_12k:["Sylvane, Senville Leto 12K 115V","https://www.sylvane.com/collections/ductless-mini-split-systems/products/senville-leto-12000-btu-115v-mini-split-heat-pump-wifi"],
 mrcool_12k:["MrCool DIY Direct, 4th Gen 12K","https://mrcooldiydirect.com/products/4th-gen-12k-btu"],
 tcl_pro:["TCL US, T-PRO mini splits","https://us.tcl.com/collections/air-conditioners"],
 techhive:["TechHive review, TCL Q Series 8K","https://www.techhive.com/article/2477737/tcl-q-series-smart-inverter-window-ac-review.html"],
 toms:["Tom's Guide review, TCL window AC","https://www.tomsguide.com/home/home-appliances/tcl-smart-inverter-window-air-conditioner-review"],
 tcl_h8:["TCL US, 8K Q Series H8W25WQ","https://us.tcl.com/products/tcl-8-000-btu-q-series-smart-inverter-window-air-conditioner-h8w25wq"],
 tcl_h12:["TCL US, 12K H12W4MW","https://us.tcl.com/products/tcl-12-000-btu-smart-inverter-window-air-conditioner-h12w4mw"],
 tcl_h15:["TCL US, 15K H15W4KW","https://us.tcl.com/products/tcl-15-000-btu-smart-inverter-window-air-conditioner-h15w4kw"],
 hd_hp_pdf:["Home Depot spec sheet, TCL H12W4KWH","https://images.thdstatic.com/catalog/pdfImages/09/095122ff-716c-48ec-814d-237a20e656d8.pdf"],
 lowes_hp:["Lowe's, TCL Q Series 12K heat pump","https://www.lowes.com/pd/TCL-Large-Room-Window-Air-Conditioner-with-Heater-Remote-Included-115-Volt-12000-BTU/5016583701"],
 tcl_care:["TCL support, window AC end-of-season care","https://support.tcl.com/en_US/window-air-conditioner-end-of-season-care-and-storage"],
 gradient_page:["Gradient All-Weather 120V product page","https://shop.gradientcomfort.com/products/gradient-all-weather-120v-window-heat-pump"],
 gradient_spec:["Gradient All-Weather 120V spec sheet","https://cdn.shopify.com/s/files/1/0558/4925/5070/files/All_Weather_120V_Spec_Sheet.pdf"],
 midea_u:["Midea US, U-shaped inverter air conditioner","https://www.midea.com/us/homestead/the-world-s-first-u-shaped-inverter-air-conditioner"],
 midea_8k:["Midea US, 8K Heat & Cool window unit","https://www.midea.com/us/Heating_Cooling/window-air-conditioners/8000-window-air-conditioner-heat-cool-maw08h1zwt"],
 cpsc:["CPSC recall 25-320, Midea U and U+","https://cpsc.gov/Recalls/2025/Midea-Recalls-About-1-7-Million-U-and-U-Window-Air-Conditioners-Due-to-Risk-of-Mold-Exposure"],
 classaction:["ClassAction.org, Midea recall lawsuit","https://www.classaction.org/news/class-action-lawsuit-calls-midea-america-recall-of-mold-prone-window-air-conditioners-inadequate"],
 aftermath:["Aftermath, Midea U leaves shelves","https://aftermath.site/midea-u-shape-ac-gone/"],
 patent1:["Design patent D847320","https://patents.justia.com/patent/D847320"],
 patent2:["Design patent D1045044","https://patents.justia.com/patent/D1045044"],
 bb_ttw:["Best Buy, TCL 12K through-the-wall H12T9XH","https://www.bestbuy.com/product/tcl-12000-btu-550-sq-ft-smart-230v-through-the-wall-air-conditioner-with-11600-btu-supplemental-heat-function-white/J36QYTH4FP"],
 friedrich:["Friedrich KHVS12B33A listing","https://www.townappliance.com/products/friedrich-khvs12b33a-10-501-12-500-btu-air-conditioner"],
 bb_portable:["Best Buy, TCL Q Series dual-hose portable","https://www.bestbuy.com/product/tcl-450-sq-ft-10000-btu-q-series-ultra-quiet-dual-hose-inverter-smart-portable-air-conditioner-white/J36QYTHGYH"],
 zoro_portable:["Zoro, TCL H10PD56W","https://www.zoro.com/tcl-10-000-btu-q-series-dual-hose-portable-inverter-ac-450-sq-ft-h10pd56w/i/G416138622"],
 hisense_ca:["Hisense Canada, 8K portable with heat pump","https://hisense-canada.com/en/air-products/all-portable-air-conditioners/AP0825TW1SAHP_8000-btu-sacc-12000-btu-ashrae-inverter-portable-ac-smart-with-heat-pump-dual-hose-tower"],
 quill_h50:["Quill, TCL 50-pint H50D44W","https://www.quill.com/tcl-energy-star-50-pint-portable-dehumidifier-wi-fi-enabled-covers-up-to-4500-sq-ft-white-h50d44w/cbs/55493397.html"],
 tcl_dehum:["TCL US, dehumidifiers","https://us.tcl.com/collections/dehumidifiers"],
 tcl_pint:["TCL support, dehumidifier testing standards","https://support.tcl.com/us/01-dehumidifier-testing-standards-and-product-pint-capacity"],
 frig_5044:["Sylvane, Frigidaire Gallery 50-pint","https://www.sylvane.com/collections/frigidaire-dehumidifier/products/frigidaire-fgac5044w1-high-humidity-50-pint-energy-star-dehumidifier-wifi"],
 frig_2in1:["Park Ave Appliance, Frigidaire 2-in-1","https://www.parkaveappliance.com/collections/air-quality/products/frig-ghdd3535w1"],
 tcl_purifier:["TCL US, air purifiers","https://us.tcl.com/pages/air-purifiers"],
 tcl_elite:["TCL Elite series spec sheet","https://www.tcl.com/usca/content/dam/tcl/product/hvac/documents/elite-series/Elite%20HVAC%20SpecSheet%202025.pdf"],
 tcl_multi:["TCL Multi-Match spec sheet","https://www.tcl.com/usca/content/dam/tcl/product/hvac/documents/multi-match/Multi%20Match%20Series%20HVAC%20SpecSheet%202025.pdf"],
 hd_split:["Home Depot, TCL ready-to-install 12K mini split","https://www.homedepot.com/p/TCL-Ready-to-Install-12-000-BTU-23-SEER2-Wi-Fi-Ductless-Mini-Split-Year-Round-AC-and-Heat-Pump-w-16-ft-Lines-230V-System-TH12SVH23XW/337641400"],
 msw_24:["Mini Split Warehouse, TCL Ultimate 24K","https://www.minisplitwarehouse.com/product/tcl-24000-btu-ultimate-mini-split-hyper-heat-pump-ac"]
}
};
