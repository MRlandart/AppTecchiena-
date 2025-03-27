// Dichiarazione degli array con le opzioni
const istitutiTecnici = {
  "Istituto Pertini Alatri": "https://www.istitutopertinialatri.edu.it/",
  "IIS Brunelleschi Da Vinci": "https://www.iisangeloni.edu.it/luogo/sede-brunelleschi-da-vinci/",
  "ITIS Morosini": "https://www.itismorosini.edu.it/",
  "IS Bragaglia": "https://www.bragaglia.edu.it/",
  "IIS Martino Filetico": "https://www.iismartinofiletico.edu.it/",
  "Istituto Angeloni": "https://www.iisangeloni.edu.it/luogo/sede-brunelleschi-da-vinci/",
  "Istituto Volta": "http://www.voltafr.edu.it/"
};

const licei = {
  "Liceo Alatri": "https://liceoalatri.edu.it/",
  "Francesco Severi": "https://www.francescoseveri.it/",
  "IIS Turriziani": "https://www.iisnorbertoturriziani.it/",
  "IS Bragaglia": "https://www.bragaglia.edu.it/",
  "IIS Martino Filetico": "https://www.iismartinofiletico.edu.it/",
  "IIS Sulpicio Veroli": "https://www.iissulpicioveroli.edu.it/"
};

const istitutiProfessionali = {
  "Alberghiero Fiuggi": "https://www.alberghierofiuggi.it/",
  "Istituto Pertini Alatri": "https://www.istitutopertinialatri.edu.it/",
  "IS Bragaglia": "https://www.bragaglia.edu.it/",
  "IIS Sulpicio Veroli": "https://www.iissulpicioveroli.edu.it/pagine/liceo-delle-scienze-umane",
  "Istituto Angeloni": "https://www.iisangeloni.edu.it/"
};

// Selezionatori e bottoni
const selectIstitutiTecnici = document.getElementById("istitutiTecnici");
const selectLicei = document.getElementById("licei");
const selectIstitutiProfessionali = document.getElementById("istitutiProfessionali");
const buttonVisualizza = document.getElementById("visualizzaSito");
let currentLink = "";

// Funzione per aggiornare il link
function updateLink(url) {
  currentLink = url;
  buttonVisualizza.disabled = false; // Abilita il button "Visualizza sito"
}

// Gestione della selezione di un istituto tecnico
selectIstitutiTecnici.addEventListener("change", function () {
  const selectedInstitute = selectIstitutiTecnici.value;
  if (selectedInstitute && istitutiTecnici[selectedInstitute]) {
    updateLink(istitutiTecnici[selectedInstitute]);
    selectLicei.value = ""; // Resetta la selezione dei licei
    selectIstitutiProfessionali.value = ""; // Resetta la selezione degli istituti professionali
  }
});

// Gestione della selezione di un liceo
selectLicei.addEventListener("change", function () {
  const selectedLiceo = selectLicei.value;
  if (selectedLiceo && licei[selectedLiceo]) {
    updateLink(licei[selectedLiceo]);
    selectIstitutiTecnici.value = ""; // Resetta la selezione degli istituti tecnici
    selectIstitutiProfessionali.value = ""; // Resetta la selezione degli istituti professionali
  }
});

// Gestione della selezione di un istituto professionale
selectIstitutiProfessionali.addEventListener("change", function () {
  const selectedIstituto = selectIstitutiProfessionali.value;
  if (selectedIstituto && istitutiProfessionali[selectedIstituto]) {
    updateLink(istitutiProfessionali[selectedIstituto]);
    selectIstitutiTecnici.value = ""; // Resetta la selezione degli istituti tecnici
    selectLicei.value = ""; // Resetta la selezione dei licei
  }
});

// Funzione per aprire il link selezionato nel browser
buttonVisualizza.addEventListener("click", function () {
  if (currentLink) {
    window.open(currentLink, "_blank"); // Apre il link in una nuova finestra
  }
});
