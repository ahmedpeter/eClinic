const importImages = (context) => {
  let images = {};
  context.keys().forEach((key) => {
    images[key.replace("./", "")] = context(key);
  });
  return images;
};

// Function to dynamically import images from multiple directories
export function importAllImages() {
  const homeImages = importImages(
    require.context("../../assets/img/home", false, /\.(png|jpe?g|svg)$/)
  );
  const vidImages = importImages(
    require.context("../../assets/img/video", false, /\.(png|jpe?g|svg)$/)
  );
  const favImages = importImages(
    require.context("../../assets/img/favorite", false, /\.(png|jpe?g|svg)$/)
  );
  const landingImages = importImages(
    require.context("../../assets/img/landing", false, /\.(png|jpe?g|svg)$/)
  );
  const reviewImages = importImages(
    require.context("../../assets/img/review", false, /\.(png|jpe?g|svg)$/)
  );
  const galleryImages = importImages(
    require.context("../../assets/img/gallery", false, /\.(png|jpe?g|svg)$/)
  );
  const flagImages = importImages(
    require.context("../../assets/img/flags", false, /\.(png|jpe?g|svg)$/)
  );
  const socialImages = importImages(
    require.context("../../assets/img/social-icon", false, /\.(png|jpe?g|svg)$/)
  );
  const videoImages = importImages(
    require.context("../../assets/img/video", false, /\.(png|jpe?g|svg)$/)
  );

  return {
    ...homeImages,
    ...vidImages,
    ...favImages,
    ...galleryImages,
    ...reviewImages,
    ...landingImages,
    ...flagImages,
    ...socialImages,
    ...videoImages,
  };
}
