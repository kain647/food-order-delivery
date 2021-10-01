import React, { useState } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryFull } from "react-icons/bs";
import { CgSignal } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { CgSortAz } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import {
  Container,
  CardIngredient,
  CardProfile,
  CardItem,
  Header,
  Time,
  Icons,
  MenuBox,
  RightBox,
  CartNumber,
  CartBox,
  Title,
  IngredientContainer,
  IngredientBox,
  IngredientTitle,
  IngredientSubtitle,
  ColorBox,
  ItemContainer,
  ItemBox,
  PhotoItem,
  TitleItem,
  SaladTitle,
  InfoBox,
  Price,
  Plus,
  Minus,
  ControlBox,
  Total,
  TotalTitle,
  Logo,
  Name,
  ProfileBox,
  Reviews,
  Follower,
  Recipe,
  ColumnBox,
  Order,
  Collection,
  Connect,
  SaladBox,
  SaladBoxTwo,
  PageBox,
  Page,
  NameIngredient,
  ReviewsBox,
  Score,
  Description,
} from "./styled";

const FoodCard = (props) => {
  const { profile, total } = props;
  const [greek, setGreek] = useState(0);
  const [caesar, setCaesar] = useState(0);
  return (
    <Container>
      <CardIngredient>
        <Header>
          <Time>9:41</Time>
          <Icons>
            <CgSignal />
            <AiOutlineWifi />
            <BsBatteryFull />
          </Icons>
        </Header>
        <MenuBox>
          <BsChevronLeft className={`Left`} />
          <RightBox>
            <BsSearch className={`Search`} />
            <CartBox>
              <ImCart className={`Cart`} />
              <CartNumber>2</CartNumber>
            </CartBox>
          </RightBox>
        </MenuBox>
        <Title>ingredient.</Title>
        <IngredientContainer>
          <IngredientBox>
            <img src={`images/tomato.png`} />
            <IngredientTitle>Peru imported tomato</IngredientTitle>
            <IngredientSubtitle>300 GRAM</IngredientSubtitle>
          </IngredientBox>
          <IngredientBox>
            <img src={`images/peppers.png`} />
            <IngredientTitle>Fresh big bell pepper</IngredientTitle>
            <IngredientSubtitle>2 GRAM</IngredientSubtitle>
          </IngredientBox>
        </IngredientContainer>
        <PageBox>
          <Page active />
          <Page />
          <Page />
          <Page />
        </PageBox>
        <NameIngredient>Peru imported tomato</NameIngredient>
        <ReviewsBox>
          <Score>9.7</Score>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </ReviewsBox>
        <Description>
          Tomatoes were first grown in Peru and Mexico in South America. Because
          of the color, the locals regard it as a poisonous fruit and regard ir
          as the "fruit of the fox".
        </Description>
      </CardIngredient>
      <CardProfile>
        <ColorBox>
          <Header>
            <Time profile={profile}>9:41</Time>
            <Icons>
              <CgSignal />
              <AiOutlineWifi />
              <BsBatteryFull />
            </Icons>
          </Header>
          <MenuBox>
            <CgSortAz />
            <span>MY PROFILE</span>
            <MdMessage />
          </MenuBox>
          <Logo>
            <img src={`images/user.jpg`} /> <Name>Marie Marshall</Name>
          </Logo>
        </ColorBox>
        <ProfileBox>
          <Reviews>
            15<span>Reviews</span>
          </Reviews>
          <Follower>
            10<span>Followers</span>
          </Follower>
          <Recipe>
            50<span>Recipe</span>
          </Recipe>
        </ProfileBox>
        <ColumnBox>
          <Order>Order</Order>
          <Collection>Collection</Collection>
          <Connect>Connect</Connect>
        </ColumnBox>
        <SaladBox>
          <img src={`images/wing.com.png`} />
          <InfoBox>
            <SaladTitle>Greek Salad</SaladTitle>
            <Price>7.5$</Price>
          </InfoBox>
        </SaladBox>
        <SaladBoxTwo>
          <img src={`images/pngwing.com.png`} />
          <InfoBox>
            <SaladTitle>Caesar Salad</SaladTitle>
            <price>8.2 $</price>
          </InfoBox>
        </SaladBoxTwo>
      </CardProfile>
      <CardItem>
        <Header>
          <Time>9:41</Time>
          <Icons>
            <CgSignal />
            <AiOutlineWifi />
            <BsBatteryFull />
          </Icons>
        </Header>
        <Title>
          item cart.<span>edit</span>
        </Title>
        <ItemContainer>
          <ItemBox>
            <PhotoItem>
              <img src={`images/pngegg.png`} />
              <InfoBox>
                <TitleItem>Salad</TitleItem>
                <SaladTitle>Greek Salad</SaladTitle>
                <Price>7.5$</Price>
              </InfoBox>
              <ControlBox>
                <Minus
                  onClick={() => {
                    if (greek <= 0) return;
                    setGreek(greek - 1);
                  }}
                >
                  -
                </Minus>
                <div>{greek}</div>
                <Plus
                  onClick={() => {
                    if (greek >= 10) return;
                    setGreek(greek + 1);
                  }}
                >
                  +
                </Plus>
              </ControlBox>
            </PhotoItem>
          </ItemBox>
          <ItemBox>
            <PhotoItem>
              <img src={`images/pngwing.com.png`} />
              <InfoBox>
                <TitleItem>Salad</TitleItem>
                <SaladTitle>Caesar Salad</SaladTitle>
                <Price>8.2$</Price>
              </InfoBox>
              <ControlBox>
                <Minus
                  onClick={() => {
                    if (caesar <= 0) return;
                    setCaesar(caesar - 1);
                  }}
                >
                  -
                </Minus>
                <div>{caesar}</div>
                <Plus
                  onClick={() => {
                    if (caesar >= 10) return;
                    setCaesar(caesar + 1);
                  }}
                >
                  +
                </Plus>
              </ControlBox>
            </PhotoItem>
          </ItemBox>
          <Total>
            <TotalTitle>Total</TotalTitle>
            <span>{total}</span>
          </Total>
        </ItemContainer>
      </CardItem>
    </Container>
  );
};

export default FoodCard;
