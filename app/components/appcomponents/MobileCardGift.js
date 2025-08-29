"use client";

import React from "react";

import Card1 from "../mobile-cards/card1";
import Card2 from "../mobile-cards/card2";
import Card3 from "../mobile-cards/card3";
import Card4 from "../mobile-cards/card4";
import Card5 from "../mobile-cards/card5";

const MobileCardGift = ({ data, cardRefs, cemetery, cardId }) => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {cardId == 1 ? (
                <Card1 cardRefs={cardRefs} data={data} isAssigned={true} index={0} cemetery={cemetery} />
            ) : cardId == 2 ? (
                <Card2 cardRefs={cardRefs} data={data} isAssigned={true} index={0} cemetery={cemetery} />
            ) : cardId == 3 ? (
                <Card3 cardRefs={cardRefs} data={data} isAssigned={true} index={0} cemetery={cemetery} />
            ) : cardId == 4 ? (
                <Card4 cardRefs={cardRefs} data={data} isAssigned={true} index={0} cemetery={cemetery} />
            ) : cardId == 5 ? (
                <Card5 cardRefs={cardRefs} data={data} isAssigned={true} index={0} cemetery={cemetery} />
            ) : null}
        </div>
    );
};

export default MobileCardGift;
