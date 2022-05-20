function convertToSentenceCase(str = '') {
    // long version
    // const splittedSentences = str.toLowerCase().split(". ");
    // const convertedSentences = splittedSentences.map(sentence => `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`)
    // const convertedString = convertedSentences.join(". ");
    // return convertedString;

    // short solution
    return str
      .trim()
      .toLowerCase()
      .split(". ")
      .filter((sentence) => sentence.trim())
      .map(
        (sentence) => `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`
      ).join(". ");
}

const sentenceCase = convertToSentenceCase(
  "lorem ispUM deLORE is a dummy text. it has been in the dummy industry for a long time. lorem ispUM deLORE is a dummy text. it has been in the dummy industry for a long time. lorem ispUM deLORE is a dummy text. it has been in the dummy industry for a long time. lorem ispUM deLORE is a dummy text. it has been in the dummy industry for a long time."
);
console.log(sentenceCase)