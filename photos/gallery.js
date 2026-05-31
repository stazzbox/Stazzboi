fetch("photos.txt")
.then(response => response.text())
.then(text => {

```
const gallery = document.getElementById("gallery");

const records = text.trim().split(/\n\s*\n/);

records.forEach(record => {

    const lines = record.split("\n");

    const file = lines[0]?.trim();
    const caption = lines[1]?.trim();

    if (!file) return;

    const imagePath = "images/" + file;

    const img = document.createElement("img");

    img.src = imagePath;
    img.alt = caption || "";

    img.addEventListener("click", () => {

        document.getElementById("viewer").style.display = "block";

        document.getElementById("viewerImage").src = imagePath;

        document.getElementById("viewerCaption").textContent =
            "Courtesy of The Stazzex. " + (caption || "");

    });

    gallery.appendChild(img);

});
```

});

document.getElementById("close").addEventListener("click", () => {

```
document.getElementById("viewer").style.display = "none";
```

});

