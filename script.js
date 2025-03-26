// Selezione degli elementi dal DOM
const istitutiTecniciSelect = document.getElementById("istituti-tecnici");
const liceiSelect = document.getElementById("licei");
const openLinkButton = document.getElementById("open-link");

let selectedURL = ""; // Variabile per memorizzare l'URL selezionato

// Funzione per aggiornare il link in base alla selezione
function updateLink(event) {
    selectedURL = event.target.value;

    // Se viene selezionato un istituto tecnico, resettiamo la selezione dei licei
    if (event.target === istitutiTecniciSelect) {
        liceiSelect.selectedIndex = 0;
    }
    
    // Se viene selezionato un liceo, resettiamo la selezione degli istituti tecnici
    if (event.target === liceiSelect) {
        istitutiTecniciSelect.selectedIndex = 0;
    }

    // Mostra il bottone solo se è stato selezionato un link valido
    if (selectedURL) {
        openLinkButton.style.display = "inline-block";
    } else {
        openLinkButton.style.display = "none";
    }
}

// Funzione per aprire il link selezionato
function openSelectedLink() {
    if (selectedURL) {
        window.open(selectedURL, "_blank");
    }
}

// Assegniamo gli event listener ai menu a tendina
istitutiTecniciSelect.addEventListener("change", updateLink);
liceiSelect.addEventListener("change", updateLink);

// Assegniamo l'evento click al bottone per aprire il link
openLinkButton.addEventListener("click", openSelectedLink);
