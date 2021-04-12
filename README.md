This service project will serve as the API for 'My Library Online' project. It will be using RESTFUL API for recieving requests from the user interface and responding in JSON format. For serving the data fetch and update requests, the API will interface with the PostGREs data base. Following are the endoints which woudl be available in completed product.

1) GET: resources/searchResource/{criterion}/{searchKeyword}/{sortBy} (MVP)
    This API will search and return a list of resources which match the user provided keyword against the selected criteria (eg title, author, description).
    
2) GET: resources/getResourceDetails/{resourceId} (MVP)
    This API will pull the details for given resource and return it in response.
    
3) GET: resources/browseResources (MVP)
    This API will return a list of all the resource categories along with the resources that belong to each category.
    
4) GET: user/getUserDashboard
    This API will return all the resources that are held by the given user. It will be a list of records achieved by joining the user table, resource loans table and resource    
    table.
   
5) POST: user/placeHold/{resourceId}
    This API will be used to place hold on a resource by the logged in user.
    
6) PUT: user/requestExtension/{resourceId}
    This API will be used to request extension on a resource which is already held or checked out by the user.
    
7) GET: user/login
    This API  will receive the user login details (membership id / library card ) as well as the last name.
