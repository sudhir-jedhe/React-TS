import classnames from "classnames";

import { useGlobalState } from "../../Context/GlobalContext";
import { storeAnswer, nextQuestion } from "../../../../state/actions";

import { EMOJIS_MAP } from "../../../../constants";

const Rating = ({ questionId, config }) => {
  const { state, dispatch } = useGlobalState();
  const { min = 1, max = 5, numbers } = config;
  const slots = new Array(max).fill(0);

  const handleClick = (e) => {
    const { target } = e;
    const rating = target.getAttribute("data-rating");

    dispatch(
      storeAnswer({
        questionId,
        answer: rating,
      })
    );
  };

  return (
    <>
      <div className="ratings">
        {slots.map((_, index) => {
          const rating = index + 1;

          return (
            <div
              key={rating}
              className={classnames(
                "ratings-option",
                numbers ? "number" : "emoji"
              )}
              data-rating={rating}
              onClick={handleClick}
            >
              {numbers ? rating : EMOJIS_MAP[rating]}
            </div>
          );
        })}
      </div>
      {numbers ? (
        <div className="ratings-satisfaction-labels">
          <span>Not satisfied</span>
          <span>Very satisfied</span>
        </div>
      ) : null}
    </>
  );
};

export default Rating;
