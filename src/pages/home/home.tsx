import Card from "../../components/Card";
import "./home.css";
const Home = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 4",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 5",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 6",
    },

    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 7",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 8",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 9",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Card 10",
    },

    // Add more card data as needed
  ];
  return (
    <div className="homeWrapper">
      <div className="mainContent">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} text={card.text}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
