function safarizone(zone_val){
//Allows users to roll for a Safari PokÃ©mon and all associated stats. I could not find a reliable method to exclude Legendary PokÃ©mon without removing their information entirely.
    
    //Only rolls up to 1000, but in actuality, due to the later loops, only will roll up to the maximum possiblities per zone.
    roll = Math.floor(Math.random()*1001);
    
    //I need a better way to from from 1 to 4096, but this appears to work for now - it rolls from 1-10000, then substracts 5904, which, on a roll of 10,000, would produce 4096.
    //By using a while loop to eliminiate negative values, when it rolls 5904 or less, it is ignored, so the only possible values for an ACTUAL roll are indeed 1-4096.
    var shiny_roll = Math.floor(Math.random() * (4096 - 1 + 1)) + 1;
    
    //Rolls from 1-10000 to allow for two decimal places
    var gender_roll = Math.floor(Math.random()*10001);
    
    //Only includes 1 or 2, as Hidden Abilities are not in use here.
    var ability_roll = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

    //Ratio is a bad term for these, but I needed something uniform. pkmn simply stores the Nat Dex number. Gender_ratio stores the liklihood over 8 of being female.
    //There are the values when the program is "done", hence the name.
    
    var pkmn, gender_ratio, done_species,done_gender,done_ability,done_shiny;

    var Grassland = [0,1,1,1,2,2,3,19,19,19,20,20,23,23,23,24,24,29,29,29,30,30,31,32,32,32,33,33,34,37,37,37,38,38,39,39,40,40,43,43,43,44,44,45,58,58,58,59,59,77,77,77,78,78,83,84,84,84,85,85,96,96,96,97,97,108,108,108,114,114,114,115,123,123,123,125,125,128,152,152,152,153,153,154,155,155,155,156,156,157,161,161,161,162,162,174,174,174,179,179,179,180,180,181,182,187,187,187,188,188,189,191,191,191,192,192,203,212,212,239,239,239,241,255,255,255,256,256,257,261,261,261,262,262,263,263,263,264,264,276,276,276,277,277,309,309,309,310,310,311,312,315,315,316,316,316,317,317,335,336,351,358,358,396,396,396,397,397,398,403,403,403,404,404,405,406,406,406,407,417,420,420,420,421,421,433,433,433,463,463,465,465,466,531,546,546,546,547,547,548,548,548,549,549,626,653,653,653,654,654,655,659,659,659,660,660,667,667,667,668,668,669,669,669,670,670,671,672,672,672,673,673,677,677,677,678,678,679,679,679,680,680,681]; 
    var Forest = [0,10,10,10,11,11,12,13,13,13,14,14,15,16,16,16,17,17,18,25,25,26,46,46,46,47,47,48,48,48,49,49,69,69,69,70,70,71,102,102,102,103,103,127,163,163,163,164,164,165,165,165,166,166,167,167,167,168,168,172,172,172,175,175,175,176,176,177,177,177,178,178,185,185,190,190,190,193,193,193,198,198,198,204,204,204,205,205,214,215,215,215,234,252,252,252,253,253,254,265,265,265,266,266,267,268,268,269,273,273,273,274,274,275,285,285,285,286,286,287,287,287,288,288,289,290,290,290,291,291,292,292,300,300,300,301,301,313,314,333,333,333,334,334,352,355,355,355,356,356,357,387,387,387,388,388,389,401,401,401,402,402,412,412,412,413,413,414,414,415,415,415,416,416,424,424,430,430,438,438,438,441,442,455,461,461,468,469,469,477,495,495,495,496,496,497,504,504,504,505,505,511,511,511,512,512,513,513,513,514,514,515,515,515,516,516,527,527,527,528,528,540,540,540,541,541,542,543,543,543,544,544,545,561,574,574,574,575,575,576,577,577,577,578,578,579,585,585,585,586,586,587,590,590,590,591,591,610,610,610,611,611,612,661,661,661,662,662,663,664,664,664,665,665,666,704,704,704,705,705,706,708,708,708,709,709,710,710,710,711,711];  
    var Water_Edge = [0,7,7,7,8,8,9,54,54,54,55,55,60,60,60,61,61,62,79,79,79,80,80,98,98,98,99,99,118,118,118,119,119,129,129,129,130,130,147,147,147,148,148,149,158,158,158,159,159,160,183,183,184,186,194,194,194,195,195,199,199,258,258,258,259,259,260,270,270,270,271,271,272,283,283,283,284,284,298,298,298,339,339,339,340,340,341,341,341,342,342,347,347,347,348,348,349,349,349,350,350,399,399,399,400,400,418,418,418,419,419,453,453,453,454,454,501,501,501,502,502,503,535,535,535,536,536,537,557,557,557,558,558,580,580,580,581,581,616,616,616,617,617,619,619,619,620,620,656,656,656,657,657,658,686,686,686,687,687];
    var Sea = [0,72,72,72,73,73,86,86,86,87,87,90,90,90,91,91,116,116,116,117,117,120,120,120,121,121,131,138,138,138,139,139,140,140,140,141,141,170,170,170,171,171,211,222,223,223,223,224,224,226,226,230,278,278,278,279,279,318,318,318,319,319,320,320,320,321,321,345,345,345,346,346,363,363,363,364,364,365,366,366,366,367,367,368,368,369,370,393,393,393,394,394,395,422,422,422,423,423,456,456,456,457,457,458,458,458,489,550,564,564,564,565,565,592,592,592,593,593,594,602,602,602,603,603,604,618,688,688,688,689,689,690,690,690,691,691,692,692,692,693,693];
    var Cave = [0,41,41,41,42,42,50,50,50,51,51,92,92,92,93,93,94,95,95,95,169,200,200,200,202,202,206,208,208,220,220,220,221,221,293,293,293,294,294,295,299,299,299,302,303,337,338,360,360,360,361,361,361,362,362,410,410,410,411,411,429,429,436,436,436,437,437,473,476,476,478,478,524,524,524,525,525,526,529,529,529,530,530,562,562,562,563,563,582,582,582,583,583,584,597,597,597,598,598,599,599,599,600,600,601,607,607,607,608,608,609,613,613,613,614,614,615,622,622,622,623,623,703,712,712,712,713,713,714,714,714,715,715,10004,10004];
    var Mountain = [0,4,4,4,5,5,6,35,35,36,36,56,56,56,57,57,66,66,66,67,67,68,74,74,74,75,75,76,104,104,104,105,105,126,126,142,143,143,173,173,173,207,207,207,213,216,216,216,217,217,218,218,218,219,219,225,240,240,240,246,246,246,247,247,248,296,296,296,297,297,304,304,304,305,305,306,307,307,307,308,308,322,322,322,323,323,324,325,325,325,326,326,327,359,390,390,390,391,391,392,408,408,408,409,409,446,446,446,447,447,447,448,448,459,459,459,460,460,467,472,472,566,566,566,567,567,624,624,624,625,625,631,632,633,633,633,634,634,635,636,636,636,637,637,696,696,696,697,697,698,698,698,699,699];
    var Rough_Terrain = [0,21,21,21,22,22,27,27,27,28,28,81,81,81,82,82,111,111,111,112,112,227,228,228,228,229,229,231,231,231,232,232,328,328,328,329,329,330,331,331,331,332,332,343,343,343,344,344,371,371,371,372,372,373,374,374,374,375,375,376,443,443,443,444,444,445,449,449,449,450,450,451,451,451,452,452,462,464,498,498,498,499,499,500,522,522,522,523,523,532,532,532,533,533,534,538,539,551,551,551,552,552,553,554,554,554,555,555,556,559,559,559,560,560,588,588,588,589,589,605,605,605,606,606,621,627,627,627,628,628,629,629,629,630,630,650,650,650,651,651,652,674,674,674,675,675,694,694,694,695,695,701,702];
    var Urban = [0,52,52,52,53,53,63,63,63,64,64,65,88,88,88,89,89,100,100,100,101,101,106,106,107,107,109,109,109,110,110,113,113,122,122,124,124,132,133,133,133,134,134,135,135,136,136,137,137,137,196,196,197,197,201,209,209,209,210,210,233,233,235,236,236,236,237,237,238,238,238,242,242,280,280,280,281,281,282,353,353,353,354,354,425,425,425,426,426,427,427,427,428,428,431,431,431,432,432,434,434,434,435,435,439,439,439,440,440,440,470,470,471,471,474,475,479,506,506,506,507,507,508,509,509,509,510,510,517,517,517,518,518,519,519,519,520,520,521,568,568,568,569,569,570,570,570,571,571,572,572,572,573,573,595,595,595,596,596,676,682,682,682,683,683,684,684,684,685,685,700,700,707,10005,10005];

    var SAFARIPKMN = [];

    SAFARIPKMN[1]=["BULBASAUR",1,"Overgrow","Overgrow"];
    SAFARIPKMN[2]=["IVYSAUR",1,"Overgrow","Overgrow"];
    SAFARIPKMN[3]=["VENUSAUR",1,"Overgrow","Overgrow"];
    SAFARIPKMN[4]=["CHARMANDER",1,"Blaze","Blaze"];
    SAFARIPKMN[5]=["CHARMELEON",1,"Blaze","Blaze"];
    SAFARIPKMN[6]=["CHARIZARD",1,"Blaze","Blaze"];
    SAFARIPKMN[7]=["SQUIRTLE",1,"Torrent","Torrent"];
    SAFARIPKMN[8]=["WARTORTLE",1,"Torrent","Torrent"];
    SAFARIPKMN[9]=["BLASTOISE",1,"Torrent","Torrent"];
    SAFARIPKMN[10]=["CATERPIE",4,"Shield Dust","Shield Dust"];
    SAFARIPKMN[11]=["METAPOD",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[12]=["BUTTERFREE",4,"Compoundeyes","Compoundeyes"];
    SAFARIPKMN[13]=["WEEDLE",4,"Shield Dust","Shield Dust"];
    SAFARIPKMN[14]=["KAKUNA",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[15]=["BEEDRILL",4,"Swarm","Swarm"];
    SAFARIPKMN[16]=["PIDGEY",4,"Keen Eye","Tangled Feet"];
    SAFARIPKMN[17]=["PIDGEOTTO",4,"Keen Eye","Tangled Feet"];
    SAFARIPKMN[18]=["PIDGEOT",4,"Keen Eye","Tangled Feet"];
    SAFARIPKMN[19]=["RATTATA",4,"Run Away","Guts"];
    SAFARIPKMN[20]=["RATICATE",4,"Run Away","Guts"];
    SAFARIPKMN[21]=["SPEAROW",4,"Keen Eye","Keen Eye"];
    SAFARIPKMN[22]=["FEAROW",4,"Keen Eye","Keen Eye"];
    SAFARIPKMN[23]=["EKANS",4,"Intimidate","Shed Skin"];
    SAFARIPKMN[24]=["ARBOK",4,"Intimidate","Shed Skin"];
    SAFARIPKMN[25]=["PIKACHU",4,"Static","Static"];
    SAFARIPKMN[26]=["RAICHU",4,"Static","Static"];
    SAFARIPKMN[27]=["SANDSHREW",4,"Sand Veil","Sand Veil"];
    SAFARIPKMN[28]=["SANDSLASH",4,"Sand Veil","Sand Veil"];
    SAFARIPKMN[29]=["NIDORAN-F",8,"Poison Point","Rivalry"];
    SAFARIPKMN[30]=["NIDORINA",8,"Poison Point","Rivalry"];
    SAFARIPKMN[31]=["NIDOQUEEN",8,"Poison Point","Rivalry"];
    SAFARIPKMN[32]=["NIDORAN-M",0,"Poison Point","Rivalry"];
    SAFARIPKMN[33]=["NIDORINO",0,"Poison Point","Rivalry"];
    SAFARIPKMN[34]=["NIDOKING",0,"Poison Point","Rivalry"];
    SAFARIPKMN[35]=["CLEFAIRY",6,"Cute Charm","Magic Guard"];
    SAFARIPKMN[36]=["CLEFABLE",6,"Cute Charm","Magic Guard"];
    SAFARIPKMN[37]=["VULPIX",6,"Flash Fire","Flash Fire"];
    SAFARIPKMN[38]=["NINETALES",6,"Flash Fire","Flash Fire"];
    SAFARIPKMN[39]=["JIGGLYPUFF",6,"Cute Charm","Competitive"];
    SAFARIPKMN[40]=["WIGGLYTUFF",6,"Cute Charm","Competitive"];
    SAFARIPKMN[41]=["ZUBAT",4,"Inner Focus","Inner Focus"];
    SAFARIPKMN[42]=["GOLBAT",4,"Inner Focus","Inner Focus"];
    SAFARIPKMN[43]=["ODDISH",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[44]=["GLOOM",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[45]=["VILEPLUME",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[46]=["PARAS",4,"Effect Spore","Dry Skin"];
    SAFARIPKMN[47]=["PARASECT",4,"Effect Spore","Dry Skin"];
    SAFARIPKMN[48]=["VENONAT",4,"Compoundeyes","Tinted Lens"];
    SAFARIPKMN[49]=["VENOMOTH",4,"Shield Dust","Tinted Lens"];
    SAFARIPKMN[50]=["DIGLETT",4,"Sand Veil","Arena Trap"];
    SAFARIPKMN[51]=["DUGTRIO",4,"Sand Veil","Arena Trap"];
    SAFARIPKMN[52]=["MEOWTH",4,"Pickup","Technician"];
    SAFARIPKMN[53]=["PERSIAN",4,"Limber","Technician"];
    SAFARIPKMN[54]=["PSYDUCK",4,"Damp","Cloud Nine"];
    SAFARIPKMN[55]=["GOLDUCK",4,"Damp","Cloud Nine"];
    SAFARIPKMN[56]=["MANKEY",4,"Vital Spirit","Anger Point"];
    SAFARIPKMN[57]=["PRIMEAPE",4,"Vital Spirit","Anger Point"];
    SAFARIPKMN[58]=["GROWLITHE",2,"Intimidate","Flash Fire"];
    SAFARIPKMN[59]=["ARCANINE",2,"Intimidate","Flash Fire"];
    SAFARIPKMN[60]=["POLIWAG",4,"Water Absorb","Damp"];
    SAFARIPKMN[61]=["POLIWHIRL",4,"Water Absorb","Damp"];
    SAFARIPKMN[62]=["POLIWRATH",4,"Water Absorb","Damp"];
    SAFARIPKMN[63]=["ABRA",2,"Synchronize","Inner Focus"];
    SAFARIPKMN[64]=["KADABRA",2,"Synchronize","Inner Focus"];
    SAFARIPKMN[65]=["ALAKAZAM",2,"Synchronize","Inner Focus"];
    SAFARIPKMN[66]=["MACHOP",2,"Guts","No Guard"];
    SAFARIPKMN[67]=["MACHOKE",2,"Guts","No Guard"];
    SAFARIPKMN[68]=["MACHAMP",2,"Guts","No Guard"];
    SAFARIPKMN[69]=["BELLSPROUT",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[70]=["WEEPINBELL",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[71]=["VICTREEBEL",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[72]=["TENTACOOL",4,"Clear Body","Liquid Ooze"];
    SAFARIPKMN[73]=["TENTACRUEL",4,"Clear Body","Liquid Ooze"];
    SAFARIPKMN[74]=["GEODUDE",4,"Rock Head","Sturdy"];
    SAFARIPKMN[75]=["GRAVELER",4,"Rock Head","Sturdy"];
    SAFARIPKMN[76]=["GOLEM",4,"Rock Head","Sturdy"];
    SAFARIPKMN[77]=["PONYTA",4,"Run Away","Flash Fire"];
    SAFARIPKMN[78]=["RAPIDASH",4,"Run Away","Flash Fire"];
    SAFARIPKMN[79]=["SLOWPOKE",4,"Oblivious", "Own Tempo"];
    SAFARIPKMN[80]=["SLOWBRO",4,"Oblivious", "Own Tempo"];
    SAFARIPKMN[81]=["MAGNEMITE",-1,"Magnet Pull", "Sturdy"];
    SAFARIPKMN[82]=["MAGNETON",-1,"Magnet Pull", "Sturdy"];
    SAFARIPKMN[83]=["FARFETCH’D",4,"Keen Eye","Inner Focus"];
    SAFARIPKMN[84]=["DODUO",4,"Run Away","Early Bird"];
    SAFARIPKMN[85]=["DODRIO",4,"Run Away","Early Bird"];
    SAFARIPKMN[86]=["SEEL",4,"Thick Fat","Hydration"];
    SAFARIPKMN[87]=["DEWGONG",4,"Thick Fat","Hydration"];
    SAFARIPKMN[88]=["GRIMER",4,"Stench","Sticky Hold"];
    SAFARIPKMN[89]=["MUK",4,"Stench","Sticky Hold"];
    SAFARIPKMN[90]=["SHELLDER",4,"Shell Armor","Skill Link"];
    SAFARIPKMN[91]=["CLOYSTER",4,"Shell Armor","Skill Link"];
    SAFARIPKMN[92]=["GASTLY",4,"Levitate","Levitate"];
    SAFARIPKMN[93]=["HAUNTER",4,"Levitate","Levitate"];
    SAFARIPKMN[94]=["GENGAR",4,"Levitate","Levitate"];
    SAFARIPKMN[95]=["ONIX",4,"Rock Head","Sturdy"];
    SAFARIPKMN[96]=["DROWZEE",4,"Insomnia","Forewarn"];
    SAFARIPKMN[97]=["HYPNO",4,"Insomnia","Forewarn"];
    SAFARIPKMN[98]=["KRABBY",4,"Hyper Cutter","Shell Armor"];
    SAFARIPKMN[99]=["KINGLER",4,"Hyper Cutter","Shell Armor"];
    SAFARIPKMN[100]=["VOLTORB",-1,"Soundproof","Static"];
    SAFARIPKMN[101]=["ELECTRODE",-1,"Soundproof","Static"];
    SAFARIPKMN[102]=["EXEGGCUTE",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[103]=["EXEGGUTOR",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[104]=["CUBONE",4,"Rock Head","Lightningrod"];
    SAFARIPKMN[105]=["MAROWAK",4,"Rock Head","Lightningrod"];
    SAFARIPKMN[106]=["HITMONLEE",0,"Limber","Reckless"];
    SAFARIPKMN[107]=["HITMONCHAN",0,"Keen Eye","Iron Fist"];
    SAFARIPKMN[108]=["LICKITUNG",4,"Own Tempo","Oblivious"];
    SAFARIPKMN[109]=["KOFFING",4,"Levitate","Levitate"];
    SAFARIPKMN[110]=["WEEZING",4,"Levitate","Levitate"];
    SAFARIPKMN[111]=["RHYHORN",4,"Lightningrod","Rock Head"];
    SAFARIPKMN[112]=["RHYDON",4,"Lightningrod","Rock Head"];
    SAFARIPKMN[113]=["CHANSEY",8,"Natural Cure","Serene Grace"];
    SAFARIPKMN[114]=["TANGELA",4,"Chlorophyll","Leaf Guard"];
    SAFARIPKMN[115]=["KANGASKHAN",8,"Early BIrd","Scrappy"];
    SAFARIPKMN[116]=["HORSEA",4,"Swift Swim","Sniper"];
    SAFARIPKMN[117]=["SEADRA",4,"Poison Point","Sniper"];
    SAFARIPKMN[118]=["GOLDEEN",4,"Swift Swim","Water Veil"];
    SAFARIPKMN[119]=["SEAKING",4,"Swift Swim","Water Veil"];
    SAFARIPKMN[120]=["STARYU",-1,"Illuminate","Natural Cure"];
    SAFARIPKMN[121]=["STARMIE",-1,"Illuminate","Natural Cure"];
    SAFARIPKMN[122]=["MR. MIME",4,"Soundproof","Filter"];
    SAFARIPKMN[123]=["SCYTHER",4,"Swarm","Technician"];
    SAFARIPKMN[124]=["JYNX",8,"Oblivious","Forewarn"];
    SAFARIPKMN[125]=["ELECTABUZZ",2,"Static","Static"];
    SAFARIPKMN[126]=["MAGMAR",2,"Flame Body","Flame Body"];
    SAFARIPKMN[127]=["PINSIR",4,"Hyper Cutter","Mold Breaker"];
    SAFARIPKMN[128]=["TAUROS",0,"Intimidate","Anger Point"];
    SAFARIPKMN[129]=["MAGIKARP",4,"Swift Swim","Swift Swim"];
    SAFARIPKMN[130]=["GYARADOS",4,"Intimidate","Intimidate"];
    SAFARIPKMN[131]=["LAPRAS",4,"Water Absorb","Shell Armor"];
    SAFARIPKMN[132]=["DITTO",-1,"Limber","Limber"];
    SAFARIPKMN[133]=["EEVEE",1,"Run Away","Adaptability"];
    SAFARIPKMN[134]=["VAPOREON",1,"Water Absorb","Water Absorb"];
    SAFARIPKMN[135]=["JOLTEON",1,"Volt Absorb","Volt Absorb"];
    SAFARIPKMN[136]=["FLAREON",1,"Flash Fire","Flash Fire"];
    SAFARIPKMN[137]=["PORYGON",-1,"Trace","Download"];
    SAFARIPKMN[138]=["OMANYTE",1,"Swift Swim","Shell Armor"];
    SAFARIPKMN[139]=["OMASTAR",1,"Swift Swim","Shell Armor"];
    SAFARIPKMN[140]=["KABUTO",1,"Swift Swim","Battle Armor"];
    SAFARIPKMN[141]=["KABUTOPS",1,"Swift Swim","Battle Armor"];
    SAFARIPKMN[142]=["AERODACTYL",1,"Rock Head","Pressure"];
    SAFARIPKMN[143]=["SNORLAX",1,"Immunity","Thick Fat"];
    SAFARIPKMN[144]=["ARTICUNO",-1,"Pressure","Pressure"];
    SAFARIPKMN[145]=["ZAPDOS",-1,"Pressure","Pressure"];
    SAFARIPKMN[146]=["MOLTRES",-1,"Pressure","Pressure"];
    SAFARIPKMN[147]=["DRATINI",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[148]=["DRAGONAIR",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[149]=["DRAGONITE",4,"Inner Focus","Inner Focus"];
    SAFARIPKMN[150]=["MEWTWO",-1,"Pressure","Pressure"];
    SAFARIPKMN[151]=["MEW",-1,"Synchronize","Synchronize"];
    SAFARIPKMN[152]=["CHIKORITA",1,"Overgrow","Overgrow"];
    SAFARIPKMN[153]=["BAYLEEF",1,"Overgrow","Overgrow"];
    SAFARIPKMN[154]=["MEGANIUM",1,"Overgrow","Overgrow"];
    SAFARIPKMN[155]=["CYNDAQUIL",1,"Blaze","Blaze"];
    SAFARIPKMN[156]=["QUILAVA",1,"Blaze","Blaze"];
    SAFARIPKMN[157]=["TYPHLOSION",1,"Blaze","Blaze"];
    SAFARIPKMN[158]=["TOTODILE",1,"Torrent","Torrent"];
    SAFARIPKMN[159]=["CROCONAW",1,"Torrent","Torrent"];
    SAFARIPKMN[160]=["FERALIGATR",1,"Torrent","Torrent"];
    SAFARIPKMN[161]=["SENTRET",4,"Run Away","Keen Eye"];
    SAFARIPKMN[162]=["FURRET",4,"Run Away","Keen Eye"];
    SAFARIPKMN[163]=["HOOTHOOT",4,"Insomnia","Keen Eye"];
    SAFARIPKMN[164]=["NOCTOWL",4,"Insomnia","Keen Eye"];
    SAFARIPKMN[165]=["LEDYBA",4,"Swarm","Early Bird"];
    SAFARIPKMN[166]=["LEDIAN",4,"Swarm","Early Bird"];
    SAFARIPKMN[167]=["SPINARAK",4,"Swarm","Insomnia"];
    SAFARIPKMN[168]=["ARIADOS",4,"Swarm","Insomnia"];
    SAFARIPKMN[169]=["CROBAT",4,"Inner Focus","Inner Focus"];
    SAFARIPKMN[170]=["CHINCHOU",4,"Volt Absorb","Illuminate"];
    SAFARIPKMN[171]=["LANTURN",4,"Volt Absorb","Illuminate"];
    SAFARIPKMN[172]=["PICHU",4,"Static","Static"];
    SAFARIPKMN[173]=["CLEFFA",6,"Cute Charm","Magic Guard"];
    SAFARIPKMN[174]=["IGGLYBUFF",6,"Cute Charm","Competitive"];
    SAFARIPKMN[175]=["TOGEPI",1,"Hustle","Serene Grace"];
    SAFARIPKMN[176]=["TOGETIC",1,"Hustle","Serene Grace"];
    SAFARIPKMN[177]=["NATU",4,"Synchronize","Early Bird"];
    SAFARIPKMN[178]=["XATU",4,"Synchronize","Early Bird"];
    SAFARIPKMN[179]=["MAREEP",4,"Static","Static"];
    SAFARIPKMN[180]=["FLAAFFY",4,"Static","Static"];
    SAFARIPKMN[181]=["AMPHAROS",4,"Static","Static"];
    SAFARIPKMN[182]=["BELLOSSOM",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[183]=["MARILL",4,"Thick Fat","Huge Power"];
    SAFARIPKMN[184]=["AZUMARILL",4,"Thick Fat","Huge Power"];
    SAFARIPKMN[185]=["SUDOWOODO",4,"Sturdy","Rock Head"];
    SAFARIPKMN[186]=["POLITOED",4,"Water Absorb","Damp"];
    SAFARIPKMN[187]=["HOPPIP",4,"Chlorophyll","Leaf Guard"];
    SAFARIPKMN[188]=["SKIPLOOM",4,"Chlorophyll","Leaf Guard"];
    SAFARIPKMN[189]=["JUMPLUFF",4,"Chlorophyll","Leaf Guard"];
    SAFARIPKMN[190]=["AIPOM",4,"Run Away","Pickup"];
    SAFARIPKMN[191]=["SUNKERN",4,"Chlorophyll","Solar Power"];
    SAFARIPKMN[192]=["SUNFLORA",4,"Chlorophyll","Solar Power"];
    SAFARIPKMN[193]=["YANMA",4,"Speed Boost","Compoundeyes"];
    SAFARIPKMN[194]=["WOOPER",4,"Damp","Water Absorb"];
    SAFARIPKMN[195]=["QUAGSIRE",4,"Damp","Water Absorb"];
    SAFARIPKMN[196]=["ESPEON",1,"Synchronize","Synchronize"];
    SAFARIPKMN[197]=["UMBREON",1,"Synchronize","Synchronize"];
    SAFARIPKMN[198]=["MURKROW",4,"Insomnia","Super Luck"];
    SAFARIPKMN[199]=["SLOWKING",4,"Oblivious","Own Tempo"];
    SAFARIPKMN[200]=["MISDREAVUS",4,"Levitate","Levitate"];
    SAFARIPKMN[201]=["UNOWN",-1,"Levitate","Levitate"];
    SAFARIPKMN[202]=["WOBBUFFET",4,"Shadow Tag","Shadow Tag"];
    SAFARIPKMN[203]=["GIRAFARIG",4,"Inner Focus","Early Bird"];
    SAFARIPKMN[204]=["PINECO",4,"Sturdy","Sturdy"];
    SAFARIPKMN[205]=["FORRETRESS",4,"Sturdy","Sturdy"];
    SAFARIPKMN[206]=["DUNSPARCE",4,"Serene Grace","Run Away"];
    SAFARIPKMN[207]=["GLIGAR",4,"Hyper Cutter","Sand Veil"];
    SAFARIPKMN[208]=["STEELIX",4,"Rock Head","Sturdy"];
    SAFARIPKMN[209]=["SNUBBULL",6,"Intimidate","Run Away"];
    SAFARIPKMN[210]=["GRANBULL",6,"Intimidate","Quick Feet"];
    SAFARIPKMN[211]=["QWILFISH",4,"Poison Point","Swift Swim"];
    SAFARIPKMN[212]=["SCIZOR",4,"Swarm","Technician"];
    SAFARIPKMN[213]=["SHUCKLE",4,"Sturdy","Gluttony"];
    SAFARIPKMN[214]=["HERACROSS",4,"Swarm","Guts"];
    SAFARIPKMN[215]=["SNEASEL",4,"Inner Focus","Keen Eye"];
    SAFARIPKMN[216]=["TEDDIURSA",4,"Pickup","Quick Feet"];
    SAFARIPKMN[217]=["URSARING",4,"Guts","Quick Feet"];
    SAFARIPKMN[218]=["SLUGMA",4,"Magma Armor","Flame Body"];
    SAFARIPKMN[219]=["MAGCARGO",4,"Magma Armor","Flame Body"];
    SAFARIPKMN[220]=["SWINUB",4,"Oblivious","Snow Cloak"];
    SAFARIPKMN[221]=["PILOSWINE",4,"Oblivious","Snow Cloak"];
    SAFARIPKMN[222]=["CORSOLA",6,"Hustle","Natural Cure"];
    SAFARIPKMN[223]=["REMORAID",4,"Hustle","Sniper"];
    SAFARIPKMN[224]=["OCTILLERY",4,"Suction Cups","Sniper"];
    SAFARIPKMN[225]=["DELIBIRD",4,"Vital Spirit","Hustle"];
    SAFARIPKMN[226]=["MANTINE",4,"Swift Swim","Water Absorb"];
    SAFARIPKMN[227]=["SKARMORY",4,"Keen Eye","Sturdy"];
    SAFARIPKMN[228]=["HOUNDOUR",4,"Early BIrd","Flash Fire"];
    SAFARIPKMN[229]=["HOUNDOOM",4,"Early BIrd","Flash Fire"];
    SAFARIPKMN[230]=["KINGDRA",4,"Swift Swim","Sniper"];
    SAFARIPKMN[231]=["PHANPY",4,"Pickup","Pickup"];
    SAFARIPKMN[232]=["DONPHAN",4,"Sturdy","Sturdy"];
    SAFARIPKMN[233]=["PORYGON2",-1,"Trace","Download"];
    SAFARIPKMN[234]=["STANTLER",4,"Intimidate","Frisk"];
    SAFARIPKMN[235]=["SMEARGLE",4,"Own Tempo","Technician"];
    SAFARIPKMN[236]=["TYROGUE",0,"Guts","Steadfast"];
    SAFARIPKMN[237]=["HITMONTOP",0,"Intimidate","Technician"];
    SAFARIPKMN[238]=["SMOOCHUM",8,"Oblivious","Forewarn"];
    SAFARIPKMN[239]=["ELEKID",2,"Static","Static"];
    SAFARIPKMN[240]=["MAGBY",2,"Flame Body","Flame Body"];
    SAFARIPKMN[241]=["MILTANK",8,"Thick Fat","Scrappy"];
    SAFARIPKMN[242]=["BLISSEY",8,"Natural Cure","Serene Grace"];
    SAFARIPKMN[243]=["RAIKOU",-1,"Pressure","Pressure"];
    SAFARIPKMN[244]=["ENTEI",-1,"Pressure","Pressure"];
    SAFARIPKMN[245]=["SUICUNE",-1,"Pressure","Pressure"];
    SAFARIPKMN[246]=["LARVITAR",4,"Guts","Guts"];
    SAFARIPKMN[247]=["PUPITAR",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[248]=["TYRANITAR",4,"Sand Stream","Sand Stream"];
    SAFARIPKMN[249]=["LUGIA",-1,"Pressure","Pressure"];
    SAFARIPKMN[250]=["HO-OH",-1,"Pressure","Pressure"];
    SAFARIPKMN[251]=["CELEBI",-1,"Natural Cure","Natural Cure"];
    SAFARIPKMN[252]=["TREECKO",1,"Overgrow","Overgrow"];
    SAFARIPKMN[253]=["GROVYLE",1,"Overgrow","Overgrow"];
    SAFARIPKMN[254]=["SCEPTILE",1,"Overgrow","Overgrow"];
    SAFARIPKMN[255]=["TORCHIC",1,"Blaze","Blaze"];
    SAFARIPKMN[256]=["COMBUSKEN",1,"Blaze","Blaze"];
    SAFARIPKMN[257]=["BLAZIKEN",1,"Blaze","Blaze"];
    SAFARIPKMN[258]=["MUDKIP",1,"Torrent","Torrent"];
    SAFARIPKMN[259]=["MARSHTOMP",1,"Torrent","Torrent"];
    SAFARIPKMN[260]=["SWAMPERT",1,"Torrent","Torrent"];
    SAFARIPKMN[261]=["POOCHYENA",4,"Run Away","Quick Feet"];
    SAFARIPKMN[262]=["MIGHTYENA",4,"Intimidate","Quick Feet"];
    SAFARIPKMN[263]=["ZIGZAGOON",4,"Pickup","Gluttony"];
    SAFARIPKMN[264]=["LINOONE",4,"Pickup","Gluttony"];
    SAFARIPKMN[265]=["WURMPLE",4,"Shield Dust","Shield Dust"];
    SAFARIPKMN[266]=["SILCOON",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[267]=["BEAUTIFLY",4,"Swarm","Swarm"];
    SAFARIPKMN[268]=["CASCOON",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[269]=["DUSTOX",4,"Shield Dust","Shield Dust"];
    SAFARIPKMN[270]=["LOTAD",4,"Swift Swim","Rain Dish"];
    SAFARIPKMN[271]=["LOMBRE",4,"Swift Swim","Rain Dish"];
    SAFARIPKMN[272]=["LUDICOLO",4,"Swift Swim","Rain Dish"];
    SAFARIPKMN[273]=["SEEDOT",4,"Chlorophyll","Early Bird"];
    SAFARIPKMN[274]=["NUZLEAF",4,"Chlorophyll","Early Bird"];
    SAFARIPKMN[275]=["SHIFTRY",4,"Chlorophyll","Early Bird"];
    SAFARIPKMN[276]=["TAILLOW",4,"Guts","Guts"];
    SAFARIPKMN[277]=["SWELLOW",4,"Guts","Guts"];
    SAFARIPKMN[278]=["WINGULL",4,"Keen Eye","Keen Eye"];
    SAFARIPKMN[279]=["PELIPPER",4,"Keen Eye","Keen Eye"];
    SAFARIPKMN[280]=["RALTS",4,"Synchronize","Trace"];
    SAFARIPKMN[281]=["KIRLIA",4,"Synchronize","Trace"];
    SAFARIPKMN[282]=["GARDEVOIR",4,"Synchronize","Trace"];
    SAFARIPKMN[283]=["SURSKIT",4,"Swift Swim","Swift Swim"];
    SAFARIPKMN[284]=["MASQUERAIN",4,"Intimidate","Intimidate"];
    SAFARIPKMN[285]=["SHROOMISH",4,"Effect Spore","Poison Heal"];
    SAFARIPKMN[286]=["BRELOOM",4,"Effect Spore","Poison Heal"];
    SAFARIPKMN[287]=["SLAKOTH",4,"Truant","Truant"];
    SAFARIPKMN[288]=["VIGOROTH",4,"Vital Spirit","Vital Spirit"];
    SAFARIPKMN[289]=["SLAKING",4,"Truant","Truant"];
    SAFARIPKMN[290]=["NINCADA",4,"Compoundeyes","Compoundeyes"];
    SAFARIPKMN[291]=["NINJASK",4,"Speed Boost","Speed Boost"];
    SAFARIPKMN[292]=["SHEDINJA",-1,"Wonder Guard","Wonder Guard"];
    SAFARIPKMN[293]=["WHISMUR",4,"Soundproof","Soundproof"];
    SAFARIPKMN[294]=["LOUDRED",4,"Soundproof","Soundproof"];
    SAFARIPKMN[295]=["EXPLOUD",4,"Soundproof","Soundproof"];
    SAFARIPKMN[296]=["MAKUHITA",2,"Thick Fat","Guts"];
    SAFARIPKMN[297]=["HARIYAMA",2,"Thick Fat","Guts"];
    SAFARIPKMN[298]=["AZURILL",6,"Thick Fat","Huge Power"];
    SAFARIPKMN[299]=["NOSEPASS",4,"Sturdy","Magnet Pull"];
    SAFARIPKMN[300]=["SKITTY",6,"Cute Charm","Normalize"];
    SAFARIPKMN[301]=["DELCATTY",6,"Cute Charm","Normalize"];
    SAFARIPKMN[302]=["SABLEYE",4,"Keen Eye","Stall"];
    SAFARIPKMN[303]=["MAWILE",4,"Hyper Cutter","Intimidate"];
    SAFARIPKMN[304]=["ARON",4,"Sturdy","Rock Head"];
    SAFARIPKMN[305]=["LAIRON",4,"Sturdy","Rock Head"];
    SAFARIPKMN[306]=["AGGRON",4,"Sturdy","Rock Head"];
    SAFARIPKMN[307]=["MEDITITE",4,"Pure Power","Pure Power"];
    SAFARIPKMN[308]=["MEDICHAM",4,"Pure Power","Pure Power"];
    SAFARIPKMN[309]=["ELECTRIKE",4,"Static","Lightningrod"];
    SAFARIPKMN[310]=["MANECTRIC",4,"Static","Lightningrod"];
    SAFARIPKMN[311]=["PLUSLE",4,"Plus","Plus"];
    SAFARIPKMN[312]=["MINUN",4,"Minus","Minus"];
    SAFARIPKMN[313]=["VOLBEAT",0,"Illuminate","Swarm"];
    SAFARIPKMN[314]=["ILLUMISE",8,"Oblivious","Tinted Lens"];
    SAFARIPKMN[315]=["ROSELIA",4,"Natural Cure","Poison Point"];
    SAFARIPKMN[316]=["GULPIN",4,"Liquid Ooze","Sticky Hold"];
    SAFARIPKMN[317]=["SWALOT",4,"Liquid Ooze","Sticky Hold"];
    SAFARIPKMN[318]=["CARVANHA",4,"Rough Skin","Rough Skin"];
    SAFARIPKMN[319]=["SHARPEDO",4,"Rough Skin","Rough Skin"];
    SAFARIPKMN[320]=["WAILMER",4,"Water Veil","Oblivious"];
    SAFARIPKMN[321]=["WAILORD",4,"Water Veil","Oblivious"];
    SAFARIPKMN[322]=["NUMEL",4,"Oblivious","Simple"];
    SAFARIPKMN[323]=["CAMERUPT",4,"Magma Armor","Solid Rock"];
    SAFARIPKMN[324]=["TORKOAL",4,"White Smoke","White Smoke"];
    SAFARIPKMN[325]=["SPOINK",4,"Thick Fat","Own Tempo"];
    SAFARIPKMN[326]=["GRUMPIG",4,"Thick Fat","Own Tempo"];
    SAFARIPKMN[327]=["SPINDA",4,"Own Tempo","Tangled Feet"];
    SAFARIPKMN[328]=["TRAPINCH",4,"Hyper Cutter","Arena Trap"];
    SAFARIPKMN[329]=["VIBRAVA",4,"Levitate","Levitate"];
    SAFARIPKMN[330]=["FLYGON",4,"Levitate","Levitate"];
    SAFARIPKMN[331]=["CACNEA",4,"Sand Veil","Sand Veil"];
    SAFARIPKMN[332]=["CACTURNE",4,"Sand Veil","Sand Veil"];
    SAFARIPKMN[333]=["SWABLU",4,"Natural Cure","Natural Cure"];
    SAFARIPKMN[334]=["ALTARIA",4,"Natural Cure","Natural Cure"];
    SAFARIPKMN[335]=["ZANGOOSE",4,"Immunity","Immunity"];
    SAFARIPKMN[336]=["SEVIPER",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[337]=["LUNATONE",-1,"Levitate","Levitate"];
    SAFARIPKMN[338]=["SOLROCK",-1,"Levitate","Levitate"];
    SAFARIPKMN[339]=["BARBOACH",4,"Oblivious","Anticipation"];
    SAFARIPKMN[340]=["WHISCASH",4,"Oblivious","Anticipation"];
    SAFARIPKMN[341]=["CORPHISH",4,"Hyper Cutter","Shell Armor"];
    SAFARIPKMN[342]=["CRAWDAUNT",4,"Hyper Cutter","Shell Armor"];
    SAFARIPKMN[343]=["BALTOY",-1,"Levitate","Levitate"];
    SAFARIPKMN[344]=["CLAYDOL",-1,"Levitate","Levitate"];
    SAFARIPKMN[345]=["LILEEP",1,"Suction Cups","Suction Cups"];
    SAFARIPKMN[346]=["CRADILY",1,"Suction Cups","Suction Cups"];
    SAFARIPKMN[347]=["ANORITH",1,"Battle Armor","Battle Armor"];
    SAFARIPKMN[348]=["ARMALDO",1,"Battle Armor","Battle Armor"];
    SAFARIPKMN[349]=["FEEBAS",4,"Swift Swim","Competitive"];
    SAFARIPKMN[350]=["MILOTIC",4,"Marvel Scale","Competitive"];
    SAFARIPKMN[351]=["CASTFORM",4,"Forecast","Forecast"];
    SAFARIPKMN[352]=["KECLEON",4,"Color Change","Color Change"];
    SAFARIPKMN[353]=["SHUPPET",4,"Insomnia","Frisk"];
    SAFARIPKMN[354]=["BANETTE",4,"Insomnia","Frisk"];
    SAFARIPKMN[355]=["DUSKULL",4,"Levitate","Levitate"];
    SAFARIPKMN[356]=["DUSCLOPS",4,"Pressure","Pressure"];
    SAFARIPKMN[357]=["TROPIUS",4,"Chlorophyll","Solar Power"];
    SAFARIPKMN[358]=["CHIMECHO",4,"Levitate","Levitate"];
    SAFARIPKMN[359]=["ABSOL",4,"Pressure","Super Luck"];
    SAFARIPKMN[360]=["WYNAUT",4,"Shadow Tag","Shadow Tag"];
    SAFARIPKMN[361]=["SNORUNT",4,"Inner Focus","Ice Body"];
    SAFARIPKMN[362]=["GLALIE",4,"Inner Focus","Ice Body"];
    SAFARIPKMN[363]=["SPHEAL",4,"Thick Fat","Ice Body"];
    SAFARIPKMN[364]=["SEALEO",4,"Thick Fat","Ice Body"];
    SAFARIPKMN[365]=["WALREIN",4,"Thick Fat","Ice Body"];
    SAFARIPKMN[366]=["CLAMPERL",4,"Shell Armor","Shell Armor"];
    SAFARIPKMN[367]=["HUNTAIL",4,"Swift Swim","Swift Swim"];
    SAFARIPKMN[368]=["GOREBYSS",4,"Swift Swim","Swift Swim"];
    SAFARIPKMN[369]=["RELICANTH",1,"Swift Swim","Rock Head"];
    SAFARIPKMN[370]=["LUVDISC",6,"Swift Swim","Swift Swim"];
    SAFARIPKMN[371]=["BAGON",4,"Rock Head","Rock Head"];
    SAFARIPKMN[372]=["SHELGON",4,"Rock Head","Rock Head"];
    SAFARIPKMN[373]=["SALAMENCE",4,"Intimidate","Intimidate"];
    SAFARIPKMN[374]=["BELDUM",-1,"Clear Body","Clear Body"];
    SAFARIPKMN[375]=["METANG",-1,"Clear Body","Clear Body"];
    SAFARIPKMN[376]=["METAGROSS",-1,"Clear Body","Clear Body"];
    SAFARIPKMN[377]=["REGIROCK",-1,"Clear Body","Clear Body"];
    SAFARIPKMN[378]=["REGICE",-1,"Clear Body","Clear Body"];
    SAFARIPKMN[379]=["REGISTEEL",-1,"Clear Body","Clear Body"];
    SAFARIPKMN[380]=["LATIAS",8,"Levitate","Levitate"];
    SAFARIPKMN[381]=["LATIOS",0,"Levitate","Levitate"];
    SAFARIPKMN[382]=["KYOGRE",-1,"Drizzle","Drizzle"];
    SAFARIPKMN[383]=["GROUDON",-1,"Drought","Drought"];
    SAFARIPKMN[384]=["RAYQUAZA",-1,"Air Lock","Air Lock"];
    SAFARIPKMN[385]=["JIRACHI",-1,"Serene Grace","Serene Grace"];
    SAFARIPKMN[386]=["DEOXYS",-1,"Pressure","Pressure"];
    SAFARIPKMN[387]=["TURTWIG",1,"Overgrow","Overgrow"];
    SAFARIPKMN[388]=["GROTLE",1,"Overgrow","Overgrow"];
    SAFARIPKMN[389]=["TORTERRA",1,"Overgrow","Overgrow"];
    SAFARIPKMN[390]=["CHIMCHAR",1,"Blaze","Blaze"];
    SAFARIPKMN[391]=["MONFERNO",1,"Blaze","Blaze"];
    SAFARIPKMN[392]=["INFERNAPE",1,"Blaze","Blaze"];
    SAFARIPKMN[393]=["PIPLUP",1,"Torrent","Torrent"];
    SAFARIPKMN[394]=["PRINPLUP",1,"Torrent","Torrent"];
    SAFARIPKMN[395]=["EMPOLEON",1,"Torrent","Torrent"];
    SAFARIPKMN[396]=["STARLY",4,"Keen Eye","Keen Eye"];
    SAFARIPKMN[397]=["STARAVIA",4,"Intimidate","Intimidate"];
    SAFARIPKMN[398]=["STARAPTOR",4,"Intimidate","Intimidate"];
    SAFARIPKMN[399]=["BIDOOF",4,"Simple","Unaware"];
    SAFARIPKMN[400]=["BIBAREL",4,"Simple","Unaware"];
    SAFARIPKMN[401]=["KRICKETOT",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[402]=["KRICKETUNE",4,"Swarm","Swarm"];
    SAFARIPKMN[403]=["SHINX",4,"Rivalry","Intimidate"];
    SAFARIPKMN[404]=["LUXIO",4,"Rivalry","Intimidate"];
    SAFARIPKMN[405]=["LUXRAY",4,"Rivalry","Intimidate"];
    SAFARIPKMN[406]=["BUDEW",4,"Natural Cure","Poison Point"];
    SAFARIPKMN[407]=["ROSERADE",4,"Natural Cure","Poison Point"];
    SAFARIPKMN[408]=["CRANIDOS",1,"Mold Breaker","Mold Breaker"];
    SAFARIPKMN[409]=["RAMPARDOS",1,"Mold Breaker","Mold Breaker"];
    SAFARIPKMN[410]=["SHIELDON",1,"Sturdy","Sturdy"];
    SAFARIPKMN[411]=["BASTIODON",1,"Sturdy","Sturdy"];
    SAFARIPKMN[412]=["BURMY",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[413]=["WORMADAM-P",8,"Anticipation","Anticipation"];
    SAFARIPKMN[414]=["MOTHIM",0,"Swarm","Swarm"];
    SAFARIPKMN[415]=["COMBEE",1,"Honey Gather","Honey Gather"];
    SAFARIPKMN[416]=["VESPIQUEN",8,"Pressure","Pressure"];
    SAFARIPKMN[417]=["PACHIRISU",4,"Run Away","Pickup"];
    SAFARIPKMN[418]=["BUIZEL",4,"Swift Swim","Swift Swim"];
    SAFARIPKMN[419]=["FLOATZEL",4,"Swift Swim","Swift Swim"];
    SAFARIPKMN[420]=["CHERUBI",4,"Chlorophyll","Chlorophyll"];
    SAFARIPKMN[421]=["CHERRIM",4,"Flower Gift","Flower Gift"];
    SAFARIPKMN[422]=["SHELLOS",4,"Sticky Hold","Storm Drain"];
    SAFARIPKMN[423]=["GASTRODON",4,"Sticky Hold","Storm Drain"];
    SAFARIPKMN[424]=["AMBIPOM",4,"Technician","Pickup"];
    SAFARIPKMN[425]=["DRIFLOON",4,"Aftermath","Unburden"];
    SAFARIPKMN[426]=["DRIFBLIM",4,"Aftermath","Unburden"];
    SAFARIPKMN[427]=["BUNEARY",4,"Run Away","Klutz"];
    SAFARIPKMN[428]=["LOPUNNY",4,"Cute Charm","Klutz"];
    SAFARIPKMN[429]=["MISMAGIUS",4,"Levitate","Levitate"];
    SAFARIPKMN[430]=["HONCHKROW",4,"Insomnia","Super Luck"];
    SAFARIPKMN[431]=["GLAMEOW",6,"Limber","Own Tempo"];
    SAFARIPKMN[432]=["PURUGLY",6,"Thick Fat","Own Tempo"];
    SAFARIPKMN[433]=["CHINGLING",4,"Levitate","Levitate"];
    SAFARIPKMN[434]=["STUNKY",4,"Stench","Aftermath"];
    SAFARIPKMN[435]=["SKUNTANK",4,"Stench","Aftermath"];
    SAFARIPKMN[436]=["BRONZOR",-1,"Levitate","Heatproof"];
    SAFARIPKMN[437]=["BRONZONG",-1,"Levitate","Heatproof"];
    SAFARIPKMN[438]=["BONSLY",4,"Sturdy","Rock Head"];
    SAFARIPKMN[439]=["MIME JR.",4,"Soundproof","Filter"];
    SAFARIPKMN[440]=["HAPPINY",8,"Natural Cure","Serene Grace"];
    SAFARIPKMN[441]=["CHATOT",4,"Keen Eye","Tangled Feet"];
    SAFARIPKMN[442]=["SPIRITOMB",4,"Pressure","Pressure"];
    SAFARIPKMN[443]=["GIBLE",4,"Sand Veil","Sand Veil"];
    SAFARIPKMN[444]=["GABITE",4,"Sand Veil","Sand Veil"];
    SAFARIPKMN[445]=["GARCHOMP",4,"Sand Veil","Sand Veil"];
    SAFARIPKMN[446]=["MUNCHLAX",1,"Pickup","Thick Fat"];
    SAFARIPKMN[447]=["RIOLU",1,"Steadfast","Inner Focus"];
    SAFARIPKMN[448]=["LUCARIO",1,"Steadfast","Inner Focus"];
    SAFARIPKMN[449]=["HIPPOPOTAS",4,"Sand Stream","Sand Stream"];
    SAFARIPKMN[450]=["HIPPOWDON",4,"Sand Stream","Sand Stream"];
    SAFARIPKMN[451]=["SKORUPI",4,"Battle Armor","Sniper"];
    SAFARIPKMN[452]=["DRAPION",4,"Battle Armor","Sniper"];
    SAFARIPKMN[453]=["CROAGUNK",4,"Anticipation","Dry Skin"];
    SAFARIPKMN[454]=["TOXICROAK",4,"Anticipation","Dry Skin"];
    SAFARIPKMN[455]=["CARNIVINE",4,"Levitate","Levitate"];
    SAFARIPKMN[456]=["FINNEON",4,"Swift Swim","Storm Drain"];
    SAFARIPKMN[457]=["LUMINEON",4,"Swift Swim","Storm Drain"];
    SAFARIPKMN[458]=["MANTYKE",4,"Swift Swim","Water Absorb"];
    SAFARIPKMN[459]=["SNOVER",4,"Snow Warning","Snow Warning"];
    SAFARIPKMN[460]=["ABOMASNOW",4,"Snow Warning","Snow Warning"];
    SAFARIPKMN[461]=["WEAVILE",4,"Pressure","Pressure"];
    SAFARIPKMN[462]=["MAGNEZONE",-1,"Magnet Pull","Sturdy"];
    SAFARIPKMN[463]=["LICKILICKY",4,"Own Tempo","Oblivious"];
    SAFARIPKMN[464]=["RHYPERIOR",4,"Lightningrod","Solid Rock"];
    SAFARIPKMN[465]=["TANGROWTH",4,"Chlorophyll","Leaf Guard"];
    SAFARIPKMN[466]=["ELECTIVIRE",2,"Motor Drive","Motor Drive"];
    SAFARIPKMN[467]=["MAGMORTAR",2,"Flame Body","Flame Body"];
    SAFARIPKMN[468]=["TOGEKISS",1,"Hustle","Serene Grace"];
    SAFARIPKMN[469]=["YANMEGA",4,"Speed Boost","Tinted Lens"];
    SAFARIPKMN[470]=["LEAFEON",1,"Leaf Guard","Leaf Guard"];
    SAFARIPKMN[471]=["GLACEON",1,"Snow Cloak","Snow Cloak"];
    SAFARIPKMN[472]=["GLISCOR",4,"Hyper Cutter","Sand Veil"];
    SAFARIPKMN[473]=["MAMOSWINE",4,"Oblivious","Snow Cloak"];
    SAFARIPKMN[474]=["PORYGON-Z",-1,"Adaptability","Download"];
    SAFARIPKMN[475]=["GALLADE",0,"Steadfast","Steadfast"];
    SAFARIPKMN[476]=["PROBOPASS",4,"Sturdy","Magnet Pull"];
    SAFARIPKMN[477]=["DUSKNOIR",4,"Pressure","Snow Cloak"];
    SAFARIPKMN[478]=["FROSLASS",8,"Snow Cloak","Snow Cloak"];
    SAFARIPKMN[479]=["ROTOM",-1,"Levitate","Levitate"];
    SAFARIPKMN[480]=["UXIE",-1,"Levitate","Levitate"];
    SAFARIPKMN[481]=["MESPRIT",-1,"Levitate","Levitate"];
    SAFARIPKMN[482]=["AZELF",-1,"Levitate","Levitate"];
    SAFARIPKMN[483]=["DIALGA",-1,"Pressure","Pressure"];
    SAFARIPKMN[484]=["PALKIA",-1,"Pressure","Pressure"];
    SAFARIPKMN[485]=["HEATRAN",4,"Flash Fire","Flash Fire"];
    SAFARIPKMN[486]=["REGIGIGAS",-1,"Slow Start","Slow Start"];
    SAFARIPKMN[487]=["GIRATINA",-1,"Pressure","Pressure"];
    SAFARIPKMN[488]=["CRESSELIA",8,"Levitate","Levitate"];
    SAFARIPKMN[489]=["PHIONE",-1,"Hydration","Hydration"];
    SAFARIPKMN[490]=["MANAPHY",-1,"Hydration","Hydration"];
    SAFARIPKMN[491]=["Darkrai",-1,"Bad Dreams","Bad Dreams"];
    SAFARIPKMN[492]=["SHAYMIN",-1,"Natural Cure","Natural Cure"];
    SAFARIPKMN[493]=["ARCEUS",-1,"Multitype","Multitype"];
    SAFARIPKMN[494]=["VICTINI",-1,"Victory Star","Victory Star"];
    SAFARIPKMN[495]=["SNIVY",1,"Overgrow","Overgrow"];
    SAFARIPKMN[496]=["SERVINE",1,"Overgrow","Overgrow"];
    SAFARIPKMN[497]=["SERPERIOR",1,"Overgrow","Overgrow"];
    SAFARIPKMN[498]=["TEPIG",1,"Blaze","Blaze"];
    SAFARIPKMN[499]=["PIGNITE",1,"Blaze","Blaze"];
    SAFARIPKMN[500]=["EMBOAR",1,"Blaze","Blaze"];
    SAFARIPKMN[501]=["OSHAWOTT",1,"Torrent","Torrent"];
    SAFARIPKMN[502]=["DEWOTT",1,"Torrent","Torrent"];
    SAFARIPKMN[503]=["SAMUROTT",1,"Torrent","Torrent"];
    SAFARIPKMN[504]=["PATRAT",4,"Run Away","Keen Eye"];
    SAFARIPKMN[505]=["WATCHOG",4,"Illuminate","Keen Eye"];
    SAFARIPKMN[506]=["LILLIPUP",4,"Vital Spirit","Pickup"];
    SAFARIPKMN[507]=["HERDIER",4,"Intimidate","Sand Rush"];
    SAFARIPKMN[508]=["STOUTLAND",4,"Intimidate","Sand Rush"];
    SAFARIPKMN[509]=["PURRLOIN",4,"Limber","Unburden"];
    SAFARIPKMN[510]=["LIEPARD",4,"Limber","Unburden"];
    SAFARIPKMN[511]=["PANSAGE",1,"Gluttony","Gluttony"];
    SAFARIPKMN[512]=["SIMISAGE",1,"Gluttony","Gluttony"];
    SAFARIPKMN[513]=["PANSEAR",1,"Gluttony","Gluttony"];
    SAFARIPKMN[514]=["SIMISEAR",1,"Gluttony","Gluttony"];
    SAFARIPKMN[515]=["PANPOUR",1,"Gluttony","Gluttony"];
    SAFARIPKMN[516]=["SIMIPOUR",1,"Gluttony","Gluttony"];
    SAFARIPKMN[517]=["MUNNA",4,"Forewarn","Synchronize"];
    SAFARIPKMN[518]=["MUSHARNA",4,"Forewarn","Synchronize"];
    SAFARIPKMN[519]=["PIDOVE",4,"Big Pecks","Super Luck"];
    SAFARIPKMN[520]=["TRANQUILL",4,"Big Pecks","Super Luck"];
    SAFARIPKMN[521]=["UNFEZANT",4,"Big Pecks","Super Luck"];
    SAFARIPKMN[522]=["BLITZLE",4,"Lightningrod","Motor Drive"];
    SAFARIPKMN[523]=["ZEBSTRIKA",4,"Lightningrod","Motor Drive"];
    SAFARIPKMN[524]=["ROGGENROLA",4,"Sturdy","Sturdy"];
    SAFARIPKMN[525]=["BOLDORE",4,"Sturdy","Sturdy"];
    SAFARIPKMN[526]=["GIGALITH",4,"Sturdy","Sturdy"];
    SAFARIPKMN[527]=["WOOBAT",4,"Unaware","Klutz"];
    SAFARIPKMN[528]=["SWOOBAT",4,"Unaware","Klutz"];
    SAFARIPKMN[529]=["DRILBUR",4,"Sand Rush","Sand Force"];
    SAFARIPKMN[530]=["EXCADRILL",4,"Sand Rush","Sand Force"];
    SAFARIPKMN[531]=["AUDINO",4,"Healer","Regenerator"];
    SAFARIPKMN[532]=["TIMBURR",2,"Guts","Sheer Force"];
    SAFARIPKMN[533]=["GURDURR",2,"Guts","Sheer Force"];
    SAFARIPKMN[534]=["CONKELDURR",2,"Guts","Sheer Force"];
    SAFARIPKMN[535]=["TYMPOLE",4,"Swift Swim","Hydration"];
    SAFARIPKMN[536]=["PALPITOAD",4,"Swift Swim","Hydration"];
    SAFARIPKMN[537]=["SEISMITOAD",4,"Swift Swim","Poison Touch"];
    SAFARIPKMN[538]=["THROH",0,"Guts","Inner Focus"];
    SAFARIPKMN[539]=["SAWK",0,"Sturdy","Inner Focus"];
    SAFARIPKMN[540]=["SEWADDLE",4,"Swarm","Chlorophyll"];
    SAFARIPKMN[541]=["SWADLOON",4,"Leaf Guard","Chlorophyll"];
    SAFARIPKMN[542]=["LEAVANNY",4,"Swarm","Chlorophyll"];
    SAFARIPKMN[543]=["VENIPEDE",4,"Poison Point","Swarm"];
    SAFARIPKMN[544]=["WHIRLIPEDE",4,"Poison Point","Swarm"];
    SAFARIPKMN[545]=["SCOLIPEDE",4,"Poison Point","Swarm"];
    SAFARIPKMN[546]=["COTTONEE",4,"Prankster","Infiltrator"];
    SAFARIPKMN[547]=["WHIMSICOTT",4,"Prankster","Infiltrator"];
    SAFARIPKMN[548]=["PETILIL",8,"Chlorophyll","Own Tempo"];
    SAFARIPKMN[549]=["LILLIGANT",8,"Chlorophyll","Own Tempo"];
    SAFARIPKMN[550]=["BASCULIN",4,"Reckless","Adaptability"];
    SAFARIPKMN[551]=["SANDILE",4,"Intimidate","Moxie"];
    SAFARIPKMN[552]=["KROKOROK",4,"Intimidate","Moxie"];
    SAFARIPKMN[553]=["KROOKODILE",4,"Intimidate","Moxie"];
    SAFARIPKMN[554]=["DARUMAKA",4,"Hustle","Hustle"];
    SAFARIPKMN[555]=["DARMANITAN-S",4,"Sheer Force","Sheer Force"];
    SAFARIPKMN[556]=["MARACTUS",4,"Water Absorb","Chlorophyll"];
    SAFARIPKMN[557]=["DWEBBLE",4,"Sturdy","Shell Armor"];
    SAFARIPKMN[558]=["CRUSTLE",4,"Sturdy","Shell Armor"];
    SAFARIPKMN[559]=["SCRAGGY",4,"Shed Skin","Moxie"];
    SAFARIPKMN[560]=["SCRAFTY",4,"Shed Skin","Moxie"];
    SAFARIPKMN[561]=["SIGILYPH",4,"Wonder Skin","Magic Guard"];
    SAFARIPKMN[562]=["YAMASK",4,"Mummy","Mummy"];
    SAFARIPKMN[563]=["COFAGRIGUS",4,"Mummy","Mummy"];
    SAFARIPKMN[564]=["TIRTOUGA",1,"Solid Rock","Sturdy"];
    SAFARIPKMN[565]=["CARRACOSTA",1,"Solid Rock","Sturdy"];
    SAFARIPKMN[566]=["ARCHEN",1,"Defeatist","Defeatist"];
    SAFARIPKMN[567]=["ARCHEOPS",1,"Defeatist","Defeatist"];
    SAFARIPKMN[568]=["TRUBBISH",4,"Stench","Sticky Hold"];
    SAFARIPKMN[569]=["GARBODOR",4,"Stench","Weak Armor"];
    SAFARIPKMN[570]=["ZORUA",1,"Illusion","Illusion"];
    SAFARIPKMN[571]=["ZOROARK",1,"Illusion","Illusion"];
    SAFARIPKMN[572]=["MINCCINO",6,"Cute Charm","Technician"];
    SAFARIPKMN[573]=["CINCCINO",6,"Cute Charm","Technician"];
    SAFARIPKMN[574]=["GOTHITA",6,"Frisk","Competitive"];
    SAFARIPKMN[575]=["GOTHORITA",6,"Frisk","Competitive"];
    SAFARIPKMN[576]=["GOTHITELLE",6,"Frisk","Competitive"];
    SAFARIPKMN[577]=["SOLOSIS",4,"Overcoat","Magic Guard"];
    SAFARIPKMN[578]=["DUOSION",4,"Overcoat","Magic Guard"];
    SAFARIPKMN[579]=["REUNICLUS",4,"Overcoat","Magic Guard"];
    SAFARIPKMN[580]=["DUCKLETT",4,"Keen Eye","Big Pecks"];
    SAFARIPKMN[581]=["SWANNA",4,"Keen Eye","Big Pecks"];
    SAFARIPKMN[582]=["VANILLITE",4,"Ice Body","Ice Body"];
    SAFARIPKMN[583]=["VANILLISH",4,"Ice Body","Ice Body"];
    SAFARIPKMN[584]=["VANILLUXE",4,"Ice Body","Ice Body"];
    SAFARIPKMN[585]=["DEERLING",4,"Chlorophyll","Sap Sipper"];
    SAFARIPKMN[586]=["SAWSBUCK",4,"Chlorophyll","Sap Sipper"];
    SAFARIPKMN[587]=["EMOLGA",4,"Static","Static"];
    SAFARIPKMN[588]=["KARRABLAST",4,"Swarm","Shed Skin"];
    SAFARIPKMN[589]=["ESCAVALIER",4,"Swarm","Shell Armor"];
    SAFARIPKMN[590]=["FOONGUS",4,"Effect Spore","Effect Spore"];
    SAFARIPKMN[591]=["AMOONGUSS",4,"Effect Spore","Effect Spore"];
    SAFARIPKMN[592]=["FRILLISH",4,"Water Absorb","Cursed Body"];
    SAFARIPKMN[593]=["JELLICENT",4,"Water Absorb","Cursed Body"];
    SAFARIPKMN[594]=["ALOMOMOLA",4,"Healer","Hydration"];
    SAFARIPKMN[595]=["JOLTIK",4,"Compoundeyes","Unnerve"];
    SAFARIPKMN[596]=["GALVANTULA",4,"Compoundeyes","Unnerve"];
    SAFARIPKMN[597]=["FERROSEED",4,"Iron Barbs","Iron Barbs"];
    SAFARIPKMN[598]=["FERROTHORN",4,"Iron Barbs","Iron Barbs"];
    SAFARIPKMN[599]=["KLINK",-1,"Plus","Minus"];
    SAFARIPKMN[600]=["KLANG",-1,"Plus","Minus"];
    SAFARIPKMN[601]=["KLINKLANG",-1,"Plus","Minus"];
    SAFARIPKMN[602]=["TYNAMO",4,"Levitate","Levitate"];
    SAFARIPKMN[603]=["EELEKTRIK",4,"Levitate","Levitate"];
    SAFARIPKMN[604]=["EELEKTROSS",4,"Levitate","Levitate"];
    SAFARIPKMN[605]=["ELGYEM",4,"Telepathy","Synchronize"];
    SAFARIPKMN[606]=["BEHEEYEM",4,"Telepathy","Synchronize"];
    SAFARIPKMN[607]=["LITWICK",4,"Flash Fire","Flame Body"];
    SAFARIPKMN[608]=["LAMPENT",4,"Flash Fire","Flame Body"];
    SAFARIPKMN[609]=["CHANDELURE",4,"Flash Fire","Flame Body"];
    SAFARIPKMN[610]=["AXEW",4,"Rivalry","Mold Breaker"];
    SAFARIPKMN[611]=["FRAXURE",4,"Rivalry","Mold Breaker"];
    SAFARIPKMN[612]=["HAXORUS",4,"Rivalry","Mold Breaker"];
    SAFARIPKMN[613]=["CUBCHOO",4,"Snow Cloak","Snow Cloak"];
    SAFARIPKMN[614]=["BEARTIC",4,"Snow Cloak","Snow Cloak"];
    SAFARIPKMN[615]=["CRYOGONAL",-1,"Levitate","Levitate"];
    SAFARIPKMN[616]=["SHELMET",4,"Hydration","Shell Armor"];
    SAFARIPKMN[617]=["ACCELGOR",4,"Hydration","Sticky Hold"];
    SAFARIPKMN[618]=["STUNFISK",4,"Static","Limber"];
    SAFARIPKMN[619]=["MIENFOO",4,"Inner Focus","Regenerator"];
    SAFARIPKMN[620]=["MIENSHAO",4,"Inner Focus","Regenerator"];
    SAFARIPKMN[621]=["DRUDDIGON",4,"Rough Skin","Sheer Force"];
    SAFARIPKMN[622]=["GOLETT",-1,"Iron Fist","Klutz"];
    SAFARIPKMN[623]=["GOLURK",-1,"Iron Fist","Klutz"];
    SAFARIPKMN[624]=["PAWNIARD",4,"Defiant","Inner Focus"];
    SAFARIPKMN[625]=["BISHARP",4,"Defiant","Inner Focus"];
    SAFARIPKMN[626]=["BOUFFALANT",4,"Reckless","Sap Sipper"];
    SAFARIPKMN[627]=["RUFFLET",0,"Keen Eye","Sheer Force"];
    SAFARIPKMN[628]=["BRAVIARY",0,"Keen Eye","Sheer Force"];
    SAFARIPKMN[629]=["VULLABY",8,"Big Pecks","Overcoat"];
    SAFARIPKMN[630]=["MANDIBUZZ",8,"Big Pecks","Overcoat"];
    SAFARIPKMN[631]=["HEATMOR",4,"Gluttony","Flash Fire"];
    SAFARIPKMN[632]=["DURANT",4,"Swarm","Hustle"];
    SAFARIPKMN[633]=["DEINO",4,"Hustle","Hustle"];
    SAFARIPKMN[634]=["ZWEILOUS",4,"Hustle","Hustle"];
    SAFARIPKMN[635]=["HYDREIGON",4,"Levitate","Levitate"];
    SAFARIPKMN[636]=["LARVESTA",4,"Flame Body","Flame Body"];
    SAFARIPKMN[637]=["VOLCARONA",4,"Flame Body","Flame Body"];
    SAFARIPKMN[638]=["COBALION",-1,"Justified","Justified"];
    SAFARIPKMN[639]=["TERRAKION",-1,"Justified","Justified"];
    SAFARIPKMN[640]=["VIRIZION",-1,"Justified","Justified"];
    SAFARIPKMN[641]=["TORNADUS",0,"Prankster","Prankster"];
    SAFARIPKMN[642]=["THUNDURUS",0,"Prankster","Prankster"];
    SAFARIPKMN[643]=["RESHIRAM",-1,"Turboblaze","Turboblaze"];
    SAFARIPKMN[644]=["ZEKROM",-1,"Teravolt","Teravolt"];
    SAFARIPKMN[645]=["LANDORUS",0,"Sand Force","Sand Force"];
    SAFARIPKMN[646]=["KYUREM",-1,"Pressure","Pressure"];
    SAFARIPKMN[647]=["KELDEO",-1,"Justified","Justified"];
    SAFARIPKMN[648]=["MELOETTA-A",-1,"Serene Grace","Serene Grace"];
    SAFARIPKMN[649]=["GENESECT",-1,"Download","Download"];
    SAFARIPKMN[650]=["CHESPIN",1,"Overgrow","Overgrow"];
    SAFARIPKMN[651]=["QUILLADIN",1,"Overgrow","Overgrow"];
    SAFARIPKMN[652]=["CHESNAUGHT",1,"Overgrow","Overgrow"];
    SAFARIPKMN[653]=["FENNEKIN",1,"Blaze","Blaze"];
    SAFARIPKMN[654]=["BRAIXEN",1,"Blaze","Blaze"];
    SAFARIPKMN[655]=["DELPHOX",1,"Blaze","Blaze"];
    SAFARIPKMN[656]=["FROAKIE",1,"Torrent","Torrent"];
    SAFARIPKMN[657]=["FROGADIER",1,"Torrent","Torrent"];
    SAFARIPKMN[658]=["GRENINJA",4,"Torrent","Torrent"];
    SAFARIPKMN[659]=["BUNNELBY",4,"Pickup","Cheek Pouch"];
    SAFARIPKMN[660]=["DIGGERSBY",4,"Pickup","Cheek Pouch"];
    SAFARIPKMN[661]=["FLETCHLING",4,"Big Pecks","Big Pecks"];
    SAFARIPKMN[662]=["FLETCHINDER",4,"Flame Body","Flame Body"];
    SAFARIPKMN[663]=["TALONFLAME",4,"Flame Body","Flame Body"];
    SAFARIPKMN[664]=["SCATTERBUG",4,"Shield Dust","Compound Eyes"];
    SAFARIPKMN[665]=["SPEWPA",4,"Shed Skin","Shed Skin"];
    SAFARIPKMN[666]=["VIVILLON",4,"Shield Dust","Compound Eyes"];
    SAFARIPKMN[667]=["LITLEO",6,"Rivalry","Unnerve"];
    SAFARIPKMN[668]=["PYROAR",6,"Rivalry","Unnerve"];
    SAFARIPKMN[669]=["FLABÉBÉ",8,"Flower Veil","Flower Veil"];
    SAFARIPKMN[670]=["FLOETTE",8,"Flower Veil","Flower Veil"];
    SAFARIPKMN[671]=["FLORGES",8,"Flower Veil","Flower Veil"];
    SAFARIPKMN[672]=["SKIDDO",4,"Sap Sipper","Sap Sipper"];
    SAFARIPKMN[673]=["GOGOAT",4,"Sap Sipper","Sap Sipper"];
    SAFARIPKMN[674]=["PANCHAM",4,"Iron Fist","Mold Breaker"];
    SAFARIPKMN[675]=["PANGORO",4,"Iron Fist","Mold Breaker"];
    SAFARIPKMN[676]=["FURFROU",4,"Fur Coat","Fur Coat"];
    SAFARIPKMN[677]=["ESPURR",4,"Keen Eye","Infiltrator"];
    SAFARIPKMN[678]=["MEOWSTIC",4,"Keen Eye","Infiltrator"];
    SAFARIPKMN[679]=["HONEDGE",4,"No Guard","No Guard"];
    SAFARIPKMN[680]=["DOUBLADE",4,"No Guard","No Guard"];
    SAFARIPKMN[681]=["AEGISLASH",4,"Stance Change","Stance Change"];
    SAFARIPKMN[682]=["SPRITZEE",4,"Healer","Healer"];
    SAFARIPKMN[683]=["AROMATISSE",4,"Healer","Healer"];
    SAFARIPKMN[684]=["SWIRLIX",4,"Sweet Veil","Sweet Veil"];
    SAFARIPKMN[685]=["SLURPUFF",4,"Sweet Veil","Sweet Veil"];
    SAFARIPKMN[686]=["INKAY",4,"Contrary","Suction Cups"];
    SAFARIPKMN[687]=["MALAMAR",4,"Contrary","Suction Cups"];
    SAFARIPKMN[688]=["BINACLE",4,"Tough Claws","Sniper"];
    SAFARIPKMN[689]=["BARBARACLE",4,"Tough Claws","Sniper"];
    SAFARIPKMN[690]=["SKRELP",4,"Poison Point","Poison Touch"];
    SAFARIPKMN[691]=["DRAGALGE",4,"Poison Point","Poison Touch"];
    SAFARIPKMN[692]=["CLAUNCHER",4,"Mega Launcher","Mega Launcher"];
    SAFARIPKMN[693]=["CLAWITZER",4,"Mega Launcher","Mega Launcher"];
    SAFARIPKMN[694]=["HELIOPTILE",4,"Dry Skin","Sand Veil"];
    SAFARIPKMN[695]=["HELIOLISK",4,"Dry Skin","Sand Veil"];
    SAFARIPKMN[696]=["TYRUNT",1,"Strong Jaw","Strong Jaw"];
    SAFARIPKMN[697]=["TYRANTRUM",1,"Strong Jaw","Strong Jaw"];
    SAFARIPKMN[698]=["AMAURA",1,"Refrigerate","Refrigerate"];
    SAFARIPKMN[699]=["AURORUS",1,"Refrigerate","Refrigerate"];
    SAFARIPKMN[700]=["SYLVEON",1,"Cute Charm","Cute Charm"];
    SAFARIPKMN[701]=["HAWLUCHA",4,"Unburden","Limber"];
    SAFARIPKMN[702]=["DEDENNE",4,"Cheek Pouch","Pickup"];
    SAFARIPKMN[703]=["CARBINK",-1,"Clear Body","Clear Body"];
    SAFARIPKMN[704]=["GOOMY",4,"Sap Sipper","Hydration"];
    SAFARIPKMN[705]=["SLIGGOO",4,"Sap Sipper","Hydration"];
    SAFARIPKMN[706]=["GOODRA",4,"Sap Sipper","Hydration"];
    SAFARIPKMN[707]=["KLEFKI",4,"Prankster","Prankster"];
    SAFARIPKMN[708]=["PHANTUMP",4,"Nautral Cure","Frisk"];
    SAFARIPKMN[709]=["TREVENANT",4,"Nautral Cure","Frisk"];
    SAFARIPKMN[710]=["PUMPKABOO-S",4,"Pickup","Frisk"];
    SAFARIPKMN[711]=["GOURGEIST-S",4,"Pickup","Frisk"];
    SAFARIPKMN[712]=["BERGMITE",4,"Own Tempo","Ice Body"];
    SAFARIPKMN[713]=["AVALUGG",4,"Own Tempo","Ice Body"];
    SAFARIPKMN[714]=["NOIBAT",4,"Frisk","Infiltrator"];
    SAFARIPKMN[715]=["NOIVERN",4,"Frisk","Infiltrator"];
    SAFARIPKMN[716]=["XERNEAS",-1,"Fairy Aura","Fairy Aura"];
    SAFARIPKMN[717]=["YVELTAL",-1,"Dark Aura","Dark Aura"];
    SAFARIPKMN[718]=["ZYGARDE",-1,"Aura Break","Aura Break"];
    SAFARIPKMN[10004]=["WORMADAM-S",4,"Anticipation","Anticipation"];
    SAFARIPKMN[10005]=["WORMADAM-T",4,"Anticipation","Anticipation"];


    //Only executes one Zone at a time, depending on the Zone clicked in the menu.
   var zone_limit;
   var roll = Math.floor(Math.random()*1001);
   var nothing_roll = Math.floor(Math.random()*11);
   
   if (zone_val == 1) {
        zone_limit = Grassland.length;
        //Zone limit is the number of PokÃ©mon lurking in said zone.
        while (roll > (zone_limit)) {
            //Rolls from 1-1000 if the roll exceeds the limit, and continues to do so until a suitable roll is found.
            roll = Math.floor(Math.random()*1001);
        }

        pkmn = Grassland[roll];
        
    }
    if (zone_val == 2) {
        zone_limit = Forest.length;
        while (roll > zone_limit) {
            roll = Math.floor(Math.random()*1001);
        }

        pkmn = Forest[roll];
        
   }
    if (zone_val == 3) {
        zone_limit = Water_Edge.length;
        while (roll > zone_limit) {
            roll = Math.floor(Math.random()*1001);
        }

        pkmn = Water_Edge[roll];
    }
    if (zone_val == 4) {
        zone_limit = Sea.length;
        while (roll > zone_limit) {
            roll = Math.floor(Math.random()*1001);
        }

        pkmn = Sea[roll];
    }
    if (zone_val == 5) {
        zone_limit = Cave.length;
        while (roll > zone_limit) {
            roll = Math.floor(Math.random()*1001);
        }

        pkmn = Cave[roll];
    }
    if (zone_val == 6) {
        zone_limit = Mountain.length;
        while (roll > zone_limit) {
            roll = Math.floor(Math.random()*1001);
        }

        pkmn = Mountain[roll];
    }
    if (zone_val == 7) {
        zone_limit = Rough_Terrain.length;
        while (roll > zone_limit) {
            roll = Math.floor(Math.random()*1001);
        }

        pkmn = Rough_Terrain[roll];
    }
    if (zone_val == 8) {
        zone_limit = Urban.length;
        while (roll > zone_limit) {
            roll = Math.floor(Math.random()*1001);
        }
        pkmn = Urban[roll];
    }	
	
    done_species = SAFARIPKMN[pkmn][0];

    //Genders are stored as integers. When placed over 8, it is the liklihood of the PokÃ©mon being female.
    gender_ratio = (SAFARIPKMN[pkmn][1] / 8 * 10000);
    if (gender_roll > gender_ratio) {
        done_gender = "[color=blue]M[/color]";
    }
    if (gender_roll <= gender_ratio) {
        done_gender = "[color=red]F[/color]";
    }
    if (gender_ratio < 0) {
        done_gender = "[color=gray]X[/color]";
    }

    //Sets the Ability to the 2nd one, unless rolled for 1.
    done_ability = SAFARIPKMN[pkmn][3];

    if (ability_roll == 1) {
        done_ability = SAFARIPKMN[pkmn][2];
    }

    //Initally sets a failed shiny, but an if statement will overwrite it, should it ever occur.
	var i = "i"
	
    done_shiny = " ";
    if (shiny_roll == 4096) {
        done_shiny = " | [URL=\"http://bulbapedia.bulbagarden.net/wiki/Shiny_pokemon\"][img]http://archives.bulbagarden.net/media/upload/3/3d/Shiningsymbol.gif[/img][/URL] ";
		var i = "s"
    }
	
    //Shows work for easy copypasta for Rangers


    //Makes sure the sprite from PokeCheck's server displays properly
    var pkmns = pkmn;
    if (pkmn < 100) {
        if (pkmn < 10) {
            pkmns = "00"+pkmn;
        }
        pkmns = "0"+pkmn;
    }
	
	document.safari.desc.value= "[CENTER]\n[img]http://sprites.pokecheck.org/"+ i +"/"+ pkmns +".gif[/img]\n[b]A Wild "+ done_species +" appeared![/b]\n[ "+ done_gender +" | "+ done_ability +""+done_shiny+"][/CENTER]\n\nWhat will you do?\n\n> Attack, Use Item, Throw Ball (1 Safari Point each)\n> Flee (2 Safari Points)\n> Exit Safari Zone (30 Safari Points)\n\nYou have XXX Safari Points remaining." + "\n\nSpecies rolled " + roll + " out of the " + zone_limit + " possibilities for this area of the Safari Zone.\n" + "Gender rolled " + gender_roll + ", where anything less than or equal to " + gender_ratio + " results in " + done_species + " being female.\n" + "Ability rolled " + ability_roll + ", where rolling 1 gives " + done_species + " the ability " + SAFARIPKMN[pkmn][2] + " as opposed to " + SAFARIPKMN[pkmn][3] + " for rolling 2.\n" + "Shininess rolled " + shiny_roll + ", where anything less than 4096 results in the Pokemon not being Shiny.";

    //If an egg is rolled....
    if (pkmn == 0){
    document.safari.desc.value = "[CENTER]You found an egg!\n\n[img]http://veekun.com/dex/media/black-white/egg.png[/img]\n\nWhat would you like to do?[/CENTER]\n\n[B][U]OPTIONS[/U][/B]:\n1- Use your Incubator and take it home!\n2- Leave it behind...\n\n[I]You have XXX Safari Points left.[/I]" + "\n\nSpecies rolled " + roll + " out of the " + Grassland.length + " possibilities for this area of the Safari Zone.\n";
    }

    //There is a 1% chance of running into nothing...
    if (nothing_roll == 1){
    document.safari.desc.value = 
    "Your luck is certainly against you - you were unsuccessful in finding a PokÃ©mon here!\n\n"+
    "What will you do?\n"+
    "> Move on (0 Safari Points)\n> Use Item (1 Safari Point)\n> Leave the Zone (All Safari Points)"
    }
}
