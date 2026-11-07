/* Extra data for the tap-through layout. Same rule: every fact points to a source id. */
(function(){
var D=window.DATA;
D.sources.midea_spec=["Midea packaged window heat pump spec sheet (Efficiency Vermont copy): minimum heating outdoor temperature -13°F","https://www.efficiencyvermont.com/Media/Default/docs/products/Midea-PWHP_TechProdSheet_2022-10-31.pdf"];
D.sources.nyserda_wph=["NYSERDA, window heat pumps for NYCHA (Midea 20,000 and Gradient 10,000 units)","https://www.nyserda.ny.gov/About/Newsroom/2023-Announcements/2023-09-20-Governor-Hochul-Announces-Installation-Of-Window-Heat-Pumps-For-New-York-City"];
D.sources.zoro_hp=["Zoro, TCL H12W4KWH (listed $747.99, heat pump wording)","https://www.zoro.com/tcl-q-series-12-000-btu-550-sq-ft-smart-inverter-window-air-conditioner-with-heater-remote-control-h12w4kwh/i/G316138623/"];
D.sources.quill_hp=["Quill, TCL H12W4KWH (listed $749.99, heat pump wording)","https://www.quill.com/tcl-q-series-115-volt-12-000-btu-window-air-conditioner-remote-wifi-enabled-white-h12w4kwh/cbs/55523277.html"];
D.sources.bb_10k=["Best Buy, TCL 10K Q Series window unit (450 sq ft)","https://www.bestbuy.com/product/tcl-450-sq-ft-10000-btu-smart-inverter-window-air-conditioner-white/J36QYTT66Y"];
D.sources.hisense_us=["Slickdeals posts, Hisense 8K dual-hose heat pump portable (deal prices $212 to $435)","https://slickdeals.net/f/18401929-hisense-8000-btu-portable-tower-heat-pump-434-99"];
D.prices.push({label:"Window heat pump 12K, TCL H12W4KWH (about)",brand:"tcl",v:748});
D.prices.sort(function(a,b){return a.v-b.v});
var SHORT={"264.99":"Dehumidifier 50-pint (TCL)","314":"Dehumidifier 2-in-1 (Frigidaire)","359.99":"Portable 10K (TCL)","399":"Window 8K (TCL)","449":"Window 10K (TCL)","499":"Window 12K (TCL)","649.99":"Through-wall 12K (TCL)","748":"Window heat pump 12K (TCL)","1799":"Through-wall 12K (Friedrich)"};
D.prices.forEach(function(p){if(SHORT[p.v])p.label=SHORT[p.v]});

D.score={
 window:{tclL:"TCL Q Series 8K, 10K, 12K (photo: 8K)",compL:"Midea U-shaped 8K, 10K, 12K",
  rows:[["Still on sale","Yes","Recalled June 2025","ahead"],
        ["Price","$399 to $499 list","$280 to $500 sold at","even"],
        ["Sizes","8K, 10K, 12K","8K, 10K, 12K","even"],
        ["Insulation and power","Tom's Guide: insulates less, feels underpowered","Tom's Guide: better insulation","behind"]],
  bottom:"Midea's U-shape was recalled for drainage and mold. TCL is the unit still on sale, though one reviewer found it insulates less."},
 heatpump:{tclL:"TCL H12W4KWH 12K",compL:"Gradient All-Weather 120V",
  rows:[["Heating at 47°F","11,700 BTU","9,000 BTU","ahead"],
        ["Heating at 5°F","About 8,400 BTU","7,200 BTU","ahead"],
        ["Coldest published point","-6°F (manual)","-13°F (Gradient), -13°F (Midea spec sheet)","behind"],
        ["Price","$749.99","$3,800 (Gradient), $2,800 to $3,000 (Midea)","ahead"],
        ["Buyer feedback","Home Depot 3.9 of 5, 33% recommend (17)","No rating found. Press: Midea pilot users report heat in single digits","unclear"]],
  bottom:"TCL costs about a quarter as much and out-heats Gradient at 47°F and 5°F on paper. Gradient and Midea are rated to -13°F, TCL's manual says -6°F, and TCL's own documents give three different cold limits."},
 ttw:{tclL:"TCL H12T9XH 12K",compL:"Friedrich WallMaster WHVT14B33A",
  rows:[["Heat","11,600 BTU supplemental, type not stated","Heat and cool (its KHVS12B33A heat pump is discontinued)","unclear"],
        ["Price","$649.99","$1,699.97","ahead"],
        ["Inverter","Not stated on TCL's pages","Yes","behind"],
        ["Rating","3.6 of 5, 34 reviews (Home Depot)","3.4 of 5 (PC Richard)","even"]],
  bottom:"TCL costs about $1,000 less. Friedrich advertises inverter, TCL does not. Both rate low."},
 portable:{tclL:"TCL H10PD56W 10K dual hose",compL:"Hisense APT0825UW1WD 8K",
  rows:[["Design","Dual hose, inverter","Dual hose, inverter","even"],
        ["Heating","Heater version, called supplemental heating","Heat pump","behind"],
        ["Heat mode limit","Recommended above 46°F outdoors (TCL support)","Heat pump, limit not on the page","unclear"],],
  bottom:"TCL's reviews are strong. On heat, Hisense says heat pump and TCL does not name its heater type."},
 dehum:{tclL:"TCL 50-pint (photo: T50DC9SPB with pump)",compL:"Frigidaire FGAC5044W1 50-pint and GHDD3535W1 2-in-1 (photo: 2-in-1)",
  rows:[["50-pint model","Energy Star, Wi-Fi","Energy Star, Wi-Fi","even"],
        ["2-in-1 with air filter","None","Yes, 35-pint, 4.9 of 5 from 29, shown no longer available at AJ Madison","behind"],
        ["Drain pump","5 of 17 listings","Not on the 50-pint listing","unclear"]],
  bottom:"Matched at 50 pints. The gap is a dehumidifier with a built-in filter, though Frigidaire's may be discontinued."},
 purifier:{tclL:"TCL Breeva A3",compL:"Levoit Core 300S",
  rows:[["Price","$79.99","$149.99","ahead"],
        ["Airflow (CADR)","159 CFM","141 CFM","ahead"],
        ["Warranty","12 months","2 years","behind"],
        ["Noise","Quiet low, loud at max (65.8 dBA)","22 to 50 dB","behind"]],
  bottom:"TCL's A3 costs about half as much with more airflow. Levoit has the longer warranty and quieter range."},
 split:{tclL:"TCL T-PRO 12K",compL:"Pioneer, Senville, MrCool 12K",
  rows:[["Price","$1,749 to $1,849 (out of stock)","$817 to $1,914","behind"],
        ["Efficiency","Elite 23 SEER2, 9.5 HSPF2","Pioneer 20 SEER2, 9.5 HSPF2","ahead"],],
  bottom:"TCL is about double Pioneer and Senville and level with MrCool. The do-it-yourself install is the edge to study."}
};

D.ladder={
 window:{lead:"Bigger size, more room covered.",
  rows:[["8K","$399 list","Covers 350 sq ft. 61.7 lb."],["10K","$449 list","Covers 450 sq ft."],["12K","$499 list","Covers 550 sq ft. 40 dB."],["15K","Price not found","Covers 550 to 700 sq ft."]],src:["tcl_h8","bb_10k","tcl_h12","tcl_h15"]},
 heatpump:{lead:"One TCL model today, against $2,800 to $3,800 from Midea and Gradient.",
  rows:[["TCL 12K heat pump","$749.99","11,700 BTU heating. 72% at 5°F. Manual: operates to -6°F. Window 29.5 to 41 in."],["Midea packaged 9K","$2,800 to $3,000","Heats to -13°F (spec sheet). Installer channel."],["Gradient 120V 9,300 BTU","$3,800","7,026 BTU at -13°F. 140 lb."]],src:["hd_hp_page","hd_hp_pdf","tcl_hp_manual","fc_midea","hdigest_cold"]},
 ttw:{lead:"11 listings from 8K to 14K, 64 to 76 lb, professional install recommended.",
  rows:[["TCL 12K with heat","$649.99","11,600 BTU supplemental heat. Home Depot 3.6 of 5 (34)."],["Friedrich WallMaster 15K","$1,699.97","Inverter, heat and cool, 3.4 of 5."]],src:["bb_ttw","hd_ttw_qa","tcl_ttw","pcrichard_wm"]},
 portable:{lead:"About 22 listings.",
  rows:[["TCL 10K dual hose","$359.99","Inverter, covers 450 sq ft. 4.86 of 5 from 22 at Staples."],["TCL 10K with heater","Retailer out of stock","\"Supplemental heating.\" Heat mode recommended above 46°F."]],src:["bb_portable","zoro_portable","tcl_support_heat"]},
 dehum:{lead:"20 to 50 pints. A drain pump is on 2 of 17 listings.",
  rows:[["50-pint smart","$264.99","Energy Star, Wi-Fi, covers 4,500 sq ft, hose drain port."],["50-pint with pump","Price not found","Pump in the product name."]],src:["quill_h50","tcl_dehum"]},
 purifier:{lead:"Six Breeva models, 3 to 5 filter stages.",
  rows:[["A2","$59.99 (Amazon, per a reviewer)","4-stage. Covers 182 to 441 sq ft."],["A3","$79.99 (Amazon, per a reviewer)","5-stage, CADR 159. Covers 256 to 596 sq ft."],["A1, A1W, A1C, A5","Price not on the pages I read","A1 161 to 322 sq ft, A1C 219 to 438, A5 365 to 883."]],src:["tcl_purifier","apf_a3"]},
 split:{lead:"All Elite models are heat pumps. T-PRO is sold on TCL's store and shows out of stock.",
  rows:[["T-PRO 9K","$1,449 to $1,549","230V or 115V."],["T-PRO 12K","$1,749 to $1,849","230V or 115V."],["T-PRO 18K","$2,399","230V."],["T-PRO 24K","$2,899","230V."],["Elite 12K","Retailers","23 SEER2, 9.5 HSPF2."]],src:["tcl_pro","tcl_elite","tcl_multi","msw_24"]}
};

D.grow={
 1:{what:"A window heat pump that heats in the cold, at a mid price.",diff:"TCL's 12K is $749.99 and its documents give three cold limits. Midea and Gradient are rated to -13°F at $2,800 to $3,800. This fills the gap between, with proof and consistency as the main difference.",price:"$1,199 to $1,799",basis:"A test range between $750 and $2,800, not a finding.",bullets:["Midea 9K: $2,800 to $3,000, heats to -13°F per its spec sheet (press says designed to -22°F), sold through installers.","Gradient 9,300 BTU: $3,800, 7,026 BTU at -13°F.","Press: cheaper units often heat only above about 40°F, and cost is the main barrier.","Home Depot: TCL's 12K is 3.9 of 5 from 17 reviews, 33% recommend."]},
 2:{what:"A through-the-wall unit with a heat pump.",diff:"TCL's H12T9XH has 11,600 BTU supplemental heat and never says inverter. This adds a heat pump and inverter.",price:"$899 to $1,199",basis:"Between TCL's $649.99 and Friedrich's $1,699.97.",bullets:["Friedrich's heat pump KHVS12B33A ($1,799) is discontinued.","Friedrich WallMaster 15K: inverter, $1,699.97, 3.4 of 5.","TCL's H12T9XH: 3.6 of 5 from 34 reviews at Home Depot, so quality is the opening."]},
 3:{what:"A portable air conditioner with a heat pump.",diff:"TCL calls its portable heat supplemental heating and does not name the type. Hisense states heat pump.",price:"$449 to $549",basis:"Anchored on Westinghouse's 14K portable with heat at $549.99, a weak anchor.",bullets:["Hisense lists an 8K dual-hose inverter with heat pump on its US site.","Westinghouse 14K with heat: 4.5 of 5 from 394 reviews (Tractor Supply listing).","TCL's 10K portable: 4.86 of 5 from 22 at Staples, about 4.4 of 5 at Best Buy."]},
 4:{what:"A dehumidifier with a built-in air filter.",diff:"TCL sells dehumidifiers and Breeva purifiers separately. This puts both in one unit.",price:"$299 to $349",basis:"TCL's 50-pint is $264.99 and Frigidaire's 35-pint 2-in-1 was $314.",bullets:["Frigidaire GHDD3535W1: 35-pint with PureAir filter, 4.9 of 5 from 29 reviews.","It is shown as no longer available at AJ Madison, so check why.","Weakest of the four."]}
};
})();

/* Product photos and links. Photos are hotlinked from the manufacturer or retailer page named in "by" and belong to them. Missing photos fall back to a simple drawing. */
window.DATA.media={
 "H8W25WQ":{img:"https://us.tcl.com/cdn/shop/files/Whisper-windows-AC-Front-award720x480_81c2c798-136d-417d-b4de-d6d87d51a431.png?v=1765445668",by:"TCL US site",link:"https://us.tcl.com/products/tcl-8-000-btu-q-series-smart-inverter-window-air-conditioner-h8w25wq"},
 "H12W4MW":{img:"https://us.tcl.com/cdn/shop/files/Whisper-windows-AC-Front-award720x480.png?v=1765336786",by:"TCL US site",link:"https://us.tcl.com/products/tcl-12-000-btu-smart-inverter-window-air-conditioner-h12w4mw"},
 "H15W4KW":{img:"https://us.tcl.com/cdn/shop/files/ql_series_wac_front.png?v=1765337588",by:"TCL US site",link:"https://us.tcl.com/products/tcl-15-000-btu-smart-inverter-window-air-conditioner-h15w4kw"},
 "H12W4KWH":{img:"https://www.zoro.com/static/cms/product/large/032cc8ff-66c7-436e-a2ce-dea858cfdadd.jpeg",by:"Zoro listing",link:"https://www.lowes.com/pd/TCL-Large-Room-Window-Air-Conditioner-with-Heater-Remote-Included-115-Volt-12000-BTU/5016583701"},
 "H12T9XH":{img:"https://us.tcl.com/cdn/shop/files/TTWfrontw_filter-removed.png?v=1765497479&width=533",by:"TCL US site, through-the-wall category image",link:"https://www.bestbuy.com/product/tcl-12000-btu-550-sq-ft-smart-230v-through-the-wall-air-conditioner-with-11600-btu-supplemental-heat-function-white/J36QYTH4FP"},
 "H10PD56W":{link:"https://www.bestbuy.com/product/tcl-450-sq-ft-10000-btu-q-series-ultra-quiet-dual-hose-inverter-smart-portable-air-conditioner-white/J36QYTHGYH"},
 "H10PDH56W":{link:"https://www.zoro.com/tcl-10-000-btu-q-series-dual-hose-portable-inverter-ac-450-sq-ft-h10pd56w/i/G416138622"},
 "H50D44W":{link:"https://www.quill.com/tcl-energy-star-50-pint-portable-dehumidifier-wi-fi-enabled-covers-up-to-4500-sq-ft-white-h50d44w/cbs/55493397.html"},
 "T50DC9SPB":{img:"https://us.tcl.com/cdn/shop/files/1_bacb7d75-56af-4f00-96a5-5ce408d52099.png?v=1773725262&width=533",by:"TCL US site",link:"https://us.tcl.com/collections/dehumidifiers"},
 "Breeva A5":{img:"https://us.tcl.com/cdn/shop/files/Breeva_A5_Right_BLK.png?v=1765451111&width=800",by:"TCL US site",link:"https://us.tcl.com/pages/air-purifiers"},
 "Breeva A3":{img:"https://us.tcl.com/cdn/shop/files/Breeva_A3_Right_BLK.png?v=1765451112&width=800",by:"TCL US site",link:"https://us.tcl.com/pages/air-purifiers"},
 "Breeva A2":{img:"https://us.tcl.com/cdn/shop/files/Breeva_A2_RightTop_BLK.png?v=1765451111&width=800",by:"TCL US site",link:"https://us.tcl.com/pages/air-purifiers"},
 "Breeva A1C, A1W, A1":{img:"https://us.tcl.com/cdn/shop/files/BreevaA1_TopRight.png?v=1765451112&width=800",by:"TCL US site",link:"https://us.tcl.com/pages/air-purifiers"},
 "H12SEH19XAE":{link:"https://www.tcl.com/usca/content/dam/tcl/product/hvac/documents/elite-series/Elite%20HVAC%20SpecSheet%202025.pdf"},
 "H24SEH19XAE":{link:"https://www.tcl.com/usca/content/dam/tcl/product/hvac/documents/elite-series/Elite%20HVAC%20SpecSheet%202025.pdf"},
 "TH12SVH23XW":{link:"https://www.homedepot.com/p/TCL-Ready-to-Install-12-000-BTU-23-SEER2-Wi-Fi-Ductless-Mini-Split-Year-Round-AC-and-Heat-Pump-w-16-ft-Lines-230V-System-TH12SVH23XW/337641400"},
 "Multi-Match":{link:"https://www.tcl.com/usca/content/dam/tcl/product/hvac/documents/multi-match/Multi%20Match%20Series%20HVAC%20SpecSheet%202025.pdf"},
 "Ultimate 24K":{link:"https://www.minisplitwarehouse.com/product/tcl-24000-btu-ultimate-mini-split-hyper-heat-pump-ac"},
 "MAW08V1QWT, MAW10V1QWT, MAW12V1QWT":{link:"https://www.midea.com/us/homestead/the-world-s-first-u-shaped-inverter-air-conditioner"},
 "All-Weather 120V":{link:"https://shop.gradientcomfort.com/products/gradient-all-weather-120v-window-heat-pump"},
 "MAW08H1ZWT":{link:"https://www.midea.com/us/Heating_Cooling/window-air-conditioners/8000-window-air-conditioner-heat-cool-maw08h1zwt"},
 "KHVS12B33A":{img:"https://www.townappliance.com/cdn/shop/files/frfzyqmyyirv_5008b7b6-82b0-4944-8ced-645d664347ad.png?v=1754050825",by:"Town Appliance listing",link:"https://www.townappliance.com/products/friedrich-khvs12b33a-10-501-12-500-btu-air-conditioner"},
 "AP0825TW1SAHP":{img:"https://assets.hisense-canada.com/assets/GalleryImages/Product/546/d40f9eaccb/AP0825TW1SAHP.jpg",by:"Hisense Canada",link:"https://hisense-canada.com/en/air-products/all-portable-air-conditioners/AP0825TW1SAHP_8000-btu-sacc-12000-btu-ashrae-inverter-portable-ac-smart-with-heat-pump-dual-hose-tower"},
 "FGAC5044W1":{link:"https://www.sylvane.com/collections/frigidaire-dehumidifier/products/frigidaire-fgac5044w1-high-humidity-50-pint-energy-star-dehumidifier-wifi"},
 "GHDD3535W1":{img:"https://www.parkaveappliance.com/cdn/shop/files/frtucprgmmjk.jpg?crop=center&height=1200&v=1764223249&width=1200",by:"Park Ave Appliance listing",link:"https://www.parkaveappliance.com/collections/air-quality/products/frig-ghdd3535w1"}
};
/* Idea pages: the TCL product today and the competitor that already has the idea (model keys into media). */
window.DATA.ideaPair={1:["H12W4KWH","All-Weather 120V"],2:["H12T9XH","KHVS12B33A"],3:["H10PD56W","AP0825TW1SAHP"],4:["T50DC9SPB","GHDD3535W1"]};
window.DATA.ideaPairNames={"H12W4KWH":"TCL 12K heat pump window unit","All-Weather 120V":"Gradient All-Weather 120V","H12T9XH":"TCL H12T9XH through-the-wall","KHVS12B33A":"Friedrich through-the-wall heat pump (discontinued)","H10PD56W":"TCL H10PD56W portable","AP0825TW1SAHP":"Hisense 8K heat pump portable","T50DC9SPB":"TCL 50-pint dehumidifier with pump","GHDD3535W1":"Frigidaire GHDD3535W1 2-in-1"};

/* Full range on TCL's US collection pages (counts from the page filter; model lists are the first page shown). */
window.DATA.range={
 window:{count:"34 listings",line:"TCL's window AC range runs from 5K to 15K BTU and mixes several generations. Almost every item on TCL's own store showed as out of stock when I checked.",listed:[["H6W23W","6K"],["W5WC72M","5K"],["T05WV9M","5K"],["T08WV9S","8K"],["T10WV9S","10K"],["T12WV9S","12K"],["T14WV9S","14K"],["W8W92-B4","8K"],["W10W92-B4","10K"],["H8W35W","8K"],["H10W35W","10K"],["H12W35W","12K"],["H14W35W","14K"],["H5W33M","5K"],["W8W9E2-3","8K"],["W10W9E2-3","10K"],["W12W9E2-3","12K"],["W14W9E2-3","14K"],["W6W32","6K"],["W5W3M","5K"],["W5WM","5K"],["H15W4KW","15K"],["H12W4MW","12K"],["H10W4MW","10K"],["H8W4MW","8K"]],link:"https://us.tcl.com/collections/window-air-conditioners",src:"25 named here of 34 listings; the rest are older or color variants"},
 heatpump:{count:"1 model, retail only",line:"The H12W4KWH is the only window heat pump I found. It is sold at Home Depot, Lowe's, Best Buy and Zoro, not on TCL's own store.",listed:[["H12W4KWH","12K heat pump"]],link:"https://www.lowes.com/pd/TCL-Large-Room-Window-Air-Conditioner-with-Heater-Remote-Included-115-Volt-12000-BTU/5016583701",src:"retailer-only"},
 ttw:{count:"11 listings",line:"TCL's store lists 11 through-the-wall models, 8K to 14K. The Best Buy H12T9XH ($649.99) is not on TCL's own store list.",listed:[["W8T9E1-A","8K"],["8T3E1","8K"],["W10T9E1-A","10K"],["W10T9EX1-A","10K"],["12T3E1","12K"],["W12T9E1-A","12K"],["W12T9EX1-A","12K"],["W14T9X1-A","14K"],["H8T9E1-A","8K"],["H10T9E1-A","10K"],["H12T9E1-A","12K"]],link:"https://us.tcl.com/collections/through-the-wall-air-conditioners",src:"11 of 11 listed"},
 portable:{count:"22 listings",line:"TCL's portable range runs from 5K to 10K DOE. At least three carry supplemental heat. Model codes below are as TCL lists them.",listed:[["T06PC9S","6K"],["T06PC5S","6K"],["T06PC3S","6K"],["T08PC9S","8K"],["T08PC9SB","8K"],["T08PC5S","8K"],["W8P95-5","8K"],["W8P95-B5","8K"],["W8P95-B3","8K"],["H8P27W","12K ASHRAE, UV-C"],["T10PC9S","10K"],["T10PC9SB","10K"],["T10PC5S","10K"],["W10P95-5","10K"],["W10P95-B5","10K"],["W10PH95-5","10K, supplemental heat"],["W10PH95-B","10K, supplemental heat"],["W5P93","5K"],["W5P93-5","5K"],["H5P24W","7,500 BTU"],["H5P44W","5K"],["10K DOE smart (unnamed)","10K, supplemental heat"]],link:"https://us.tcl.com/collections/portable-air-conditioners",src:"22 of 22 listed"},
 dehum:{count:"17 listings",line:"TCL's dehumidifiers run from 20 to 50 pints, with several pump models.",listed:[["T25DC9R","25 pint"],["T32DC9R","32 pint"],["W25D92","25 pint"],["H25D44W","25 pint"],["H30D44W","30 pint"],["20D91","20 pint"],["30D91","30 pint"],["40D91","40 pint"],["50D91","50 pint"],["50D91-B","50 pint"],["W35D92","35 pint"],["H50D44W","50 pint"],["H50D46W","50 pint, pump"],["W50D9P3","50 pint, pump"],["W50D9P2","50 pint, pump"],["W50D9P2-B","50 pint, pump"],["T50DC9SPB","50 pint, pump"]],link:"https://us.tcl.com/collections/dehumidifiers",src:"17 of 17"},
 purifier:{count:"6 models",line:"The Breeva line is the full set.",listed:[],link:"https://us.tcl.com/pages/air-purifiers",src:""},
 split:{count:"4 series",line:"Elite, Multi-Match, Ultimate and ready-to-install systems, from 9K to 36K BTU.",listed:[],link:"https://www.tcl.com/usca/content/dam/tcl/product/hvac/documents/elite-series/Elite%20HVAC%20SpecSheet%202025.pdf",src:""}
};
