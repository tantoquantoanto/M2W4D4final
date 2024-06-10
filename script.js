/*LA PRIMA PROVA L'HO FATTA CON IL METODO PUSH ED UN ARRAY VUOTO PER POI CICLARE GLI ELEMENTI AL SUO INTERNO CON IL FOR LOOP, 
LASCIO QUESTA PARTE COMMENTATA PERCHÉ, AVENDO VISTO IL METODO FILTER, SEMBRAVA LA SOLUZIONE PIù ELEGANTE. HTML E CSS SONO IDENTICI PER ENTRAMBE.

let contatore = 0;
let h3 = document.querySelector(".h3");
let userJobs = document.getElementById("userjobs");
let jobsArray = [];
let jobGiven = "";
let job1 = {
  title: "dev",
  location: "us",
};
let btn = document.getElementById("search");

const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

function giveJobs(title, location) {
  jobsArray = [];

  for (let i = 0; i < jobs.length; i++) {
    if (
      (title.toLowerCase() === "" || jobs[i].title.toLowerCase().includes(title.toLowerCase())) &&
      (location.toLowerCase() === "" || jobs[i].location.toLowerCase().includes(location.toLowerCase()))
    ) {
      jobsArray.push({
        title: jobs[i].title,
        location: jobs[i].location,
      });
      btn.classList.add("buttonclicked");
      h3.classList.add("h3-visible");
    }
  }
  if (jobsArray.length === 0) {
    let noJob = document.createElement("li");
    noJob.innerText = "Nessun lavoto trovato";
    userJobs.appendChild(noJob);
  } else {

  }
   
  for (let i = 0; i < jobsArray.length; i++) {
    jobGiven = document.createElement("li");
    jobGiven.innerText = jobsArray[i].title + jobsArray[i].location;
    userJobs.append(jobGiven);
  }
  
  console.log(contatore + jobsArray.length);
}

btn.addEventListener("click", function () {
  userJobs.innerHTML = "";
  let userTitle = document.getElementById("usertitle").value;
  let userLocation = document.getElementById("userlocation").value;
  giveJobs(userTitle, userLocation);
  
});
*/

const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },

  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

/*QUI HO COMMENTATO LA FUNZIONE CHE HO USATO PER LA SOLA PRIMA PARTE DELL?ESERCIZIO; CHE HO SUCCESSIVAMENTE IMPLEMENTATO PER LA SECONDA PARTE
let job1 = {title: "marketing", location: ""};
let gotJobs = [];


function giveJobs(title, location) {
    
    let gotJobs = jobs.filter(job =>
        (title.toLowerCase() === "" || job.title.toLowerCase().includes(title.toLowerCase())) &&
        (job.location.toLowerCase().includes(location.toLowerCase()) || location.toLowerCase() === ""));
        console.log(gotJobs.length)
        return gotJobs
        }
       
        
     
        
        
        console.log(giveJobs(job1.title, job1.location));
 */

let h3 = document.querySelector(".h3");
let btn = document.getElementById("search");
let userJobs = document.getElementById("userjobs");

function giveJobs(title, location) {
  if(title === "" || location === "") {
    h3.innerText = "Per favore, compila entrambi i campi richiesti";
    userJobs.innerText =  "Ci dispiace, non abbiamo trovato nessun lavoro che faccia al caso tuo";
    return;
  }
  let gotJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(title.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );
  gotJobs.length === 0
    ? (userJobs.innerText =
        "Ci dispiace, non abbiamo trovato nessun lavoro che faccia al caso tuo")
    : gotJobs.forEach((gotJob) => {
        let result = document.createElement("li");
        result.classList.add("result");
        result.innerText = `${gotJob.title} ${gotJob.location}`;
        userJobs.appendChild(result);
        h3.classList.add("h3-visible");
        btn.classList.add("buttonclicked");
        result.classList.add("result");
        h3.innerText = "ABBIAMO TROVATO " + gotJobs.length + "  LAVORI PER TE";
      });
  console.log(gotJobs.length);
  /*
    l'avevo realizzato precedentemente con l'if, poi ho voluto provare con l'operatore ternario ed ho commentato l'if;
    if(gotJobs.length === 0) {
    userJobs.innerText = "Nessun lavoro trovato"
    } else {
      gotJobs.forEach((gotJob) => {
        let result = document.createElement("li");
        result.innerText = `${gotJob.title} ${  gotJob.location}`
        userJobs.appendChild(result);
        h3.classList.add("h3-visible");
        btn.classList.add("buttonclicked");
    
      })
    }*/
}

btn.addEventListener("click", () => {
  h3.innerHTML = "";
  userJobs.innerHTML = "";
  let userTitle = document.getElementById("usertitle").value;
  let userLocation = document.getElementById("userlocation").value;
  giveJobs(userTitle, userLocation);
});
