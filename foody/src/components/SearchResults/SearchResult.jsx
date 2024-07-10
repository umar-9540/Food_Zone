import styled from "styled-components";
import { BASE_URL } from "../../App";

const SearchResult = (data) => {
    console.log("U:" , data)
    const receivedData=data.data;
  return (
    <FoodCardContainer>
          <FoodCards>
            {console.log("Umar:" ,receivedData)}
            {receivedData?.map((food) => (
              <FoodCard key ={food.name}>
                <div className="food_image">
                    <img src={BASE_URL + food.image} />
                </div>
              </FoodCard>
            ))}
          </FoodCards>
        </FoodCardContainer>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
height: calc(100vh - 210px);
background-image: url("/bg.png");
background-size: cover;
`;

const FoodCards = styled.div``;
const FoodCard = styled.div``;