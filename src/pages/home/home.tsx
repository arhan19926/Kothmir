import axios from "axios";
import Card from "../../components/Card";
import "./home.css";
import {
  BASE_BACKEND_URL,
  IRecipeType,
} from "../../utils/constants/common.constant";
import { useEffect, useState } from "react";
const Home = () => {
  const [cardsData, setCardsData] = useState<IRecipeType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getRecipes = async () => {
    try {
      const response = await axios.get(`${BASE_BACKEND_URL}/recipes`);
      setCardsData(response.data.data);
      console.log(`Response :${JSON.stringify(response.data)}`);
    } catch (error) {
      setError(`Error while making getRecipes call: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      
    }, (1000));
    getRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="homeWrapper">
      <div className="mainContent">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.imageUrl}
            text={card.description}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
