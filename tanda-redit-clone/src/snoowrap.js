// I'm just using the exact names used in this provided link:
// https://not-an-aardvark.github.io/reddit-oauth-helper/

import snoowrap from 'snoowrap';

// Enter your Reddit App details here:
const redditAPI = new snoowrap({
    userAgent: '',
    clientId: '',
    clientSecret: '',
    username: '',
    password: '',
});

export { redditAPI };

