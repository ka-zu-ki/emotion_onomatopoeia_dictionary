import { dictionary, pictureDictionary } from './hash.js'

class Word{
  constructor(word, defintion, pictureUrl){
      this.word = word;
      this.defintion = defintion;
      this.pictureUrl = pictureUrl;
  }
}

class EmotionObject{
  constructor(emotion, description, color, onomatopoeia){
      this.emotion = emotion;
      this.description = description;
      this.color = color;
      this.onomatopoeia = onomatopoeia;
  }

  getOnomatopoeiaWords(){
    let words = this.onomatopoeia.map(ono => new Word(ono, dictionary[ono], pictureDictionary[ono]))
    return words
  }

  getHtmlContainerString(){
    let words = this.getOnomatopoeiaWords()
    let htmlWords = '<div class="card-container">'

    words.map(word => {
      htmlWords += `
          <div class="card-emo">
            <div class="content">
              <p class="word">${word.word}</p>
              <p class="desc">${word.defintion}</p>
            </div>
            <img src="${word.pictureUrl}" class="img-small"></img>
          </div>
      `
    })

    htmlWords += '</div>'

    let htmlCard = `
      <div id="${this.emotion}" class="cards" style="background-color: ${this.color}">
        <p class="cards-title">${this.emotion}</p>
        <p class="cards-desc">${this.description}</p>
        ${htmlWords}
      </div>
    `

    return htmlCard
  }
}

export { EmotionObject }