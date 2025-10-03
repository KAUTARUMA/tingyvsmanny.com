const container = document.getElementById("tiersContainer");
const data = [
  {
    "name": "Static Icon",
    "price": "~10$USD/per",
    "desc1": "An illustration of your choosing, at any resolution you desire.",
    "desc2": "Project files included.",
    "image": "examples/static/image0.png",
    "images": [
      "static/image0.png",
      "static/image1.png"
    ]
  },
  {
    "name": "Animated Icon",
    "price": "~20$USD/per",
    "desc1": "For animations that are simpler to execute.",
    "desc2": "Project files included.",
    "images": [
      "animated/image0.webp",
      "animated/image1.gif",
      "animated/image2.webp",
      "animated/image3.gif",
      "animated/image4.gif"
    ]
  },
  {
    "name": "Complex Animated Icon",
    "price": "~30$USD/per",
    "desc1": "For animations that are more complex to execute.",
    "desc2": "Project files included.",
    "images": [
      "complex_animated/image0.webp",
      "complex_animated/image1.gif",
      "complex_animated/image2.gif",
      "complex_animated/image3.gif"
    ]
  },
  {
    "name": "Other",
    "price": "?$CAD",
    "desc1": "Got something else in mind? Feel free to contact me!",
    "desc2": "I can work in Moho, Adobe Animate, and Blender.",
    "image": "examples/other/image0.webp",
    "images": [
      "other/image0.webp",
      "other/image1.gif",
      "other/image2.gif",
      "other/image3.gif",
      "other/image4.gif",
      "other/image5.webp",
      "other/image6.webp"
    ]
  }
]

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