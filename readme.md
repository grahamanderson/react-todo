Boilerplate React App

Git Workflow
# Create Repo on Github
# Local
git add .
git -am "first commit"
git remote add origin "https://github.com/grahamanderson/ReactTimer.git"
git remote -v
git push --set-upstream origin master

# Revert project back to last commit
git checkout -- .

Heroku Workflow
heroku create
git remote -v
git push heroku master
heroku open
