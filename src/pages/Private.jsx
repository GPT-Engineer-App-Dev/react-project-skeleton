import { Container, Text, VStack } from "@chakra-ui/react";

const Private = () => {
  return (
    <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Protected Page</Text>
        <Text fontSize="lg">This page is only accessible to authenticated users.</Text>
      </VStack>
    </Container>
  );
};

export default Private;