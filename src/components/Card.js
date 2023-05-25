import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      {/* <HStack>
        <Box bg='white'>
        <VStack>
        <img src={imageSrc}/>
        </VStack>
        <VStack p="5" color='black'>
        <Heading as='h4' size='md'>{title}</Heading>
        <Text textAlign='left'  >Hekko</Text>
        </VStack>
        </Box>
      </HStack> */}
      <Box textAlign="left" bg="white">
        <Image src={imageSrc} />
        <div style={{padding: 25}}>
        <Heading as="h4" size="md" color="black">
          {title}
        </Heading>
        <Text color="black" py='2'>{description}</Text>
        <Text color='black'fontSize='sm' >See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </div>
      </Box>
    </>
  );
};

export default Card;
