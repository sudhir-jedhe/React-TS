import { useGlobalState } from "../../Context/GlobalContext";
import { storeAnswer, nextQuestion } from "../../../../state/actions";

const Selection = ({ options, questionId }) => {
  const { state, dispatch } = useGlobalState();
  const handleChange = (e) => {
    const { target } = e;

    dispatch(
      storeAnswer({
        questionId,
        answer: target.value,
      })
    );
  };

  return (
    <div className="selection">
      <fieldset>
        {options.map((option, index) => {
          return (
            <div className="selection-option" key={option.id}>
              <input
                type="radio"
                id={option.label}
                name="selection"
                value={option.id}
                onChange={handleChange}
              />
              <label for={option.label}>{option.label}</label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

export default Selection;
