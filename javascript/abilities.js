// import all properties that exist
const allProperties = ["CD", "ICD", "Gauge", "Diameter\/Width", "Shape", "Element", "Blunt",];
// exclude focalors from being the correct answer
const abilitiesToExclude = ["FOCALORSSkill", "FOCALORSBurst"]
// import abilities
const abilities = 
    {"AlbedoSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Talent_Abiogenesis_Solar_Isotoma.png",
    "CD": "4s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "6.8m",
    "Shape": "Sphere",
    "Element": "Geo",
    "Weapon": "Sword",
    "Blunt": "Yes"
    },
    "AlbedoBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Talent_Rite_of_Progeniture_Tectonic_Tide.png",
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m, 6m",
    "Shape": "Cone, Sphere",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "AlhaithamSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Talent_Universality_An_Elaboration_on_Form.png",
    "CD": "18s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "11m , 8m , 7m , 4.5m",
    "Shape": " Box, Cylinder, Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "AlhaithamBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/0/08/Talent_Particular_Field_Fetters_of_Phenomena.png",
    "CD": "18s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "13.6m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "AloySkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Talent_Frozen_Wilds.png",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "AloyBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Talent_Prophecies_of_Dawn.png",
    "CD": "12s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "13m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "AmberSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Talent_Explosive_Puppet.png",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "6m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "AmberBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Talent_Fiery_Rain.png",
    "CD": "12s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "4m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "AratakiIttoSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Talent_Masatsu_Zetsugi_Akaushi_Burst%21.png",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "AratakiIttoBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/50/Talent_Royal_Descent_Behold%2C_Itto_the_Evil%21.png",
    "CD": "18s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Geo",
    "Blunt": "No"
    },
    "BaizhuSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Talent_Universal_Diagnosis.png",
    "CD": "10s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "1.2m",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    }, 
    "BaizhuBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/1b/Talent_Holistic_Revivification.png",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "3m",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "BarbaraSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/95/Talent_Let_the_Show_Begin%E2%99%AA.png",
    "CD": "32s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "BarbaraBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Talent_Shining_Miracle%E2%99%AA.png",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "BeidouSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/92/Talent_Tidecaller.png",
    "CD": "7.5s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "16m, 14m, 12m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "Yes"
    },
    "BeidouBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Talent_Stormbreaker.png",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "4u, 1u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "BennettSkillPress": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Talent_Passion_Overload.png",
    "CD": "5s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "5m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "BennettSkillHold1": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Talent_Passion_Overload.png",
    "CD": "7.5s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "5m, 3m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "BennettSkillHold2": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Talent_Passion_Overload.png",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m, 4m, 5m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "BennettBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a2/Talent_Fantastic_Voyage.png",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "CandaceSkillPress": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Talent_Sacred_Rite_Heron%27s_Sanctum.png",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "Yes"
    },
    "CandaceSkillHold": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Talent_Sacred_Rite_Heron%27s_Sanctum.png",
    "CD": "9s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "Yes"
    },
    "CandaceBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Talent_Sacred_Rite_Wagtail%27s_Tide.png",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "ChongyunSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Talent_Spirit_Blade_Chonghua%27s_Layered_Frost.png",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "5m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "ChongyunBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Talent_Spirit_Blade_Cloud-Parting_Star.png",
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "ColleiSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/8/88/Talent_Floral_Brush.png",
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "ColleiBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/2e/Talent_Trump-Card_Kitty.png",
    "CD": "15s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "11m, 8m",
    "Shape": "Cylinder, Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "CynoSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Talent_Secret_Rite_Chasmic_Soulfarer.png",
    "CD": "3s, 7.5s",
    "ICD": "None, Special",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "Yes"
    },
    "CynoBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Talent_Sacred_Rite_Wolf%27s_Swiftness.png",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Electro",
    "Blunt": "Yes"
    },
    "DehyaSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/6/6b/Talent_Molten_Inferno.png",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 10m, 9m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "DehyaBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Talent_Leonine_Bite.png",
    "CD": "18s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "13m, 5m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "DilucSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/53/Talent_Searing_Onslaught.png",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m, 6m, 4.4m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "DilucBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/f5/Talent_Dawn.png",
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "2u",
    "Diameter\/Width": "16m",
    "Shape": "Box",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "DionaSkillPress": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Talent_Icy_Paws.png",
    "CD": "6s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "DionaSkillHold": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Talent_Icy_Paws.png",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "DionaBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/5/57/Talent_Signature_Mix.png",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "13m, 6m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "DoriSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Talent_Spirit-Warding_Lamp_Troubleshooter_Cannon.png",
    "CD": "9s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "2m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "DoriBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Talent_Alcazarzaray%27s_Exactitude.png",
    "CD": "20s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Box",
    "Element": "Electro",
    "Blunt": "No"
    },
    "EulaSkillPress": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/ae/Talent_Icetide_Vortex.png",
    "CD": "4s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "EulaSkillHold": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/ae/Talent_Icetide_Vortex.png",
    "CD": "10s",
    "ICD": "None, Standard",
    "Gauge": "1u",
    "Diameter\/Width": "11m, 7m",
    "Shape": "Cylinder, Sphere",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "EulaBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/a/af/Talent_Glacial_Illumination.png",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "16m, 13m",
    "Shape": "Cylinder, Sphere",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "FaruzanSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/46/Talent_Wind_Realm_of_Nasamjnin.png",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 6m",
    "Shape": "Cylinder, Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "FaruzanBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Talent_The_Wind%27s_Secret_Ways.png",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12.6m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "FischlSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Talent_Nightrider.png",
    "CD": "25s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "4m, 0.2m",
    "Shape": "Box, Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "FischlBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Talent_Midnight_Phantasmagoria.png",
    "CD": "15s",
    "ICD": "Special",
    "Gauge": "2u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "Yes, No"
    },
    "GanyuSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/d/d1/Talent_Trail_of_the_Qilin.png",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "GanyuBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Talent_Celestial_Shower.png",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "5m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "GorouSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/e6/Talent_Inuzaka_All-Round_Defense.png",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "GorouBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/f/f9/Talent_Juuga_Forward_Unto_Victory.png",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m, 7m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "HuTaoSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Talent_Guide_to_Afterlife.png",
    "CD": "16s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "HuTaoBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/1/11/Talent_Spirit_Soother.png",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "JeanSkill": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Talent_Gale_Blade.png",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "4m",
    "Shape": "Box",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "JeanBurst": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Talent_Dandelion_Breeze.png",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "KaedeharaKazuhaSkillPress": {
    "Image": "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Talent_Chihayaburu.png",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "KaedeharaKazuhaSkillHold": {
    "Image": "",
    "CD": "9s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "18m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "KaedeharaKazuhaBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "18m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "KaeyaSkill": {
    "Image": "",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "4m",
    "Shape": "Box",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "KaeyaBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "4m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "KamisatoAyakaSkill": {
    "Image": "",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "9m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "KamisatoAyakaBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m, 6m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "KamisatoAyatoSkill": {
    "Image": "",
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "KamisatoAyatoBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "KavehSkill": {
    "Image": "",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "KavehBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "KeqingSkill": {
    "Image": "",
    "CD": "7.5s",
    "ICD": "None, Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "6m, 5m, 3.2m",
    "Shape": "Cylinder, Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "KeqingBurst": {
    "Image": "",
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "16m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "KleeSkill": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "8m, 4m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "Yes, No"
    },
    "KleeBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "3m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "KujouSaraSkill": {
    "Image": "",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "KujouSaraBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 6m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "KukiShinobuSkill": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "Yes, No"
    },
    "KukiShinobuBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "LaylaSkill": {
    "Image": "",
    "CD": "12s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "5m, 1.6m",
    "Shape": "Cylinder, Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "LaylaBurst": {
    "Image": "",
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "3m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "LisaSkillPress": {
    "Image": "",
    "CD": "1s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "2m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "LisaSkillHold": {
    "Image": "",
    "CD": "16s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "20m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "LisaBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u, 0u",
    "Diameter\/Width": "14m, 2m",
    "Shape": "Cylinder, Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "MikaSkill": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "2.5m, 0.3m, 0.2m",
    "Shape": "Box",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "MikaBurst": {
    "Image": "",
    "CD": "18s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "MonaSkill": {
    "Image": "",
    "CD": "12s",
    "ICD": "None, Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "MonaBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "20m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "NahidaSkillPress": {
    "Image": "",
    "CD": "5s",
    "ICD": "Special",
    "Gauge": "1.5u, 1u",
    "Diameter\/Width": "9.2m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "NahidaSkillHold": {
    "Image": "",
    "CD": "6s",
    "ICD": "Special",
    "Gauge": "1.5u, 1u",
    "Diameter\/Width": "Big",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "NahidaBurst": {
    "Image": "",
    "CD": "13.5s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "NilouSkill": {
    "Image": "",
    "CD": "18s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "5.4m, 5m, 3.6m, 2.7m, 1.75m",
    "Shape": "Box, Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "NilouBurst": {
    "Image": "",
    "CD": "18s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "NingguangSkill": {
    "Image": "",
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "NingguangBurst": {
    "Image": "",
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "NoelleSkill": {
    "Image": "",
    "CD": "24s",
    "ICD": "Standard",
    "Gauge": "2u",
    "Diameter\/Width": "4m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "NoelleBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "13m, 8m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "QiqiSkill": {
    "Image": "",
    "CD": "30s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "5m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "QiqiBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "14m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "RaidenShogunSkill": {
    "Image": "",
    "CD": "10s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m, 8m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "RaidenShogunBurst": {
    "Image": "",
    "CD": "18s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "13m",
    "Shape": "Box",
    "Element": "Electro",
    "Blunt": "No"
    },
    "RazorSkillPress": {
    "Image": "",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "4.8m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "RazorSkillHold": {
    "Image": "",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "10m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "Yes"
    },
    "RazorBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "10m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "Yes, No"
    },
    "RosariaSkill": {
    "Image": "",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "5.6m, 2m",
    "Shape": "Box, Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "RosariaBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "13m, 12m, 7m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "SangonomiyaKokomiSkill": {
    "Image": "",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "SangonomiyaKokomiBurst": {
    "Image": "",
    "CD": "18s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "10m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "SayuSkill": {
    "Image": "",
    "CD": "6s-11s"
    ,
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "5m, 6m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "SayuBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "9m, 7m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "ShenheSkillPress": {
    "Image": "",
    "CD": "10s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "ShenheSkillHold": {
    "Image": "",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "8m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "ShenheBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "14m, 8m",
    "Shape": "Cone, Cylinder",
    "Element": "Cryo",
    "Blunt": "Yes, No"
    },
    "ShikanoinHeizouSkill": {
    "Image": "",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "4m, 3m",
    "Shape": "Box",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "ShikanoinHeizouBurst": {
    "Image": "",
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 5m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "SucroseSkill": {
    "Image": "",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "SucroseBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "TartagliaSkill": {
    "Image": "",
    "CD": "6s-36s, 45s"
    ,
    "ICD": "None",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "6m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "Yes, No"
    },
    "TartagliaBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "16m, 12m, 10m",
    "Shape": "Cylinder, Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "ThomaSkill": {
    "Image": "",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "ThomaBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "8m, 4.5m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "TighnariSkill": {
    "Image": "",
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "TighnariBurst": {
    "Image": "",
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "2m",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "AnemoTravelerSkillPress": {
    "Image": "",
    "CD": "5s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cone",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "AnemoTravelerSkillHold": {
    "Image": "",
    "CD": "8s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cone",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "AnemoTravelerBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "3m, 2.5m",
    "Shape": "Box",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "DendroTravelerSkill": {
    "Image": "",
    "CD": "8s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6.5m",
    "Shape": "Cone",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "DendroTravelerBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "13m, 8m, 4m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "ElectroTravelerSkill": {
    "Image": "",
    "CD": "13.5s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Electro",
    "Blunt": "No"
    },
    "ElectroTravelerBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m, 4m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "Ye, No"
    },
    "GeoTravelerSkill": {
    "Image": "",
    "CD": "8s",
    "ICD": "Standard",
    "Gauge": "2u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "GeoTravelerBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "VentiSkillPress": {
    "Image": "",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "6m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "VentiSkillHold": {
    "Image": "",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "VentiBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 8m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "WandererSkill": {
    "Image": "",
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "WandererBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "XianglingSkill": {
    "Image": "",
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "5m",
    "Shape": "Cone",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "XianglingBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard, None",
    "Gauge": "1u",
    "Diameter\/Width": "5m, 6m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "XiaoSkill": {
    "Image": "",
    "CD": "10s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "1.6m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "XiaoBurst": {
    "Image": "",
    "CD": "18s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "XingqiuSkill": {
    "Image": "",
    "CD": "21s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m, 3.5m",
    "Shape": "Box, Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "XingqiuBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "XinyanSkill": {
    "Image": "",
    "CD": "18s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes, No"
    },
    "XinyanBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m, 6m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "YaeMikoSkill": {
    "Image": "",
    "CD": "4s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "YaeMikoBurst": {
    "Image": "",
    "CD": "22s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "14m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "YanfeiSkill": {
    "Image": "",
    "CD": "9s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "YanfeiBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "13m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "YaoyaoSkill": {
    "Image": "",
    "CD": "15s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "4m",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "YaoyaoBurst": {
    "Image": "",
    "CD": "20s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "6m, 4m",
    "Shape": "Cylinder, Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "YelanSkill": {
    "Image": "",
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "YelanBurst": {
    "Image": "",
    "CD": "18s",
    "ICD": "Special",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "12m, 1m",
    "Shape": "Cylinder, Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "YoimiyaSkill": {
    "Image": "",
    "CD": "18s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "YoimiyaBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "12m, 6m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "YunJinSkillPress": {
    "Image": "",
    "CD": "9s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "No"
    },
    "YunJinSkillHold": {
    "Image": "",
    "CD": "9s",
    "ICD": "None",
    "Gauge": "4u, 2u",
    "Diameter\/Width": "16m, 12m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "No"
    },
    "YunJinBurst": {
    "Image": "",
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "ZhongliSkillPress": {
    "Image": "",
    "CD": "4s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "8m, 4m",
    "Shape": "Box, Sphere",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "ZhongliSkillHold": {
    "Image": "",
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "20m, 8m",
    "Shape": "Box, Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "ZhongliBurst": {
    "Image": "",
    "CD": "12s",
    "ICD": "None",
    "Gauge": "4u",
    "Diameter\/Width": "15m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },

    /* For fun */
    "FOCALORSSkill": {
    "Image": "",
    "CD": "10s",
    "ICD": "Special",
    "Gauge": "1u, 1.5u",
    "Diameter\/Width": "9m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "FOCALORSBurst": {
    "Image": "",
    "CD": "13.5s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Hydro",
    "Blunt": "No"
    },
}