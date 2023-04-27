let turno = prompt("Em qual turno você estuda? M (matutina), V(Vespertino), N(noturno)")


switch (turno) {

    case "M":
        console.log("Bom dia");
        break;

    case "V":
        console.log("Bom tarde");
        break;
        
    case "N":
        console.log("Bom noite");
        break;

    default:
        console.log(`Sorry, we are out of ${expr}.`);
}