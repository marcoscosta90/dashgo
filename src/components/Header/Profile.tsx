import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Marcos Costa</Text>
            <Text color="gray.300" fontSize="small">
              marcoscosta.dev@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Marcos Costa"
            src="https://github.com/marcoscosta90.png"
          />
        </Flex>
    );
}