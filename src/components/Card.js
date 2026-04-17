import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return(
    <VStack
      borderRadius="8px"
      bg="white"
      color="black"
      align="flex-start">
      <Image
        src={imageSrc}
        borderRadius={8}
        height={300}
        width="100%" />
      <VStack padding={6} spacing={4} align="flex-start">
        <Heading size="md"> {title} </Heading>
        <Text>{description}</Text>
        <HStack>
          <Text fontWeight="semibold" size="sm" alignContent="left">
            <a> See more <FontAwesomeIcon icon={faArrowRight} size="sm" /> </a>
          </Text>
        </HStack>
      </VStack>
  </VStack >
    );
};

export default Card;
