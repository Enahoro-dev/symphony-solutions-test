# Symphony Solutions Test
This project is a combination of tests aimed at testing certain elements on the [symphony solutions vacancy page](https://www.symphony-solutions.eu/vacancies/). It was created with a cypress (v 12.10.0) e2e testing backbone.


# Installation
You can clone the git repository and then install the necessary dependencies with:
``` bash
git clone https://github.com/Enahoro-dev/symphony-solutions-test.git
cd symphony-solutions-test
npm install
```

# Running the Tests
You can run the tests in the terminal with
```
npm run cypress:run
```
Or on the Cypress CLI with:
```
npm run cypress:open
```
To then run the tests on the Cypress CLI, select E2E Testing, select a preferred browser. 
Click on the Specs menu item on the left and then select any of the spec files to run the tests.


# Test Reports
Cypress has an inbuilt test reporting capability as a basic report is generated after you run the tests. You can see more detailed test reports in the cypress/results/mochawesome folder. These reports are generated by running in the terminal:
```
 npm run test:report
```

# CI/CD
A CI/CD pipeline was set up for this project using github actions. This is triggered by pushing new commits i.e git push.
