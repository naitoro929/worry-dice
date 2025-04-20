const adviceResponses = [
  "That's fate.",
  "Just sleep on it.",
  "Think again tomorrow.",
  "You might be overthinking.",
  "Eat something first.",
  "Take a deep breath and count to ten.",
  "Maybe it's not as bad as it seems.",
  "Have you tried talking to someone about it?",
  "This too shall pass.",
  "One step at a time.",
  "Focus on what you can control.",
  "Try writing it down and looking at it objectively.",
  "Consider what advice you'd give to a friend with the same worry.",
  "It's okay to not have all the answers right now.",
  "Sometimes the best solution is to let it be for a while."
];

export const generateRandomAdvice = (): string => {
  const randomIndex = Math.floor(Math.random() * adviceResponses.length);
  return adviceResponses[randomIndex];
};