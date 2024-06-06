import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Private from "./pages/Private.jsx";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Flex, Box, Text, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      <Route path="/private" element={session ? <Private /> : <Navigate to="/login" />} />
      </Routes>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr={4}>Home</Button>
          <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">About</Button>
          {session ? (
            <Button onClick={logout} variant="ghost" colorScheme="whiteAlpha">Logout</Button>
          ) : (
            <Button as={Link} to="/login" variant="ghost" colorScheme="whiteAlpha">Login</Button>
          )}
        </Box>
      </Flex>
    </Router>
  );
}

export default App;