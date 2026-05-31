fetch("photodescriptions.txt")
.then(response => response.text())
.then(text => {

```
const gallery = document.getElementById("gallery");

const records = text.trim().split(/\n\s*\n/);

const schemaGraph = [];

records.forEach(record => {

    const lines = record.split("\n");

    const file = lines[0]?.trim();
    const displayDesc = lines[1]?.trim();
    const schemaDesc = lines[2]?.trim();

    if(!file) return;

    const imagePath = "images/" + file;

    const div = document.createElement("div");
    div.className = "gallery-item";

    const img = document.createElement("img");

    img.src = imagePath;
    img.alt = schemaDesc;

    div.appendChild(img);

    div.addEventListener("click", () => {

        document.getElementById("lightbox").style.display = "block";

        document.getElementById("lightboxImage").src = imagePath;

        document.getElementById("lightboxCaption").textContent = displayDesc;

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
```

});

document.getElementById("close").addEventListener("click", () => {

```
document.getElementById("lightbox").style.display = "none";
```

});
