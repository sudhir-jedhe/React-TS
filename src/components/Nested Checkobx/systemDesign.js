// Clarify Architecture, Global state store, retrive API data and transform it
// into View data model, UI: CheckboxNode Data model, Use tree to store the
// nested checkboxes data. Use enum(0, 1, 2) to use checkbox state: uncheck,
// interminate, checked Performance, Avoid Hierachy node reflow, use absolute
// position, Avoid recalculate using React.memo, React.useMemo
