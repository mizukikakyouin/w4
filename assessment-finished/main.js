const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '東京には沢山のスポットがあり、多くの人で溢れかえっている情報過多な街である。地方出身の私は、街並みを視界に入れるだけでも精一杯だった。:inserty:に着いた時、自分という人間を忘れそうになった。こんなに沢山の人に紛れていると、私はただの「通行人A」に過ぎなかったからだ。東京の人はみんな早歩きで忙しそう。誰も私について深く追及してこないから:insertz:。私はそっと:insertx:に電話した。「私の馬鹿話を聞いてくれ」と。';
const insertX = ['母親','ある人','友達'];
const insertY = ['新宿','浅草','表参道'];
const insertZ = ['少し寂しくなった','とても嬉しかった','腹が立った'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
 

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('私', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
