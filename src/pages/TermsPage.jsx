import { Box, Stack } from "@mui/material";
import AppParagraph from "../components/AppParagraphComp";
import PolicySection from "../components/legal/PrivacySection";

const TermsPage = () => {
  const termsSections = [
    {
      number: 1,
      title: "Acceptance of Terms",
      id: "acceptance-of-terms",
      desc: "By using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms, which constitute a legally binding agreement between you and Deekey Tools. We reserve the right to modify these Terms at any time without prior notice. Your continued use of the Website following any changes signifies your acceptance of the new Terms.",
    },
    {
      number: 2,
      title: "Website Content and Use",
      id: "website-content",
      paraSec: [
        {
          paraTitle: "Informational Purpose:",
          paraDesc:
            "The content on this Website is for general informational purposes only and does not constitute a binding offer, a contract, or professional advice. While we strive to ensure the information is accurate and up-to-date, we make no warranties or representations regarding its completeness, accuracy, reliability, suitability, or availability.",
        },
        {
          paraTitle: "No Commercial Use:",
          paraDesc:
            "You may use the Website for personal, non-commercial purposes only. You may not copy, reproduce, distribute, transmit, display, perform, publish, license, modify, create derivative works from, transfer, or sell any information or content obtained from this Website without our prior written consent.",
        },
        {
          paraTitle: "Prohibited Activities:",
          paraDesc:
            "You agree not to use the Website for any purpose that is unlawful or prohibited by these Terms. Prohibited activities include, but are not limited to:",
        },
      ],
      pointsList: [
        {
          points: [
            "Introducing viruses, Trojan horses, worms, logic bombs, or other malicious or technologically harmful material.",
            "Attempting to gain unauthorized access to our servers, computers, or databases.",
            "Interfering with the proper working of the Website.",
            "Using the Website to transmit unsolicited commercial communications (spam).",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Intellectual Property Rights",
      id: "intellectual-property",
      desc: "All intellectual property displayed on this Site is owned by Deekey Tools, unless expressly stated otherwise. Third-party trademarks and logos featured on this Site remain the sole property of their respective owners and are used for identification purposes only.",
      pointsList: [
        {
          points: [
            "Content includes text, images, graphics, product designs, logos, and layouts.",
            "Unauthorized reproduction, distribution, modification, or commercial use is prohibited.",
            "Use of our trademarks or trade names requires prior written consent.",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Careers and Contact Form",
      id: "careers-contact",
      paraSec: [
        {
          paraTitle: "Submission of Information:",
          paraDesc:
            'Our Website includes a "Careers" section and a "Contact" form. By submitting your personal details, resume, or any other information through these forms, you represent and warrant that the information you provide is true, accurate, and complete.',
        },
        {
          paraTitle: "Consent to Processing:",
          paraDesc:
            "By submitting your information, you consent to the collection, storage, and processing of your personal data by Deekey Tools for the purposes of recruitment, responding to your inquiries, and for other legitimate business purposes.",
        },
        {
          paraTitle: "Data Usage and Retention:",
          paraDesc:
            "We will use your information to evaluate your application, communicate with you regarding career opportunities, and for internal record-keeping. Your data will be retained for a reasonable period to consider you for future opportunities unless you request its deletion.",
        },
        {
          paraTitle: "Confidentiality:",
          paraDesc:
            "We will treat your information as confidential; however, we cannot guarantee the absolute security of data transmitted over the internet.",
        },
        {
          paraTitle: "No Offer of Employment:",
          paraDesc:
            "Submitting an application through the Careers section does not create an offer of employment. All employment decisions are subject to the Company's internal hiring processes and policies.",
        },
      ],
    },
    {
      number: 5,
      title: "Disclaimer of Warranties",
      id: "disclaimer",
      paraSec: [
        {
          paraTitle: "AS-IS Basis:",
          paraDesc:
            'The Website and all content, materials, and information provided on it are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, Deekey Tools disclaims all warranties, express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        },
        {
          paraTitle: "No Guarantees:",
          paraDesc:
            "We do not warrant that the Website will be uninterrupted, error-free, secure, or that defects will be corrected. We do not make any guarantees regarding the accuracy, reliability, or quality of any information on the Website.",
        },
      ],
    },
    {
      number: 6,
      title: "Limitation of Liability",
      id: "limitations",
      paraSec: [
        {
          paraTitle: "Exclusion of Damages:",
          paraDesc:
            "In no event shall Deekey Tools, its directors, employees, affiliates, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, or goodwill, arising out of or in connection with your use of the Website or these Terms, even if we have been advised of the possibility of such damages.",
        },
        {
          paraTitle: "Indian Law Application:",
          paraDesc:
            "This limitation of liability is comprehensive and applies to all damages of any kind, whether based in contract, tort, or any other legal theory, as per the laws applicable in India.",
        },
      ],
    },
    {
      number: 7,
      title: "Indemnification",
      id: "indemnification",
      desc: "You agree to indemnify, defend, and hold harmless Deekey Tools, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Website, your violation of these Terms, or your infringement of any intellectual property or other right of any person or entity.",
    },
    {
      number: 8,
      title: "Governing Law and Jurisdiction",
      id: "governing-law",
      paraSec: [
        {
          paraTitle: "Indian Law:",
          paraDesc:
            "These Terms and Conditions shall be governed by and construed in accordance with the laws of India.",
        },
        {
          paraTitle: "Jurisdiction:",
          paraDesc:
            "The court in Hosur, Tamil Nadu, India, shall have exclusive jurisdiction to resolve any dispute arising out of or relating to these Terms or your use of the Website.",
        },
      ],
    },
    {
      number: 9,
      title: "General Provisions",
      id: "general-provisions",
      paraSec: [
        {
          paraTitle: "Severability:",
          paraDesc:
            "If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will remain in full force and effect.",
        },
        {
          paraTitle: "Waiver:",
          paraDesc:
            "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
        },
        {
          paraTitle: "Entire Agreement:",
          paraDesc:
            "These Terms constitute the entire agreement between you and Deekey Tools regarding your use of the Website.",
        },
      ],
    },
    {
      number: 10,
      title: "Contact Us",
      id: "contact-us",
      desc: "If you have any questions about these Terms, please contact us at:",
      paraSec: [
        {
          paraTitle: "Email:",
          paraDesc: "admin@deekeytools.com",
        },
      ],
    },
  ];
  return (
    <Stack className="gap-[30px] px-[20px] md:px-[50px]">
      <Box className="w-[100%] md:h-[247px] flex justify-center items-center bg-[#EBF1F4]">
        <h2 className="text-[20px] md:text-[26px] xl:text-[36px] text-[#1A1A1A] font-[500] leading-[30px] text-center">
          Terms And Conditions
        </h2>
      </Box>
      <Stack className="md:px-[30px] gap-[30px]">
        <Stack className="gap-[45px]">
          <Box className="flex justify-end items-center">
            <h3>Last Updated On: September 05, 2025</h3>
          </Box>
          <Stack className="gap-[30px]">
            <AppParagraph
              text={
                "Welcome to the official website of Deekey Tools (hereinafter referred to as “we,” “our,” or “us”). By accessing or using this website (“Site”), you agree to comply with and be bound by these Terms and Conditions (“Terms”). If you do not agree, please refrain from using this Site."
              }
            />
          </Stack>
        </Stack>
        <Stack gap={"20px"}>
          {termsSections?.map((section) => (
            <PolicySection
              number={section?.number}
              id={section?.id}
              description={section?.desc}
              title={section?.title}
              pointList={section?.pointsList}
              paraWithHeader={section?.paraSec}
              note={section?.note}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TermsPage;
