import { EmotionObject } from './class.js'

const emotions = [
  new EmotionObject("angry", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
  new EmotionObject("happy", "feeling or showing pleasure or contentment.", "yellow", ["bling","chatter","chant","giggle"]),
  new EmotionObject("bad", "not such as to be hoped for or desired; unpleasant or unwelcome.", "beige", ["ahem","clatter","clunk"]),
  new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"]),
  new EmotionObject("surprised", "to feel mild astonishment or shock.", "purple", ["boom","honk","zing"]),
  new EmotionObject("fearful", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"]),
  new EmotionObject("disgusted", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "orange", ["flick","gargle","oink"])
]
　　　　　　　
// カテゴリー部分
let htmlCategory = '<h1 class="title">Category</h1><div class="category-wrapper">'
emotions.map(emotion => {
  htmlCategory += `
    <div class="category" style="background-color: ${emotion.color}">
      <p class="category-title"><a href="#${emotion.emotion}" style="text-decoration: none">${emotion.emotion}</a></p>
      <img src="https://recursionist.io/img/different-job.png" style="width: 100%"></img>
    </div>
  `
})
htmlCategory += '</div>'

// カード部分
let htmlCards = ""
emotions.map(emotion => htmlCards += emotion.getHtmlContainerString())

// 要素をtarget配下に追加
let htmlContent = `
  <div class="container">
    ${htmlCategory}
  </div>
  ${htmlCards}
`
const target = document.getElementById('target')
target.innerHTML = htmlContent
