/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


const data = {
  avatar_url: "https://avatars1.githubusercontent.com/u/66322224?v=4",
  bio: null,
  blog: "",
  company: null,
  created_at: "2020-06-02T15:37:42Z",
  email: null,
  events_url: "https://api.github.com/users/CameronHonis/events{/privacy}",
  followers: 1,
  followers_url: "https://api.github.com/users/CameronHonis/followers",
  following: 1,
  following_url: "https://api.github.com/users/CameronHonis/following{/other_user}",
  gists_url: "https://api.github.com/users/CameronHonis/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/CameronHonis",
  id: 66322224,
  location: null,
  login: "CameronHonis",
  name: 'Cameron Honis',
  node_id: "MDQ6VXNlcjY2MzIyMjI0",
  organizations_url: "https://api.github.com/users/CameronHonis/orgs",
  public_gists: 0,
  public_repos: 19,
  received_events_url: "https://api.github.com/users/CameronHonis/received_events",
  repos_url: "https://api.github.com/users/CameronHonis/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/CameronHonis/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/CameronHonis/subscriptions",
  twitter_username: null,
  type: "User",
  updated_at: "2020-07-09T18:03:47Z",
  url: "https://api.github.com/users/CameronHonis"
}

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

const followersArray = [];

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
function createCard(gitName){
  let gitData = null
  axios.get(`https://api.github.com/users/${gitName}`)
    .then(obj => {
      gitData = obj.data
      let card = document.createElement('div')
      document.querySelector('.container').appendChild(card)
      card.className = 'card compressed'
      let expand = document.createElement('button')
      card.appendChild(expand)
      expand.textContent = 'expand'
      expand.addEventListener('click',(e) => {
        img.classList.toggle('invisible')
        username.classList.toggle('invisible')
        location.classList.toggle('invisible')
        profile.classList.toggle('invisible')
        followers.classList.toggle('invisible')
        following.classList.toggle('invisible')
        bio.classList.toggle('invisible')
        if (expand.textContent === 'expand'){
          expand.textContent = 'compress'
        } else {
          expand.textContent = 'expand'
        }
      })
      let img = document.createElement('img')
      img.src = gitData.avatar_url
      img.className = 'invisible'
      card.appendChild(img)
      let cardinfo = document.createElement('div')
      cardinfo.className = 'card-info'
      card.appendChild(cardinfo)
      let name = document.createElement('h2')
      name.textContent = gitData.name
      name.className = 'name'
      cardinfo.appendChild(name)
      let username = document.createElement('h3')
      username.className = 'username invisible'
      username.textContent = gitData.login
      cardinfo.appendChild(username)
      let location = document.createElement('p')
      cardinfo.appendChild(location)
      location.textContent = `Location: ${gitData.location}`
      location.className = 'invisible'
      let profile = document.createElement('p')
      cardinfo.appendChild(profile)
      profile.textContent = 'Profile: '
      profile.className = 'invisible'
      let profileA = document.createElement('a')
      profile.appendChild(profileA)
      profileA.textContent = gitData.html_url
      profileA.href = gitData.html_url
      let followers = document.createElement('p')
      cardinfo.appendChild(followers)
      followers.textContent = `Followers: ${gitData.followers}`
      followers.className = 'invisible'
      let following = document.createElement('p')
      cardinfo.appendChild(following)
      following.textContent = `Following: ${gitData.following}`
      following.className = 'invisible'
      let bio = document.createElement('p')
      cardinfo.appendChild(bio)
      bio.textContent = `Bio: ${gitData.bio}`
      bio.className = 'invisible'
    })
    .catch(obj => {
      console.log()
      debugger
    })
}
const names = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
]
for (let i = 0; i < names.length; i++){
  createCard(names[i])
}
