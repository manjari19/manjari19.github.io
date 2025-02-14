# Mini-Project (45 marks)

[View Instructions Here](Mini-project.md)

[How to use Github / How to submit](https://parsa-rajabi.github.io/CMPT-276/#/assignment-lab-details?id=submission)

For this lab, you will include all of your "answers" in this README file. Make sure to cite any sources you use. 

## Task 0: Declare your AI Usage

After you completed this lab, make sure to submit the AI declaration form via MS Form and also upload a PDF copy of your responses to this repository and include the link to PDF in this README file. Note, you must submit this form regardless if you use AI or not. Failure to submit this form will be considered a violation of AI course policy. More details about the AI-usage course policy can be found [here](https://parsa-rajabi.github.io/CMPT-276/#/ai-policy).

[Link to AI Usage Disclosure MS Form](https://parsa-rajabi.github.io/CMPT-276/#/ai-policy?id=disclosure-of-ai-use)

- You will need to log in with your SFU email to access the form.

Name the file in the following format: 

`Mini_Project_AI_Declaration_FirstName_LastName_StudentID.pdf`

Example (Mini Project):

`Mini_Project_AI_Declaration_Parsa_Rajabi_123456789.pdf`


More detailed submission instructions can be found via the [lab page](https://parsa-rajabi.github.io/CMPT-276/#/labs).

## Task 1: Website Wireframe

Include screenshots of your website wireframe here. Make sure the wireframe is clear and easy to understand/read. To compliment your wireframes, describe the layout and how the elements are organized. Screenshots that are blurry or hard to read will be penalized. 

In addition to the screenshots, you can also a link to your wireframe file (if you used an online tool to create it). Make sure the link is accessible to the teaching team (check using an incognito window). This is not a replacement for the screenshots, but an additional resource for the teaching team to understand your wireframe.


## Task 2: Follow-up Questions

For this task, please include your answers for the questions described in [Lab 4](L4.md) file below:

### Q1



### Q2

This website is a personal portfolio that showcases my skills, projects, and background. It includes the following sections:

Home: A landing page introducing myself.
Skills: Highlights my technical expertise.
Projects: Displays my coding projects with GitHub links.
Piano Covers & Poetry: Showcases my creative work.
Contact: A form allowing visitors to reach out to me.
Dark Mode UI: Styled with a modern aesthetic.

### Q3
A favicon is a small icon displayed on the browser tab next to the website title.

It is important for SEO as it:
- Improves branding by making the website easily recognizable.
- Enhances user experience, making tabs easy to identify.
- Some search engines, like Google, display favicons in search results, increasing visibility and credibility.

### Q4
GitHub Pages is a free hosting service provided by GitHub that allows developers to deploy static websites directly from a GitHub repository.

It differs from a regular webpage as:
No server setup required – It serves static HTML, CSS, and JavaScript files directly.
Version control – Since it’s linked to a GitHub repository, changes are easily tracked.
Free hosting – Unlike traditional hosting, GitHub Pages is completely free.

### Q5

GitHub Actions is a CI/CD (Continuous Integration & Continuous Deployment) tool that automates workflows. It allows developers to run scripts, tests, and deploy applications whenever code is pushed to GitHub.


### Q6
I chose React.js due to its component-based architecture and easy state management.

[Insert answer here]

## Task 3: Github Video

For this task, please include your answers for the questions described in [Lab 4](L4.md) file below:

### Q1

Pull Requests (PRs) are a collaboration feature in GitHub that allow developers to propose changes to a repository. A PR lets contributors suggest code modifications from one branch to another before merging. It serves as a code review tool, enabling team members to review, discuss, and approve changes before they are merged into the main project. PRs also provide a record of changes and discussions, helping maintain code quality and preventing conflicts.

### Q2


Green (+34) → Indicates added lines of code in the pull request.
Red (-42) → Indicates removed lines of code in the pull request.
The image shows that 34 new lines were added, while 42 lines were deleted.

### Q3

#### 3a

git merge test:
Merges the changes from the test branch into the current branch (develop).
Git will combine the changes from test into develop.
If no conflicts exist, Git automatically merges the changes.
If conflicts exist, Git pauses the merge and asks the user to resolve them manually.


#### 3b


The message appears because Git detected conflicting changes in the README.md file between the develop and test branches. This happens when:

The same line(s) of code were modified in both branches.
Git doesn’t know which version to keep, so it asks the user to manually resolve the conflict.

#### 3c

Lines under <<<<<<< HEAD (develop branch):
this is some content to mess with
content to append

Lines under ======= (test branch):
totally different content to merge later
