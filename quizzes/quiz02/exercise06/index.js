const photos = [
  { image_url: "images/poppies.jpg", is_favorite: true },
  { image_url: "images/dogwoods.jpg", is_favorite: true },
  { image_url: "images/blossom.jpg", is_favorite: false },
  { image_url: "images/field3.jpg", is_favorite: false },
  { image_url: "images/field4.jpg", is_favorite: false },
  { image_url: "images/branch.jpg", is_favorite: true },
  { image_url: "images/red.jpg", is_favorite: true },
  { image_url: "images/purple2.jpg", is_favorite: false },
  { image_url: "images/field1.jpg", is_favorite: false },
  { image_url: "images/purple.jpg", is_favorite: true },
  { image_url: "images/jar.jpg", is_favorite: true },
  { image_url: "images/green.jpg", is_favorite: false },
  { image_url: "images/green1.jpg", is_favorite: true },
  { image_url: "images/purple1.jpg", is_favorite: false },
  { image_url: "images/magnolias.jpg", is_favorite: false },
  { image_url: "images/daisy1.jpg", is_favorite: true },
];

document.addEventListener("DOMContentLoaded", function () {
  const imagesDiv = document.querySelector(".images");

  let htmlContent = ""; // Store HTML content for efficiency

  // Loop through the photos array
  photos.forEach((photo) => {
    if (photo.is_favorite) {
      // Only display favorite images
      htmlContent += `
                <div class="image-card">
                    <img src="${photo.image_url}" alt="Favorite Photo" loading="lazy">
                </div>
            `;
    }
  });

  // Insert all images at once
  imagesDiv.innerHTML = htmlContent;
});
