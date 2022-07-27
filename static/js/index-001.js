
function ResponsiveTopnav() {
    var ElResponsive = document.getElementById("primaryTopnavigation");
    if (ElResponsive.className === "topnavigation") {
        ElResponsive.className += " responsive";
    }
    else {
        ElResponsive.className = "topnavigation";
    }
}

