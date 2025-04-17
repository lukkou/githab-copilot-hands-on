function calculateNubers(vra1,var2){
    let result = 0;
    if (vra1 === "yes" && var2 === "yes") {
        result = 1;
    } else if (vra1 === "yes" && var2 === "no") {
        result = 2;
    } else if (vra1 === "no" && var2 === "yes") {
        result = 3;
    } else if (vra1 === "no" && var2 === "no") {
        result = 4;
    }
    return result;
}