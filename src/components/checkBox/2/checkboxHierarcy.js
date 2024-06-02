function updateCheckboxHierarchy() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const isChecked = checkbox.checked;
        const parentCheckbox = checkbox.parentNode.parentNode.querySelector('input[type="checkbox"]');

        if (parentCheckbox) {
            // If any child checkbox is checked, check the parent checkbox
            if (isChecked) {
                parentCheckbox.checked = true;
            } else {
                // If all child checkboxes are unchecked, uncheck the parent checkbox
                const siblings = Array.from(checkbox.parentNode.parentNode.querySelectorAll('input[type="checkbox"]'));
                const areAllUnchecked = siblings.every(sibling => !sibling.checked);
                parentCheckbox.checked = !areAllUnchecked;
            }
        }
    });
}

// Attach event listeners to existing checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateCheckboxHierarchy);
});

export default updateCheckboxHierarchy;
