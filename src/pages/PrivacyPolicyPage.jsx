import { Box, Stack } from "@mui/material";
import AppParagraph from "../components/AppParagraphComp";
import PolicySection from "../components/legal/PrivacySection";

const PrivacyPolicyPage = () => {
  const privacySectionData = [
    {
      number: 1,
      id: "information-we-collect",
      title: "Information We Collect",
      desc: "We may collect the following categories of information when you interact with our website, submit a contact form, or apply for a job with us:",
      pointsList: [
        {
          points: [
            "Contact Form Submissions: This includes your name, email address, phone number, company/organization name, and the details of your message.",
            "Job Applications: This may include your name, email address, phone number, postal address, resume/CV, cover letter, work experience, qualifications, etc and any additional information you voluntarily provide as part of the application.",
            "Website Data: This may include technical information such as your IP address, browser type, device information, cookies, and analytics data (if used).",
          ],
        },
      ],
      note: "We do not collect financial details, passwords, or other sensitive personal data through our website.",
    },
    {
      number: 2,
      title: "Use of Information",
      id: "use-of-information",
      desc: "We use the information collected from you strictly for legitimate business and operational purposes. This may include, but is not limited to:",
      pointsList: [
        {
          points: [
            "Responding to inquiries and business-related communication to provide relevant information or support.",
            "Processing and reviewing job applications submitted through our careers section.",
            "Maintaining records required for business operations, documentation, and compliance purposes.",
            "Improving our website and services to enhance user experience and efficiency.",
            "Complying with applicable Indian laws and regulations to ensure legal and statutory obligations are met.",
          ],
        },
      ],
      note: "We will not use your personal information for any purpose other than those specified above, unless you provide explicit consent.",
    },
    {
      number: 3,
      title: "Sharing of Information",
      id: "sharing-of-information",
      desc: "We do not sell, rent, or trade your personal information to third parties. However, we may share your information in limited circumstances, such as:",
      pointsList: [
        {
          points: [
            "Internal teams for the purpose of handling communication, inquiries, and recruitment processes.",
            "Service providers such as email hosting, IT support, and analytics partners, who are bound by confidentiality and data protection obligations.",
            "Government authorities, regulatory bodies, or courts where disclosure is legally required or necessary to protect our rights and comply with applicable laws.",
          ],
        },
      ],
      note: "We do not collect financial details, passwords, or other sensitive personal data through our website.",
    },
    {
      number: 4,
      title: "Data Retention",
      id: "data-retention",
      desc: "We will retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including meeting any legal, regulatory, or business obligations. The retention periods may vary depending on the type of information:",
      pointsList: [
        {
          points: [
            "Contact Form Data: Retained for as long as necessary to address inquiries and maintain relevant business records.",
            "Job Applications: Retained for the duration of the recruitment process and may be securely stored for consideration in future opportunities, unless you request deletion.",
            "Website Data: Retained for analytics, performance improvement, and security monitoring purposes for a limited period of time.",
          ],
        },
      ],
      note: "After this period, or upon your request, your personal data will be securely deleted or anonymized",
    },
    {
      number: 5,
      title: "Data Security",
      id: "data-security",
      desc: "We are committed to ensuring the security of your personal data and have implemented reasonable security practices and procedures to safeguard it from unauthorized access, loss, misuse, or alteration. In compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, we follow industry-standard measures, which include:",
      pointsList: [
        {
          points: [
            "Secured servers and firewalls to protect against unauthorized access.",
            "Limited access to personal data granted only to authorized staff on a need-to-know basis.",
            "Periodic review of data handling practices to strengthen security measures and ensure compliance.",
          ],
        },
      ],
      note: "While we take all reasonable steps to protect your personal information, please note that no system is completely secure, and we cannot guarantee absolute security of data transmitted over the Internet.",
    },
    {
      number: 6,
      title: "Cookies & Analytics",
      id: "cookies-analytics",
      desc: `Our website may use cookies and similar tracking technologies to enhance user experience, analyze performance, and improve our services. Cookies are small files stored on your device when you visit a website, which help us remember certain information and understand how visitors interact with our site.`,
      pointsList: [
        {
          pointTitle: "We may use the following types of cookies and tools:",
          points: [
            "Essential Cookies: Required for the proper functioning of the website, such as enabling navigation and access to secure areas.",
            "Performance & Analytics Cookies: Used to collect information about how visitors use our website (e.g., pages visited, time spent, browser type), which helps us improve content and usability.",
            "Functionality Cookies: Help remember your preferences and settings to provide a more personalized experience.",
            "Third-Party Analytics Tools: We may use Analytics services from third party service providers, which may place their own cookies and collect usage data. These providers process data in accordance with their privacy policies.",
          ],
        },
      ],
      note: "You may control or disable cookies through your browser settings. However, please note that some features of our website may not function properly if cookies are disabled. We do not use cookies to collect sensitive personal information such as financial details, passwords, or identification data.",
    },
    {
      number: 7,
      title: "Your Rights as a Data Principal",
      id: "your-right",
      desc: "We respect your rights regarding your personal data and provide options in line with applicable laws. You may exercise the following rights depending on your location:",
      pointsList: [
        {
          pointTitle:
            "Under Indian Law (Digital Personal Data Protection Act, 2023):",
          points: [
            "Right to Access: Request access to your personal data that we hold.",
            "Right to Correction: Request the correction or updation of your personal data if it is inaccurate or incomplete.",
            "Right to Erasure: Request the deletion of your personal data, subject to legal obligations.",
            "Right to Withdraw Consent: You have the right to withdraw your consent at any time for the processing of your personal data. The withdrawal of consent will not affect the lawfulness of processing carried out before the withdrawal.",
            "Right to Grievance Redressal: File a grievance with our designated Data Protection Officer (DPO) or Grievance Officer.",
          ],
        },
        {
          pointTitle: "Under Global Laws (where applicable):",
          points: [
            "GDPR (EU/EEA users): Right to data portability, right to object to certain types of processing, and right to lodge a complaint with supervisory authorities.",
            "CCPA (California, USA users): Right to know the categories of personal data collected, right to opt out of the sale of personal data (if applicable), and right to request deletion of personal data.",
          ],
        },
      ],
      note: "To exercise any of these rights, please contact us using the details provided in the Contact Information section of this Privacy Policy.",
    },
    {
      number: 8,
      title: "International Visitors",
      id: "international-visiters",
      desc: "If you are accessing our website from outside India, please note that your personal data may be transferred to and stored in India. Data protection laws in India may differ from those in your country of residence. However, we are committed to ensuring that your data is handled securely and in compliance with applicable privacy standards.",
      pointsList: [
        {
          pointTitle: "Our measures include:",
          points: [
            "Data transfers to India in accordance with the Digital Personal Data Protection Act, 2023 and other applicable Indian laws.",
            "Reasonable security practices such as encryption, secure servers, and restricted access to safeguard your information.",
            "Periodic review of compliance measures to align with recognized international data protection principles.",
            "Third-country transfers: In some cases, your data may be processed or stored outside India (e.g., if we use third-party services for analytics, cloud hosting, or email servers located internationally). In such instances, we ensure that appropriate safeguards and contractual obligations are in place to protect your information.",
          ],
        },
      ],
    },
    {
      number: 9,
      title: "Governing Law & Jurisdiction",
      id: "governing-law",
      desc: "This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (DPDP Act). Any disputes arising from or related to this Privacy Policy shall fall under the exclusive jurisdiction of the Courts of Tamil Nadu, India.",
      pointsList: [
        {
          pointTitle:
            "For international users, we will honor rights under global privacy frameworks to the extent required by law, including but not limited to:",
          points: [
            "Indian Law: Rights under the IT Act, 2000 and DPDP Act, 2023, including access, correction, withdrawal of consent, deletion (subject to obligations), and grievance redressal.",
            "GDPR (European Union/EEA): Rights to access, correct, port, object to processing, and lodge complaints with supervisory authorities.",
            "CCPA (California, USA): Rights to know the categories of data collected, opt out of sale of data (if applicable), and request deletion.",
            "Other applicable privacy laws: Additional rights will be respected in accordance with the laws of your jurisdiction.",
          ],
        },
      ],
    },
    {
      number: 10,
      title: "Policy Updates",
      id: "privacy-updates",
      desc: "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or other factors. Any updates will be published on this page with a revised “Effective Date” at the top of the policy. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
      pointsList: [
        {
          pointTitle: "Key points regarding updates:",
          points: [
            "Updates will be posted on this page.",
            "The effective date will be revised with every update.",
            "Continued use of our website or services after updates constitutes your acceptance of the revised Privacy Policy",
          ],
        },
      ],
    },
    {
      number: 11,
      title: "Contact",
      id: "contact",
      desc: "If you have any concerns, questions, or wish to exercise your data protection rights, you may contact us using the details below. We are committed to addressing your inquiries and resolving any issues promptly in compliance with applicable laws.",
      pointsList: [
        {
          pointTitle: "Company Contact Details:",
          points: [
            "Company Name: Deekey Tools",
            "Head office Location: No. 1/3E/91C, Nethaji nagar, 3rd Phase Sidco, Sipcot post, Hosur, Tamil Nadu - 635126, India",
            "Email: admin@deekeytools.com",
          ],
        },
        {
          pointTitle: "Grievance Officer / Data Protection Officer (DPO):",
          points: ["Name: Mr. Deepak", "Email: deepak@deekeytools.com"],
        },
      ],
    },
  ];

  return (
    <Stack className="gap-[30px] px-[20px] md:px-[50px]">
      <Box className="w-[100%] md:h-[247px] flex justify-center items-center bg-[#EBF1F4]">
        <h2 className="text-[20px] md:text-[26px] xl:text-[36px] text-[#1A1A1A] font-[500] leading-[30px] text-center">
          Privacy Policy
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
                "This Privacy Policy describes how Deekey Tools (hereinafter referred to as “we”, “our”, or “us”) is committed to protecting the privacy of all individuals who visit or interact with us through our website. This Privacy Policy outlines how we collect, use, store, and protect your information in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (“DPDP Act”)."
              }
            />
            <AppParagraph
              text={
                "This policy does not apply to third-party websites linked from our site."
              }
            />
          </Stack>
        </Stack>
        <Stack gap={"20px"}>
          {privacySectionData?.map((section) => (
            <PolicySection
              number={section?.number}
              id={section?.id}
              description={section?.desc}
              title={section?.title}
              pointList={section?.pointsList}
              note={section?.note}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PrivacyPolicyPage;
