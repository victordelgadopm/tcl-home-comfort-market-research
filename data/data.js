/* Single source of truth for the site. Edit facts here; every fact points to a source id. */
window.DATA = {
meta: {
  title: "TCL Home Comfort Market Research",
  author: "Victor Delgado",
  asOf: "November 2026",
  disclaimer: "Independent research from public sources by Victor Delgado. Not affiliated with or endorsed by TCL. Prices and specs change, so each item shows its source and should be checked before anyone relies on it."
},
findings: [
  { h: "TCL's range is broader than it looks", t: "Window, through-the-wall, portable, dehumidifier, air purifier and mini split lines, including a 12K window heat pump and Elite mini splits that are all heat pumps." },
  { h: "The gaps are heat pump versions in other formats", t: "TCL has one heat pump window unit, the 12K. Competitors already sell heat pump versions in smaller window, through-the-wall and portable formats." },
  { h: "Two traps I checked before suggesting anything", t: "Midea's U-shaped window unit was recalled for drainage and mold, and dehumidifier pint ratings changed in 2020, so an old 70-pint unit equals a new 50-pint unit." }
],
categories: [
 { id:"window", name:"Window AC",
   tcl:[
    {model:"H8W25WQ", name:"Q Series 8K inverter", specs:[["List price","$399 (at review)"],["Room size","350 sq ft"],["Weight","61.7 lb"],["Features","Energy Star, Matter (per review)"]], conf:"review", note:"Model number from TCL's product page. The price is from a review, as TCL's page showed it sold out.", src:["tcl_h8","techhive","toms"]},
    {model:"H12W4MW", name:"Q Series 12K inverter", specs:[["List price","$499 (at review)"],["Room size","550 sq ft"],["Window","26 to 36 in. wide"],["Features","Energy Star, Matter"]], conf:"tcl", src:["tcl_h12","toms"]},
    {model:"H15W4KW", name:"Smart 15K inverter", specs:[["Room size","550 to 700 sq ft"],["Weight","92.6 lb"],["Noise","36 to 40 dB"],["Features","Energy Star, Matter"]], conf:"tcl", src:["tcl_h15"]}
   ],
   comp:[
    {model:"MAW08V1QWT, MAW10V1QWT, MAW12V1QWT", name:"Midea U-shaped inverter", brand:"Midea", specs:[["Price sold at","$280 to $500 (CPSC)"],["Sizes","8K, 10K, 12K"],["Design","Window sash drops into a U-slot"],["Status","Recalled June 2025"]], conf:"tcl", src:["cpsc","midea_u"]}
   ],
   compare:"Same size range and price band, and both are inverter and smart. Midea's window drops into a U-slot and uses the window to seal. Tom's Guide found the TCL 8K insulates less and feels underpowered by comparison."
 },
 { id:"heatpump", name:"Window heat pump",
   tcl:[
    {model:"H12W4KWH", name:"Q Series 12K heat pump", specs:[["Heating","11,700 BTU (100% at 47°F)"],["At 5°F","72% of rated heating, about 8,400 BTU"],["Efficiency","CEER 14.4, 1,190 W, 115V"],["Window","29.5 to 41 in. wide"]], conf:"tcl", src:["hd_hp_pdf","lowes_hp"], note:"Titled heat pump at Lowe's and Amazon, and supplemental heat at Best Buy and Home Depot."}
   ],
   comp:[
    {model:"All-Weather 120V", name:"Gradient window heat pump", brand:"Gradient", specs:[["Heating","9,000 BTU at 47°F, 7,200 BTU at 5°F"],["Low temperature","Product page lists 7,026 BTU at -13°F; spec sheet lists 4,900 BTU at -7°F"],["Install","No drilling or permits (product page)"],["Weight","125 lb (spec sheet)"]], conf:"tcl", src:["gradient_page","gradient_spec"], note:"Gradient's two documents disagree on low-temperature output and efficiency."},
    {model:"MAW08H1ZWT", name:"Midea 8K Heat & Cool window unit", brand:"Midea", specs:[["Heating type","Unconfirmed"],["Size","8,000 BTU"]], conf:"unconfirmed", src:["midea_8k"]}
   ],
   compare:"TCL has more heating capacity in one unit (11,700 BTU at 47°F against 9,000). At 5°F the two are closer, about 8,400 BTU for TCL and 7,200 for Gradient. Gradient publishes operation down to -13°F, while the lowest TCL point I found is 5°F."
 },
 { id:"ttw", name:"Through-the-wall",
   tcl:[
    {model:"H12T9XH", name:"12K through-the-wall", specs:[["Heat","11,600 BTU supplemental electric"],["Price","$649.99 (Best Buy)"],["Sleeve","Fits a 26 in. wall sleeve"],["Range","8K to 14K BTU"]], conf:"retail", src:["bb_ttw"]}
   ],
   comp:[
    {model:"KHVS12B33A", name:"Friedrich slide-out chassis", brand:"Friedrich", specs:[["Heat","Heat pump 11,400 BTU plus electric heat"],["Cooling","12,600 BTU, inverter, 230V"],["Efficiency","CEER 14.4, Energy Star"],["Price","$1,799, shown discontinued at one retailer"]], conf:"retail", src:["friedrich"]}
   ],
   compare:"TCL heats with electric elements. Friedrich adds a heat pump at a premium price. I could not confirm whether TCL's through-the-wall units are inverter."
 },
 { id:"portable", name:"Portable AC",
   tcl:[
    {model:"H10PD56W", name:"Q Series dual-hose inverter, 10K DOE", specs:[["Price","$359.99 (Best Buy)"],["Room size","450 sq ft"],["Design","Dual hose, inverter"]], conf:"retail", src:["bb_portable","zoro_portable"], note:"Model number cross-referenced from a retailer listing."},
    {model:"H10PDH56W", name:"Same series with heater", specs:[["Heat","Heater, type unconfirmed"]], conf:"unconfirmed", src:["zoro_portable"]}
   ],
   comp:[
    {model:"AP0825TW1SAHP", name:"Hisense 8K dual-hose inverter with heat pump", brand:"Hisense", specs:[["Size","8,000 BTU (SACC)"],["Design","Dual-hose tower, inverter"],["Heat","Heat pump"]], conf:"retail", src:["hisense_ca"], note:"Model number from Hisense Canada."}
   ],
   compare:"TCL's portables use a heater. Hisense offers a heat pump version."
 },
 { id:"dehum", name:"Dehumidifier",
   tcl:[
    {model:"H50D44W", name:"50-pint smart", specs:[["Coverage","Up to 4,500 sq ft"],["Features","Energy Star, Wi-Fi"],["Price","$264.99 (Quill)"],["Drain","Bucket plus garden-hose port"]], conf:"retail", src:["quill_h50"]},
    {model:"T50DC9SPB", name:"50-pint smart with pump", specs:[["Pump","Yes, per product name"],["Range","20 to 50 pints, 17 listings"]], conf:"tcl", src:["tcl_dehum"]}
   ],
   comp:[
    {model:"FGAC5044W1", name:"Frigidaire Gallery 50-pint", brand:"Frigidaire", specs:[["Features","Energy Star, Wi-Fi"]], conf:"retail", src:["frig_5044"]},
    {model:"GHDD3535W1", name:"Frigidaire 35-pint 2-in-1", brand:"Frigidaire", specs:[["Function","Dehumidifier plus allergy filter"],["Features","Wi-Fi, Energy Star"],["Price","$314"]], conf:"retail", src:["frig_2in1"]}
   ],
   compare:"Direct match at 50 pints. Pints compare only under the same rating: TCL's 50-pint (2020 rating) equals the old 70-pint, so a larger unit is not a gap."
 },
 { id:"purifier", name:"Air purifier",
   tcl:[
    {model:"Breeva A5", name:"5-stage, smart", specs:[["Coverage","365 to 883 sq ft"]], conf:"tcl", src:["tcl_purifier"]},
    {model:"Breeva A3", name:"5-stage, smart", specs:[["Coverage","256 to 596 sq ft"]], conf:"tcl", src:["tcl_purifier"]},
    {model:"Breeva A2", name:"4-stage, smart", specs:[["Coverage","182 to 441 sq ft"]], conf:"tcl", src:["tcl_purifier"]},
    {model:"Breeva A1C, A1W, A1", name:"3-stage", specs:[["Coverage","161 to 438 sq ft"],["Smart","A1W only"]], conf:"tcl", src:["tcl_purifier"]}
   ],
   comp:[], compare:"Competitor comparison not done yet. Next step."
 },
 { id:"split", name:"Mini split and HVAC",
   tcl:[
    {model:"H12SEH19XAE", name:"Elite 12K", specs:[["Efficiency","23 SEER2, 9.5 HSPF2"],["Type","Heat pump"]], conf:"tcl", src:["tcl_elite"]},
    {model:"H24SEH19XAE", name:"Elite 24K", specs:[["Efficiency","21 SEER2, 9.5 HSPF2"],["Type","Heat pump"]], conf:"tcl", src:["tcl_elite"]},
    {model:"TH12SVH23XW", name:"Ready-to-install 12K", specs:[["Efficiency","23 SEER2, 230V"],["Sold at","Home Depot"]], conf:"retail", src:["hd_split"]},
    {model:"Multi-Match", name:"Multi-zone systems", specs:[["Zones","Up to 5 indoor units"],["Indoor types","Cassette, slim duct, floor/ceiling"]], conf:"tcl", src:["tcl_multi"]},
    {model:"Ultimate 24K", name:"Cold-climate model", specs:[["Rating","Heating to -22°F (retailer)"]], conf:"retail", src:["msw_24"]}
   ],
   comp:[], compare:"Competitor comparison not done yet. Next step. TCL's range here is broad, so this looks like a strength to confirm."
 }
],
heat: { // BTU/h of heating by outdoor temperature (F)
  tcl:[[47,11700],[5,8424]],
  gradient:[[47,9000],[5,7200]],
  note:"TCL's 5°F point is calculated from its published 72% of rated heating. Gradient's two documents disagree below 5°F (7,026 BTU at -13°F on the product page, 4,900 BTU at -7°F on the spec sheet), so only the points they agree on are drawn."
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
  {h:"Heat pump listing", t:"The 12K model is titled heat pump at Lowe's and Amazon, and supplemental heat at Best Buy and Home Depot.", s:"Retailer listings."},
  {h:"Dehumidifiers", t:"Noise, a small tank, and one failure at a month.", s:"Three reviews on one Best Buy listing. Thin evidence."},
  {h:"Mini splits", t:"Poorly translated instructions and extra parts needed.", s:"One Home Depot listing."},
  {h:"Support and warranty", t:"Templated replies, long holds, and a hard warranty process.", s:"Several small sources."}
],
ideas:[
  {n:1, h:"Smaller heat pump window unit (8K, 10K)", gap:"yes", comp:"partial", sig:"none", read:"Best-supported idea",
   why:"TCL's only heat pump window unit is the 12K. Gradient sells a roughly 9,000 BTU unit. Midea lists an 8K Heat & Cool window unit, heat type unconfirmed.",
   signal:"None found.",
   test:"Pull TCL window sales by size to see how much volume is 8K and 10K. Confirm Midea's heating type."},
  {n:2, h:"Heat pump through-the-wall unit", gap:"yes", comp:"partial", sig:"none", read:"Check",
   why:"TCL's H12T9XH heats with 11,600 BTU of electric elements. Friedrich KHVS12B33A adds a heat pump (11,400 BTU) at $1,799 and is shown discontinued at one retailer.",
   signal:"None found.",
   test:"Confirm whether TCL's through-the-wall units are inverter. Find out why Friedrich's was discontinued. Size the wall-sleeve replacement market."},
  {n:3, h:"Heat pump portable", gap:"partial", comp:"yes", sig:"none", read:"Check",
   why:"TCL's Q Series portables use a heater, type unconfirmed. Hisense sells an 8K dual-hose inverter portable with a heat pump.",
   signal:"None found.",
   test:"Confirm TCL's heater type. Check US availability and reviews of Hisense's model."},
  {n:4, h:"Dehumidifier with a built-in filter (2-in-1)", gap:"yes", comp:"yes", sig:"none", read:"Weaker",
   why:"TCL sells dehumidifiers and Breeva purifiers separately. Frigidaire GHDD3535W1 combines a 35-pint dehumidifier with an allergy filter, Wi-Fi and Energy Star for $314.",
   signal:"None found.",
   test:"Read Frigidaire's reviews. Check customer overlap between TCL dehumidifier and Breeva buyers."}
],
fixes:[
  ["Portable AC","Window kit does not fit some windows, short stiff hose and cord, drain hose and reservoir, 60 to 75 lb","Adjustable panel with slider and casement adapters, longer insulated hose and cord, better drain, handles"],
  ["Window AC","Drilling to secure the unit, 61.7 lb (8K), heat pump wording differs between retailers","Tool-free mount, install video, handles, and the same heat pump wording on every listing"],
  ["Dehumidifier","Only 3 reviews: noise, small tank, one failure at a month","Publish noise levels and add a pump option on more models (pump on 2 of 17 listings)"],
  ["Mini split","Poorly translated instructions, extra parts needed","Rewrite instructions, include common installer parts, correct listing Q&A"],
  ["All products","Templated support replies and a hard warranty process (several sources)","Faster first-season replacement and a clearer warranty"]
],
setaside:[
  ["Window unit built to stay in all winter","Not a gap. TCL's care page and Midea's manual both say to remove window units at season end. Gradient markets year-round comfort, but I found no statement that its unit stays in all winter."],
  ["Larger dehumidifiers","Same size class as TCL once ratings match. Frigidaire's 69.7-pint is the old rating for about 50 pints new."],
  ["U-shaped window design","Recalled for drainage and mold, and the look is covered by design patents."],
  ["Window units above 15K BTU","TCL's 18K is no longer sold at Best Buy and the 15K already weighs 92.6 lb."],
  ["Humidifiers, fans, heaters","None on TCL's US site, but I found no customer demand, only that Midea sells them."]
],
unconfirmed:[
  "Heater type in TCL's portables.",
  "Whether TCL's through-the-wall units are inverter.",
  "Heating type of Midea's 8K Heat & Cool window unit.",
  "TCL's heat pump output below 5°F.",
  "Gradient's low-temperature figures, where its two documents disagree.",
  "TCL portable model number H10PD56W (from a retailer listing) and the Hisense model number (from Hisense Canada).",
  "Competitor comparisons for air purifiers and mini splits (not done yet)."
],
later:{
  now:["Public lineup, specs and prices","Competitor models matched by category","Review themes with sample sizes shown","Ideas screened on three tests"],
  after:["Sales by size, tier and retailer","Returns and support tickets by model and reason","Reviews read at scale","Business case per idea: market size, margin, tooling and certification cost","Feasibility with factory and engineering teams"]
},
sources:{
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
