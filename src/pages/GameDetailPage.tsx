import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { id } = useParams();
  return <div>GameDetailPage - {id}</div>;
};

export default GameDetailPage;
