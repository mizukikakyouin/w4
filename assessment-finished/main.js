const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '東京には沢山のスポットがあり、多くの人が溢れかえっている情報過多な街だ。地方出身の :insertX: は上京してきた時のために遥々足を運んだ。:inserty:に着いた時、 :insertx:は自分という人間を忘れそうになった。こんなに沢山人がいると思うと、私はただの「通行人A」に過ぎなかったからだ。東京の人はみんな早歩きで忙しそう。誰も私について深く追及してこないから :insertz:。:insertX:はそっと:inserts:に電話した。「私の馬鹿話を聞いてくれ」と。;
const insertX = ['衣織', '美月', '舞香'];
const insertY = ['新宿', '浅草', '表参道'];
const insertZ = ['少し寂しくなった', 'とても嬉しかった', '腹が立った'];
const insertS =['母親','友達','教師'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
