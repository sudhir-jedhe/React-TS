<div class="radio-container">
  <input class="radio-input" id="apples" type="radio" name="fruit" />
  <label class="radio" for="apples">Apples</label>
  <input class="radio-input" id="oranges" type="radio" name="fruit" />
  <label class="radio" for="oranges">Oranges</label>
</div>
// .radio-container {
//   box-sizing: border-box;
//   background: #ffffff;
//   color: #222;
//   height: 64px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-flow: row wrap;
// }

// .radio-container * {
//   box-sizing: border-box;
// }

// .radio-input {
//   appearance: none;
//   background-color: #ffffff;
//   width: 16px;
//   height: 16px;
//   border: 1px solid #cccfdb;
//   margin: 0;
//   border-radius: 50%;
//   display: grid;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s ease;
// }

// .radio-input::before {
//   content: "";
//   width: 6px;
//   height: 6px;
//   border-radius: 50%;
//   transform: scale(0);
//   transition: 0.3s transform ease-in-out;
//   box-shadow: inset 6px 6px #ffffff;
// }

// .radio-input:checked {
//   background: #0077ff;
//   border-color: #0077ff;
// }

// .radio-input:checked::before {
//   transform: scale(1);
// }

// .radio {
//   cursor: pointer;
//   padding: 6px 8px;
// }

// .radio:not(:last-child) {
//   margin-right: 6px;
// }