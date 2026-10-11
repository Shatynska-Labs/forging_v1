const container = document.querySelector(".container");

const openGallery = (projectId, title, count) => {
  const modal = document.createElement("div");
  modal.className = "modal";

  const header = document.createElement("header");
  header.append(title);

  const closeButton = document.createElement("img");
  closeButton.className = "close-button";
  closeButton.src = "/images/close.png";
  closeButton.alt = "Закрити";
  header.append(closeButton);

  const bigImage = document.createElement("img");
  bigImage.id = "big-image";
  bigImage.src = `/images/projects/${projectId}/0.jpg`;
  bigImage.alt = title;

  const thumbnails = document.createElement("div");
  thumbnails.id = "container-of-thumbnails";
  // data-count is the highest image index, so the range is inclusive.
  for (let i = 0; i <= count; i++) {
    const thumbnail = document.createElement("img");
    thumbnail.className = "thumbnail";
    thumbnail.src = `/images/projects/${projectId}/${i}.jpg`;
    thumbnail.alt = title;
    thumbnail.loading = "lazy";
    thumbnail.addEventListener("click", () => {
      bigImage.src = thumbnail.src;
    });
    thumbnails.append(thumbnail);
  }

  modal.append(header, bigImage, thumbnails);
  container.append(modal);

  const close = () => {
    modal.remove();
    document.removeEventListener("keydown", onKeydown);
  };
  const onKeydown = (e) => {
    if (e.key === "Escape") close();
  };

  closeButton.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") close();
  });
  document.addEventListener("keydown", onKeydown);
};

document.querySelectorAll("figure img").forEach((image) => {
  image.addEventListener("click", () => {
    openGallery(
      image.dataset.project,
      image.alt,
      Number(image.dataset.count),
    );
  });
});
