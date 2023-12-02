import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociali
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Sociali, a social app for anyone and everyone!
          <p fontSize = "12px">NOTE: Due to the free verison of vercel web hosting, the register page does not work because image uploading is not supported with the free tier of vercel.
            Please use this premade account to view the website! Email: test@gmail.com || Password: test
          </p>
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;