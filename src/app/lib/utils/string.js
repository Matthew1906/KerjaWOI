'use client'

export const base64String = (file)=>{
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
          if ((encoded.length % 4) > 0) {
            encoded += '='.repeat(4 - (encoded.length % 4));
          }
          resolve(encoded);
        };
        reader.onerror = error => reject(error);
      });
}

export const titleString = (slug)=>{
  const words = slug.split('-');
  const capitalizedWords = words.map(word=>word.charAt(0).toUpperCase()+word.slice(1, word.length))
  return capitalizedWords.join(" ")
}