export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_TDY0DV9lf507IUHmLAzE10of00BdjrSqbB",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-bmenor"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://npch9mhd1l.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SyfpapSUT",
    APP_CLIENT_ID: "26k5v6qurc11u7alpobj0n61ad",
    IDENTITY_POOL_ID: "us-east-1:1f78a9fe-ad5a-40f6-ab99-ed4619250386"
  }
};
