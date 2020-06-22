---
id: week3
title: Week 3
sidebar_label: Week 3
---
Cloud deployment with Heroku. CI/CD.

## Objectives
- Understand the benefits of continuous deployment + continuous integration (CI/CD)
- Learn how to deploy your app to a cloud environment
- Set up Heroku pipelines that automatically deploy when changes are merged on Github
- Set up testing infrastructure
- Get comfortable troubleshooting a deployed application

## Getting Started

Now that you've created some API endpoints and a front end, this week we're going to explore how to deploy everything to a cloud environment.

1. Create a free account on Heroku
2. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
3. [Read this article on process.env](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7) to understand environment variables. Take a look at this PR, which prepares the server for this weeks milestone.
4. Read [Continuous Delivery Principles](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)

## Deliverables
Once you’ve gone through the items under ‘Getting Started’ you should be ready!

Here are the deliverables for this week:

**Create a pipeline and deploy the backend**
1. Create heroku pipeline to deploy the backend
2. Provision a MongoDB database resource for your app
3. Connect to the remote MongoDB database using Robo3T
4. Verify changes in staging manually using Postman, explore the remote database using Robo3T
5. Add tests using Jest
6. Configure pipeline to run tests when server deploys

**Create a pipeline and deploy the front end**

7. Create pipeline to deploy front end 
8. Verify manually in staging by viewing the app in a browser and logging in
9. Add tests using Jest
10. Configure pipeline to run tests when front end deploys

## Relevant Resources

**CICD**
- [What is DevOps?](https://aws.amazon.com/devops/what-is-devops/) (from AWS)
- [Continuous Delivery Principles](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment) (Atlassian)

<img src="https://wac-cdn.atlassian.com/dam/jcr:b2a6d1a7-1a60-4c77-aa30-f3eb675d6ad6/ci%20cd%20asset%20updates%20.007.png?cdnVersion=1084"/>

**Heroku**
- [About Heroku](https://www.heroku.com/about)
- [Pipelines](https://devcenter.heroku.com/articles/pipelines)
- [Preparing a Codebase for Heroku Deployment](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)
- [Logging](https://devcenter.heroku.com/articles/logging#view-logs)

**Jest**
- [Getting Started with Jest](https://jestjs.io/docs/en/getting-started)