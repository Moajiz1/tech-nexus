import React from "react";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function About() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>We ara about to build tech blog web site</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Tech Nexus
    //     </a>
    //   </header>
    // </div>

    // <Box p={4}>
    //   <Heading as="h1" mb={4}>
    //     {about.title}
    //   </Heading>
    //   <Text mb={4}>{about.content}</Text>
    //   <Heading as="h2" size="md">
    //     About the Author
    //   </Heading>
    //   <Text>{about.bio}</Text>
    // </Box>

    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Box textAlign="center">
          <Heading color={"white"} as="h1" size="2xl" mb={4}>
            About Tech Nexus
          </Heading>
        </Box>

        <Divider />

        <Box>
          <Text color={"white"} fontSize="xl" mb={4}>
            Tech Nexus was founded by a group of tech aficionados with a mission
            to make technology accessible and understandable to everyone. We
            believe that technology has the power to change the world, and we
            aim to be at the forefront of this transformation by providing
            high-quality content and fostering a community of learners and
            innovators.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading color={"white"} as="h2" size="lg" mb={4}>
            Our Mission
          </Heading>
          <Text fontSize="lg" color={"white"}>
            Our mission is to be the premier source of tech knowledge and
            innovation. We strive to bring you the latest in technological
            advancements and insights, enabling you to stay ahead in the
            fast-paced world of technology. Whether you're a beginner or an
            expert, our goal is to provide you with the resources you need to
            thrive.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading color={"white"} as="h2" size="lg" mb={4}>
            Our Team
          </Heading>
          <VStack color={"white"} align="stretch" spacing={4}>
            <HStack spacing={4}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://via.placeholder.com/100"
                alt="Team Member 1"
              />
              <Box>
                <Heading as="h3" size="md">
                  John Doe
                </Heading>
                <Text>Founder & CEO</Text>
                <Text>
                  John has over 20 years of experience in the tech industry,
                  leading innovative projects and startups.
                </Text>
              </Box>
            </HStack>
            <HStack spacing={4}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://via.placeholder.com/100"
                alt="Team Member 2"
              />
              <Box>
                <Heading as="h3" size="md">
                  Jane Smith
                </Heading>
                <Text>Chief Technology Officer</Text>
                <Text>
                  Jane is a tech visionary with a passion for developing
                  cutting-edge solutions and mentoring young tech enthusiasts.
                </Text>
              </Box>
            </HStack>
            <HStack spacing={4}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://via.placeholder.com/100"
                alt="Team Member 3"
              />
              <Box>
                <Heading as="h3" size="md">
                  Alice Johnson
                </Heading>
                <Text>Head of Content</Text>
                <Text>
                  Alice is dedicated to creating informative and engaging
                  content, ensuring that our readers get the most out of our
                  site.
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Box>

        <Divider />

        <Box color={"white"}>
          <Heading as="h2" size="lg" mb={4}>
            Join Us
          </Heading>
          <Text fontSize="lg">
            We are always looking for passionate and talented individuals to
            join our team. If you are interested in contributing to Tech Nexus,
            please reach out to us. Let's shape the future of technology
            together!
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
