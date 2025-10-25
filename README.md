# m-tantan.github.io

[Link to Page](https://m-tantan.github.io)

## PR Preview Deployments

This repository uses GitHub Actions to automatically build and deploy preview versions of the site for each Pull Request.

### How It Works

When you open a PR or push new commits to an existing PR:
1. The workflow automatically builds the site from your PR branch
2. Deploys it to a unique preview URL: `https://m-tantan.github.io/pr-<number>/`
3. Posts a comment on the PR with the preview link

When the PR is closed or merged:
- The preview deployment is automatically cleaned up

### Preview URL Pattern

- **Main site**: `https://m-tantan.github.io/`
- **PR preview**: `https://m-tantan.github.io/pr-123/` (where 123 is your PR number)

### Benefits

- Review visual changes before merging
- Share preview links with stakeholders
- Catch build errors early in the PR process
- No manual deployment needed
