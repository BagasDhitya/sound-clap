import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Input from "../../components/Input";
import axios from "axios";
import Button from "../../components/Button";

const Home = () => {
  const [recommend, setRecommend] = useState([]);

  async function getRecommendations() {
    try {
      const response = await axios.get(
        "https://shazam.p.rapidapi.com/songs/list-recommendations",
        {
          params: {
            key: "484129036",
            locale: "en-US",
          },
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_SHAZAM_KEY,
            "X-RapidAPI-Host": "shazam.p.rapidapi.com",
          },
        }
      );
      setRecommend(response.data.tracks);
      console.log(response.data.tracks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <Layout>
      <div className="w-96 m-10 flex flex-column">
        <Input
          id={"search-recommended"}
          placeholder={"Search recommended ..."}
        />
        <div className="w-20 h-10 mt-3 ml-3">
          <Button id={"search-button"} label="Search" />
        </div>
      </div>
      <p className="font-bold text-2xl m-10">Recommended This Month</p>
      {recommend ? (
        recommend.map((item: any, index) => {
          return (
            <div className="m-5">
              <Card
                id={index}
                image={item.images.background}
                title={item.title}
                subtitle={item.subtitle}
              />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Home;
