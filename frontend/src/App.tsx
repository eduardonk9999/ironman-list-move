import { gql, useQuery } from "@apollo/client"


import './styles.css';

type Armor = {
  armor: string;
  img: string;
}

const GET_ARMORS = gql`
  query {
    armors {
      armor
      img
    }
  }

`;


function App() {
  const { data, loading } = useQuery<{ armors: Armor[]}>(GET_ARMORS)


  if(loading) {
    return <p>Carregando !!!</p>
  }

  
  return (
    <>
      <h1>Iron Man Armor - List</h1>
      <ul>
        {data?.armors.map(armor => 
         <li>
          <p>{armor.armor}</p>  
          <img src={armor.img} alt="armor" />
         </li>
        )}
      </ul>
    </>
  )
}

export default App
