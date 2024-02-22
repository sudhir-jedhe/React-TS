// A helper function to create arrays from node lists
const nodeArray = (selector, parent = document) =>
  Array.from(parent.querySelectorAll(selector));

// Select all checkboxes
const allCheckboxes = nodeArray("input");

// Attach a global change listener
addEventListener("change", (event) => {
  const changedCheckbox = event.target;

  // Exit if the change event didn't originate from our list of checkboxes
  if (!allCheckboxes.includes(changedCheckbox)) return;

  // Check/uncheck children (including the clicked checkbox)
  const children = nodeArray("input", changedCheckbox.parentElement);
  children.forEach((child) => (child.checked = changedCheckbox.checked));

  // Traverse up the tree from the clicked checkbox
  let currentCheckbox = changedCheckbox;
  while (currentCheckbox) {
    const parent = currentCheckbox
      .closest("ul")
      .parentNode.querySelector("input");
    const siblings = nodeArray(
      "input",
      parent.closest("li").querySelector("ul")
    );

    // Check the checked status of siblings
    const siblingCheckStatus = siblings.map((sibling) => sibling.checked);
    const allSiblingsChecked = siblingCheckStatus.every(Boolean);
    const someSiblingsChecked = siblingCheckStatus.some(Boolean);

    // Check the parent checkbox if all siblings are checked
    // Set the indeterminate state if not all and not none are checked
    parent.checked = allSiblingsChecked;
    parent.indeterminate = !allSiblingsChecked && someSiblingsChecked;

    // Prepare for the next loop
    currentCheckbox = currentCheckbox !== parent ? parent : null;
  }
});
