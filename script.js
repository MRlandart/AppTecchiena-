// Selezione degli elementi HTML
const istitutiTecnici = document.getElementById('istituti-tecnici');
const licei = document.getElementById('licei');
const openLinkButton = document.getElementById('open-link');

// Funzione per aggiornare il pulsante con il link selezionato
function updateLink() {
    const selectedIstituto = istitutiTecnici.value;
    const selectedLiceo = licei.value;

    // Se viene selezionato un istituto tecnico, mostra il link
    if (selectedIstituto) {
        openLinkButton.style.display = 'inline-block';
        openLinkButton.onclick = function() {
            window.open(selectedIstituto, '_blank');
        };
    }
    // Se viene selezionato un liceo, mostra il link
    else if (selectedLiceo) {
        openLinkButton.style.display = 'inline-block';
        openLinkButton.onclick = function() {
            window.open(selectedLiceo, '_blank');
        };
    }
    // Nascondi il pulsante se nessuna opzione è selezionata
    else {
        openLinkButton.style.display = 'none';
    }
}

// Event listeners per gli elenchi
istitutiTecnici.addEventListener('change', function() {
    licei.selectedIndex = 0; // Deseleziona il liceo
    updateLink(); // Aggiorna il link
});

licei.addEventListener('change', function() {
    istitutiTecnici.selectedIndex = 0; // Deseleziona l'istituto tecnico
    updateLink(); // Aggiorna il link
});
