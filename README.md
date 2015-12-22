Bucket List

models:
    User
        name
        bucket_lists = [object]


    Bucketlist Item
        title - at least 5 characters
        description - at least 10 characters
        created_at

Index page
    - login feature
    - create a user/ otherwise log in

Dashboard
    nav bar
    (create)new bucketlist item form
    (show)personal bucket list index
    (show)list of other users

User
    user name
    finished bucketlist items
    pending bucketlist items

Create a simple application which allows users to add/update their personal bucket list item and allow other users to have the same bucket list item by tagging that specific user. Users can also see other users' bucket lists.

Build the simple application using Angular and use Express MVC as the backend. Make sure that you also integrate and save the data to MongoDB.

Required Features:

Login and logout 

Ability to add a bucket list item. Newly added bucket list item should only appear on the bucket list (profile) of the person who created the item and on the user(s) the said item is being tagged to.

Tagging of other users. The bucket list item being tagged to the user will be included on the tagged user's bucket list.

Update of bucket list item status (checked or unchecked) only by the user who created the item. Upon update, tagged users should also see a new status.

Ability to see other users' profile with their own bucket list.
You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed. Please note that Heroku deployment is not honored.