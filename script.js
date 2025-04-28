document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("guestBookForm");
    const guestList = document.getElementById("guestList");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("guestName").value.trim();
        const message = document.getElementById("guestMessage").value.trim();
        const timestamp = new Date().toLocaleString();

        if (name && message) {
            const guestEntry = document.createElement("div");
            guestEntry.className = "guest-entry";
            guestEntry.innerHTML = `
                <p><strong class="guest-name">${name}</strong></p>
                <p>${message}</p>
                <p><small>${timestamp}</small></p>
                <button class="done-btn">Selesai</button>
                <button class="delete-btn">Hapus</button>
            `;

            const doneButton = guestEntry.querySelector(".done-btn");
            const guestName = guestEntry.querySelector(".guest-name");
            doneButton.addEventListener("click", () => {
                if (guestName.style.textDecoration === "line-through") {
                    guestName.style.textDecoration = "none";
                    doneButton.textContent = "Selesai";
                } else {
                    guestName.style.textDecoration = "line-through";
                    doneButton.textContent = "Batal";
                }
            });

            guestEntry.querySelector(".delete-btn").addEventListener("click", () => {
                guestList.removeChild(guestEntry);
            });

            guestList.appendChild(guestEntry);

            form.reset();
        } else {
            alert("Harap isi semua kolom!");
        }
    });
});