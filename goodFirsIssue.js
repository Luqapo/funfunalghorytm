const goodFirstIssue = require('good-first-issue');

const log = async () => {
  try {
    const issues = await goodFirstIssue('wolkenkit');

    issues.forEach(issue => console.log(`# ${issue.pr}: ${issue.title}`));
  } catch (err) {
    console.log(err.message);
  }
};

log();