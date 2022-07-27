

function ResponsiveTopnav() {
    const ElResponsive = document.getElementById("myTopnav")
    if (ElResponsive.className === "topnav") {
        ElResponsive.className += "responsive";
    }
    else 
    {
        ElResponsive.className = "topnav";
    }
}