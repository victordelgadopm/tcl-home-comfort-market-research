/* Extra data for the tap-through layout. Same rule: every fact points to a source id. */
(function(){
var D=window.DATA;
D.sources.zoro_hp=["Zoro, TCL H12W4KWH (listed $747.99, heat pump wording)","https://www.zoro.com/tcl-q-series-12-000-btu-550-sq-ft-smart-inverter-window-air-conditioner-with-heater-remote-control-h12w4kwh/i/G316138623/"];
D.sources.quill_hp=["Quill, TCL H12W4KWH (listed $749.99, heat pump wording)","https://www.quill.com/tcl-q-series-115-volt-12-000-btu-window-air-conditioner-remote-wifi-enabled-white-h12w4kwh/cbs/55523277.html"];
D.sources.bb_10k=["Best Buy, TCL 10K Q Series window unit (450 sq ft)","https://www.bestbuy.com/product/tcl-450-sq-ft-10000-btu-smart-inverter-window-air-conditioner-white/J36QYTT66Y"];
D.sources.hisense_us=["Slickdeals posts, Hisense 8K dual-hose heat pump portable (deal prices $212 to $435)","https://slickdeals.net/f/18401929-hisense-8000-btu-portable-tower-heat-pump-434-99"];
D.prices.push({label:"Window heat pump 12K, TCL H12W4KWH (about)",brand:"tcl",v:748});
D.prices.sort(function(a,b){return a.v-b.v});
var SHORT={"264.99":"Dehumidifier 50-pint (TCL)","314":"Dehumidifier 2-in-1 (Frigidaire)","359.99":"Portable 10K (TCL)","399":"Window 8K (TCL)","449":"Window 10K (TCL)","499":"Window 12K (TCL)","649.99":"Through-wall 12K (TCL)","748":"Window heat pump 12K (TCL)","1799":"Through-wall 12K (Friedrich)"};
D.prices.forEach(function(p){if(SHORT[p.v])p.label=SHORT[p.v]});

D.score={
 window:{tclL:"TCL Q Series 8K, 10K, 12K",compL:"Midea U-shaped 8K, 10K, 12K",
  rows:[["Still on sale","Yes","Recalled June 2025","ahead"],
        ["Price","$399 to $499 list","$280 to $500 sold at","even"],
        ["Sizes","8K, 10K, 12K","8K, 10K, 12K","even"],
        ["Insulation and power","Tom's Guide: insulates less, feels underpowered","Tom's Guide: better insulation","behind"]],
  bottom:"Midea's U-shape was recalled for drainage and mold. TCL is the unit still on sale, though one reviewer found it insulates less."},
 heatpump:{tclL:"TCL H12W4KWH 12K",compL:"Gradient All-Weather 120V",
  rows:[["Heating at 47°F","11,700 BTU","9,000 BTU","ahead"],
        ["Heating at 5°F","About 8,400 BTU","7,200 BTU","ahead"],
        ["Coldest published point","5°F","-13°F on page, -7°F on spec sheet","behind"],
        ["Meant to stay in all winter","Care page says remove at season end","Sold for year-round use","behind"],
        ["Price","About $748 to $750 (Zoro, Quill)","Not confirmed","unclear"]],
  bottom:"TCL out-heats Gradient where both publish numbers. Gradient's edge is year-round use and a colder published rating."},
 ttw:{tclL:"TCL H12T9XH 12K",compL:"Friedrich KHVS12B33A",
  rows:[["Heat","Electric elements, 11,600 BTU","Heat pump 11,400 BTU plus electric","behind"],
        ["Price","$649.99","$1,799","ahead"],
        ["Inverter","Not confirmed","Yes","unclear"]],
  bottom:"TCL costs far less but heats with electric elements. Friedrich adds a heat pump at a much higher price."},
 portable:{tclL:"TCL H10PD56W 10K dual hose",compL:"Hisense AP0825TW1SAHP 8K",
  rows:[["Design","Dual hose, inverter","Dual hose, inverter","even"],
        ["Heating","Heater version exists, type not confirmed","Heat pump","unclear"],
        ["Capacity","10,000 BTU (DOE)","8,000 BTU (SACC)","unclear"]],
  bottom:"Not enough confirmed to call it. Hisense sells a heat pump portable, and I could not confirm what TCL's heater uses."},
 dehum:{tclL:"TCL H50D44W 50-pint",compL:"Frigidaire FGAC5044W1 50-pint, GHDD3535W1 2-in-1",
  rows:[["50-pint model","Energy Star, Wi-Fi","Energy Star, Wi-Fi","even"],
        ["2-in-1 with air filter","None found","Yes, 35-pint, $314","behind"],
        ["Drain pump","2 of 17 listings","Not checked","unclear"]],
  bottom:"Matched at 50 pints. The gap is a dehumidifier with a built-in filter."},
 purifier:{rows:[],bottom:"Competitor comparison not done yet. It is the next step."},
 split:{rows:[],bottom:"Competitor comparison not done yet. TCL's range here is broad, so I expect a strength to confirm."}
};

D.ladder={
 window:{lead:"Bigger size, more room covered. TCL's 15K is the heaviest.",
  rows:[["8K","$399 list","Covers 350 sq ft. 61.7 lb."],["10K","$449 list","Covers 450 sq ft."],["12K","$499 list","Covers 550 sq ft. 40 dB."],["15K","Price not found","Covers 550 to 700 sq ft. 92.6 lb."]],src:["tcl_h8","bb_10k","tcl_h12","tcl_h15"]},
 heatpump:{lead:"One model today. About $250 more than the cooling-only 12K list price.",
  rows:[["12K heat pump","About $748 to $750","11,700 BTU heating. 72% of that at 5°F. Window 29.5 to 41 in."]],src:["zoro_hp","quill_hp","hd_hp_pdf"]},
 ttw:{lead:"11 listings from 8K to 14K. I priced one.",
  rows:[["12K with heat","$649.99","11,600 BTU electric supplemental heat. Fits a 26 in. sleeve."]],src:["bb_ttw"]},
 portable:{lead:"About 22 listings. I priced one.",
  rows:[["10K dual hose","$359.99","Inverter, covers 450 sq ft."],["10K with heater","Price not found","Heater type not confirmed."]],src:["bb_portable","zoro_portable"]},
 dehum:{lead:"20 to 50 pints. A drain pump is on 2 of 17 listings.",
  rows:[["50-pint smart","$264.99","Energy Star, Wi-Fi, covers 4,500 sq ft, hose drain port."],["50-pint with pump","Price not found","Pump in the product name."]],src:["quill_h50","tcl_dehum"]},
 purifier:{lead:"Six Breeva models, 3 to 5 filter stages. Prices not collected.",
  rows:[["A1, A1W","Not collected","Covers 161 to 322 sq ft."],["A1C","Not collected","Covers 219 to 438 sq ft."],["A2","Not collected","4-stage. Covers 182 to 441 sq ft."],["A3","Not collected","5-stage. Covers 256 to 596 sq ft."],["A5","Not collected","Covers 365 to 883 sq ft."]],src:["tcl_purifier"]},
 split:{lead:"All Elite models are heat pumps. Prices not collected.",
  rows:[["Elite 12K","Not collected","23 SEER2, 9.5 HSPF2."],["Elite 24K","Not collected","21 SEER2, 9.5 HSPF2."],["Multi-Match","Not collected","Up to 5 indoor units."],["Ultimate 24K","Not collected","Rated to -22°F (retailer)."]],src:["tcl_elite","tcl_multi","msw_24"]}
};

D.grow={
 1:{what:"A heat pump window unit made to stay in the window all winter.",diff:"Same heat pump as today's 12K, plus winter sealing, a freeze-safe drain, a cover and a tool-free mount.",price:"$799 to $899",basis:"Today's 12K heat pump sells for about $748 to $750. A modest premium for the winter features. Gradient's price is not confirmed.",bullets:["TCL's care page says to remove window units at season end and does not mention the heat pump.","Gradient sells a window heat pump for year-round use with no drilling.","A TechHive reviewer drilled the 8K and removes it each winter."]},
 2:{what:"A smaller heat pump window unit, 8K or 10K.",diff:"TCL's only heat pump window unit is 12K. This adds a smaller, cheaper way into heating.",price:"$599 to $699",basis:"TCL's 8K and 10K list for $399 and $449 cooling-only, and heating adds about $250 on the 12K.",bullets:["Gradient sells a roughly 9,000 BTU unit.","Midea lists an 8K Heat & Cool window unit. Heat type not confirmed.","No customer signal found yet."]},
 3:{what:"A through-the-wall unit with a heat pump.",diff:"TCL's through-the-wall unit heats with electric elements. This swaps in a heat pump.",price:"$899 to $1,199",basis:"Between TCL's $649.99 and Friedrich's $1,799. A wide range, so test it.",bullets:["Friedrich KHVS12B33A has a heat pump at $1,799 and shows discontinued at one retailer.","Why it was discontinued is not known yet.","No customer signal found yet."]},
 4:{what:"A portable air conditioner with a heat pump.",diff:"TCL's portables use a heater, type not confirmed. This moves heating to a heat pump.",price:"$449 to $549",basis:"TCL's 10K dual-hose is $359.99. Hisense's heat pump portable shows $212 to $435 in deal posts. Weakest price anchor, check first.",bullets:["Hisense sells an 8K dual-hose inverter with a heat pump.","I could not confirm what TCL's heater uses.","No customer signal found yet."]},
 5:{what:"A dehumidifier with a built-in air filter.",diff:"TCL sells dehumidifiers and Breeva purifiers separately. This puts both in one unit.",price:"$299 to $349",basis:"TCL's 50-pint is $264.99 and Frigidaire's 35-pint 2-in-1 is $314.",bullets:["Frigidaire GHDD3535W1 combines a 35-pint dehumidifier with an allergy filter.","Unknown whether TCL dehumidifier and Breeva buyers overlap.","No customer signal found yet."]}
};
})();
