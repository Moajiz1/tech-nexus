import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import futureOfAI from "./Future_Of_Artificial_Intelligence.avif";
import blockchain from "./Blockchain Technology.jpg";
import gadgets from "./gadgets-logo-8647845AA1-seeklogo.com.png";
import quantum from "./quantum-computing.jpg";
import fiveG from "./960x0.webp";
import smartHome from "./Smarthome_Illustration-1024x939.jpg";
import electricV from "./electric-car-freepik.avif";
import bigData from "./1685965315663.jpeg";
import cybersecurity from "./what-is-cybersecurity.jpg";
import aiImpact from "./Future_Of_Artificial_Intelligence.avif";

export default function Blogs() {
  const posts = [
    {
      title: "The Future of AI: What to Expect",
      summary:
        "Artificial Intelligence is transforming the world. Discover the trends and predictions...",
      imageUrl: futureOfAI,
      link: "#",
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      summary:
        "Blockchain technology is more than just Bitcoin. Explore its applications in various industries.",
      imageUrl: blockchain,
      link: "#",
    },
    {
      title: "Top 10 Gadgets of 2024",
      summary:
        "From smart home devices to the latest in wearable tech, check out the must-have gadgets of the year.",
      imageUrl: gadgets,
      link: "#",
    },
    {
      title: "Quantum Computing",
      summary:
        "Quantum computers are set to revolutionize technology. Learn about their potential...",
      imageUrl: quantum,
      link: "#",
    },
    {
      title: "5G Technology: Pros and Cons",
      summary:
        "5G is the next big leap in mobile technology. Understand its benefits and the challenges it faces.",
      imageUrl: fiveG,
      link: "#",
    },

    {
      title: "The Evolution of Smart Homes",
      summary:
        "Smart home technology is rapidly advancing. Explore the latest innovations making homes more intelligent and connected.",
      imageUrl: smartHome,
      link: "#",
    },
    {
      title: "Electric Vehicles: The Road Ahead",
      summary:
        "EVs are becoming more popular each day. Learn about the future of electric vehicles and their impact on the environment.",
      imageUrl: electricV,
      link: "#",
    },
    {
      title: "The Role of Big Data in Healthcare",
      summary:
        "Big data is transforming healthcare. See how data analytics is improving patient care and medical research in daily bussiness.",
      imageUrl: bigData,
      link: "#",
    },
    {
      title: "Cybersecurity Trends 2024",
      summary:
        "Cyber threats are evolving. Stay ahead with insights into the latest trends in cybersecurity and systems of security world.",
      imageUrl: cybersecurity,
      link: "#",
    },

    {
      title: "The Impact of AI on Job Markets",
      summary:
        "AI is changing the job landscape. Understand how artificial intelligence is affecting employment and what to expect.",
      imageUrl: aiImpact,
      link: "#",
    },
  ];

  return (
    <>
      <Box p={5}>
        <Box textAlign="center" mb={10}>
          <Heading
            fontFamily={"serif"}
            color={"white"}
            as="h1"
            size="2xl"
            mb={4}
          >
            Our Blog
          </Heading>
          <Text color={"white"} fontFamily={"monospace"} fontSize="xl">
            Stay updated with the latest trends, insights, and innovations in
            the tech world.
          </Text>
        </Box>

        <Grid
          fontFamily={"monospace"}
          color={"white"}
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={6}
        >
          {posts.map((post, index) => (
            <GridItem height={"100%"} key={index} w="100%">
              <Box
                _hover={{
                  bg: "red.900",
                  color: "white",
                  transform: "scale(1.05)",
                }}
                borderWidth="1px"
                borderRadius="lg"
                overflow="auto"
                height={500}
              >
                <Image src={post.imageUrl} alt={post.title} />

                <Box p={6}>
                  <Heading as="h3" size="lg" mb={2}>
                    <Link href={post.link} color="teal.500">
                      {post.title}
                    </Link>
                  </Heading>
                  <Text mb={4}>{post.summary}</Text>
                  <Link href={post.link}>
                    <Button colorScheme="teal">Read More</Button>
                  </Link>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
}
