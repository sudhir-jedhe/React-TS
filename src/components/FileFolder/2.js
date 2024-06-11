import { useState } from "react"
import { IoIosArrowDropdown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import "./style.css"

function isKeyPresent(obj, key) {
  return obj.hasOwnProperty(key);
}


const FolderComp = ({ options }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div>
      {
        Array.isArray(options) && options.map((option) => {
          return (
            <div key={option?.id} style={{
              paddingLeft: "10px",
            }}>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginBottom: "10px",
                cursor: "pointer"
              }}
                onClick={handleClick}

              >
                {
                  isKeyPresent(option, "children") ? (
                    <span>
                      <IoIosArrowDropdown />
                    </span>
                  ) : (
                    <span>
                      <GoDotFill />
                    </span>
                  )
                }
                <span>
                  {option.label}
                </span>
              </div>

            <div style={{
                display: isVisible ? "none" : "block"
            }}>
                {
                  option && isKeyPresent(option, "children") && (
                    <FolderComp options={option?.children} />
                  )
                }
            </div>

             

            </div>
          )
        })
      }

    </div>
  );

}

export default FolderComp;

