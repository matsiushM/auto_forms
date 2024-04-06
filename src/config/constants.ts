export const GEARBOX = [
    {
        id: "1",
        title: "АКПП"
    },
    {
        id: "2",
        title: "МКПП"
    },
    {
        id: "3",
        title: "Робот"
    },
    {
        id: "4",
        title: "Вариатор"
    }
]
export const BODY_TYPE = [
    {
        id: "45010",
        title: "седан"
    },
    {
        id: "45011",
        title: "хэтчбек"
    },
    {
        id: "45012",
        title: "универсал"
    },
    {
        id: "45013",
        title: "купе"
    },
    {
        id: "45014",
        title: "кабриолет"
    },
    {
        id: "45015",
        title: "минивэн"
    },
    {
        id: "45016",
        title: "пикап"
    },
    {
        id: "51943",
        title: "фургон"
    },
    {
        id: "74461",
        title: "тягач"
    },
    {
        id: "76888",
        title: "лифтбек"
    },
    {
        id: "101528",
        title: "внедорожник"
    },
    {
        id: "119470",
        title: "бортовой"
    },
    {
        id: "147239",
        title: "автобус"
    },
    {
        id: "147240",
        title: "прицеп"
    },
    {
        id: "147241",
        title: "полуприцеп"
    },
    {
        id: "162322",
        title: "погрузчик"
    }
]
export const FUELS = [
    {
        id: "11365",
        title: "бензин",
        engineType: ["EcoBoost", "FSI", "GDi", "HPi", "i", "i-VTEC", "IDE", "JTS", "Kompr", "MPI", "TCE", "TFSI", "THP",
            "Ti", "TSI", "VTEC", "VTI", "VVT-i", "карб", "моно"]
    },
    {
        id: "11366",
        title: "дизель",
        engineType: ["BiTDi", "CDi", "CDT", "CDTi", "CRD", "CRDi", "cTDi", "D", "D-4D", "D-CAT", "D5", "DCi",
            "DDiS", "Di", "DiD", "DT", "DTH", "DTi", "DTL", "HDi", "HPI", "HPT", "i-CTDi", "i-DTEC", "JTD", "SDi", "TD",
            "TDCi", "TDDi", "TDi", "TDi PD", "TDS", "TiD", "VCDi", "XDI"]
    },
    {
        id: "12062",
        title: "гибрид",
        engineType: []
    },
    {
        id: "14453",
        title: "электро",
        engineType: []
    }
]
export const BRANDS = [
    {
        id: "9626",
        marka: 'Acura',
        models: ['CL', 'ILX', 'Integra', 'Legend', 'MDX', 'RDX', 'RL', 'RLX', 'RSX', 'SLX', 'TL', 'TLX', 'TSX', 'ZDX'],
    },
    {
        id: "9605",
        marka: 'Alfa Romeo',
        models: ['145', '146', '147', '155', '156', '159', '164', '166', '33', '75', '90', 'Brera',
            'Giulia', 'Giulietta', 'GT', 'GTV', 'MiTo', 'Spider', 'Stelvio'],
    },
    {
        id: "11791",
        marka: "Aprilia",
        models: ['Caponord', 'Dorsoduro', 'Mana', 'Pegaso', 'RS', 'RS4', 'RST', 'RSV', 'RSV4', 'SL', 'Tuono']
    },
    {
        id: "14665",
        marka: "Arctic Cat",
        models: ['1000', '700', 'WildCat']
    },
    {
        id: "9642",
        marka: "Asia",
        models: ['Retona', 'Roksta', 'Towner']
    },
    {
        id: "14724",
        marka: "Aston Martin",
        models: ['DB11', 'Vantage']
    },
    {
        id: "9646",
        marka: "Audi",
        models: ['100', '200', '80', '90', 'A1', 'A2', 'A3', 'A4', 'A4 Allroad', 'A5', 'A6', 'A6 Allroad',
            'A7', 'A8', 'Coupe', 'E-Tron', 'E-Tron GT', 'Q2', 'Q3', 'Q4 E-tron', 'Q5', 'Q7', 'Q8', 'Q8 e-tron',
            'Q8 Sportback e-tron', 'R8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'RS Q3', 'RS Q8', 'S1', 'S3', 'S4', 'S5',
            'S6', 'S7', 'S8', 'SQ5', 'SQ7', 'SQ8', 'TT', 'TT RS', 'TTS', 'V8']
    },
    {
        id: "14729",
        marka: "Austin",
        models: ['Metro', 'Montego']
    },
    {
        id: "15078",
        marka: "BAIC",
        models: ['206C']
    },
    {
        id: "11654",
        marka: "BAW",
        models: ['Fenix']
    },
    {
        id: "15067",
        marka: "Belgee",
        models: ['X50']
    },
    {
        id: "9684",
        marka: "Bentley",
        models: ['Arnage', 'Azure', 'Bentayga', 'Continental', 'Continental GT', 'Flying Spur', 'Mulsanne']
    },
    {
        id: "14941",
        marka: "Beta",
        models: ['RR']
    },
    {
        id: "9688",
        marka: "BMW",
        models: ['02 E10', '1', '1 E87/E81/E82/E88', '1 F20/F21', '1 F40', '2', '2 F22/F23', '2 F44', '2 F45/F46',
            '2 G42', '2 U06', '3', '3 E21', '3 E30', '3 E36', '3 E46', '3 E90/E91/E92/E93', '3 F30/F31/GT F34',
            '3 G20/G21', '4 F32/F33/GT F36', '4 G22/G23', '5', '5 E12', '5 E28', '5 E34', '5 E39', '5 E60/E61',
            '5 F10/F11/GT F07', '5 G30/G31', '5 G60', '6', '6 E24', '6 E63/E64', '6 F06/F12/F13', '6 G32', '7',
            '7 E23', '7 E32', '7 E38', '7 E65/E66', '7 F01/F02', '7 G11/G12', '7 G70', '8 E31', '8 G14/G15/G16',
            'i3', 'i4 G26', 'i8', 'iX1', 'iX3 G08', 'iX I20', 'M2 F87', 'M2 G87', 'M3', 'M4 F82/F83', 'M4 G82',
            'M5', 'M6', 'M8', 'X1', 'X1 E84', 'X1 F48', 'X1 U11', 'X2 F39', 'X3', 'X3 E83', 'X3 F25', 'X3 G01',
            'X3 M F97', 'X4', 'X4 F26', 'X4 G02', 'X4 M F98', 'X5', 'X5 E53', 'X5 E70', 'X5 F15', 'X5 G05',
            'X5 M E70', 'X5 M F85', 'X5 M F95', 'X6', 'X6 E71/E72', 'X6 F16', 'X6 G06', 'X6 M F86', 'X6 M F96',
            'X7 G07', 'Z1', 'Z3', 'Z4', 'Z8']
    },
    {
        id: "11973",
        marka: "BMW moto",
        models: ['C', 'F', 'GS', 'K', 'R', 'RS', 'S']
    },
    {
        id: "14520",
        marka: "Brilliance",
        models: ['V5']
    },
    {
        id: "14677",
        marka: "BRP",
        models: ['Can-Am Maverick', 'Can-Am Outlander', 'Can-Am Ryker', 'Can-Am Spyder', 'Sea-Doo']
    },
    {
        id: "9756",
        marka: "Buick",
        models: ['Century', 'Electra', 'Enclave', 'Encore', 'Encore GX', 'Envision', 'Excelle', 'Lacrosse', 'Le Sabre',
            'Park-Avenue', 'Rainier', 'Randevu', 'Regal', 'Riviera', 'Roadmaster', 'Skylark']
    },
    {
        id: "9768",
        marka: "BYD",
        models: ['Denza D9', 'Dolphin', 'E6', 'F0', 'F3', 'Han', 'Qin Plus', 'Seagull', 'Seal', 'Song EV', 'Song Plus',
            'Song Pro', 'Tang', 'Yuan', 'Yuan EV', 'Yuan Plus']
    },
    {
        id: "9771",
        marka: "Cadillac",
        models: ['ATS', 'BLS', 'Catera', 'CT4', 'CT5', 'CT6', 'CTS', 'Deville', 'DTS', 'Eldorado', 'Escalade', 'Evoq',
            'Lyriq', 'Seville', 'SRX', 'STS', 'XLR', 'XT4', 'XT5', 'XT6', 'XTS']
    },
    {
        id: "14778",
        marka: "Cagiva",
        models: ['Canyon', 'Raptor', 'River']
    },
    {
        id: "15072",
        marka: "Case",
        models: ['580 SR']
    },
    {
        id: "14782",
        marka: "CF Moto",
        models: ['650']
    },
    {
        id: "14370",
        marka: "Changan",
        models: ['CS35', 'CS55', 'CS75', 'CS95', 'Eado']
    },
    {
        id: "9788",
        marka: "Chery",
        models: ['A1', 'A13', 'A5', 'Amulet', 'Bonus', 'CrossEastar', 'Fora', 'Indis', 'Kimo', 'M11 (A3)', 'QQ',
            'QQ6 (S21)', 'Tiggo', 'Tiggo 4', 'Tiggo 5', 'Tiggo 7', 'Tiggo 7 Pro', 'Tiggo 8', 'Tiggo 8 Pro', 'Very']
    },
    {
        id: "9795",
        marka: "Chevrolet",
        models: ['Alero', 'Astra', 'Astro', 'Avalanche', 'Aveo', 'Beretta', 'Blazer', 'Bolt', 'Bolt EUV', 'Camaro',
            'Caprice', 'Captiva', 'Cavalier', 'Chevy Van', 'Cobalt', 'Colorado', 'Corsica', 'Corvette', 'Cruze',
            'Epica', 'Equinox', 'Evanda', 'Express', 'HHR', 'Impala', 'Kalos', 'Lacetti', 'Lanos', 'Lumina',
            'Lumina-APV', 'Malibu', 'Matiz', 'Metro', 'Niva', 'Nubira', 'Onix', 'Orlando', 'Prizm', 'Rezzo', 'S10',
            'Sens', 'Silverado', 'Sonic', 'Spark', 'Suburban', 'Tacuma', 'Tahoe', 'Tracker', 'TrailBlazer',
            'Transsport', 'Traverse', 'Trax', 'Uplander', 'Van', 'Venture', 'Viva', 'Volt']
    },
    {
        id: "9848",
        marka: "Chrysler",
        models: ['200', '300C', '300M', 'Aspen', 'Cirrus', 'Concorde', 'Crossfire', 'Daytona', 'Grand Voyager',
            'Intrepid', 'Le Baron', 'LHS', 'Neon', 'New-Yorker', 'Pacifica', 'PT-Cruiser', 'Saratoga', 'Sebring',
            'Shadow', 'Stratus', 'Town-Country', 'Viper', 'Vision', 'Voyager']
    },
    {
        id: "9874",
        marka: "Citroen",
        models: ['AX', 'Axel', 'Berlingo', 'BX', 'C1', 'C15', 'C2', 'C25', 'C3', 'C3 Aircross', 'C3 Picasso',
            'C3 Pluriel', 'C4', 'C4 Aircross', 'C4 Cactus', 'C4 Grand Picasso', 'C4 Picasso', 'C5', 'C5 Aircross',
            'C6', 'C8', 'C-Crosser', 'C-Elysee', 'CX', 'DS3', 'DS4', 'DS5', 'Evasion', 'GS', 'J5', 'Jumper', 'Jumpy',
            'Nemo', 'Picasso', 'Relay', 'Saxo', 'SpaceTourer', 'Xantia', 'XM', 'Xsara', 'Xsara Picasso', 'ZX']
    },
    {
        id: "14689",
        marka: "Claas",
        models: ['Jaguar', 'Lexion']
    },
    {
        id: "15113",
        marka: "Cupra",
        models: ['Ateca', 'Born', 'Formentor', 'Leon']
    },
    {
        id: "9907",
        marka: "Dacia",
        models: ['Dokker', 'Duster', 'Lodgy', 'Logan', 'Logan MCV Stepway', 'Nova', 'Sandero', 'Sandero Stepway',
            'Solenza']
    },
    {
        id: "9916",
        marka: "Daewoo",
        models: ['Damas', 'Espero', 'Evanda', 'Gentra', 'Kalos', 'Korando', 'Lacetti', 'Lanos', 'Leganza', 'Lublin',
            'Magnus', 'Matiz', 'Musso', 'Nexia', 'Nubira', 'Prince', 'Rezzo', 'Sens', 'Tacuma', 'Tico', 'Tosca',
            'Winstorm']
    },
    {
        id: "11444",
        marka: "DAF",
        models: ['400', '45', '95', 'CF', 'LF', 'XF']
    },
    {
        id: "9937",
        marka: "Daihatsu",
        models: ['Applause', 'Charade', 'Copen', 'Cuore', 'Feroza', 'Fourtrak', 'Gran Move', 'Materia', 'Mira',
            'Move', 'Rocky', 'Sirion', 'Sonica', 'Storia', 'Terios', 'Trevis', 'Wake', 'YRV']
    },
    {
        id: "9956",
        marka: "Datsun",
        models: ['mi-DO', 'on-DO']
    },
    {
        id: "14537",
        marka: "Dennis",
        models: ['Eagle', 'Elite']
    },
    {
        id: "9959",
        marka: "Dodge",
        models: ['Avenger', 'Caliber', 'Caravan', 'Challenger', 'Charger', 'Commander', 'Dakota', 'Dart', 'Daytona',
            'Durango', 'Grand Caravan', 'Intrepid', 'Journey', 'Magnum', 'Neon', 'Nitro', 'Ram', 'Sebring', 'Shadow',
            'Spirit', 'Sprinter', 'Stealth', 'Stratus', 'Viper']
    },
    {
        id: "9984",
        marka: "DongFeng",
        models: ['AX7', 'H30 Cross']
    },
    {
        id: "14377",
        marka: "DS",
        models: ['3', ' 3 Crossback', '4', '5', '7 Crossback']
    },
    {
        id: "11803",
        marka: "Ducati",
        models: ['1098', '1198', '1199', '750', '848', '899', '900', 'Diavel', 'Hypermotard', 'Hyperstrada', 'Monster',
            'Multistrada', 'Scrambler', 'ST', 'Streetfighter', 'Superbike', 'Super Sport']
    },
    {
        id: "14721",
        marka: "FAW",
        models: ['Vita']
    },
    {
        id: "9989",
        marka: "Ferrari",
        models: ['360', '458', '488', '599']
    },
    {
        id: "9991",
        marka: "Fiat",
        models: ['124 Spider', '500', '500e', '500L', '500X', 'Albea', 'Barchetta', 'Brava', 'Bravo', 'Cinquecento',
            'Coupe', 'Croma', 'Doblo', 'Ducato', 'Fiorino', 'Freemont', 'Fullback', 'Grande Punto', 'Idea', 'Linea',
            'Marea', 'Multipla', 'Palio', 'Panda', 'Punto', 'Qubo', 'Regata', 'Ritmo', 'Scudo', 'Sedici', 'Seicento',
            'Siena', 'Stilo', 'Strada', 'Talento', 'Tempra', 'Tipo', 'Ulysse', 'Uno']
    },
    {
        id: "10032",
        marka: "Ford",
        models: ['Aerostar', 'B-Max ', 'Bronco', 'Bronco Sport', 'C-Max', 'Contour', 'Cortina', 'Cougar', 'Courier',
            'Crown-Victoria', 'Econoline', 'Econovan', 'Ecosport', 'Edge', 'Escape', 'Escort', 'Excursion',
            'Expedition', 'Explorer', 'F', 'Fiesta', 'Flex', 'F-MAX', 'Focus', 'Freestar', 'Freestyle', 'Fusion',
            'Galaxy', 'Granada', 'Grand C-Max', 'Ka', 'Kuga', 'Maverick', 'Mondeo', 'Mustang', 'Mustang Mach-E',
            'Orion', 'Probe', 'Puma', 'Ranger', 'Scorpio', 'Sierra', 'S-Max', 'Taunus', 'Taurus', 'Thunderbird',
            'Tourneo', 'Tourneo Connect', 'Transit', 'Transit Connect', 'Transit Courier', 'Transit Custom', 'Windstar']

    },
    {
        id: "14484",
        marka: "Foton",
        models: ['BJ']
    },
    {
        id: "14529",
        marka: "Freightliner",
        models: ['FLB']
    },
    {
        id: "10081",
        marka: "Geely",
        models: ['Atlas', 'Atlas Pro', 'CK', 'Coolray', 'Emgrand', 'Emgrand 7', 'Emgrand EC7', 'Emgrand GT',
            'Emgrand X7', 'FC', 'GC6', 'GE', 'Geometry C', 'Geometry E', 'GS', 'LC Cross', 'MK', 'MK Cross',
            'Monjaro', 'Okavango', 'Otaka', 'SC7', 'Tugella']
    },
    {
        id: "12039",
        marka: "Genesis",
        models: ['G70', 'G80', 'G90', 'GV60', 'GV70', 'GV80']
    },
    {
        id: "10087",
        marka: "GMC",
        models: ['Acadia', 'Canyon', 'Envoy', 'Jimmy', 'Safari', 'Savana', 'Sierra', 'Sonoma', 'Suburban', 'Tayfun',
            'Terrain', 'Vandura', 'Yukon']
    },
    {
        id: "10101",
        marka: "Great-Wall",
        models: ['Coolbear', 'Deer', 'Florid', 'Hover', 'Hover H3', 'Hover H5', 'Hover H6', 'Pegasus', 'Peri', 'Safe',
            'Sailor', 'Wingle']
    },
    {
        id: "10112",
        marka: "Hafei",
        models: ['Brio', 'Minyi', 'Princip', 'Simbo']
    },
    {
        id: "14562",
        marka: "Haima",
        models: ['3', '7']
    },
    {
        id: "11812",
        marka: "Harley-Davidson",
        models: ['Dyna', 'Electra Glide', 'Pan America', 'Road Glide', 'Road King', 'Roadster', 'Softail', 'Sportster',
            'Street', 'Street Glide', 'Touring', 'Trike', 'V-Rod']
    },
    {
        id: "14395",
        marka: "Haval",
        models: ['F7', 'H2', 'H5', 'H6', 'H9', 'Jolion']
    },
    {
        id: "10116",
        marka: "Honda",
        models: ['Accord', 'City', 'Civic', 'Clarity', 'Concerto', 'Crosstour', 'CR-V', 'CR-X', 'CR-Z', 'Element',
            'eNS1', 'Fit', 'FR-V', 'HR-V', 'Insight', 'Integra', 'Jazz', 'Legend', 'Logo', 'Odyssey', 'Passport',
            'Pilot', 'Prelude', 'Ridgeline', 'S2000', 'Shuttle', 'S-MX', 'Stepwgn', 'Stream']
    },
    {
        id: "11822",
        marka: "Honda moto",
        models: ['CMX', 'CB', 'CBF', 'CBR', 'CBX', 'CR', 'CRF', 'CTX', 'Deauville', 'Dominator', 'FJS', 'Fury',
            'Gold Wing', 'Magna', 'MSX', 'NC', 'NSR', 'NSS', 'NT', 'NTV', 'NX', 'PC', 'SH', 'Shadow', 'Silver Wing',
            'SLR', 'ST', 'Transalp', 'Valkyrie', 'Varadero', 'VF', 'VFR', 'VT', 'VTR', 'VTX', 'XL', 'XR', 'XRV']
    },
    {
        id: "15051",
        marka: "Hongqi",
        models: ['E-HS3', 'E-HS9', 'E-QM5', 'H5', 'H6', 'H9', 'HQ9', 'HS3', 'HS5', 'HS7', 'L5', 'LS7']
    },
    {
        id: "14692",
        marka: "Hors",
        models: ['051', '052', '056']
    },
    {
        id: "10146",
        marka: "Hummer",
        models: ['H1', 'H2', 'H3']
    },
    {
        id: "14798",
        marka: "Hyosung",
        models: ['Aquila', 'GT']
    },
    {
        id: "10150",
        marka: "Hyundai",
        models: ['Accent', 'Amico', 'Aslan', 'Atos', 'Coupe', 'Creta', 'Dynasty', 'Elantra', 'Equus', 'Excel',
            'Galloper', 'Genesis', 'Getz', 'Grandeur', 'Grand Santa Fe', 'Grand Starex', 'H1', 'H100', 'H200',
            'HD', 'HD120', 'i10', 'i20', 'i30', 'i40', 'IONIQ', 'IONIQ 5', 'ix20', 'ix35', 'ix55', 'Kona', 'Lantra',
            'Libero', 'Matrix', 'Palisade', 'Pony', 'Porter', 'Santa Cruz', 'Santa Fe', 'Santamo', 'S Coupe',
            'Solaris', 'Sonata', 'Starex', 'Terracan', 'Tiburon', 'Trajet', 'Tucson', 'Veloster', 'Veracruz',
            'Verna', 'XG']
    },
    {
        id: "11518",
        marka: "IFA",
        models: ['W50']
    },
    {
        id: "14596",
        marka: "Indian",
        models: ['Chief', 'Chieftain', 'Chief Vintage', 'Scout']
    },
    {
        id: "10188",
        marka: "Infiniti",
        models: ['EX', 'FX', 'G', 'I', 'J', 'JX', 'M', 'Q', 'Q30', 'Q40', 'Q45', 'Q50', 'Q60', 'Q70', 'QX', 'QX30',
            'QX4', 'QX50', 'QX55', 'QX56', 'QX60', 'QX70', 'QX80']
    },
    {
        id: "14661",
        marka: "Innocenti",
        models: ['Elba']
    },
    {
        id: "14749",
        marka: "International",
        models: ['9800']
    },
    {
        id: "10207",
        marka: "Iran-Khodro",
        models: ['Samand']
    },
    {
        id: "10209",
        marka: "Isuzu",
        models: ['Axiom', 'Campo', 'D-max', 'Elf', 'Gemini', 'Midi', 'MU-7', 'Rodeo', 'Trooper']
    },
    {
        id: "11349",
        marka: "Iveco",
        models: ['Daily', 'Eurocargo', 'Eurostar', 'Eurotech', 'EuroTrakker', 'Magirus 80-13', 'Stralis', 'S-Way',
            'Trakker', 'Turbo Daily', 'Turbostar']
    },
    {
        id: "10218",
        marka: "JAC",
        models: ['HFC', 'Rain', 'Refain']
    },
    {
        id: "10221",
        marka: "Jaguar",
        models: ['E-Pace', 'F-Pace', 'F-Type', 'I-Pace', 'S-Type', 'XE', 'XF', 'XJ', 'XJR', 'XJS', 'XK', 'XKR',
            'X-Type']
    },
    {
        id: "11855",
        marka: "Jawa",
        models: ['350', '638']
    },
    {
        id: "14481",
        marka: "JCB",
        models: ['3CX', '530-70', 'JS130']
    },
    {
        id: "10230",
        marka: "Jeep",
        models: ['Cherokee', 'Commander', 'Compass', 'Gladiator', 'Grand Cherokee', 'Grand Wagoneer', 'Liberty',
            'Patriot', 'Renegade', 'Wagoneer', 'Wrangler']
    },
    {
        id: "15012",
        marka: "John Deer",
        models: ['8420', '8430']
    },
    {
        id: "11857",
        marka: "Kawasaki",
        models: ['EN', 'ER', 'EX', 'GPX', 'GPZ', 'GT', 'GTR', 'J', 'KLE', 'KLR', 'KLX', 'KX', 'KZ', 'Ninja', 'Versys',
            'VN', 'Voyager', 'Vulcan', 'W', 'Z', 'ZG', 'ZL', 'ZR', 'ZRX', 'ZX', 'ZX-6R', 'ZXR', 'ZZR']
    },
    {
        id: "10240",
        marka: "Kia",
        models: ['Avella', 'Besta', 'Bongo', 'Borrego', 'Cadenza', 'Carens', 'Carnival', 'Ceed', 'Cerato', 'Clarus',
            'EV6', 'Forte', 'Joice', 'K2500', 'K2700', 'K5', 'K900', 'Magentis', 'Mentor', 'Mohave', 'Niro', 'Opirus',
            'Optima', 'Picanto', 'Potentia', 'Pregio', 'Pride', 'Proceed', 'Quoris', 'Ray', 'Retona', 'Rio',
            'Rio X-Line', 'Sedona', 'Seltos', 'Sephia', 'Shuma', 'Sorento', 'Sorento Prime', 'Soul', 'Spectra',
            'Sportage', 'Stinger', 'Stonic', 'Telluride', 'Venga', 'XCeed']
    },
    {
        id: "14607",
        marka: "Kogel",
        models: ['SVKT-24']
    },
    {
        id: "14609",
        marka: "Krone",
        models: ['SD']
    },
    {
        id: "11882",
        marka: "KTM",
        models: ['1090', '1190', '125', '1290', '200', '250', '350', '390', '450', '525', '640', '690', '990',
            'Adventure', 'Duke', 'Hard Enduro', 'RC', 'SM', 'Superbike', 'Supermoto']
    },
    {
        id: "11010",
        marka: "Lada (ВАЗ)",
        models: ['2101', '2102', '2103', '2104', '2105', '2106', '2107', '2108', '2109', '21099', '2110', '2111',
            '2112', '2113', '2114', '2115', '21213', '2121 Niva', '2123', '4x4', 'Granta', 'Kalina', 'Largus', 'Priora',
            'Vesta', 'X-Ray', 'Ока']
    },
    {
        id: "14909",
        marka: "Lamborghini",
        models: ['Huracan', 'Urus']
    },
    {
        id: "10271",
        marka: "Lancia",
        models: ['Dedra', 'Delta', 'Kappa', 'Lybra', 'Musa', 'Phedra', 'Prisma', 'Thema', 'Thesis', 'Y10',
            'Ypsilon', 'Zeta']
    },
    {
        id: "10285",
        marka: "Land-Rover",
        models: ['Defender', 'Discovery', 'Discovery Sport', 'Evoque', 'Freelander', 'Range Rover',
            'Range Rover Sport', 'Range Rover Velar']
    },
    {
        id: "10335",
        marka: "LDV",
        models: ['Convoy', 'Maxus', 'Pilot']
    },
    {
        id: "10291",
        marka: "Lexus",
        models: ['CT', 'ES', 'GS', 'GX', 'HS', 'IS', 'LC', 'LS', 'LX', 'NX', 'RC', 'RX', 'SC', 'UX']
    },
    {
        id: "10323",
        marka: "Lifan",
        models: ['Breez', 'Cebrium', 'Celliya', 'MayWay', 'Murman', 'Myway', 'Smily', 'Solano', 'X50', 'X60', 'X70']
    },
    {
        id: "14989",
        marka: "Ligier",
        models: ['X-Too']
    },
    {
        id: "10327",
        marka: "Lincoln",
        models: ['Aviator', 'Continental', 'Corsair', 'LS', 'Mark', 'MKC', 'MKS', 'MKT', 'MKX', 'MKZ', 'Nautilus',
            'Navigator', 'Towncar']
    },
    {
        id: "15029",
        marka: "LiXiang",
        models: ['L7', 'L8', 'L9', 'One']
    },
    {
        id: "14755",
        marka: "Lublin",
        models: ['2', '3']
    },
    {
        id: "14420",
        marka: "Mahindra",
        models: ['2', '3']
    },
    {
        id: "11520",
        marka: "MAN",
        models: ['10150', '14192', '14232', '14264', '18264', '18272', '18285', '18440', '19364', '19372', '19403',
            '19464', '362', '8100', '8150', '8163', 'F2000', 'F90', 'G90', 'L2000', 'LE', 'Lions City', 'M90', 'SG',
            'SU', 'TGA', 'TGE', 'TGL', 'TGM', 'TGS', 'TGX']
    },
    {
        id: "10339",
        marka: "Maserati",
        models: ['3200 GT', 'Coupe', 'Ghibli', 'GranTurismo', 'Levante', 'Quattroporte', 'Spyder']
    },
    {
        id: "14383",
        marka: "Maybach",
        models: ['57', '62']
    },
    {
        id: "10345",
        marka: "Mazda",
        models: ['121', '2', '3', '323', '323C', '323F', '323P', '323S', '3 MPS', '5', '6', '626', '6 MPS', '929',
            'Atenza', 'AZ-Wagon', 'B2500', 'Bongo', 'BT-50', 'Capella', 'CX3', 'CX30', 'CX5', 'CX50', 'CX60', 'CX7',
            'CX9', 'Demio', 'E2200', 'Familia', 'Millenia', 'MPV', 'MX3', 'MX-30', 'MX5', 'MX6', 'Premacy', 'Proceed',
            'Protege', 'RX7', 'RX8', 'Tribute', 'Xedos 6', 'Xedos 9']
    },
    {
        id: "10376",
        marka: "Mercedes",
        models: ['100', '1113', '1117', '1317', '1735', '1834', '1838', '1840', '190 W201', '207', '208', '210',
            '2538', '308', '310', '407', '408', '409', '410', '508', '608', '609', '611', '709', '711', '809', '811',
            '813', '814', '814D', '817', 'A', 'Accelo', 'Actros', 'AMG GT', 'Arocs', 'Atego', 'A W168', 'A W169',
            'A W176', 'A W177', 'Axor', 'B', 'B W245', 'B W246', 'B W247', 'C', 'Citan', 'Citaro', 'CL', 'CLA',
            'CLA C117', 'CLA C118', 'CLC', 'CLK', 'CLK W208', 'CLK W209', 'CLS', 'CLS C257', 'CLS W218', 'CLS W219',
            'CL W140', 'CL W215', 'CL W216', 'CL W217', 'C W202', 'C W203', 'C W204', 'C W205', 'C W206', 'E',
            'E C207', 'Econic', 'EQC N293', 'EQE V295', 'EQS SUV X296', 'EQS V297', 'E W114', 'E W115', 'E W123',
            'E W124', 'E W210', 'E W211', 'E W212', 'E W213', 'E W214', 'E W238', 'G', 'GL', 'GLA H247', 'GLA X156',
            'GLB X247', 'GLC', 'GLC Coupe', 'GLE', 'GLE Coupe', 'GLE W166', 'GLE W167', 'GLK X204', 'GLS X166',
            "GLS X167", "GL X164", "GL X166", "G W460", "G W463", "Metris", "ML", "ML W163", "ML W164", "ML W166",
            "NG", "O303", "O405", "O530", "R", "S", "SK", "SL", "SLC R172", "SLK", "SLK R170", "SLK R171", "SLK R172",
            "SLR", "SL R107", "SL R129", "SL R230", "SL R231", "SL R232", "SLS", "Sprinter", "Sprinter Classic",
            "S W116", "S W126", "S W140", "S W220", "S W221", "S W222", "S W223", "T1", "T2", "Unimog", "Vaneo",
            "Vario", "Viano", "Vito", "Vito W447", "Vito W638", "Vito W639", "X", "Zetros"],
    },
    {
        id: "10428",
        marka: "Mercury",
        models: ['Capri', 'Cougar', 'Grand Marquis', 'Maradeur', 'Mariner', 'Montego', 'Monterey', 'Mountaineer',
            'Mystique', 'Sable', 'Topaz', 'Tracer', 'Willager']
    },
    {
        id: "10442",
        marka: "MG",
        models: ['3', '6', 'F', 'MGB', 'MGF', 'TF', 'ZR', 'ZS', 'ZT', 'ZT-T']
    },
    {
        id: "14765",
        marka: "Microcar",
        models: ['F8C', 'M8']
    },
    {
        id: "10446",
        marka: "Mini",
        models: ['Cabrio', 'Clubman', 'Cooper', 'Countryman', 'Coupe', 'One', 'Paceman']
    },
    {
        id: "11968",
        marka: "Minsk",
        models: ['C4 250', 'C4 300', 'D4 150', 'R250', 'ММВЗ']
    },
    {
        id: "10453",
        marka: "Mitsubishi",
        models: ['3000GT', 'ASX', 'Canter', 'Carisma', 'Challenger', 'Colt', 'Debonair', 'Delica', 'Diamante',
            'Eclipse', 'Eclipse Cross', 'Endeavor', 'FTO', 'Fuso Canter', 'Galant', 'Grandis', 'i', 'i-MiEV', 'L200',
            'L300', 'L400', 'Lancer', 'Lancer Evolution', 'Mirage', 'Montero', 'Montero Sport', 'Outlander',
            'Outlander Sport', 'Pajero', 'Pajero Pinin', 'Pajero Sport', 'RVR', 'Sigma', 'Space Gear', 'Space Runner',
            'Space Star', 'Space Wagon']
    },
    {
        id: "14809",
        marka: "Moto Guzzi",
        models: ['Breva', 'California', 'Griso', 'MC 750 T']
    },
    {
        id: "14813",
        marka: "MV Agusta Motorcycle",
        models: ['Brutale']
    },
    {
        id: "11650",
        marka: "Neoplan",
        models: ['216', 'N116']
    },
    {
        id: "15074",
        marka: "New Holland",
        models: ['LB110']
    },
    {
        id: "10486",
        marka: "Nissan",
        models: ['100NX', '200SX', '350Z', '370Z', 'AD', 'Almera', 'Almera Classic', 'Almera Tino', 'Altima', 'Armada',
            'Atleon', 'Bassara', 'Bluebird', 'Cabstar', 'Cefiro', 'Cherry', 'Cube', 'Elgrand', 'Expert', 'Frontier',
            'GT-R', 'Interstar', 'Juke', 'Kicks', 'Kubistar', 'L50', 'Largo', 'Laurel', 'Leaf', 'Maxima', 'Micra',
            'Murano', 'Navara', 'Note', 'NP300', 'NP3000', 'NV200', 'NV300', 'NV400', 'Pathfinder', 'Patrol',
            'Pick-Up', 'Pixo', 'Prairie', 'Presea', 'Primastar', 'Primera', 'Pulsar', 'Qashqai', 'Qashqai+2', 'Quest',
            'Rogue', 'Rogue Sport', 'Sentra', 'Serena', 'Silvia', 'Skyline', 'Sunny', 'Teana', 'Terrano', 'Tiida',
            'Titan', 'Trade', 'Urvan', 'Vanette', 'Versa', 'X-Terra', 'X-Trail']
    },
    {
        id: "10540",
        marka: "Oldsmobile",
        models: ['Achieva', 'Alero', 'Aurora', 'Bravada', 'Cutlass', 'Silhouette', 'Toronado']
    },
    {
        id: "10548",
        marka: "Opel",
        models: ['Adam', 'Agila', 'Ampera', 'Antara', 'Arena', 'Ascona', 'Astra', 'Calibra', 'Cascada', 'Combo',
            'Commodore', 'Corsa', 'Crossland X', 'Frontera', 'Grandland X', 'GT', 'Insignia', 'Kadett', 'Karl',
            'Manta', 'Meriva', 'Mokka', 'Monterey', 'Movano', 'Omega', 'Rekord', 'Senator', 'Signum', 'Sintra',
            'Speedster', 'Tigra', 'Vectra', 'Vita', 'Vivaro', 'Zafira', 'Zafira Life']
    },
    {
        id: "14515",
        marka: "Perodua",
        models: ['Kelisa']
    },
    {
        id: "10577",
        marka: "Peugeot",
        models: ['1007', '106', '107', '108', '2008', '205', '206', '207', '207CC', '208', '3008', '301', '305', '306',
            '307', '307CC', '308', '308CC', '309', '4007', '4008', '405', '406', '406 Coupe', '407', '407 Coupe',
            '408', '5008', '505', '508', '605', '607', '806', '807', 'Bipper', 'Boxer', 'Expert', 'J5', 'Partner',
            'RCZ', 'Rifter', 'Traveller']
    },
    {
        id: "14815",
        marka: "Peugeot moto",
        models: ['Satelis', 'Speedfight']
    },
    {
        id: "14818",
        marka: "Piaggio",
        models: ['Fly', 'MP3', 'TPH', 'X8']
    },
    {
        id: "10613",
        marka: "Plymouth",
        models: ['Acclaim', 'Breeze', 'Colt', 'Grand-Voyager', 'Laser', 'Neon', 'Prouler', 'Reliant ', 'Voyager']
    },
    {
        id: "14709",
        marka: "Polaris",
        models: ['Sportsman 850']
    },
    {
        id: "14981",
        marka: "Polestar",
        models: ['1', '2']
    },
    {
        id: "10625",
        marka: "Pontiac",
        models: ['Aztek', 'Fiero', 'Firebird', 'G5', 'G6', 'Grand Am', 'Grand Prix', 'Montana', 'Trans-Sport', 'Vibe']
    },
    {
        id: "10643",
        marka: "Porsche",
        models: ['911', '924', 'Boxster', 'Cayenne', 'Cayman', 'Macan', 'Panamera', 'Taycan']
    },
    {
        id: "10656",
        marka: "Proton",
        models: ['300', '400', 'Gen', 'Persona', 'Satria', 'Wira']
    },
    {
        id: "15007",
        marka: "Racer",
        models: ['Ranger']
    },
    {
        id: "14997",
        marka: "RAM",
        models: ['1500', 'ProMaster City']
    },
    {
        id: "12025",
        marka: "Ravon",
        models: ['Gentra', 'Matiz', ' Nexia R3', 'R2', 'R4']
    },
    {
        id: "10667",
        marka: "Renault",
        models: ['11', '19', '21', '25', '5', '9', 'Arkana', 'Avantime', 'C', 'Captur', 'Clio', 'Dokker', 'Duster',
            'Espace', 'Express', 'Fluence', 'Gama', 'Grand Espace', 'Grand Modus', 'Grand Scenic', 'Kadjar', 'Kangoo',
            'Kaptur', 'Kerax', 'Koleos', 'Laguna', 'Latitude', 'Lodgy', 'Logan', 'Logan Stepway', 'Magnum', 'Major',
            'Manager', 'Mascott', 'Master', 'Maxity', 'Megane', 'Messenger', 'Midliner', 'Midlum', 'Modus', 'Premium',
            'Rapid', 'Safrane', 'Sandero', 'Sandero Stepway', 'Scenic', 'Scenic RX4', 'Symbol', 'T', 'Talisman',
            'Trafic', 'Twingo', 'Vel Satis', 'ZOE']
    },
    {
        id: "15090",
        marka: "Rivian",
        models: ['R1S', 'R1T']
    },
    {
        id: "15023",
        marka: "Roewe",
        models: ['Ei5', 'ERX5']
    },
    {
        id: "10710",
        marka: "Rolls-Royce",
        models: ['Cullinan', 'Dawn', 'Ghost', 'Phantom', 'Wraith']
    },
    {
        id: "10713",
        marka: "Rover",
        models: ['100', '200', '214', '216', '25', '400', '414', '416', '420', '45', '600', '620', '75', '800',
            'Metro', 'Montego', 'Streetwise']
    },
    {
        id: "14950",
        marka: "Royal Enfield",
        models: ['MC Himalayan', 'MC Interceptor 650']
    },
    {
        id: "10743",
        marka: "Saab",
        models: ['900', '9000', '9-2X', '9-3', '9-5', '9-6', '9-7X']
    },
    {
        id: "14578",
        marka: "Samsung",
        models: ['QM3', 'QM5', 'QM6', 'SM3', 'SM5', 'SM6', 'SM7']
    },
    {
        id: "10752",
        marka: "Saturn",
        models: ['Aura', 'Ion', 'Outlook', 'Relay', 'SC', 'Vue']
    },
    {
        id: "11534",
        marka: "Scania",
        models: ['113', '114', '124', '143', '144', '2-series', '3-series', '4-series', '5-series', '6-series',
            '7-series', '93', 'CR', 'G-series', 'K-series', 'P94', 'P-series', 'R420', 'R440', 'R480', 'R500',
            'R-series', 'S-series']
    },
    {
        id: "14613",
        marka: "Schmitz",
        models: ['Cargobull SCS 24', 'SKO-24']
    },
    {
        id: "11691",
        marka: "Scion",
        models: ['tC', 'xA', 'xB', 'xD']
    },
    {
        id: "10762",
        marka: "Seat",
        models: ['Alhambra', 'Altea', 'Arona', 'Arosa', 'Ateca', 'Cordoba', 'Exeo', 'Formentor', 'Ibiza', 'Inca',
            'Leon', 'Leon Cupra', 'Malaga', 'Marbella', 'Mii', 'Tarraco', 'Terra', 'Toledo']
    },
    {
        id: "12007",
        marka: "Setra",
        models: ['S', 'S300']
    },
    {
        id: "10775",
        marka: "Skoda",
        models: ['Citigo', 'Enyaq', 'Enyaq Coupe', 'Fabia', 'Favorit', 'Felicia', 'Forman', 'Kamiq', 'Karoq',
            'Kodiaq', 'Octavia', 'Octavia RS', 'Praktik', 'Rapid', 'Roomster', 'Scala', 'Superb', 'Yeti']
    },
    {
        id: "10787",
        marka: "Smart",
        models: ['Coupe', 'Forfour', 'Fortwo', 'Roadster']
    },
    {
        id: "10793",
        marka: "SsangYong",
        models: ['Actyon', 'Actyon Sports', 'Chairman', 'Istana', 'Korando', 'Kyron', 'Musso', 'Rexton', 'Rodius',
            'Stavic', 'Tivoli']
    },
    {
        id: "14934",
        marka: "Stels",
        models: []
    },
    {
        id: "10802",
        marka: "Subaru",
        models: ['Ascent', 'Baja', 'BRZ', 'Crosstrek', 'Forester', 'Impreza', 'Justy', 'Legacy', 'Leone', 'Levorg',
            'Libero', 'Outback', 'SVX', 'Tribeca', 'WRX', 'XT', 'XV']
    },
    {
        id: "10820",
        marka: "Suzuki",
        models: ['Aerio', 'Alto', 'Baleno', 'Carry', 'Forenza', 'Grand Vitara', 'Ignis', 'Jimny', 'Kizashi', 'Liana',
            'Samurai', 'Splash', 'Swift', 'SX4', 'Verona', 'Vitara', 'Wagon R', 'XL7']
    },
    {
        id: "11896",
        marka: "Suzuki moto",
        models: ['Bandit', 'B-King', 'Boulevard', 'Burgman', 'DL', 'DR', 'DRZ', 'Gladius', 'GN', 'GS', 'GSR', 'GSX',
            'GSX-F', 'GSX-R', 'GSX-S', 'Hayabusa', 'Inazuma', 'Intruder', 'Katana', 'KingQuad', 'LT', 'LTZ', 'Marauder',
            'RF', 'RMZ', 'RV', 'Savage', 'SFV', 'SV', 'TL', 'VS', 'V-Strom', 'VX', 'VZ', 'XF']
    },
    {
        id: "14489",
        marka: "Tagaz",
        models: ['LC100 Master']
    },
    {
        id: "10850",
        marka: "Tata",
        models: ['Indica', 'Indigo', 'Safari', 'Sierra', 'Sumo']
    },
    {
        id: "10856",
        marka: "Tatra",
        models: ['815', 'T613']
    },
    {
        id: "10858",
        marka: "Tesla",
        models: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Roadster']
    },
    {
        id: "10862",
        marka: "Toyota",
        models: ['4Runner', '6FD30', 'Alphard', 'Altezza', 'Auris', 'Avalon', 'Avensis', 'Avensis Verso', 'Aygo',
            'bZ4X', 'Camry', 'Carib', 'Carina', 'Carina E', 'Celica', 'Chaser', 'C-HR', 'Corolla', 'Corolla Cross',
            'Corolla Verso', 'Corona', 'Crown', 'Dyna', 'Echo', 'Estima', 'FJ Cruiser', 'Fortuner', 'FunCargo', 'Gaia',
            'GR86', 'GT86', 'Harrier', 'Hiace', 'Highlander', 'Hilux', 'Ipsum', 'iQ', 'Land Cruiser',
            'Land Cruiser Prado', 'Lite Ace', 'Mark II', 'Matrix', 'MR2', 'Paseo', 'Passo', 'Picnic',
            'Previa', 'Prius', 'Prius C', 'Prius Prime', 'Prius V', 'ProAce', 'Probox', 'RAV4', 'Sequoia', 'Sienna',
            'Soarer', 'Solara', 'Starlet', 'Supra', 'Tacoma', 'Tercel', 'TownAce', 'Tundra', 'Urban Cruiser', 'Venza',
            'Verso', 'Verso-S', 'Voltz', 'Voxy', 'Yaris', 'Yaris Verso']
    },
    {
        id: "11925",
        marka: "Triumph",
        models: ['Bonneville', 'Daytona', 'Rocket', 'Scrambler', 'Speed', 'SpeedMaster', 'Speed Triple', 'Sprint',
            'Street', 'Thruxton', 'Thunderbird', 'Tiger', 'Trident', 'Trophy', 'TT']
    },
    {
        id: "14834",
        marka: "Vespa",
        models: ['GTS']
    },
    {
        id: "14588",
        marka: "Victory",
        models: ['Boardwalk', 'Cross Country', 'Hammer', 'Kingpin', 'Magnum', 'Vegas', 'Vision']
    },
    {
        id: "10928",
        marka: "Volkswagen",
        models: ['Amarok', 'Ameo', 'Arteon', 'Atlas', 'Atlas Cross Sport', 'Beetle', 'Bora', 'Caddy', 'Caravelle',
            'Corrado', 'Crafter', 'Derby', 'e-Golf', 'EOS', 'Fox', 'Gol', 'Golf', 'Golf Alltrack', 'Golf GTI',
            'Golf Plus', 'Golf R', 'Golf R32', 'Golf Sportsvan', 'ID.3', 'ID.4', 'ID.5', 'ID.6', 'Jetta', 'L80', 'LT',
            'Lupo', 'Multivan', 'Passat', 'Passat Alltrack', 'Passat CC', 'Passat USA', 'Phaeton', 'Pointer', 'Polo',
            'Polo Sedan', 'Routan', 'Santana', 'Scirocco', 'Sharan', 'Taigo', 'Taos', 'Taro', 'T-Cross', 'Teramont',
            'Tiguan', 'Touareg', 'Touran', 'Transporter', 'T-Roc', 'Up', 'Vento']
    },
    {
        id: "10955",
        marka: "Volvo",
        models: ['240', '340', '360', '440', '460', '480', '740', '760', '850', '940', '960', 'C30', 'C40', 'C70',
            'F', 'FE', 'FH', 'FL', 'FLC', 'FM', 'S40', 'S60', 'S60 Cross Country', 'S70', 'S80', 'S90', 'V40',
            'V40 Cross Country', 'V50', 'V60', 'V60 Cross Country', 'V70', 'V90', 'V90 Cross Country', 'XC40',
            'XC60', 'XC70', 'XC90']
    },
    {
        id: "15043",
        marka: "Voyah",
        models: ['Dream', 'Free', 'Passion']
    },
    {
        id: "10990",
        marka: "Wartburg",
        models: ['353']
    },
    {
        id: "14928",
        marka: "Weltmeister",
        models: ['EX5', 'W6']
    },
    {
        id: "11933",
        marka: "Yamaha",
        models: ['FJ', 'FJR', 'FZ', 'FZR', 'FZS', 'Grizzly', 'Majersty', 'MT', 'Neos', 'Road Star', 'RSV', 'Striker',
            'TDM', 'TDR', 'TMAX', 'TRX', 'Virago', 'VMAX', 'WR', 'XJ', 'XJR', 'X-MAX', 'XSR', 'XT', 'XTZ', 'XV', 'XVS',
            'XVZ', 'YBR', 'YFZ', 'YX', 'YZ', 'YZF']
    },
    {
        id: "14496",
        marka: "Yuejin",
        models: ['1080']
    },
    {
        id: "15081",
        marka: "Yutong",
        models: ['ZK6128H']
    },
    {
        id: "15031",
        marka: "Zeekr",
        models: ['001', '009', 'X']
    },
    {
        id: "11762",
        marka: "Zotye",
        models: ['T600', ' Z300']
    },
    {
        id: "11005",
        marka: "ZX",
        models: ['Admiral-Pickup', 'Admiral-SUV', 'Grand Tiger', 'Landmark']
    },
    {
        id: "15002",
        marka: "Амкодор",
        models: ['332', '342', 'ТО-18']
    },
    {
        id: "14680",
        marka: "Богдан",
        models: ['A092', 'A1445']
    },
    {
        id: "11075",
        marka: "ГАЗ",
        models: ['21', '24', '2410', '2705', '3102', '31029', '3110', '31105', '3221', '3302', '3307', '3309', '52',
            '53', '66', '69', 'Volga Siber', 'Валдай', 'Газель', 'Газель Next', 'Газель Бизнес', 'Газон Next', 'Соболь']

    },
    {
        id: "11962",
        marka: "Днепр",
        models: ['К', 'МТ']
    },
    {
        id: "11104",
        marka: "ЗАЗ",
        models: ['968М', 'Chance', 'Forza', 'Lanos', 'Sens', 'Vida', 'Таврия']
    },
    {
        id: "11709",
        marka: "ЗиЛ",
        models: ['130', '131', '157', '5301']
    },
    {
        id: "11121",
        marka: "ИЖ",
        models: ['21251', '2126', '2715', '2717', '412', 'К', 'Комби', 'Орбита', 'Планета', 'Юпитер']
    },
    {
        id: "11619",
        marka: "КамАЗ",
        models: ['4310', '5320', '5410', '5490', '5511', '6520']
    },
    {
        id: "11166",
        marka: "ЛуАЗ",
        models: ['1302', '969']
    },
    {
        id: "11550",
        marka: "МАЗ",
        models: ['152', '4370', '500', '53363', '54323', '5440', '5516', '5551', '6430', '6516']
    },
    {
        id: "14931",
        marka: "МАЗ-MAN",
        models: ['54326']
    },
    {
        id: "11182",
        marka: "Москвич",
        models: ['2138', '2140', '2141', '3', '402', '408', '412']
    },
    {
        id: "14554",
        marka: "МТЗ",
        models: ['3022', '3522', '80/82']
    },
    {
        id: "14522",
        marka: "ПАЗ",
        models: ['3205']
    },
    {
        id: "11315",
        marka: "УАЗ",
        models: ['310', '3151', '3160', '452', '469', 'Hunter', 'Patriot', 'Pickup']
    },
    {
        id: "11970",
        marka: "Урал",
        models: ['375', '4320', 'К', 'М']
    },
];