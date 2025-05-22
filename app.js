
function onClickedEstimatePrice() {
    let sqft = document.getElementById("uiSqft").value;
    let bhk = document.getElementById("uiBHK").value;
    let bath = document.getElementById("uiBathrooms").value;
    let location = document.getElementById("uiLocations").value;
    document.getElementById("uiEstimatedPrice").innerHTML = "Estimated Price: 56.34 Lakh";
}
