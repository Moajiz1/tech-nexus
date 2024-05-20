import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  ListItem,
  Divider,
  List,
  Grid,
  GridItem,
  Button,
  Image,
} from "@chakra-ui/react";
// import { blogPosts } from "../blogposts/blogs";
// import { Link } from "react-router-dom";

const HomePage = () => (
  // <Box p={4}>
  //   <Heading as="h1" mb={4}>
  //     Recent Blog Posts
  //   </Heading>
  //   <Stack spacing={4}>
  //     {blogPosts.map((post) => (
  //       <Box key={post.id} p={5} shadow="md" borderWidth="1px">
  //         <Heading as="h2" fontSize="xl">
  //           {post.title}
  //         </Heading>
  //         <Text mt={2}>{post.summary}</Text>
  //       </Box>
  //     ))}
  //   </Stack>
  // </Box>

  // <Box p={5}>
  //   <VStack spacing={5} align="stretch">
  //     <Box textAlign="center">
  //       <Heading as="h1" size="2xl" mb={4}>
  //         Welcome to Tech Nexus
  //       </Heading>
  //       <Text fontSize="xl">Your Gateway to the Future of Technology</Text>
  //     </Box>

  //     <Text>
  //       At Tech Nexus, we are passionate about bringing you the latest and
  //       greatest in technology, innovation, and digital transformation. Whether
  //       you're a tech enthusiast, a professional in the field, or just someone
  //       curious about the ever-evolving world of technology, you've come to the
  //       right place.
  //     </Text>

  //     <Divider />

  //     <Box>
  //       <Heading as="h2" size="lg" mb={4}>
  //         What We Offer
  //       </Heading>
  //       <VStack align="stretch" spacing={3}>
  //         <Box>
  //           <Heading as="h3" size="md" mb={2}>
  //             In-Depth Articles
  //           </Heading>
  //           <Text>
  //             Explore our comprehensive articles that delve deep into the latest
  //             technological advancements. From artificial intelligence and
  //             machine learning to blockchain and quantum computing, our expert
  //             writers provide detailed analyses and insights.
  //           </Text>
  //         </Box>

  //         <Box>
  //           <Heading as="h3" size="md" mb={2}>
  //             Breaking News
  //           </Heading>
  //           <Text>
  //             Stay up-to-date with the latest news in the tech industry. Our
  //             team is dedicated to bringing you real-time updates and breaking
  //             stories from around the world.
  //           </Text>
  //         </Box>

  //         <Box>
  //           <Heading as="h3" size="md" mb={2}>
  //             Expert Reviews
  //           </Heading>
  //           <Text>
  //             Read our unbiased reviews on the latest gadgets, software, and
  //             tech services. We test and evaluate products to help you make
  //             informed decisions.
  //           </Text>
  //         </Box>

  //         <Box>
  //           <Heading as="h3" size="md" mb={2}>
  //             Tutorials and How-Tos
  //           </Heading>
  //           <Text>
  //             Enhance your skills with our easy-to-follow tutorials and how-to
  //             guides. Whether you're looking to master a new programming
  //             language or troubleshoot a tech issue, our step-by-step
  //             instructions have you covered.
  //           </Text>
  //         </Box>

  //         <Box>
  //           <Heading as="h3" size="md" mb={2}>
  //             Community Engagement
  //           </Heading>
  //           <Text>
  //             Join our vibrant community of tech enthusiasts. Share your ideas,
  //             ask questions, and connect with like-minded individuals in our
  //             forums and comment sections.
  //           </Text>
  //         </Box>
  //       </VStack>
  //     </Box>

  //     <Divider />

  //     <Box>
  //       <Heading as="h2" size="lg" mb={4}>
  //         Featured Topics
  //       </Heading>
  //       <List spacing={3}>
  //         <ListItem>
  //           <HStack>
  //             <Heading as="h4" size="md">
  //               <Link>Artificial Intelligence:</Link>
  //             </Heading>
  //             <Text>
  //               Discover how AI is transforming industries and what the future
  //               holds.
  //             </Text>
  //           </HStack>
  //         </ListItem>
  //         <ListItem>
  //           <HStack>
  //             <Heading as="h4" size="md">
  //               <Link>Blockchain Technology:</Link>
  //             </Heading>
  //             <Text>
  //               Learn about the impact of blockchain on finance, security, and
  //               beyond.
  //             </Text>
  //           </HStack>
  //         </ListItem>
  //         <ListItem>
  //           <HStack>
  //             <Heading as="h4" size="md">
  //               <Link>Cybersecurity:</Link>
  //             </Heading>
  //             <Text>
  //               Stay informed on the latest threats and how to protect yourself.
  //             </Text>
  //           </HStack>
  //         </ListItem>
  //         <ListItem>
  //           <HStack>
  //             <Heading as="h4" size="md">
  //               <Link>Gadgets and Devices:</Link>
  //             </Heading>
  //             <Text>Get the scoop on the newest tech toys and tools.</Text>
  //           </HStack>
  //         </ListItem>
  //         <ListItem>
  //           <HStack>
  //             <Heading as="h4" size="md">
  //               <Link>Software Development:</Link>
  //             </Heading>
  //             <Text>
  //               Find resources and tips for becoming a better developer.
  //             </Text>
  //           </HStack>
  //         </ListItem>
  //         <ListItem>
  //           <HStack>
  //             <Heading as="h4" size="md">
  //               <Link>Tech Innovations:</Link>
  //             </Heading>
  //             <Text>
  //               Explore groundbreaking inventions and futuristic concepts.
  //             </Text>
  //           </HStack>
  //         </ListItem>
  //       </List>
  //     </Box>
  //   </VStack>
  // </Box>

  <Box p={5}>
    {/* Welcome Section */}
    <Box textAlign="center" mb={10}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Tech Nexus
      </Heading>
      <Text fontSize="xl" mb={6}>
        Your Gateway to the Future of Technology
      </Text>
      <Box ml={500}>
        <Image
          src="https://via.placeholder.com/800x400"
          alt="Tech Nexus"
          borderRadius="md"
        />
      </Box>
    </Box>

    <Divider />

    {/* What We Offer Section */}
    <Box my={10}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        What We Offer
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="In-Depth Articles"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                In-Depth Articles
              </Heading>
              <Text>
                Explore our comprehensive articles that delve deep into the
                latest technological advancements. From artificial intelligence
                and machine learning to blockchain and quantum computing, our
                expert writers provide detailed analyses and insights.
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Breaking News"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                Breaking News
              </Heading>
              <Text>
                Stay up-to-date with the latest news in the tech industry. Our
                team is dedicated to bringing you real-time updates and breaking
                stories from around the world.
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Expert Reviews"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                Expert Reviews
              </Heading>
              <Text>
                Read our unbiased reviews on the latest gadgets, software, and
                tech services. We test and evaluate products to help you make
                informed decisions.
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Tutorials and How-Tos"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                Tutorials and How-Tos
              </Heading>
              <Text>
                Enhance your skills with our easy-to-follow tutorials and how-to
                guides. Whether you're looking to master a new programming
                language or troubleshoot a tech issue, our step-by-step
                instructions have you covered.
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>

    <Divider />

    {/* Community Engagement Section */}
    <Box my={10}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Community Engagement
      </Heading>
      <Text textAlign="center" mb={6}>
        Join our vibrant community of tech enthusiasts. Share your ideas, ask
        questions, and connect with like-minded individuals in our forums and
        comment sections.
      </Text>
      <Box textAlign="center">
        <Image
          src="https://via.placeholder.com/800x400"
          alt="Community Engagement"
          borderRadius="md"
        />
      </Box>
    </Box>

    <Divider />

    {/* Featured Topics Section */}
    <Box my={10}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Featured Topics
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        <GridItem>
          <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
            <Heading as="h4" size="md" mb={2}>
              Artificial Intelligence
            </Heading>
            <Text>
              Discover how AI is transforming industries and what the future
              holds.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
            <Heading as="h4" size="md" mb={2}>
              Blockchain Technology
            </Heading>
            <Text>
              Learn about the impact of blockchain on finance, security, and
              beyond.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
            <Heading as="h4" size="md" mb={2}>
              Cybersecurity
            </Heading>
            <Text>
              Stay informed on the latest threats and how to protect yourself.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
            <Heading as="h4" size="md" mb={2}>
              Gadgets and Devices
            </Heading>
            <Text>Get the scoop on the newest tech toys and tools.</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
            <Heading as="h4" size="md" mb={2}>
              Software Development
            </Heading>
            <Text>
              Find resources and tips for becoming a better developer.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
            <Heading as="h4" size="md" mb={2}>
              Tech Innovations
            </Heading>
            <Text>
              Explore groundbreaking inventions and futuristic concepts.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>

    <Divider />

    {/* Call to Action Section */}
    <Box textAlign="center" my={10}>
      <Heading as="h2" size="lg" mb={4}>
        Join Us
      </Heading>
      <Text fontSize="lg" mb={6}>
        Subscribe to our newsletter to receive the latest updates, or follow us
        on social media to stay connected. If you have any questions,
        suggestions, or feedback, don't hesitate to reach out. We're here to
        help you navigate the exciting world of technology.
      </Text>
      <Button colorScheme="teal" size="lg">
        Subscribe Now
      </Button>
    </Box>
  </Box>
);

export default HomePage;
