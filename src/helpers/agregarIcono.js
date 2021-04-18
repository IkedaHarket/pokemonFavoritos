import { traducirTipo } from "./traductores"
import { iconosTipos } from "../images/tipos";



export const agregarIconoTipo =(tipo)=>{
    const palabraTipo = traducirTipo(tipo);

    switch (palabraTipo) {
        case 'Normal': return iconosTipos.iconMankey
        case 'Lucha': return iconosTipos.iconPuno
        case 'Césped': return iconosTipos.iconGrass
        case 'Roca': return iconosTipos.iconRoca
        case 'Electrico': return iconosTipos.iconDestello
        case 'Psíquico': return iconosTipos.iconPsychic
        case 'Volador': return iconosTipos.iconWind
        case 'Bicho': return iconosTipos.iconBee
        case 'Hielo': return iconosTipos.iconIce
        case 'Fantasma': return iconosTipos.iconGhost
        case 'Dragon': return iconosTipos.iconDragon
        case 'Oscuro': return iconosTipos.iconBats
        case 'Acero': return iconosTipos.iconBeam
        case 'Veneno': return iconosTipos.iconPoison
        case 'Fuego': return iconosTipos.iconFire
        case 'Hada': return iconosTipos.iconFairy
        case 'Agua': return iconosTipos.iconDrop
        case 'Desconocido': return iconosTipos.iconQuestionMark
        case 'Suelo': return iconosTipos.iconSoil
        case 'Sombra': return iconosTipos.iconUserSymbol
            
        default: return undefined
    }
}