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
import { blogPosts } from "./blogs";

export default function Blogs() {
  const posts = [
    {
      title: "The Future of AI: What to Expect",
      summary:
        "Artificial Intelligence is transforming the world. Discover the trends and predictions for AI in the coming years.",
      imageUrl: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      summary:
        "Blockchain technology is more than just Bitcoin. Explore its applications in various industries.",
      imageUrl: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      title: "Top 10 Gadgets of 2024",
      summary:
        "From smart home devices to the latest in wearable tech, check out the must-have gadgets of the year.",
      imageUrl: "https://via.placeholder.com/400x250",
      link: "#",
    },
  ];

  return (
    <>
      {/* {blogPosts.map((data) => {
        return (
          <Box p={4}>
            <Heading as="h1" mb={4}>
              {data.title}
            </Heading>
            <Text fontSize="sm" mb={4}>
              {data.author} - {new Date(data.date).toLocaleDateString()}
            </Text>
            <Text>{data.content}</Text>
          </Box>
        );
      })} */}

      <Box p={5}>
        <Box textAlign="center" mb={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Our Blog
          </Heading>
          <Text fontSize="xl">
            Stay updated with the latest trends, insights, and innovations in
            the tech world.
          </Text>
        </Box>

        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {posts.map((post, index) => (
            <GridItem key={index} w="100%">
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
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
