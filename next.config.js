const withSass = require('@zeit/next-sass');
const env = require('dotenv').config();

module.exports = withSass({
    env
});