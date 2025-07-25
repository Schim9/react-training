import { useLocation } from 'react-router-dom';

export default function Webshop () {
  // useLocation nous permet de récupérer les données de la route
  let data = useLocation();
  console.log(data);

  return <h1>Webshop </h1>;
}
