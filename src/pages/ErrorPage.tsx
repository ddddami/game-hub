import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import NavBar from "../NavBar";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <Box padding={5}>
      <NavBar />
      <Heading pb={2}>Oopsie...</Heading>
      {isRouteErrorResponse(error) ? (
        <Text>This page does not exist.</Text>
      ) : (
        <Text>An unexpected error occured.</Text>
      )}
      <Button mt={5} onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
