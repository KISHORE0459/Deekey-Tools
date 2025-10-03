import { useDropzone } from "react-dropzone";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { useCallback } from "react";
import { IoClose } from "react-icons/io5";

const formatFileSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const AppFileUploader = ({ file, onFileSelect, onRemove, error }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    disabled: !!file, // disable uploader when file is present
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
  });

  return (
    <Box>
      {!file ? (
        <Box
          {...getRootProps()}
          sx={{
            border: "2px dashed #ccc",
            borderRadius: "12px",
            p: 3,
            textAlign: "center",
            cursor: "pointer",
            height: "100px",
            transition: "all 0.2s ease",
            "&:hover": { borderColor: "#1976d2" },
            ...(isDragActive && {
              borderColor: "#1976d2",
              background: "#f0f8ff",
            }),
          }}
          className="flex justify-center items-center"
        >
          <input {...getInputProps()} />
          <Typography variant="body1" color="textSecondary">
            {isDragActive
              ? "Drop your resume here..."
              : "Drag & drop your resume, or click to browse"}
          </Typography>
          {error && (
            <Typography color="error" variant="caption">
              {error}
            </Typography>
          )}
        </Box>
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            p: 2,
            background: "#fafafa",
          }}
        >
          <Box>
            <Typography variant="body1" fontWeight={500}>
              {file.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {formatFileSize(file.size)}
            </Typography>
          </Box>
          <IconButton onClick={onRemove} color="error">
            <IoClose />
          </IconButton>
        </Stack>
      )}
    </Box>
  );
};

export default AppFileUploader;
