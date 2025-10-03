const container = document.getElementById("tiersContainer");

fetch('/examples/commdata.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(tier => {
      const tierDivHolder = document.createElement("div");
      tierDivHolder.className = "tierDivHolder";

      const tierDiv = document.createElement("div");
      tierDiv.className = "tierDiv";

      const table = document.createElement("table");
      table.width = "100%";
      table.height = "100%";

      const thImages = document.createElement("th");
      thImages.width = "80%";

      const insideDiv = document.createElement("div");
      insideDiv.className = "insideTierDiv";

      if (tier.images) {
            tier.images.forEach(src => {
                const imgDiv = document.createElement("div");
                
                imgDiv.className = "imageInsideTierDiv";
                const img = document.createElement("img");
                img.src = "examples/" + src;
                img.width = "100";

                img.alt = `${tier.name} example`;
                img.loading = 'lazy';

                const link = document.createElement("a");
                link.href = img.src;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.title = "Open image in new tab";
                
                link.appendChild(img);
                imgDiv.appendChild(link);
                insideDiv.appendChild(imgDiv);
            });
      }

      thImages.appendChild(insideDiv);

      const thInfo = document.createElement("th");
      thInfo.className = "tierInfo";
      thInfo.innerHTML = `
        <h2>${tier.name}</h2>
        <h3>${tier.price}</h3>
        <p>${tier.desc1}</p>
        <br>
        <p>${tier.desc2}</p>
      `;

      table.appendChild(thImages);
      table.appendChild(thInfo);
      tierDiv.appendChild(table);
      tierDivHolder.appendChild(tierDiv);
      container.appendChild(tierDivHolder);
    });
  });