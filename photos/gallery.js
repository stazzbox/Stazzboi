fetch("photodescriptions.txt")
.then(r => r.text())
.then(text => {

    const gallery = document.getElementById("gallery");

    const records = text.trim().split("\n\n");

    let schemaGraph = [];

    records.forEach(record => {

        const parts = record.split("|\n");

        const file = parts[0].trim();
        const displayDesc = parts[1].trim();
        const schemaDesc = parts[2].trim();

        const imagePath = "images/" + file;

        const div = document.createElement("div");
        div.className = "gallery-item";

        div.innerHTML = `
            <img src="${imagePath}"
                 alt="${schemaDesc}">
        `;

        div.addEventListener("click", () => {

            document.getElementById("lightbox").style.display = "block";

            document.getElementById("lightboxImage").src = imagePath;

            document.getElementById("lightboxCaption").textContent =
                displayDesc;

        });

        gallery.appendChild(div);

        schemaGraph.push({
            "@type":"ImageObject",
            "contentUrl":"https://stazzboi.com/photos/" + imagePath,
            "description":schemaDesc,
            "creator":{
                "@type":"Organization",
                "name":"The Stazzex"
            }
        });

    });

    const script = document.createElement("script");

    script.type = "application/ld+json";

    script.textContent = JSON.stringify({
        "@context":"https://schema.org",
        "@graph":schemaGraph
    });

    document.head.appendChild(script);

});

document.getElementById("close").onclick = () => {
    document.getElementById("lightbox").style.display = "none";
};
