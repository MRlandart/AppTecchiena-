function searchSchools() {
    const location = document.getElementById("location").value;
    if (!location) {
        alert("Inserisci una località valida!");
        return;
    }
    
    const apiKey = "AIzaSyBE30V_LZiMnSFbqIS-_nmChNlJO6X8XyI"; // ATTENZIONE: Proteggi questa chiave API
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=scuole+superiori+in+${encodeURIComponent(location)}&key=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = ""; // Pulisce i risultati precedenti
            
            if (data.results.length === 0) {
                resultsDiv.innerHTML = "<p>Nessuna scuola trovata per questa località.</p>";
                return;
            }
            
            const list = document.createElement("ul");
            
            data.results.forEach(school => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.textContent = school.name;
                link.href = school.website || "#";
                link.target = "_blank";
                listItem.appendChild(link);
                list.appendChild(listItem);
            });
            
            resultsDiv.appendChild(list);
        })
        .catch(error => {
            console.error("Errore nella richiesta API:", error);
            alert("Si è verificato un errore. Riprova più tardi.");
        });
}