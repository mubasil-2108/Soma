const dummyProductData = [
    {
        id: '1',
        userName: 'cardiologie',
        subCategory: [
            {
                subName: 'Rythmologie',
                products: [
                    {
                        id: '1',
                        subName_2: 'pacemaker mono cambre',
                        subProducts:[
                            {
                                productName: 'FICHE PRODUIT',
                                productImage: appImages.product2,
                                productPrice: 19.99,
                                productCapacity: 'N/A',
                                productTablets: 'N/A'
                            },
                        ]
                        
                    },
                    {
                        productName: 'pacemaker double cambre',
                        productImage: appImages.product2,
                        productPrice: 19.99,
                        productCapacity: 'N/A',
                        productTablets: 'N/A'
                    },
                    {
                        productName: 'pacemaker triple cambre',
                        productImage: appImages.product2,
                        productPrice: 19.99,
                        productCapacity: 'N/A',
                        productTablets: 'N/A'
                    },
                    {
                        productName: 'Defibrilateur mono cambre',
                        productImage: appImages.product2,
                        productPrice: 19.99,
                        productCapacity: 'N/A',
                        productTablets: 'N/A'
                    },
                    {
                        productName: 'Defibrilateur double cambre',
                        productImage: appImages.product2,
                        productPrice: 19.99,
                        productCapacity: 'N/A',
                        productTablets: 'N/A'
                    },
                    {
                        productName: 'Defibrilateur triple cambre',
                        productImage: appImages.product2,
                        productPrice: 19.99,
                        productCapacity: 'N/A',
                        productTablets: 'N/A'
                    },
                ]
            },
            {
                subName: 'Electrophysiologie Equipment',
                products: [
                    {
                        productName: 'Claris',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'ensite x',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'Electrophysiologie consommable',
                products: [
                    {
                        productName: "CATHETER D'ABLATION",
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Electrophysiologie Equipment',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'AIGUIILLE TRANSEPTALE',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'CATHETER DE DIAGNOSTIC',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'SONDE DECAPOLAIRE DE DIAGNOSTIC',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'SONDE BIPOLAIRE',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'chirurgie cardiaque',
                products: [
                    {
                        productName: "VALVE MECANIQUE",
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'VALVE BIOLOGIQUE',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'TUBE VALVE',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: "ANNEAU D'ANNULOPLASTIE",
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'TAVI',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'cardio pulmonaire',
                products: [
                    {
                        productName: "OXYGENATEUR ADULTE - HORIZON",
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'OXYGENATEUR PEDIATRIQUE - TRILLY',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'cardio-interventionaire',
                products: [
                    {
                        productName: "AMPLATZER Septal Occluder TRAITEMENT DES CARDIOPATHIES CONGÉNITALES- ASD",
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'AMPLATZER Duct Occluder TRAITEMENT DES CARDIOPATHIES CONGÉNITALES- PDA',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'AMPLATZER PFO OCCLUDER : Fermeture de tous les types de foramens ovales perméables - PFO',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'AMPLATZER Muscular VSD Occluders TRAITEMENT DES MALFORMATIONS CARDIAQUES - VSD',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'AMPLATZER™ AMULET™ LEFT ATRIAL APPENDAGE OCCULDER FERMETURE TRANSCUTANÉE DE L’APPENDICE AURICULAIRE GAUCHE',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'AMPLATZER  TORQVUE SYSTÈMES DE LIVRAISON',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'Insuffisance Cardiaque',
                products: [
                    {
                        productName: "HOLTER PATCH ECG",
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'HEARTMATE 3',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'CENTRIMAG - ECMO VAD',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]

            }
        ]
    },
    {
        id: '2',
        userName: 'oncologie',
        subCategory: [
            {
                subName: 'CHIMIOTHERAPIES',
                products: [
                    {
                        productName: 'AIGUILLE HUBER',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                    {
                        productName: 'PHASEAL',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                    {
                        productName: 'CHAMBRE IMPLANTABLE',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                ]
            },
            {
                subName: 'Biopsie',
                products: [
                    {
                        productName: 'MONOPTY',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                    {
                        productName: 'MISSION',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                    {
                        productName: 'MAXCORE',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                    {
                        productName: 'MAGNUM',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                    {
                        productName: 'MARQUEUR MAMMAIRE',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                    {
                        productName: 'HARPON DE REPERAGE MAMMAIRE',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                ]
            },
            {
                subName: 'Macro Biopsie',
                products: [
                    {
                        productName: 'ENCOR INSPIRE',
                        productImage: appImages.product3,
                        productPrice: 199.99,
                        productCapacity: '50ml',
                        productTablets: '200 tablets'
                    },
                ]
            }
        ]
    },
    {
        id: '3',
        userName: 'Vasculaire',
        subCategory: [
            {
                subName: 'DIALYSE',
                products: [
                    {
                        productName: "Cathéter d'hémodialyse à long terme - HemoSplit®",
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'Maladie artérielle périphérique',
                products: [
                    {
                        productName: 'Cathéter PTA de dilatation à ballonnet Ultraverse® 035',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Cathéter PTA de dilatation Ultraverse® 018',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Cathéter PTA de dilatation Ultraverse® 014',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Cathéter PTA de dilatation Conquest®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Cathéter PTA de dilatation Conquest® 40',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Stent vasculaire couvert expansible par ballonnet LifeStreamTM',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Prothèse vasculaire Carboflo®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Stent vasculaire E•LUMINEXX®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Dispositif de gonflement PrestoTM',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'Insuffisance veineuse',
                products: [
                    {
                        productName: 'Filtre cave Denali®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Kit de retrait Bard®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Stent veineux VenovoTM',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Cathéter PTA de dilatation Atlas® Gold',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            }
        ]
    },
    {
        id: '4',
        userName: 'hernie',
        subCategory: [
            {
                subName: 'Réparation des hernies INGUINALES',
                products: [
                    {
                        productName: 'Filet Soft',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet plat / Patch pour hernie préformé',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet léger 3DMax™',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet 3DMax™',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet Onflex®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Plaque Adhesix™  Implant de renforcement pariétal adhésif',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Obturateur léger PerFix®  Plug',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Obturateur PerFix®  Plug',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'Réparation des hernies ventrales',
                products: [
                    {
                        productName: 'Patch herniaire Ventralex™  ST',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Patch herniaire Ventralex™',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Patch herniaire Ventrio®  ST',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Patch herniaire Ventrio®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet Ventralight®  ST',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet Composix™  L/P',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet Ventralight®  ST avec système de positionnement Echo 2®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet Ventralight®  ST avec système de positionnement Echo PS®',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet Sepramesh®  IP',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'Filet Dulex™',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'Fixation',
                products: [
                    {
                        productName: 'OptiFix™  Système de fixation résorbable',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'OptiFix™  Système de fixation résorbable',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'CapSure™  Système de fixation permanente',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            }
        ]
    },
    {
        id: '5',
        userName: 'reanimation',
        subCategory: [
            {
                subName: 'RACHIS ANESTHESIE',
                products: [
                    {
                        productName: 'QUINCKE',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'AIGUILLE SPINALE',
                products: [
                    {
                        productName: 'WHITACRE',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
            {
                subName: 'CATHÉTER VEINEUX CENTRAL - PICC LINE',
                products: [
                    {
                        productName: 'POWER PICC SOLO',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            }
        ]
    },
    {
        id: '6',
        userName: 'orl',
        subCategory: [
            {
                subName: 'IMPLANT COCHLEAIRE',
                products: [

                    {
                        productName: 'NUCLEUS CI 522',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'NUCLEUS 7',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                    {
                        productName: 'BAHA',
                        productImage: appImages.product1,
                        productPrice: 9.99,
                        productCapacity: '75ml',
                        productTablets: '100 tablets'
                    },
                ]
            },
        ]
    },
];  