import React from "react";
import styled from "styled-components"
import Image from "./../assets/image.jfif"
import { Button } from "../components/button/Button";
import { ContainerCard } from "../components/containerCard/ContainerCard";

export const Card = () => {
    return (
        <StyledCard>
            <Img src={Image} alt="Пустыня" />
            <ContainerCard>
                <TitleCard>Headline</TitleCard>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <Button>See more</Button>
                <Button>Save</Button>                
            </ContainerCard>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 0 15px #9d1818;
    width: 300px;
    padding-top: 10px;

    button + button {
        margin-left: 12px;
    }

    button {
        margin-bottom: 22px;
    }
`

const Img = styled.img`
    width: 280px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    margin: 0 auto;
`

const TitleCard = styled.h3`
    font-family: Inter;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #000000;
`

const Text = styled.p`
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #ABB3BA;
`

