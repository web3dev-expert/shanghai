// utils/splitText.ts

export function splitTextByLetterCount(
  text: string,
  maxLetters: number | undefined
): string[] {
  if (!maxLetters) maxLetters = 300;
  if (text.length <= maxLetters) {
    return [text, ''];
  }
  // Find the last space before or at maxLetters to avoid breaking words
  let splitIndex = text.lastIndexOf(' ', maxLetters);
  if (splitIndex === -1) {
    // If no space found, split at maxLetters
    splitIndex = maxLetters;
  }
  const first = text.slice(0, splitIndex).trim();
  const remaining = text.slice(splitIndex).trim();
  return [first, remaining];
}