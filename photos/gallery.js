fetch("photos.txt")
.then(response => response.text())
.then(text => {

    const gallery = document.getElementById("gallery");

    const lines = text.split("\n");

    lines.forEach(line => {

        const match = line.match(/^\d+\.\s*(.+)$/);

        if(!match) return;

        const file = match[1].trim();

        if(file === "") return;
        const imagePath = "images/" + file;

        const img = document.createElement("img");

        img.src = imagePath;

        img.alt = file;

        img.onclick = function(){

            document.getElementById("viewer").style.display = "block";

            document.getElementById("viewerImage").src = imagePath;

        };

        gallery.appendChild(img);

    });

});
document.getElementById("close").onclick = function(){

    document.getElementById("viewer").style.display = "none";

};

document.getElementById("viewer").onclick = function(e){

    if(e.target === this){

        this.style.display = "none";

    }

};
