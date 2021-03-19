/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
const myCardInfo = axios.get('https://api.github.com/users/PVigar88')
  .then(res => res.data)
  .catch(err => console.log('ERRRRR'))
  .finally(() => console.log('all done'));
console.log(myCardInfo)
//console.log(result);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['aburn7577', 'FinalBoss', 'ericbenedetto16', 'MylesGearon', 'MichaelStadtmiller'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function gitHubCardMaker(gitHubObject) {
  const card = document.createElement('div');
  card.classList.add('card');
  const userImage = document.createElement('img');
  userImage.src = gitHubObject.avatar_url;
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const nameHeader = document.createElement('h3');
  nameHeader.classList.add('name');
  nameHeader.textContent = gitHubObject.name;
  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = gitHubObject.login;
  const locationInfo = document.createElement('p');
  locationInfo.textContent = `Location: ${gitHubObject.location}`;
  const profileInfo = document.createElement('p');
  profileInfo.textContent = "Profile:";
  const pageLink = document.createElement('a');
  pageLink.href = gitHubObject.html_url;
  pageLink.textContent = gitHubObject.html_url;
  const followersCount = document.createElement('p');
  followersCount.textContent = `Followers: ${gitHubObject.followers}`
  const followingCount = document.createElement('p');
  followingCount.textContent = `Following: ${gitHubObject.following}`
  const bioBlurb = document.createElement('p');
  bioBlurb.textContent = gitHubObject.bio;

  card.appendChild(userImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameHeader);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(locationInfo);
  cardInfo.appendChild(profileInfo);
  profileInfo.appendChild(pageLink);
  cardInfo.appendChild(followersCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(bioBlurb);

  return card;
}


axios.get('https://api.github.com/users/PVigar88')
  .then(res => {
    let myCard = gitHubCardMaker(res.data);
    document.querySelector('.cards').appendChild(myCard);
  })
  .catch(err => console.log('ERRRRR'))
  .finally(() => console.log('all done'));
//const myCard = gitHubCardMaker(myCardInfo);
//document.querySelector('.cards').appendChild(myCard);

followersArray.forEach(person => {
  const userURL = `https://api.github.com/users/${person}`;
  axios.get(userURL)
  .then(res => {
    let newCard = gitHubCardMaker(res.data);
    document.querySelector('.cards').appendChild(newCard);
  })
  .catch(err => console.log('ERRRRR'))
  .finally(() => console.log('all done'));
})