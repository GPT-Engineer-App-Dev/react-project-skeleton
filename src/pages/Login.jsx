import { useEffect } from "react";
import { Container, Box, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Login</Text>
        <Box width="100%">
          <SupabaseAuthUI />
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;