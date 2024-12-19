// Function to fetch and parse the XML file from a specific ORCID URL
function loadAndDisplayPublications() {
  const orcidUrl = 'https://pub.orcid.org/v3.0/0000-0002-6517-682X/works';

  fetch(orcidUrl, {
    headers: {
      'Accept': 'application/xml' // Ensure the server sends back XML data
    }
  })
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");

    const works = xmlDoc.getElementsByTagName("work:work-summary");
    let publicationsByYear = {};

    // Extract details and group by year
    for (let work of works) {
      const titleElement = work.querySelector("work:title common:title");
      const title = titleElement ? titleElement.textContent : "No title available";

      const journalElement = work.querySelector("work:journal-title");
      const journalTitle = journalElement ? journalElement.textContent : "No journal/conference title available";

      const yearElement = work.querySelector("common:publication-date common:year");
      const year = yearElement ? yearElement.textContent : "Unknown year";

      const urlElement = work.querySelector("common:url");
      const url = urlElement ? urlElement.textContent : "#";

      const typeElement = work.querySelector("work:type");
      const type = typeElement ? typeElement.textContent : "Unknown type";

      if (!publicationsByYear[year]) {
        publicationsByYear[year] = [];
      }

      publicationsByYear[year].push({
        title,
        journalTitle,
        url,
        type
      });
    }

    // Sort years in descending order and display publications
    displayPublications(publicationsByYear);
  })
  .catch(error => console.error('Error loading or parsing the XML:', error));
}

// Function to display publications grouped by year
function displayPublications(publicationsByYear) {
  const container = document.getElementById('publications-container');
  container.innerHTML = '';

  // Sort the years in descending order
  const years = Object.keys(publicationsByYear).sort((a, b) => b - a);

  years.forEach(year => {
    const yearHeader = document.createElement('h2');
    yearHeader.textContent = year;
    container.appendChild(yearHeader);

    const list = document.createElement('ul');

    publicationsByYear[year].forEach(pub => {
      const item = document.createElement('li');
      item.innerHTML = `<a href="${pub.url}" target="_blank">${pub.title}</a> published in ${pub.journalTitle} [${pub.type}]`;
      list.appendChild(item);
    });

    container.appendChild(list);
  });
}