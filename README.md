# Travelr Web App

## Build instructions

 1. install [nodejs](https://nodejs.org/en/download)

 2.  clone this repo into a local folder
 
 3. setup a [mongodb](https://www.mongodb.com/) cluster to run
     - the app searches your local machine by default
     - it also supports a .env file with '[DB_HOST](https://www.mongodb.com/docs/manual/reference/connection-string/)', '[JWT_SECRET](https://www.mongodb.com/docs/atlas/app-services/authentication/custom-jwt/)', and '[PORT](https://www.mongodb.com/docs/manual/reference/connection-string/)' values to help find your cluster.

 4. cd into the repo and run 'npm start' to start hosting the user client

 5. cd into the app_admin folder and run 'npm start' to start hosting the admin client.

## CS465-Full-Stack-Development

### Architecture

#### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).


The 2 frontend applications developed were made with html,handlebars and javascript for the client-facing frontend and an angular single page application (SPA) for the andministrative frontend. both had their pros and cons, though I think I ultimately prefer the slight increase in workload involved with developing for HTML over the volatility I felt even with this preprepared assignment and the angular framework. while being able to keep up with new tools is definately an important part of being a professional, being able to rely on your experience is also important and I don't feel like angular provided much of that second factor, especially given that I expect to avoid web development in my career where possible. I have also tried other frameworks like React or Next.js and they both had similar problems

#### Why did the backend use a NoSQL MongoDB database?

The backend being made with MongoDB seems to be mostly due to being able to use json style data without needing to worry about sql querries or complex relational schema. If not for this good match between mongoDB and javascript, I don't think that the mongoDB would have made much sense at all over SQL style databases. I also believe that when deploying at scale with a server built in a more robust language converting from MongoDB to an SQL database or formatting the data to conform to MongoDB's style will be a technical hurdle. Since this app only seems to focus on travel bookings though, It's likely a fair decision to prioritize a low effort implimentation now over preparing for a future that may never come.

### Functionality

#### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON stands for JavaScript Object Notation. It is not able to do any calculations like javascript but instead leverages the maleability of javascripts objects to store a wide range of data types. The advantage of this format is that it has almost perfect compatability not just with the javascript frontend but also with the Node backend and MongoDB database. This austecibly makes full stack development much easier (though I believe having to jump between so many different microscopic classes as well as language hopping to properly develop the frontend components counteracts many of those advantages anyway)

#### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Most of my refactoring of the code in this code base revolved around congregating several shared features of the design into fewer files. while seperation of concerns is important, In the existing architecture it was clearly seperating things that belonged together sacrificing the legibility of the code and making it harder to make subsequent changes by forcing developers to hop between many files responsible for very similar behaviors. In addition to the refactoring, I think this project benefited greatly from the reuse of the server api endpoints between the client and administrator pannels. This made both the implimentation of security and data management much easier because relying on a single source of truth allowed for a more cohesive vision between the different application components without the different parts getting in eachother's way.



### Testing

#### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Postman and Mongo Compass were very useful in configuring the server. By allowing for manual data entry as well as an easy way to emulate appropriate server requests, this testing setup was able to help in the development and delivery on clear goals for the project. I believe that configuring automated tests that leverage these tools would also be easy adding another layer of safety against errors in the software.

### Reflection

#### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

I feel as though I was able to gain a greater apreciation for application architecture. While I'm not a huge fan of the web platform, it's similar enough in many ways to other software that needs to seperate concerns into multiple components or layers. Even when fighting upstream with something like Angular I feel like I'm at the point with my skills that getting something working is relatively trivial. on the other hand, being able to continuously add onto a project requires a clear understanding of what it is and how you want it to grow from a very early point in development. Being able to work on larger and larger programs from start to finish has been helping me develop a sense for where to focus my attention to make the best architecutral decisions so that the coding can be this streightforward more often. the networking concepts, while not particularly deep, were also good practice espeically where the tooling is concerned. Network based infrastructure is one of the most relied oppon tools in the modern world so being better equipped to take advantage of that will likely help me throught my career.
