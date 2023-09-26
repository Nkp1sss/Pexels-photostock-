export const downloadImage = async (imageSrc: string, imageName: string) => {
  const imageBlob = await fetch(imageSrc).then((response) =>
    response.arrayBuffer().then((buffer) => new Blob([buffer], { type: 'image/jpeg' }))
  );

  const link = document.createElement('a');
  link.href = URL.createObjectURL(imageBlob);
  link.download = imageName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
