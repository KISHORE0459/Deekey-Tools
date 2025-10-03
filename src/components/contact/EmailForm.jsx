import { Box, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import AppButton from "../AppButton";
import emailjs from "@emailjs/browser";
import getEmailJsValues from "../functions/getEmailJsValues";

const EmailForm = ({ customClassName = "" }) => {
  const { templateId, serviceId, publicKey } = getEmailJsValues();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (val) => {
    const templateParams = {
      name: val.name,
      email: val.email,
      phone_number: val.phone_number,
      subject: val.subject,
      message: val.content,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert("✅ Message sent successfully!");
        reset();
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("❌ Failed to send message. Try again.");
      });
  };

  return (
    <Stack
      className={`p-[20px] rounded-[20px] shadow-md gap-[20px] max-w-[625px] flex-1 bg-white w-full ${customClassName}`}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "18px", md: "24px", xl: "27px" },
          color: "#A20F05",
          mb: 1,
        }}
      >
        Let's get connected
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />

          <TextField
            label="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />

          <TextField
            label="Phone Number"
            type="tel"
            {...register("phone_number", {
              required: "Phone number is required",
            })}
            error={!!errors.phone_number}
            helperText={errors.phone_number?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />

          <TextField
            label="Subject"
            {...register("subject", { required: "Subject is required" })}
            error={!!errors.subject}
            helperText={errors.subject?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />

          <TextField
            label="Message"
            multiline
            rows={4}
            {...register("content", { required: "Message is required" })}
            error={!!errors.content}
            helperText={errors.content?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />

          <Box className="flex justify-end !mt-[25px]">
            <AppButton
              BtnVariant="redContained"
              btnType="submit"
              className="!rounded-[30px]"
            >
              Send Message
            </AppButton>
          </Box>
        </Stack>
      </form>
    </Stack>
  );
};

export default EmailForm;
