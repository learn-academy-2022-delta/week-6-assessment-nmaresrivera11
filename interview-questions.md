# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
We can fix this mistake we can access the id of the entry with the missing foreign key. Then add the missing foreign key of cohort_id with terminal commands. Once fixed I want to update the database with a db: migrate command. The foreign key goes to the Student model because a Cohort has_many Students. Therefore the Student model holds the foreign key for distinguishing purposes the student would need to know which cohort they belong to.

Researched answer:
After review, we could fix this error by adding a Cohort ID column to the Student model by adding an Active Record Association between the models. class Cohort < would need to read 'has_many :students' and the class Student < would read 'belongs_to :cohort'. Then after making sure that they are associated in their model files, I would go to the student table that I left off the foreign key with and if I hadn't already migrated I would add it to the Student model table then migrate.

2. Which RESTful routes must always be passed params? Why?

Your answer:
The show, destroy, and update methods require an id param. These methods require an id in order to isolate the individual id that you want to show at once, destroy, or update. If id is not provided, the show will show all of them. The destroy and update wouldn't have an id to destroy or update. Then the create and update will require strong params. The update needs both id params and strong params because it needs to find the id to be updated and require the params to be met in order to be updated. The create it will require those two strong params to be met so that it can take the given params to be given to the 'new' post or 'updated' post/action to the databse.

Researched answer:
The id params gets passed through the url. These id params are needed to be routed to the name of the controller for it all to process. If there is a gap in the link/path than the code is broken.

3. Name three rails generator commands. What is created by each?

Your answer:
Rails g controller, Rails g model, and Rails g resource are three rails generator commands. Rails g controller is used to generate a controller that will handle the user, views, and models. Rails g model will generate a new model to hold the params needed to add backend data to the database. Rails g resource
will generate a resource for the model that was created. The resource helps the model out.

Researched answer:
The controller is where the RESTFUL routes and CRUD actions can be followed on the backend. As a full stack developer the creation of the controller gives, we can track if it is all being met. The model is the database layer. The model is the table of data that this database layer is compiled of. The model is the part that has the key, to later add value too but does hold the expected data type. The resource will help with creating models with model name and key/ value pairs to add. It helps contain the data to help set up the migration and model to start a model to the next step in Active Records interations.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

action: "POST" location: /students

action: "GET" location: /students/new

action: "GET" location: /students/2

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

The name of the controller method that would be called is students. The 'GET' displays with student.all. The 'POST' is for creating a new student. The third 'GET' is to display the new student. The 'GET' after that is to display the Student at id 2. The 'GET' for /students/2/edit is to edit student with id 2. The 'PATCH' is to update the edit to student with id 2, by sending the edited student information to main. The 'DELETE' will be used to destroy student id 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user I can see all of the things left on my to-do list on one page.

- As a user I can click on any item from my to-do list to see a page with a description / details about that task left to do.

- As a user I can navigate back to main page to see the whole to-do list.

- As a user I can add another task to my to-do list.

- As a user I can click 'add new task' button that will direct me to a page to create a new task.

- As a user when I click the 'Submit' button, it will submit my task to the database and redirect me back to home page to view the added task to my to-do list.

- As a user I can select a task I would like to modify.

- As a user I can see my updated task on the to-do list.

- As a user I can see the updates I made with all of my to-do list.

- As a user I can delete a task from the to-do list that has been completed or I no longer need.