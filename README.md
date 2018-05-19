This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Reddit edit

This is my submission for the Tanda React/Reddit challenge ("Reddit edit", or "Redit"). You will need to create a Reddit App and enter your details in the src/snoowrap.js file.

<br>

You will also need to put your semantic folder in the src/ directory.

<br>

## What I used:
- React (Views & ReusableComponents folders)
- Semantic-react-ui
- React Router (src/index.js)
- Snoowrap (src/snoowrap.js)
- Some image off google...

<br>


## What I made:
- HotPosts: See all posts in a list
- ViewPost: See the post + all comments. Comments are in a list of accordions each containing replies which are also in lists of accordions!
- Error: Generic page containing an error message and a meme off google (link is included at the top of the file). It shows up when you try and enter an invalid post ID. For example, http://localhost:3000/post/asdfghjkl
- Voting: A component in the ReusableComponents folder which handles the front end for voting. The back end (i.e. actually calling the API) is not implemented.

<br>

## Known Issues:
- When you click on a post on the main posts page, you get Redirected to the page about that post. However, you can't click back on your browser and go back to the main posts page.
- When you enter http://localhost:3000/post/, you don't get redirected to the error page and you don't see the post either because it's an empty input, not an invalid one.
- I originally put event handlers for comments/posts in their ListItem parents. That became tricky because when you click on the Voting component (child inside the ListItem) you also trigger the event handler to either expand comments or redirect you to the page about the post you just clicked since the Voting component is a child of the ListItem.
  - I solved this by limiting the event handler to the div that held the comment/post inside the ListItem
  - In future, I would use: https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
- Not as many memes as I'd hoped for
