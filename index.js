class Formatter {
  static exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(sentence) {
    const words = sentence.toLowerCase().split(" ");
    
    return words
      .map((word, index) => {
        if (index === 0 || !this.exceptions.includes(word)) {
          return this.capitalize(word);
        }
        return word;
      })
      .join(" ");
  }
}
