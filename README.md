# Notes App Serverless ReactJS Client

This is a ReactJS client that can consume an AWS serverless API. The App is based on a tutorial by Jay V with some custom modifications, including changes in UI

* User can create account
* User can login
* User can create notes

### UI
![screenshot from 2018-04-08 19-57-54](https://user-images.githubusercontent.com/16631356/38470142-65b171a4-3b67-11e8-8c1a-52d59651f37e.png)

### Configuration

I have abstracted my config.js file but you can create one in root folder and specify your AWS credentials as below

This step assumes you have already configured your serverless API. 
For this specific client, we shall be consuming an API available on the below repo: 
Please checkout [SERVERLESS-API](https://github.com/iambonface/aws-serverless-notes-api) 

```
   export default {
      s3: {
        REGION: "YOUR_S3_REGION",
        BUCKET: "YOUR_SLS_BUCKET_NAME",
      },
      apiGateway: {
        REGION: "YOUR_API_REGION",
        URL: "YOUR_API_URL"
      },
      cognito: {
        REGION: "YOUR_COGNITO_REGION",
        USER_POOL_ID: "YOUR_SLS_POOL_ID",
        APP_CLIENT_ID: "YOUR_SLS_CLIENT_ID",
        IDENTITY_POOL_ID: "YOUR_SLS_IDENTITY_POOL_ID"
      }
    }
```

## Acknowledgments

* Hats off to Jay V for the free lessons
* A BIG thank you to the team at Anomaly Innovations.


