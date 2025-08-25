document.addEventListener("DOMContentLoaded", () => {
          const regionFilter = document.getElementById("region-filter");
          const dateFilter = document.getElementById("date-filter");
          const brandFilter = document.getElementById("brand-filter");
          const eventsContainer = document.getElementById("events-container");
          const noEventsMessage = document.getElementById("no-events-message");

          // Logos des marques via GP
          const brandLogos = {
            Callaway: "https://golfplus.fr/img/m/60.webp",
            Cleveland: "https://golfplus.fr/img/m/81.webp",
            Srixon: "https://golfplus.fr/img/m/120.webp",
            XXIO: "https://golfplus.fr/img/m/147.webp",
            Cobra: "https://golfplus.fr/img/m/85.webp",
            Ping: "https://golfplus.fr/img/m/63.webp",
            Mizuno: "https://golfplus.fr/img/m/221.webp",
            TaylorMade: "https://golfplus.fr/img/m/96.webp",
            Titleist: "https://golfplus.fr/img/m/95.webp",
            Wilson: "https://golfplus.fr/img/m/32.webp",
            Honma: "https://golfplus.fr/img/m/164.webp",
            Onoff:
              "https://onoff.globeride.co.jp/global/images/global/site_logo.png",
            GolfPlus: "https://golfplus.fr/img/m/141.webp",
          };

          const eventsData = [
            //Juin
            {
              title: "Mizuno",
              date: "2025-06-06",
              region: "Sud-Ouest",
              location: "Golf de Garonne (31)",
              brands: ["Mizuno"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12789--77577-dbf1a218b544a",
            },
            {
              title: "Cobra",
              date: "2025-06-06",
              region: "Sud-Ouest",
              location: "Le Provençal Golf (06)",
              brands: ["Cobra"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12793--73537-646f057dbf486",
            },
            {
              title: "multi-marques",
              date: "2025-06-07",
              region: "Belgique",
              location: "Brussels Drohme Golf Club (BE)",
              brands: [
                "Callaway",
                "Cleveland",
                "Srixon",
                "XXIO",
                "Cobra",
                "Mizuno",
                "Ping",
                "TaylorMade",
                "Titleist",
                "Wilson",
              ],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=10954--78331-309f10650a2b6",
            },

            {
              title: "Cleveland/Srixon/XXIO",
              date: "2025-06-13",
              region: "Sud-Ouest",
              location: "Golf de Garonne (31)",
              brands: ["Cleveland"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12798--89330-fe4d0acb29f60",
            },
            {
              title: "Ping",
              date: "2025-06-13",
              region: "Centre",
              location: "Golf de Cheverny (45)",
              brands: ["Ping"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12799--14425-98faaf7425c2b",
            },
            {
              title: "Cobra",
              date: "2025-06-13",
              region: "Belgique",
              location: "Magasin Golf Plus Waterloo (BE)",
              brands: ["Cobra"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12801--12119-c7dc897a87a19",
            },
            {
              title: "Honma",
              date: "2025-06-14",
              region: "Ile-de-France",
              location: "RCF La Boulie Fitting Center (78)",
              brands: ["Honma"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12802--24229-cde98e092db4f",
            },
            {
              title: "multi-marques",
              date: "2025-06-14",
              region: "Nord",
              location: "Golf de Brigode (59)",
              brands: [
                "Callaway",
                "Cleveland",
                "Srixon",
                "XXIO",
                "Cobra",
                "Ping",
                "TaylorMade",
                "Titleist",
                "Wilson",
              ],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=11074--36654-f04f11e5c80f4",
            },
            {
              title: "Callaway",
              date: "2025-06-17",
              region: "Ile-de-France",
              location: "Chill & Golf (75)",
              brands: ["Callaway"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12810--17925-bad26277844c5",
            },
            {
              title: "Titleist",
              date: "2025-06-18",
              region: "Sud-Ouest",
              location: "Golf d'Idron (64)",
              brands: ["Titleist"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12829--96154-a7e528ab994d0",
            },
            {
              title: "Callaway",
              date: "2025-06-20",
              region: "Ile-de-France",
              location: "Golf de Fourqueux (78)",
              brands: ["Callaway"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12830--12208-61801e276b9fb",
            },
            {
              title: "Cleveland/Srixon/XXIO",
              date: "2025-06-20",
              region: "Sud-Est",
              location: "Le Provençal Golf (06)",
              brands: [ "Cleveland",
                "Srixon",
                "XXIO",],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12831--46655-84ee632fcb31e",
            },
            {
              title: "Cobra",
              date: "2025-06-20",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["Cobra"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12832--74437-c8172b891906b",
            },
            {
              title: "multi-marques",
              date: "2025-06-21",
              region: "Nord-Est",
              location: "Golf du Fort (67)",
              brands: [
                "Callaway",
                "Cleveland",
                "Srixon",
                "XXIO",
                "Cobra",
                "Mizuno",
                "Ping",
                "TaylorMade",
                "Titleist",
                "Wilson",
              ],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=11055--88571-4ac50d417ad69",
            },
            {
              title: "Ping",
              date: "2025-06-21",
              region: "Sud-Ouest",
              location: "Golf d'Idron (64)",
              brands: ["Ping"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=14298--57722-bd9fd73fc15c8",
            },
            {
              title: "Mizuno",
              date: "2025-06-24",
              region: "Sud-Ouest",
              location: "Golf de Biarritz le Phare (64)",
              brands: ["Mizuno"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12833--37044-6e8339be71643",
            },
            {
              title: "TaylorMade",
              date: "2025-06-25",
              region: "Centre",
              location: "Golf de Touraine (37)",
              brands: ["TaylorMade"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12839--14670-3a3be707026c6",
            },
            {
              title: "Ping",
              date: "2025-06-25",
              region: "Sud-Ouest",
              location: "Golf d'Alès Ribaute (34)",
              brands: ["Ping"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12842--21776-28db79b7fa7e4",
            },
            {
              title: "TaylorMade",
              date: "2025-06-26",
              region: "Centre",
              location: "Golf de la Tour de Salvagny (01)",
              brands: ["TaylorMade"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12847--17487-8496de99fa3f4",
            },
            {
              title: "Ping",
              date: "2025-06-26",
              region: "Sud-Ouest",
              location: "Golf d'Estolosa (31)",
              brands: ["Ping"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12849--88662-5a28a0de134d5",
            },
            {
              title: "TaylorMade",
              date: "2025-06-26",
              region: "Sud-Est",
              location: "Le Provençal Golf (06)",
              brands: ["TaylorMade"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=14822--38149-1e01fa793ba24",
            },
            {
              title: "Callaway",
              date: "2025-06-27",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["Callaway"],
              link: "https://www.smartagenda.fr/pro/golfplus/rendez-vous/?affrdv&tkaction=12855--25082-e72bc4ca75f5c",
            },
            // generés
{
              title: "Mizuno",
              date: "2025-07-01",
              region: "Centre",
              location: "Golf Club Lyon (69)",
              brands: ["Mizuno"],
            },

            {
              title: "Ping",
              date: "2025-07-01",
              region: "Ile-de-France",
              location: "Chill & Golf (75)",
              brands: ["Ping"],
            },
            {
              title: "Cobra",
              date: "2025-07-04",
              region: "Est",
              location: "Golf de norges (21)",
              brands: ["Cobra"],
            },
            {
              title: "Callaway",
              date: "2025-07-04",
              region: "Nord-Ouest",
              location: "Magasin Golf Plus Dinard (35)",
              brands: ["Callaway"],
            },
            {
              title: "TaylorMade",
              date: "2025-07-05",
              region: "Nord",
              location: "Le Touquet Golf Resort (62)",
              brands: ["TaylorMade"],
            },
            {
              title: "Ping",
              date: "2025-07-05",
              region: "Ile-de-France",
              location: "RCF La boulie (78)",
              brands: ["Ping"],
            },
            {
              title: "Mizuno",
              date: "2025-07-10",
              region: "Nord-Ouest",
              location: "Golf Barrière Deauville (14)",
              brands: ["Mizuno"],
            },
            {
              title: "TaylorMade",
              date: "2025-07-10",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["TaylorMade"],
            },
             {
              title: "multi-marques",
              date: "2025-07-12",
              region: "Sud-Ouest",
              location: "Golf de Chiberta (64)",
              brands: ["Mizuno", "Cobra", "Ping", "TaylorMade"],
            },
            {
              title: "Cleveland/Srixon/XXIO",
              date: "2025-07-18",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["Cleveland", "Srixon", "XXIO"],
            },
            {
              title: "Ping",
              date: "2025-07-18",
              region: "Nord",
              location: "Le Touquet Golf Resort (62)",
              brands: ["Ping"],
            },
            {
              title: "Callaway",
              date: "2025-07-18",
              region: "Sud-Ouest",
              location: "Golf d'Idron (64)",
              brands: ["Callaway"],
            },
             {
              title: "fitting Golf Plus",
              date: "2025-07-19",
              region: "Sud-Ouest",
              location: "Golf d'Ilbarritz (64)",
              brands: ["GolfPlus"],
            },
            {
              title: "Ping",
              date: "2025-07-19",
              region: "Nord",
              location: "Le Touquet Golf Resort (62)",
              brands: ["Ping"],
            },
            {
              title: "multi-marques",
              date: "2025-07-19",
              region: "Sud-Ouest",
              location: "Golf d'Ilbarritz (64)",
              brands: ["GolfPlus"],
            },
            {
              title: "Titleist",
              date: "2025-07-24",
              region: "Nord",
              location: "Magasin Golf Plus Lille (59)",
              brands: ["Titleist"],
            },
            {
              title: "Onoff",
              date: "2025-07-25",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["Onoff"],
            },
            {
              title: "TaylorMade",
              date: "2025-07-25",
              region: "Nord",
              location: "Le Touquet Golf Resort (62)",
              brands: ["TaylorMade"],
            },
            {
              title: "Callaway",
              date: "2025-07-26",
              region: "Nord",
              location: "Le Touquet Golf Resort (62)",
              brands: ["Callaway"],
            },
            {
              title: "TaylorMade",
              date: "2025-07-26",
              region: "Nord-Ouest",
              location: "Golf Barrière Deauville (14)",
              brands: ["TaylorMade"],
            },
            {
              title: "Mizuno",
              date: "2025-07-31",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["Mizuno"],
            },
            {
              title: "Cobra",
              date: "2025-08-02",
              region: "Nord-Ouest",
              location: "Golf Barrière Deauville (14)",
              brands: ["Cobra"],
            },
            {
              title: "Cleveland/Srixon/XXIO",
              date: "2025-08-02",
              region: "Nord-Ouest",
              location: "Golf Barrière Deauville (14)",
              brands: ["Cleveland", "Srixon", "XXIO"],
            },
            {
              title: "Cleveland/Srixon/XXIO",
              date: "2025-08-07",
              region: "Sud-Est",
              location: "Golf du Pic Saint Loup (34)",
              brands: ["Cleveland", "Srixon", "XXIO"],
            },
               {
              title: "multi-marques",
              date: "2025-08-08",
              region: "Sud-Ouest",
              location: "Golf d'Ilbarritz (64)",
              brands: ["Mizuno", "Cobra", "Ping", "TaylorMade", "GolfPlus"],
            },
           
            {
              title: "Ping",
              date: "2025-08-08",
              region: "Sud-Est",
              location: "Le Provençal Golf (06)",
              brands: ["Ping"],
            },
            {
              title: "multi-marques",
              date: "2025-08-08",
              region: "Sud-Ouest",
              location: "Golf d'Ilbarritz (64)",
              brands: ["Mizuno", "Cobra", "TaylorMade", "GolfPlus"],
            },
            {
              title: "Ping",
              date: "2025-08-08",
              region: "Nord",
              location: "Le Touquet Golf Resort (62)",
              brands: ["Ping"],
            },
            {
              title: "Callaway",
              date: "2025-08-08",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["Callaway"],
            },
            {
              title: "Callaway",
              date: "2025-08-09",
              region: "Nord-Ouest",
              location: "Magasin Golf Plus Dinard (35)",
              brands: ["Callaway"],
            },
            {
              title: "Ping",
              date: "2025-08-09",
              region: "Nord",
              location: "Le Touquet Golf Resort (62)",
              brands: ["Ping"],
            },
            {
              title: "Ping",
              date: "2025-08-14",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["Ping"],
            },
            {
              title: "Cleveland/Srixon/XXIO",
              date: "2025-08-14",
              region: "Nord-Ouest",
              location: "Magasin Golf Plus Dinard (35)",
              brands: ["Cleveland", "Srixon", "XXIO"],
            },
            {
              title: "Titleist",
              date: "2025-08-15",
              region: "Nord",
              location: "Le Touquet Golf Resort (62)",
              brands: ["Titleist"],
            },
            {
              title: "multi-marques",
              date: "2025-08-16",
              region: "Sud-Ouest",
              location: "Golf de Chiberta (64)",
              brands: ["Callaway", "Ping", "GolfPlus"],
            },
             {
              title: "multi-marques",
              date: "2025-08-16",
              region: "Sud-Ouest",
              location: "Golf de Chiberta (64)",
              brands: ["Callaway", "Ping", "GolfPlus"],
            },
            {
              title: "Cobra",
              date: "2025-08-22",
              region: "Sud-Ouest",
              location: "Golf d'Arcachon (33)",
              brands: ["Cobra"],
            },
            {
              title: "Callaway",
              date: "2025-09-05",
              region: "Belgique",
              location: "Brussels Drohme Golf Club (BE)",
              brands: ["Callaway"],
            },
            {
              title: "multi-marques",
              date: "2025-09-05",
              region: "Ile-de-France",
              location: "Golf de Paris (PCC) (75)",
              brands: [
                "Callaway",
                "Cleveland",
                "Srixon",
                "XXIO",
                "Cobra",
                "Mizuno",
                "Ping",
                "TaylorMade",
                "Titleist",
                "Wilson",
              ],
            },
          ];

          const uniqueRegions = [
            ...new Set(eventsData.map((e) => e.region)),
          ].sort();
          const uniqueBrands = [
            ...new Set(eventsData.flatMap((e) => e.brands)),
          ].sort();

          uniqueRegions.forEach((region) => {
            const option = document.createElement("option");
            option.value = region;
            option.textContent = region;
            regionFilter.appendChild(option);
          });

          uniqueBrands.forEach((brand) => {
            const option = document.createElement("option");
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
          });

          function createEventCard(event) {
            const card = document.createElement(event.link ? "a" : "div");
            card.className = "card";

            if (event.link) {
              card.href = event.link;
              card.target = "_blank"; // facultatif, pour ouvrir dans un nouvel onglet
              card.style.textDecoration = "none";
              card.style.color = "inherit";
            }

            card.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">
        <span class="title-demo">Démo</span>
        <span class="title-brand">${event.title}</span>
      </h3>
      <span class="card-date">${new Date(event.date).toLocaleDateString(
        "fr-FR",
        {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )}</span>
    </div>
    <div class="card-location">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
      <span>${event.location}</span>
    </div>
    <div>
       ${
         event.brands.length > 1
           ? `<p class="brands-label">Marques présentes :</p>`
           : ""
       }
      <div class="brand-logos ${
        event.brands.length === 1 ? "single-brand" : ""
      }">
${event.brands
  .map(
    (name) => `
  <div class="brand">
    <div class="avatar">
      <img src="${
        brandLogos[name] || "https://via.placeholder.com/100x50?text=Logo"
      }" alt="${name}">
    </div>
    
  </div>
  `
  )
  .join("")}
      </div>
    </div>
  `;

            return card;
          }

          function displayEvents(filteredEvents) {
            eventsContainer.innerHTML = "";
            if (filteredEvents.length === 0) {
              noEventsMessage.style.display = "block";
            } else {
              noEventsMessage.style.display = "none";
              filteredEvents.forEach((event) => {
                const card = createEventCard(event);
                eventsContainer.appendChild(card);
              });
            }
          }

          function filterEvents() {
            const selectedRegion = regionFilter.value;
            const selectedDate = dateFilter.value;
            const selectedBrand = brandFilter.value;

            const filtered = eventsData.filter((event) => {
              const regionMatch =
                !selectedRegion || event.region === selectedRegion;
              const dateMatch = !selectedDate || event.date === selectedDate;
              const brandMatch =
                !selectedBrand || event.brands.includes(selectedBrand);
              return regionMatch && dateMatch && brandMatch;
            });

            displayEvents(filtered);
          }

          regionFilter.addEventListener("change", filterEvents);
          dateFilter.addEventListener("change", filterEvents);
          brandFilter.addEventListener("change", filterEvents);

          displayEvents(eventsData);
        });
