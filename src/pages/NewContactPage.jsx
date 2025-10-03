import { useRef } from "react";
import ContactImage from "../assets/Contact/ContactImage.png";
import AppButton from "../components/AppButton";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import EmailForm from "../components/contact/EmailForm";
import { downloadBrochure } from "../components/commonFunctions/downloadBrochure";

const ContactPage = () => {
  const formRef = useRef(null);

  const location = "https://maps.app.goo.gl/U6QgykAFbkvGRZSF7";

  const handleExternalNav = (link) => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.click();
  };

  // Scroll to form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heroSection = {
    title: "Get in touch",
    description:
      "Have questions, comments, or concerns? We’re here to help! Reach out to us using the contact information provided below. Whether you prefer to send an email, or drop by in person, our dedicated team is ready to assist you.",
    button: "Download Brochure",
    image: ContactImage,
  };

  const openGmailCompose = () => {
    const recipient = "sales@deekeytools.com";
    const subject = "";
    const body = "";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect user
    window.open(gmailUrl, "_blank"); // opens in new tab
    // or window.location.href = gmailUrl; // redirects in same tab
  };

  const openDialer = () => {
    window.location.href = "tel:+1234567890";
    // Will open dialer with number pre-filled
  };

  const contactBoxes = [
    {
      icon: <CiMail className="w-[27px] h-[27px] flex-shrink-0" />,
      title: "Send us Email",
      description:
        "Have questions, ideas, or just want to say hello? Drop us an email below and our team will get in contact asap!",
      button: "Email us",
      btnOnClick: openGmailCompose,
    },
    {
      icon: <CiLocationOn className="w-[27px] h-[27px] flex-shrink-0" />,
      title: "Find our Headquarters",
      description:
        "Locate and connect with our office for personalized assistance. Use the location below to find us!",
      button: "Locate us",
      btnOnClick: () => handleExternalNav(location),
    },
    {
      icon: <CiPhone className="w-[27px] h-[27px] flex-shrink-0" />,
      title: "Give us a call",
      description:
        "Prefer speaking directly? Reach out to us over the phone and our team will be happy to assist you right away!",
      button: "Call us",
      btnOnClick: openDialer,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[50px] items-center px-4 md:px-12 lg:px-24 mt-[100px]">
      <div className="mt-[30px]">
        <AppButton
          BtnVariant="redOutlined"
          BtnOnClick={scrollToForm}
          className="w-[200px] h-[44px] !text-[20px] !font-[600]"
        >
          Contact Us
        </AppButton>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col xl:flex-row gap-8 justify-center items-start">
        <div className="flex flex-col justify-center items-center gap-[50px] max-w-[550px] mt-[50px]">
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <h1 className="text-[24px] md:text-[35px] xl:text-[48px] font-[600] leading-[100%]">
              {heroSection.title}
            </h1>
            <p className="text-[#999999] text-[14px] md:text-[16px] leading-[150%] font-[500] text-center">
              {heroSection.description}
            </p>
          </div>
          <AppButton
            BtnVariant="redContained"
            className="!rounded-[200px]"
            BtnOnClick={downloadBrochure}
          >
            {heroSection.button}
          </AppButton>
        </div>
        <img
          src={heroSection.image}
          alt="Contact Illustration"
          className="xl:!w-[700px] xl:!h-[450px] 2xl:!w-[800px] 2xl:!h-[520px] flex-shrink-0"
        />
      </section>

      {/* Contact Boxes */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-stretch mx-auto gap-[20px] xl:gap-[40px] w-[100%]">
        {contactBoxes.map((box, index) => (
          <div
            key={index}
            className="bg-white shadow-md flex flex-col gap-[10px] items-stretch w-[300px] md:w-[360px] h-auto min-h-[300px] md:min-h-[270px] px-[20px] py-[30px] border-[.1px] border-[#575757] rounded-[30px] hover:cursor-pointer"
          >
            {box?.icon && box?.icon}
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[16px] md:text-[20px] font-[500] mb-1 text-[#A20F05]">
                {box.title}
              </h2>
              <p className="text-[#999999] text-[14px] md:text-[16px] font-[400] leading-[150%]">
                {box.description}
              </p>
            </div>
            <AppButton
              BtnVariant="redContained"
              className="!rounded-[100px] w-fit !mt-[15px]"
              BtnOnClick={box.btnOnClick}
            >
              {box.button}
            </AppButton>
          </div>
        ))}
      </section>

      {/* Contact Form Section */}
      <section
        ref={formRef}
        className="w-full flex flex-col md:flex-row justify-center items-center gap-[50px] max-w-[1100px] mt-[40px]"
      >
        <div className="space-y-4">
          <EmailForm customClassName="!max-w-[500px] !w-[300px] md:!w-[500px] flex-shrink-0 !shadow-2xl" />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-[18px] md:text-[20px] text-[#A20F05] font-[600]">
            Together, We Create Possibilities
          </h2>
          <p className="text-gray-600">
            Every great partnership starts with a conversation. Reach out to us
            today and let’s explore the possibilities together!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
