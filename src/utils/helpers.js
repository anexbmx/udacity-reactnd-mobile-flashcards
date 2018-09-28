// Somewhat hacky function to generate unique ID for each Deck.
// Warning: Wouldn't be suitable for use in a production application.
export const generateId = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};
