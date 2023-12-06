import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineHeart, AiOutlineBars } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import Login from "./Login";
import { format } from "date-fns";
// import { app } from "./firebase"; // Import the Firebase app instance

import {
  SimpleGrid,
  Box,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardBody,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const News = () => {
  const [data, setData] = useState([
    {
      title:
        "Apple warns India against EU-like USB-C rules for iPhones, says move will hit local production targets",
      description:
        "The Indian government has been considering making USB-C ports the standard charging port for phones and personal devices, just like the EU. However, Apple is lobbying the government to not implement such a policy, saying that it will interfere with their local production targets",
      content:
        "Apple has informed the Indian government about potential disruptions to its local production targets if New Delhi proceeds with adopting the European Union’s mandate for universal charging ports on existing iPhone models, as per a report by Reuters.\n... [2959 chars]",
      url: "https://www.firstpost.com/tech/apple-warns-india-against-eu-like-usb-c-rules-for-iphones-says-move-will-hit-local-production-targets-13470772.html",
      image:
        "https://images.firstpost.com/wp-content/uploads/2023/12/Apple-warns-India-against-EU-like-USB-C-rules-for-iPhones-says-move-will-hit-local-production-targets-.jpg",
      publishedAt: "2023-12-06T04:31:09Z",
      source: {
        name: "Firstpost",
        url: "https://www.firstpost.com",
      },
    },
    {
      title:
        "This iOS 17 Bug Switches Apps When Typing On iPhone: Here's The Fix",
      description:
        "Apple has yet to officially acknowledge the bug, but it is anticipated to be addressed in a future iOS update.",
      content:
        "A new report has claimed that a growing number of iPhone users have encountered an annoying bug in iOS 17 that causes the app switcher to unexpectedly appear while they are typing. This bug has been reported by multiple users across various platforms... [1835 chars]",
      url: "https://www.news18.com/tech/this-ios-17-bug-switches-apps-when-typing-on-iphone-heres-the-fix-8692575.html",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/11/iphone-15-plus-review-india-2023-11-4ac20fb9621375d1da2f30b5d5d1f21d-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2023-12-06T04:00:31Z",
      source: {
        name: "News18",
        url: "https://www.news18.com",
      },
    },
    {
      title: "Apple Now Considers First-Gen iPhone SE As 'Vintage'",
      description:
        "iPhone SE has made it to Apple's Vintage products list, and now joins iPhone 6S. Curious about the 'vintage' and 'obsolete' tag? Here's what it means.",
      content:
        "Apple keeps adding old products to its list of vintage and obsolete products, and the latest one to join the club is the first-generation iPhone SE. This 4-inch device borrowed its design from the iPhone 5 and the iPhone 5S.\nAs spotted by MacRumors, ... [1456 chars]",
      url: "https://www.news18.com/tech/apple-now-considers-first-gen-iphone-se-as-vintage-what-it-means-for-users-8692667.html",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/12/iphone-se-2023-12-6ceda68ecd524604e138c3191e61dbce-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2023-12-06T03:24:02Z",
      source: {
        name: "News18",
        url: "https://www.news18.com",
      },
    },
  ]);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (article) => {
    // Check if the article is already in favorites
    const existingIndex = favorites.findIndex(
      (fav) => fav.title === article.title
    );

    if (existingIndex === -1) {
      // If not in favorites, add it
      const updatedFavorites = [...favorites, article];
      setFavorites(updatedFavorites);
      // Save to local storage
      localStorage.setItem("favoritesNews", JSON.stringify(updatedFavorites));
      console.log(localStorage.getItem("favoritesNews"));
    } else {
      // If already in favorites, remove it
      const updatedFavorites = [
        ...favorites.slice(0, existingIndex),
        ...favorites.slice(existingIndex + 1),
      ];
      setFavorites(updatedFavorites);
      // Save to local storage
      localStorage.setItem("favoritesNews", JSON.stringify(updatedFavorites));
    }
  };

  const [toggle, setToggle] = useState(true);

  const fetchData = () => {
    //    7649cce50f41bf2f49be221e574950d7
    axios
      .get(
        "https://gnews.io/api/v4/search?q=apple&apikey=6130cb9bc10d2781fb26422c3ed11517"
      )
      // "https://newsapi.org/v2/everything?q=tesla&from=2023-07-02&sortBy=publishedAt&apiKey=92b256ea57174afdb6dac3356ce54565"
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const formattedData = data.map((item) => ({
    ...item,
    publishedAt: format(new Date(item.publishedAt), "MMMM d, yyyy HH:mm:ss"),
  }));

  return (
    <Box w="100%">
      <>
        <SimpleGrid
          columns={[1, 2, 2]}
          w="100%"
          spacing={10}
          className="bg-[#17182e] px-4 sm:px-10 md:px-28 lg:px-[150px] xl:px[250px] pt-14 relative"
        >
          {formattedData.map((el, index) => {
            return (
              <Card className="cardBg" key={index}>
                <CardBody pt={0} px={0} className="">
                  <div class="relative">
                    <Image
                      src={el.image}
                      alt={el.author}
                      borderRadius="md"
                      className=""
                    />
                    <div class="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-black bg-opacity-20"></div>
                  </div>

                  <Flex mx={10}>
                    <Text color="gray.500" mt="4" textAlign="left">
                      {el.publishedAt}
                    </Text>
                    <Spacer />
                    <Text
                      cursor="pointer"
                      color="red.500"
                      py={3}
                      px={3}
                      fontSize={22}
                      borderRadius={50}
                      onClick={() => handleFavoriteClick(el)}
                    >
                      <AiOutlineHeart />
                    </Text>
                  </Flex>

                  <Stack mt="6" spacing="3" mx={6}>
                    <Heading size="lg" textAlign="left" color="whitesmoke">
                      {el.title}
                    </Heading>
                    <Text fontSize={18} color="whiteAlpha.700" textAlign="left">
                      {el.description}
                    </Text>
                  </Stack>
                  <Text color="blue.300" textAlign="left" mt="2" mx={6}>
                    <a
                      href={el.url}
                      className="bg-gray-600 py-2 w-fit px-5 rounded-md flex justify-center items-center no-underline  articleUrl"
                    >
                      <u className="flex justify-center items-center text-slate-200 no-underline">
                        Full Article
                      </u>
                    </a>
                  </Text>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </>
    </Box>
  );
};

export default News;
