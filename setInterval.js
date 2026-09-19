 const button = document.getElementById("downloadBtn");
  const progress = document.querySelector(".progress");
  const percentage = document.querySelector(".percentage");

  button.addEventListener("click", () => {
    let value = 0;

    button.disabled = true;
    button.textContent = "Downloading...";

    const download = setInterval(() => {
      value++;

      progress.style.width = value + "%";
      percentage.textContent = value + "%";

      if (value >= 100) {
        clearInterval(download);
        button.textContent = "Download Complete ✓";
      }
    }, 50);
  });