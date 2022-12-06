import { Heading, HStack } from '@chakra-ui/react';

function Home() {
  return (
    <HStack h="100vh" w="100vw" justifyContent='center'>
      <Heading as="h1" size="4xl">Hello, World!</Heading>
    </HStack>
  );
}

export default Home;
