import { FC } from "react";
import { StarsRatingProps } from ".";
import { StyledStarsRating } from "./StarsRating.styles";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const StarsRating: FC<StarsRatingProps> = ({ rating }) => {
  const fillOrNotStar = (rating: number) => {
    let ratingAfterPoint = rating.toString().split(".").pop();
    if (ratingAfterPoint?.length === 1) ratingAfterPoint += "0";
    const numberRatingAfterPoint = Number(ratingAfterPoint);

    if (numberRatingAfterPoint >= 75) {
      stars.fill += 1;
    } else if (numberRatingAfterPoint < 75 && numberRatingAfterPoint > 25) {
      stars.half += 1;
    }
  };

  const getMarkup = () => {
    stars.empty = 5 - (stars.fill + stars.half);

    let markup = [];

    for (let index = 0; index < stars.fill; index++) {
      markup.push("fill");
    }
    for (let index = 0; index < stars.half; index++) {
      markup.push("half");
    }
    for (let index = 0; index < stars.empty; index++) {
      markup.push("empty");
    }

    return markup;
  };

  const stars = {
    fill: Math.floor(rating),
    half: 0,
    empty: 0,
  };

  if (!Number.isInteger(rating)) {
    fillOrNotStar(rating);
  }

  const markup = getMarkup();

  return (
    <StyledStarsRating>
      <ul>
        {markup.map((star, idx) => {
          if (star === "fill")
            return (
              <li key={idx}>
                <BsStarFill className={`starRating_${star}`} />
              </li>
            );
          if (star === "half")
            return (
              <li key={idx}>
                <BsStarHalf className={`starRating_${star}`} />
              </li>
            );
          if (star === "empty")
            return (
              <li key={idx}>
                <BsStar className={`starRating_${star}`} />
              </li>
            );
        })}
      </ul>
    </StyledStarsRating>
  );
};
