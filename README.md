# MSA 2024 Phase 2   - Software Stream--Cat Couture


## Cat Couture
Cat Couture is a full-stack application that simulates an online cat couture shop. It offers CRUD (Create, Read, Update, Delete) functionalities, allowing users to manage products from the frontend web interface. The app comprises two main components:

### Backend:
- Developed using .NET Web API.
- Utilizes Entity Framework to integrate with a PostgreSQL database.
- Handles product data storage, retrieval, and management.
- Hosted on Azure App Service.
### Frontend:
- Built with React and TypeScript.
- Provides an intuitive user interface for browsing, adding, updating, and deleting cat couture products.
- Communicates with the backend API to fetch and manipulate data.
- Communicates with image file storage/handling system

 
 

## Installation&Run the App on local machine
1. Clone this repository:
    https://github.com/Jason-JuneBugs/MSA-Phase2-Cat-Couture.git

2. Install the environment file
    To run the app on local machine, you need do put the '.env.development' under the /frontend root path. The '.env.development' file is included in the project files.
 
2. Run the app:(using docker-compose)
   from the project root, run: 
   ###  docker-compose up --build
   Hint:sometimes the backend docker container will not spin up in the first place, in this case just needs run this command again to spin it up
   ### docker-compose up 
3. Open http://localhost:3000 in your browser.

4. Run Unit Test
    from the /frontend root path, run
    ### npm test






## Depolyment
### Frontend:(https://catcoutureweb.azurewebsites.net/)
- Deployed to Azure App Service.
- Communicates with the backend API.
- Handles the user interface and interactions.
### Backend:(https://catcouture.azurewebsites.net)
- Deployed to Azure App Service.
- Integrates with the PostgreSQL database.
- Provides endpoints for CRUD operations.
### Database:(pgserver-aus-catcouture-dev-001.postgres.database.azure.com)
- Hosted in Azure PostgreSQL.
- Stores product data.
### Azure Blob Storage:
- Used for storing and handling image files.
 

 