interface WordCounterProps {
  text: string;
  minWords: number;
}

export default function WordCounter({ text, minWords }: WordCounterProps) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const wordsNeeded = Math.max(0, minWords - wordCount);

  return (
    <div className="text-sm text-gray-500">
      Words: {wordCount} {wordsNeeded > 0 && `(${wordsNeeded} more words needed)`}
    </div>
  );
}