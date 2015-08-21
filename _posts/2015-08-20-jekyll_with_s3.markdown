---
layout: post
title:  "Jekyll with S3"
date:   2015-08-20 21:49
categories: jekyll s3 aws travis git
---
Jekyll and S3 static hosting work perfectly together. You can set up a highly configurable fully functional low cost blog using only static files. Without Jekyll, the only pain point is managing those static files, but Jekyll makes it a breeze to reuse markup with templates. Even version control and release management is simple with this combination of technologies. Here's a start-to-finish guide for getting it set up in an hour or two.

## Installing Jekyll
On a Mac, this couldn't be any easier. Type `sudo gem install jekyll`. If you encounter an issue, it most likely means you don't have make installed. Try typing `make` at the terminal and you should get a prompt to install the command line developer tools.

## Creating your Project
For this, I recommend browsing some themes from [JekyllThemes](http://jekyllthemes.org/). Download one that looks right for you, unzip it, and rename the directory. This will be your blog's main directory. 

## Testing your Theme
Open a terminal, navigate to the directory of the theme you just downloaded, and type `jekyll serve`. Then, immediately access your website at [http://localhost:4000](http://localhost:4000).

## Creating a Github Repository
Create a public repository on [Github](https://help.github.com/articles/creating-a-new-repository/). It needs to be public so you can utilize Travis to build and deploy your blog for free. Also, private repositories cost money!

## Initialize your Repository
Navigate to your project in the terminal, and type the following commands (from [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/))

	git init
	git add .
	git commit -m "First Commit"
	git remote add origin <remote repository URL>
	git remove -v
	git push origin master

## Get Travis
Travis will build your project using Jekyll and deploy it to S3 for you. Connect [Travis](https://travis-ci.org/) to your Github account, then enable your public repository. 

## Configure AWS
If you don't have an AWS account, [get a free tier account](https://aws.amazon.com/free/).

Once you've got an S3 account, follow the guide [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html) to create two buckets, one containing your content, and one exclusively to redirect from www.yoursite.com. Then create an ALIAS A record to point at your content bucket, and a www CNAME record to point at the redirection bucket.

## Configure Travis
Travis needs to know how to build and deploy your site. You let it know by creating a `.travis.yml` file in the root directory of your repository. Travis does a great job explaining how to [configure your travis build to deploy to S3](http://docs.travis-ci.com/user/deployment/s3/).

My file ended up looking like this. You'll need to configure the access_key_id, secret_access_key (encrypt this!), bucket, endpoint, and repo.

	language: ruby
	rvm:
	- 2.1

	install: gem install jekyll html-proofer
	script: jekyll build

	deploy:
	  provider: s3
	  access_key_id: AKIAJMEMJDJXVZOMJVTA
	  secret_access_key:
	    secure: sLJ5AYWWBnxms5xNd2U7P+Y1n4HEn0uXSPRKcu3tHGGzg54LAK5v83aDlCQehna6Z48S0n41v1M3/fEYLDxXHC9Tr66YXcoN2g0FA4D9So6Lw8ZyLcscIQCUaDCBzyJLzgub4UfRNS8LnfpoKUfKg5Wmd/8b4tHcwIDelE8zrZH137LAKeOYYv3qJFWMLJDyMldU+B1YoxhKc1BjVI1EYtyQ/k6+5yH+dZuOrkZOSRusFHeGBMPgDX8beA+x0AH5dIQXLLDJjjp9H+9FnwUrsnoembBKLIjaYwyeArxhsIIo7p1j31KcYkICq4KjO56kH8IA4ozpEKQ1PfRxKMpJQGtgKHLThuKgEb89cgucKERjJw6BzV4PHTcnXZKfESelE9gurAcbB9oU/5CSgwmY/apDkptghpq3A8F58CLKcIvlWcBulfRttxwKvguUMTTdxbUsvbo6LwxB8aF3p36CKcoKWBx+OugafnHGXovrj0O/EF1qI2khD5DUEhut+Fl89PyOO0U2UhAyRcjr2nMgRgYP/hu/Povs0m7jlwOO0oscJ46BUDZJJid9JzPlFF+r5w3EI8h468CyG3TXq5ype/nuADvYxAICY19x5WsWKomy3HGJcThkgT6/YqBJRfXBbRFLKKel5592kwadUeCptKO8eEIfn7hP166HdICED9o=
	  bucket: moodysalem.com
	  local-dir: _site
	  acl: public_read
	  endpoint: moodysalem.com.s3-website-us-east-1.amazonaws.com
	  skip_cleanup: true
	  on:
	    repo: moodysalem/blog

*Yes, that's really my secret key. Travis encrypts it using a asymmetric cryptography, so only Travis can read the content of that big chunk of text.*

## Add Disqus and Google Analytics
Now you can publish content, but it's good to also see that users are interacting and viewing this content. [Google Analytics](http://google.com/analytics) will let you see how many page views you're getting (and quite a bit more than that), while [Disqus](http://disqus.com) will let you create comment threads on each of your posts. I highly recommend integrating both features with your blog.
