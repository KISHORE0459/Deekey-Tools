export const downloadBrochure = () => {
  const link = document.createElement("a");
  link.href = "/pdf/Deekey Tools - Brochure.pdf";
  link.download = "Deekey Tools - Brochure";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
