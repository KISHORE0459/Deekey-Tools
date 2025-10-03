const getEmailJsValues = () => {
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATe_ID;
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  const jobTemplateId = import.meta.env.VITE_EMAIL_JOB_TEMPLATE_ID;
  return {
    templateId: templateId,
    serviceId: serviceId,
    publicKey: publicKey,
    jobTemplateId: jobTemplateId,
  };
};

export default getEmailJsValues;
