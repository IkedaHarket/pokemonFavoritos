
export const traducirHabitat = (habitat) =>{
    if(habitat === 'grassland') return 'Pradera'
    if(habitat === 'mountain') return 'Montaña'
    if(habitat === 'rare') return 'Raro'
    if(habitat === 'rough-terrain') return 'Terreno Dificil'
    if(habitat === 'sea') return 'Mar'
    if(habitat === 'urban') return 'Urbano'
    if(habitat === 'waters-edge') return 'Al borde del agua'
    if(habitat === 'cave') return 'Cueva'
    if(habitat === 'forest') return 'Bosque'
    return habitat
}
export const traducirTipo = (tipo) =>{
    if(tipo === 'normal') return 'Normal'
    if(tipo === 'fighting') return 'Lucha'
    if(tipo === 'grass') return 'Césped'
    if(tipo === 'rock') return 'Roca'
    if(tipo === 'electric') return 'Electrico'
    if(tipo === 'psychic') return 'Psíquico'
    if(tipo === 'flying') return 'Volador'
    if(tipo === 'bug') return 'Bicho'
    if(tipo === 'ice') return 'Hielo'
    if(tipo === 'ghost') return 'Fantasma'
    if(tipo === 'dragon') return 'Dragon'
    if(tipo === 'dark') return 'Oscuro'
    if(tipo === 'steel') return 'Acero'
    if(tipo === 'poison') return 'Veneno'
    if(tipo === 'fire') return 'Fuego'
    if(tipo === 'fairy') return 'Hada'
    if(tipo === 'water') return 'Agua'
    if(tipo === 'unknown') return 'Desconocido'
    if(tipo === 'ground') return 'Suelo'
    if(tipo === 'shadow') return 'Sombra'
    return tipo
}
export const traducirJuego = (juego) =>{
    switch (juego) {
        case 'red': return 'Rojo';
        case 'blue': return 'Azul';
        case 'yellow': return 'Amarillo';
        case 'gold': return 'Oro';
        case 'silver': return 'Plata';
        case 'crystal': return 'Cristal';
        case 'ruby': return 'Ruby';
        case 'sapphire': return 'Zafiro';
        case 'emerald': return 'Esmeralda';
        case 'firered': return 'Rojo Fuego';
        case 'leafgreen': return 'Verde Hoja';
        case 'diamond': return 'Diamante';
        case 'pearl': return 'Perla';
        case 'platinum': return 'Platino';
        case 'heartgold': return 'Corazon De Oro';
        case 'soulsilver': return 'Alma De Plata';
        case 'black': return 'Negro';
        case 'white': return 'Blanco';
        case 'black-2': return 'Negro-2';
        case 'white-2': return 'Blanco-2';
    
        default: return juego
    }
}
export const traducirHabilidad = (habilidad) =>{
    switch (habilidad) {
        case 'stench': return 'Hedor'
        case 'drizzle': return 'Llovizna'
        case 'speed-boost': return 'Aumento de Velocidad'
        case 'battle-armor': return 'Armadura Batalla'
        case 'sturdy': return 'Robustez'
        case 'damp': return 'Humedad'
        case 'limber': return 'Agil'
        case 'sand-veil': return 'Velo Arena'
        case 'static': return 'Electricidad Estatica'
        case 'volt-absorb': return 'Absorver Voltios'
        case 'water-absorb': return 'Absorver Agua'
        case 'oblivious': return 'Despiste'
        case 'cloud-nine': return 'Aclimatacion'
        case 'compound-eyes': return 'Ojo Compuesto'
        case 'insomnia': return 'Insomnio'
        case 'color-change': return 'Cambio Color'
        case 'immunity': return 'Inmunidad'
        case 'flash-fire': return 'Absorver Fuego'
        case 'shield-dust': return 'Polvo Escudo'
        case 'own-tempo': return 'Ritmo Propio'
        case 'suction-cups': return 'Ventosas'
        case 'intimidate': return 'Intimidacion'
        case 'shadow-tag': return 'Sombra Trampa'
        case 'rough-skin': return 'Piel Tosca'
        case 'wonder-guard': return 'Superguarda'
        case 'levitate': return 'Levitacion'
        case 'effect-spore': return 'Efecto Espora'
        case 'synchronize': return 'Sincronia'
        case 'clear-body': return 'Cuerpo Puro'
        case 'natural-cure': return 'Cura Natural'
        case 'lightning-rod': return 'Pararrayos'
        case 'serene-grace': return 'Dicha'
        case 'swift-swim': return 'Nado Rapido'
        case 'chlorophyll': return 'Clorofila'
        case 'illuminate': return 'Iluminacion'
        case 'trace': return 'Rastro'
        case 'huge-power': return 'Potencia'
        case 'poison-point': return 'Punto Toxico'
        case 'inner-focus': return 'Foco Interno'
        case 'magma-armor': return 'Escudo Magma'
        case 'water-veil': return 'Velo Agua'
        case 'magnet-pull': return 'Iman'
        case 'soundproof': return 'Insonorizar'
        case 'rain-dish': return 'Cura Lluvia'
        case 'sand-stream': return 'Chorro Arena'
        case 'pressure': return 'Presion'
        case 'thick-fat': return 'Sebo'
        case 'early-bird': return 'Madrugar'
        case 'flame-body': return 'Cuerpo Llama'
        case 'run-away': return 'Fuga'
        case 'keen-eye': return 'Vista Lince'
        case 'hyper-cutter': return 'Corte Fuerte'
        case 'pickup': return 'Recogida'
        case 'truant': return 'Ausente'
        case 'hustle': return 'Entusiasmo'
        case 'cute-charm': return 'Gran Encanto'
        case 'plus': return 'Mas'
        case 'minus': return 'Menos'
        case 'forecast': return 'Prediccion'
        case 'sticky-hold': return 'Viscosidad'
        case 'shed-skin': return 'Mudar'
        case 'guts': return 'Agallas'
        case 'marvel-scale': return 'Escama Especial'
        case 'liquid-ooze': return 'Lodo Liquido'
        case 'overgrow': return 'Espesura'
        case 'blaze': return 'Mar Llamas'
        case 'torrent': return 'Torrente'
        case 'swarm': return 'Enjambre'
        case 'rock-head': return 'Cabeza Roca'
        case 'drought': return 'Seguia'
        case 'arena-trap': return 'Trampa Arena'
        case 'vital-spirit': return 'Espiritu Vital'
        case 'white-smoke': return 'Humo Blanco'
        case 'pure-power': return 'Energia Pura'
        case 'shell-armor': return 'Caparazon'
        case 'air-lock': return 'Bucle Aire'
        case 'tangled-feet': return 'Tumbos'
        case 'motor-drive': return 'Electromotor'
        case 'rivalry': return 'Rivalidad'
        case 'steadfast': return 'Impasible'
        case 'snow-cloak': return 'Manto Niveo'
        case 'gluttony': return 'Guia'
        case 'anger-point': return 'Irascible'
        case 'unburden': return 'Liviano'
        case 'heatproof': return 'Ignifugo'
        case 'simple': return 'Simple'
        case 'dry-skin': return 'Piel Seca'
        case 'download': return 'Descarga'
        case 'iron-fist': return 'Puño Ferreo'
        case 'poison-heal': return 'Antidoto'
        case 'adaptability': return 'Adaptable'
        case 'skill-link': return 'Encadenado'
        case 'hydration': return 'Hidratacion'
        case 'solar-power': return 'Poder Solar'
        case 'quick-feet': return 'Pies Rapidos'
        case 'normalize': return 'Normalidad'
        case 'sniper': return 'Francotirador'
        case 'magic-guard': return 'Muro Magico'
        case 'no-guard': return 'Indefenso'
        case 'stall': return 'Rezagado'
        case 'technician': return 'Experto'
        case 'leaf-guard': return 'Defensa Hoja'
        case 'klutz': return 'Zoquete'
        case 'mold-breaker': return 'Rompemoides'
        case 'super-luck': return 'Afortunado'
        case 'aftermath': return 'Detonacion'
        case 'anticipation': return 'Anticipacion'
        case 'forewarn': return 'Alerta'
        case 'unaware': return 'Ignorante'
        case 'tinted-lens': return 'Cromolente'
        case 'filter': return 'Filtro'
        case 'slow-start': return 'Inicio Lento'
        case 'scrappy': return 'Intrepido'
        case 'storm-drain': return 'Colector'
        case 'ice-body': return 'Gelido'
        case 'solid-rock': return 'Roca Solida'
        case 'snow-warning': return 'Nevada'
        case 'honey-gather': return 'Recogemiel'
        case 'frisk': return 'Cacheo'
        case 'reckless': return 'Audaz'
        case 'multitype': return 'Multitipo'
        case 'flower-gift': return 'Don Floral'
        case 'bad-dreams': return 'Mal Sueño'
        case 'pickpocket': return 'Hurto'
        case 'sheer-force': return 'Potencia Bruta'
        case 'contrary': return 'Respondon'
        case 'unnerve': return 'Nerviosismo'
        case 'defiant': return 'Competitivo'
        case 'defeatist': return 'Flaqueza'
        case 'cursed-body': return 'Cuerpo Maldito'
        case 'healer': return 'Alma Cura'
        case 'friend-guard': return 'Compiescolta'
        case 'weak-armor': return 'Armadura Fragil'
        case 'heavy-metal': return 'Metal Pesado'
        case 'light-metal': return 'Metal Liviano'
        case 'multiscale': return 'Multiescamas'
        case 'toxic-boost': return 'Impetu Toxico'
        case 'flare-boost': return 'Impetu Ardiente'
        case 'harvest': return 'Cosecha'
        case 'telepathy': return 'Telepatia'
        case 'moody': return 'Veleta'
        case 'overcoat': return 'Funda'
        case 'poison-touch': return 'Toque Toxico'
        case 'regenerator': return 'Regeneracion'
        case 'big-pecks': return 'Sacapecho'
        case 'sand-rush': return 'Impetu Arena'
        case 'wonder-skin': return 'Piel Milagro'
        case 'analytic': return 'Calculo Final'
        case 'illusion': return 'Ilusion'
        case 'imposter': return 'Impostor'
        case 'infiltrator': return 'Allanamiento'
        case 'mummy': return 'Momia'
        case 'moxie': return 'Autoestima'
        case 'justified': return 'Justiciero'
        case 'rattled': return 'Cobardia'
        case 'magic-bounce': return 'Espejo Magico'
        case 'sap-sipper': return 'Herbivoro'
        case 'prankster': return 'Bromista'
        case 'sand-force': return 'Poder Arena'
        case 'iron-barbs': return 'Punta Acero'
        case 'zen-mode': return 'Modo Daruma'
        case 'victory-star': return 'Tinovictoria'
        case 'turboblaze': return 'Turbollama'
        case 'teravolt': return 'Terravoltaje'
        case 'aroma-veil': return 'Velo Aroma'
        case 'flower-veil': return 'Velo Flor'
        case 'cheek-pouch': return 'Carrillo'
        case 'protean': return 'Mutatipo'
        case 'fur-coat': return 'Pelaje Recio'
        case 'magician': return 'Prestidigitador'
        case 'bulletproof': return 'Antibalas'
        case 'competitive': return 'Tenacidad'
        case 'strong-jaw': return 'Mandibula Fuerte'
        case 'refrigerate': return 'Piel Helada'
        case 'sweet-veil': return 'Velo Dulce'
        case 'stance-change': return 'Cambio Tactico'
        case 'gale-wings': return 'Alas Vendaval'
        case 'mega-launcher': return 'Megadisparador'
        case 'grass-pelt': return 'Manto Frondoso'
        case 'symbiosis': return 'Simbiosis'
        case 'tough-claws': return 'Garra Dura'
        case 'pixilate': return 'Piel Feerica'
        case 'gooey': return 'Baba'
        case 'aerilate': return 'Piel Celeste'
        case 'parental-bond': return 'Amor Filial'
        case 'dark-aura': return 'Aura Oscura'
        case 'fairy-aura': return 'Aura Feerica'
        case 'aura-break': return 'Rompeaura'
        case 'primordial-sea': return 'Mar Del Albor'
        case 'desolate-land': return 'Tierra Del Ocaso'
        case 'delta-stream': return 'Rafaga Delta'
        case 'stamina': return 'Firmeza'
        case 'wimp-out': return 'Huida'
        case 'emergency-exit': return 'Retirada'
        case 'water-compaction': return 'Hidrorrefuerzo'
        case 'merciless': return 'Ensañamiento'
        case 'shields-down': return 'Escudo Limitado'
        case 'stakeout': return 'Vigilante'
        case 'water-bubble': return 'Pompa'
        case 'steelworker': return 'Acero Templado'
        case 'berserk': return 'Colera'
        case 'slush-rush': return 'Quitanieves'
        case 'long-reach': return 'Remoto'
        case 'liquid-voice': return 'Voz Fluida'
        case 'triage': return 'Primer Auxilio'
        case 'galvanize': return 'Piel Electrica'
        case 'surge-surfer': return 'Cola Surf'
        case 'schooling': return 'Banco'
        case 'disguise': return 'Disfraz'
        case 'battle-bond': return 'Fuerte Afecto'
        case 'power-construct': return 'Agrupamiento'
        case 'corrosion': return 'Corrosion'
        case 'comatose': return 'Letargo Perenne'
        case 'queenly-majesty': return 'Regia Presencia'
        case 'innards-out': return 'Reves'
        case 'dancer': return 'Pareja De Baile'
        case 'battery': return 'Bateria'
        case 'fluffy': return 'Peluche'
        case 'dazzling': return 'Cuerpo Vivido'
        case 'soul-heart': return 'Coranima'
        case 'tangling-hair': return 'Rizos Rebeldes'
        case 'receiver': return 'Receptor'
        case 'power-of-alchemy': return 'Reaccion Quimica'
        case 'beast-boost': return 'Ultraimpulso'
        case 'rks-system': return 'Sistema Alfa'
        case 'electric-surge': return 'Electrogenesis'
        case 'psychic-surge': return 'Psicogenesis'
        case 'misty-surge': return 'Nebulogenesis'
        case 'grassy-surge': return 'Herbogenesis'
        case 'full-metal-body': return 'Guardia Metalica'
        case 'shadow-shield': return 'Guardia Espectro'
        case 'prism-armor': return 'Armadura Prisma'
        case 'neuroforce': return 'Fuerza Cerebral'
        case 'intrepid-sword': return 'Espada Indomita'
        case 'dauntless-shield': return 'Escudo Recio'
        case 'libero': return 'Libero'
        case 'ball-fetch': return 'Recogebolas'
        case 'cotton-down': return 'Pelusa'
        case 'propeller-tail': return 'Helice Caudal'
        case 'mirror-armor': return 'Coraza Reflejo'
        case 'gulp-missile': return 'Tragamisil'
        case 'stalwart': return 'Acerrimo'
        case 'steam-engine': return 'Combustible'
        case 'punk-rock': return 'Punk Rock'
        case 'sand-spit': return 'Expulsarena'
        case 'ice-scales': return 'Escama De Hielo'
        case 'ripen': return 'Maduracion'
        case 'ice-face': return 'Cara De Hielo'
        case 'power-spot': return 'Fuente Energia'
        case 'mimicry': return 'Mimetismo'
        case 'screen-cleaner': return 'Antibarrera'
        case 'steely-spirit': return 'Alma Acerada'
        case 'perish-body': return 'Cuerpo Mortal'
        case 'wandering-spirit': return 'Alma Errante'
        case 'gorilla-tactics': return 'Monotema'
        case 'neutralizing-gas': return 'Gas Reactivo'
        case 'pastel-veil': return 'Velo Pastel'
        case 'hunger-switch': return 'Mutapetito'
        case 'quick-draw': return 'Mano Rapida'
        case 'unseen-fist': return 'Puño Invisible'
        case 'curious-medicine': return 'Medicina Extraña'
        case 'transistor': return 'Transistor'
        case 'dragons-maw': return 'Mandibula Dragon'
        case 'chilling-neigh': return 'Relincho Blanco'
        case 'grim-neigh': return 'Relincho Negro'
        case 'as-one': return 'Unidad Ecueste'
        case 'mountaineer': return 'Alpinista'
        case 'wave-rider': return 'Montador De Olas'
        case 'skater': return 'Patinar'
        case 'thrust': return 'Empuje'
        case 'perception': return 'Percepcion'
        case 'parry': return 'Parar'
        case 'instinct': return 'Instinto'
        case 'dodge': return 'Esquivar'
        case 'jagged-edge': return 'Borde Dentado'
        case 'frostbite': return 'Congelacion'
        case 'tenacity': return 'Tenacidad'
        case 'pride': return 'Orgullo'
        case 'deep-sleep': return 'Sueño Profundo'
        case 'power-nap': return 'Siesta De Poder'
        case 'spirit': return 'Espiritu'
        case 'warm-blanket': return 'Manta Calidad'
        case 'gulp': return 'Tragar'
        case 'herbivore': return 'Herbivoro'
        case 'sandpit': return 'Arenal'
        case 'hot-blooded': return 'Sangre Caliente'
        case 'medic': return 'Medico'
        case 'life-force': return 'Fuerza Vital'
        case 'lunchbox': return 'Lonchera'
        case 'nurse': return 'Enfermera'
        case 'melee': return 'Combate Cercano'
        case 'sponge': return 'Esponja'
        case 'bodyguard': return 'Guardaespaldas'
        case 'hero': return 'Héroe'
        case 'last-bastion': return 'Último Bastión	'
        case 'stealth': return 'Sigilo'
        case 'vanguard': return 'Vanguardia'
        case 'nomad': return 'Nómada'
        case 'sequence': return 'Sequencia'
        case 'grass-cloak': return 'Manto Hierba'
        case 'celebrate': return 'Celebrar'
        case 'lullaby': return 'Canción de Cuna'
        case 'calming': return 'Calmante'
        case 'daze': return 'Aturdimiento'
        case 'frighten': return 'Espantar'
        case 'interference': return 'Interferencia'
        case 'mood-maker': return 'Fabricante de Emociones'
        case 'confidence': return 'Confianza'
        case 'fortune': return 'Fortuna'
        case 'bonanza': return 'Bonanza'
        case 'explode': return 'Explotar'
        case 'omnipotent': return 'Omnipotente'
        case 'share': return 'Compartir'
        case 'black-hole': return 'Agujero Negro'
        case 'shadow-dash': return 'Carrera Sombra'
        case 'sprint': return 'Carrera'
        case 'disgust': return 'Disgusto'
        case 'high-rise': return 'Ascenso'
        case 'climber': return 'Escalador'
        case 'flame-boost': return 'Impetu Llama'
        case 'aqua-boost': return 'Impulso De Agua'
        case 'run-up': return 'Carrera'
        case 'conqueror': return 'Conquistador'
        case 'shackle': return 'Encadenar'
        case 'decoy': return 'Señuelo'
        case 'shield': return 'Escudo'

        default: return habilidad
            
    }
}