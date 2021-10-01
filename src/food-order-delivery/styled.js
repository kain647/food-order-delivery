import styled from "styled-components";
export const Container = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
  @media (max-width: 768px) {
	  display: flex;
	  align-items: center;
	  flex-direction: column;
  }
`;
export const CardIngredient = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 600px;
  background-color: #fff;
  margin-right: 20px;
  @media (max-width: 768px) {
	  margin-bottom: 10px;
	  margin-right: 0;
	  margin-top: 10px;
  }
`;
export const CardProfile = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 600px;
  background-color: #fff;
  margin-right: 20px;
  @media (max-width: 768px) {
	  margin-bottom: 10px;
	  margin-right: 0;
  }
`;
export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 600px;
  background-color: #fff;
  @media (max-width: 768px) {
	  margin-bottom: 10px;
  }
`;

export const ContainerFoodCard = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 300px;
  height: 600px;
  background-color: #fff;
  margin-right: 30px;
  :last-child {
    margin-right: 0;
  }
`;
export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
`;
export const Time = styled.div`
  display: flex;
  box-sizing: border-box;
  font-size: 14px;
  //color: ${({ profile = "#fff" }) => profile};
`;
export const Icons = styled.div`
  display: flex;
  svg {
    box-sizing: border-box;
    width: var(--size);
    height: var(--size);
    --size: 16px;
    margin-right: 3px;
  }
`;
export const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  color: #fff;
  font-weight: 500;
  .Left {
    color: gray;
    cursor: pointer;
  }
`;
export const RightBox = styled.div`
  display: flex;
  .Search {
    color: grey;
    cursor: pointer;
  }
  .Cart {
    color: red;
  }
  svg {
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const CartNumber = styled.div`
  display: flex;
  position: absolute;
  width: 12px;
  height: 12px;
  font-size: 8px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: -5px;
  right: 5px;
  border: 1px solid #fff;
  background-color: #f1d400;
`;
export const CartBox = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fe4602;
  padding: 10px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  span {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
`;
export const IngredientContainer = styled.div`
  display: flex;
  padding: 10px;
`;
export const IngredientBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 200px;
  margin-right: 20px;
  box-shadow: 0px 0px 5px 0px rgba(196, 196, 196, 1);
  background-size: cover;
  :last-child {
    margin-right: 0;
  }
`;
export const IngredientTitle = styled.div`
  display: flex;
  color: #525252;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const IngredientSubtitle = styled.div`
  display: flex;
  margin-left: 10px;
  color: #e46a2c;
  font-weight: 500;
  letter-spacing: 1.5px;
`;
export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ff4601;
  width: 100%;
  height: 300px;
  border-radius: 0 0 50px 50px;
`;
export const ItemContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ItemBox = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 150px;
  box-shadow: 0px 0px 5px 0px rgba(196, 196, 196, 1);
  margin-bottom: 20px;
  border-radius: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const PhotoItem = styled.div`
  display: flex;
  width: 75px;
  height: 150px;
  background-size: cover;
  img {
    padding: 15px;
  }
`;
export const TitleItem = styled.div`
  display: flex;
`;
export const SaladTitle = styled.div`
  display: flex;
  width: 100px;
`;
export const InfoBox = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  justify-content: center;
  flex-direction: column;
  line-height: 2;
`;
export const Price = styled.div`
  display: flex;
`;
export const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  padding: 10px;
  background-color: #ffcc00;
  color: #fff;
  font-weight: 700;
  border-radius: 10px 0 10px 0;
  cursor: pointer;
`;
export const Minus = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: #ff4601;
  color: #fff;
  font-weight: 700;
  border-radius: 0 10px 0 10px;
  cursor: pointer;
`;
export const ControlBox = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`;
export const Total = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 300px;
  justify-content: space-between;
  span {
    color: #f2590e;
    font-weight: 700;
  }
`;
export const TotalTitle = styled.div`
  display: flex;
  color: #535353;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 3px;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 10px;
    border-radius: 50%;
  }
`;
export const Name = styled.div`
  display: flex;
  font-weight: 500;
  color: #fff;
  font-size: 24px;
`;
export const ProfileBox = styled.div`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 80px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px rgb(196 196 196);
  background-color: #fff;
  border-radius: 10px;
  top: 270px;
`;
export const Reviews = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Follower = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Recipe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ColumnBox = styled.div`
  display: flex;
  position: absolute;
  width: 270px;
  bottom: 36%;
  justify-content: space-between;
`;
export const Order = styled.div`
  display: flex;
  font-weight: 500;
  color: #ff4601;
  cursor: pointer;
`;
export const Collection = styled.div`
  display: flex;
  font-weight: 500;
  color: #b5b5b5;
  cursor: pointer;
`;
export const Connect = styled.div`
  display: flex;
  font-weight: 500;
  color: #b5b5b5;
  cursor: pointer;
`;
export const SaladBox = styled.div`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 80px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px rgb(196 196 196);
  background-color: #fff;
  border-radius: 10px;
  bottom: 3%;
  img {
    width: 70px;
    height: auto;
    background-size: cover;
  }
`;
export const SaladBoxTwo = styled.div`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 80px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px rgb(196 196 196);
  background-color: #fff;
  border-radius: 10px;
  bottom: 20%;
  img {
    width: 70px;
    height: auto;
    background-size: cover;
  }
`;
export const PageBox = styled.div`
  display: flex;
  padding: 10px;
`;
export const Page = styled.div`
  display: flex;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#ff4601" : "#d9d9d9")};
  margin-right: 10px;
  cursor: pointer;
  :last-child {
    margin-right: 0;
  }
`;
export const NameIngredient = styled.div`
  display: flex;
  color: #ff4601;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 26px;
  padding: 10px;
`;
export const ReviewsBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 500;
  letter-spacing: 1.5px;
  svg {
    color: #ffcb02;
    margin-right: 5px;
    cursor: pointer;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const Score = styled.div`
  display: flex;
  margin-right: 15px;
  color: #4b4b4b;
`;
export const Description = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  color: #a4a4a4;
`;
