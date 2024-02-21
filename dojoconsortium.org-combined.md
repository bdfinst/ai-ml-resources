# CD diagram



# Dojo Consortium

[![Netlify Status](https://api.netlify.com/api/v1/badges/c3e3e144-dbf9-4bc5-b4a0-e8cd955eb797/deploy-status)](https://app.netlify.com/sites/dojoconsortium/deploys)

This is the collected knowledge of the Enterprise Dojo Consortium. We focus on helping our organizations improve the flow of software delivery.

## How to contribute

This is site is built using Hugo, a Golang-based static site generator. The [Hugo Getting Started](https://gohugo.io/getting-started/) guide shows how to install Hugo locally for content development.

To add content:

1. Fork the repository
2. Make your changes and send a pull request (PR).
3. If you're not yet ready for a review, add "WIP" to the PR name to indicate
  it's a work in progress.
4. Continue updating your doc and pushing your changes until you're happy with
  the content.
5. When you're ready for a review, add a comment to the PR, and remove any
  "WIP" markers.

To check out the changes as you make them and verify content run `npm start` and navigate to [localhost:1313](http://localhost:1313/). This will serve the site and watch for changes.

## Formatting content

This site uses the Google Docsy theme. Documentation for content creation utilizing the theme can be found in [their documentation](https://www.docsy.dev/docs/adding-content/) and you can find an example site with formatting options at [example.docsy.dev](https://example.docsy.dev/docs/)


# Contributing




The purpose of the improvement kata is to act as an exercise in order to
overcome obstacles to your team's improvement goals.

## Recommended Exercise

1. Understand the direction
   - What challenge are we striving to meet?
2. Grasp your current condition
   - What is the current way of operating?
3. Establish your next target condition
   - What way of operating do we want to have next?
4. Experiment Toward the Target Condition
   - A step-by-step discovery process between where we are and where we want to be next.

## Phases

1. Planning phase
   - Exercise steps 1, 2, and 3
2. Executing phase
   - Exercise step 4

## Run the PDCA cycle

1. Plan
   - Recognize an opportunity and plan a change.
2. Do
   - Test the change. Carry out a small-scale study.
3. Check
   - Review the test, analyze the results and identify what you've learned.
4. Act
   - Take action based on what you learned in the study step: If the change did not work, go through the cycle again with a different plan. If you were successful, incorporate what you learned from the test into wider changes. Use what you learned to plan new improvements, beginning the cycle again.

## Tips

Use the <a href="../../assets/pdf/A3 Improvement Plan Template.docx" download>A3 Template</a> to clearly define the experiment

Use this in conjunction with the [improvement cadence](./improvement-cadence.html), so that your team may have
every opportunity to improve their processes.

## Value

As a development team, we want to exercise the improvement kata, so that we may
understand and implement the improvement goals of our team.

## Acceptance Criteria

- Understand your current and target conditions as the most important constraint your team is facing.
- Commit to taking the steps necessary to reach your target condition.
- Re-evaluate and revisit every cadence.


The purpose of this playbook is to give example of an improvement cadence that
development teams may implement in an effort to become more cross-functional and
begin the journey of improvement.

## Recommended Practices

### Daily Standup

#### 1. Go over the board (10 min)

- Does the board resemble the current state of all work in flight?
- Is there anything being worked that is not represented on the board?
- Is anything blocked from progressing?

#### 2. Coaching Kata Session (5 min)

1. What is the current condition? _(Known)_
2. What is the target condition? _(Known)_
3. What obstacles are keeping us from reaching the target condition? _(Which one are we working against now?)_
   - What did we plan as your last step?
   - What did we expect?
   - What actually happened?
   - What did we learn?
     1. What is our next step? _(What do we expect?)_
     2. How quickly can we go and see what we have learned from taking that step?

### Backlog Refinement (Once per cadence x 30min)

1. Take highest priority card
   - Good Practice: pull from top
2. Identify scenarios
   - Behavior Driven Development
3. Split stories
   - Meets [INVEST](/en/testing/glossary.html#invest)
   - [Vertically Sliced](/en/testing/glossary.html#vertical-sliced-story)
   - [Acceptance Criteria](#acceptance-criteria)
4. Refine in the now
   - Only worry about refining work that can be picked up for the next 2.5 days

### Demo/Retrospective (Time-box 30 min)

1. If nothing to demo, we retro as to why.
2. Reflect as to whether the target condition is still the target condition

- Utilize [improvement kata](./improvement-kata.html), awesome board, etc.
- Have actionable items and _implement_ those items

## Tips

- Consider backlog refinement, demo/retro every two days. Only refine enough to
  last until the next refinement session.

- Use the improvement cadence strictly, until the team feels there is a reason
  to make changes or improvements based on team dynamic.

- Use daily standup and retrospective to go over and reflect on team metric health.

## Value

As a development team, we want to understand and implement the improvement
cadence, so that we may have improve our team processes.

## Acceptance Criteria

- Commit to daily standup everyday.
- Have backlog refinement and demo/retro twice a week.
- Create action items and commit to improving them.


Applying the Theory of Constraints is a way to identify the most important
limiting factor that stands in the way of achieving a goal, and then
systematically improving that constraint until it is no longer the limiting factor.

Once you've identified the bottlenecks holding you back, the next step is to
find the solution. It is imperative that you revisit and evaluate the solution
put in place to manage said constraint.

## Recommended Practices

1. Improvement Kata

   The [Improvement Kata](./../playbooks/improvement-kata.html) is a repeating pattern
   by which a team can adapt and innovate towards their goal of continuous
   improvement. Understand the challenge at hand, current condition, and
   target condition. Determine the next steps to reach said target condition.

2. Awesome Board

   The awesome board is a variation of the improvement kata, that defines what
   awesome for a team should look like, and the next steps to reach that goal.

3. Lead Time

   The lead time shows the average time it takes for a new request to be
   delivered. This is measured from the creation date to release date for each
   unit of work and includes [Development Cycle Time](../metrics/development-cycle-time.html).

4. Cycle Time

   The cycle time shows the time from code commit to production deploy. This is
   the minimum time changes can be applied to production.

## Tips

1. [Value Stream Mapping](./vsm.html) is a great
   resource to use to identify your team's constraints within your workflow.

2. Retrospectives are another way to discuss constraints the team is facing.
   **Note: Make sure the constraints that are discussed have action items created**
   **on the backlog.**

## Value

As a development team, we want to identify our constraints, so that we may take
action to mitigate our bottlenecks and continuously improve our workflow.

## Acceptance Criteria

- Identify your biggest constraint.
- Take steps to mitigate.
- Revisit and evaluate your solution.


Cross functional teams contain all of the capabilities to build, test, deploy,
and operate their components without requiring handoffs. Every product team
needs the cross functional abilities to support their components from birth to
death.

## Recommended Practices

- Implement good practices for [managing workflow](./workflow-management/index.html) and
  [estimating](./work-decomposition/complexity-workbreakdown.html) work. Have an [improvement
  process](./improvement-cadence.html) in place, and stick to it.
  - Constantly evaluate and reevaluate your priorities and processes. Measure
    your progress and success, and adjust accordingly.
- Understand role expectations.
  - If the product owner role does not exist, the team should help carry the
    burden of product owner. The team should have knowledge of the business,
    understand the basis for prioritizing work, and use their business technical
    knowledge to challenge requirements if misguided.
  - The role of the scrum trunk or agile coach in a cross functional team comes
    with the ability to not only understand the good practices associated to the
    process, but the ability to execute the improvement process.
- Practice paired programming in order to actively share knowledge across team members.

## Tips

- Understand your consumers, and focus on delivering value to them.
- All team members should perform all aspects to some level of competency.
  Prevent knowledge silos that put development or recovery time at risk.
- Avoid flexing resources between teams. Consider
  [innersourcing](https://innersourcecommons.org/) if a team needs extra help.

## Value

As a team, we want to have a cross functional team, so that we can build and support our product without handing off work to other teams and improve team resiliency in the face of uncertainty.

## Acceptance Criteria

- Assemble all of the skills needed to plan, design, build, and support our product onto one team.

- Clearly define goals and objectives.

- Have a leader to hold the team accountable and help create leaders within the
  team.

---

_[Back To Bifrost](../index.html)_


The purpose of the Value Stream Mapping Workshop is to uncover all of the steps required to take an idea from conception to production. The goal is to uncover the following:

- Steps that exist that can be removed
- Steps that require waiting on another step to continue the flow
- Steps that have a high defect rate

We use the outcome to design an improved value stream so we can prioritize the changes required to reduce the waste in the current flow.

## Prerequisites

1. For a "to be" value stream, there must be an established process for value delivery.
2. Everyone who has a touch point in the value stream should be present for the exercise. This includes, but is not
   limited to developers, managers, product owners, and representatives from external teams that have required steps
   between conception and production.
3. Understand terms associated with value stream mapping.
   - Wait time/non-value time: Time between processes where activity is not occurring.
   - Process time/value add time: Time spent executing a step in the value stream.
   - Percent Complete/Accurate: Percentage of work that is not rejected by the next step in the process. i.e. If code fails
     code review 20% of the time, the %C/A is 80%.

## Recommended Practices

When value stream mapping your team, start from delivery and move backward through each step. You are less likely to miss steps in the process.

## Identify the source

_Example_ Team Demo

For each source of _Requests_

- What is the average process time for this step?
- Who is involved in this step?
- What percentage of work is rejected by the next step in the process?

Your team will need to identify these things for each step in the process. Don't forget to identify where your intake process originated, whether that be stakeholder conversations, service desk, etc.

![Process step](/images/process-step.png "process-step.png")

### Identify Rework Loops

After your team has completed the initial value stream map, they have most likely identified a few rework loops. Rework
loops are interruptions in the value stream where steps have to be corrected.

![Rework loops](/images/rework-loop.png "rework-loop.png")

In this example, the team had to fix code review comments 10% of the time before they could be reviewed and merged into master.

### Identify Wait Time

Once your team has completed the above steps, you will go back through the value stream to identify the wait time
between each step in the process. Make sure to take your cadence into account when calculating.

Add your total process time/wait time to get an average lead time. Understand that the value stream is an
estimate/average based on your team's feedback.

![Wait time](/images/wait-time.png "wait-time.png")

## Outcomes

- Process time/wait time of your flow.
- Visual representation of the value stream(s) of the team.
- Possible constraints to your flow based on process time/wait time, rework loops, and percent complete/accurate. You
  can present these on your VSM as kaizen bursts.

[![](/images/value-stream-map.png)](/images/value-stream-map.png)

## Tips

- Review and maintain the value stream map to show wins associated with your team's improvement plan.
- Take into account all potential flows for team processes, and value stream those as well.

## Value

As a team, we want to understand how to value stream map our team processes, so that we may understand our constraints
to delivery and identify ways to improve.

## Acceptance Criteria

- Value stream all things associated with delivering value.
- Create action items of improvement from exercise.

## References

- [Value Stream Mapping Guide](https://creately.com/blog/diagrams/value-stream-mapping-guide/)
- [Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation](https://learning.oreilly.com/library/view/value-stream-mapping/9780071828918/)


- [Continuous Delivery](#continuous-delivery)
- [Continuous Deployment](#continuous-deployment)
- [Continuous Integration](#continuous-integration)
- [Hard Dependency](#hard-dependency)
- [Soft Dependency](#soft-dependency)
- [Story Points](#story-points)
- [Toil](#toil)
- [Unplanned Work](#unplanned-work)
- [Vertical Sliced Story](#vertical-sliced-story)
- [WIP](#wip)

## Continuous Delivery

The ability to deliver the latest changes to production **on demand**.

## Continuous Deployment

Delivering the latest changes to production **as they occur**.

## Continuous Integration

> Continuous integration requires that every time somebody commits any change, the entire application is built and a comprehensive
> set of automated tests is run against it. Crucially, if the build or test process fails, the development team stops whatever they
> are doing and fixes the problem immediately. The goal of continuous integration is that the software is in a working state all the
> time.
>
> Continuous integration is a practice, not a tool. It requires a degree of commitment and discipline from your development team.
> You need everyone to check in small incremental changes frequently to mainline and agree that the highest priority task on the
> project is to fix any change that breaks the application. If people don't adopt the discipline necessary for it to work, your
> attempts at continuous integration will not lead to the improvement in quality that you hope for.

<small>-- "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment
Automation." - Jez Humble & David Farley</small>

You can find recommended [practices for CI at MimimumCD.org](https://minimumcd.org/minimumcd/ci/)

## Hard Dependency

A hard dependency is something that must be in place before a feature is
delivered. In most cases, a hard dependency can be converted to a soft dependency with feature flags.

## Soft Dependency

A soft dependency is something that must be in place before a feature can be fully functional, but does not block the
delivery of code.

## Story Points

A measure of the relative complexity of delivering a story. Historically, 1 story point was 1 "ideal
day". An ideal day is a day where there are no distractions, the code is flowing, and we aren't waiting on anything. No
such day exists. :wink:

There are many common story point dysfunctions: pointing defects, unplanned work, and [spikes](/docs/work-decomposition/spikes) are some of the more
common. Adjusting points after work is done is another common mistake. The need for story points is a good indication
that we do not understand the work. If we have [decomposed the work](/docs/work-decomposition/behavior-driven-development) correctly, everything should be 1 point.

## Toil

The repetitive, predictable, constant stream of tasks related to
maintaining an application.

[SRE Workbook: Eliminating Toil](https://landing.google.com/sre/workbook/chapters/eliminating-toil/)

## Unplanned Work

Any work that the team inserts before the current planned work. Critical defects and "walk up" requests are unplanned
work. It's important that the team track all unplanned work and the reason so that steps can be taken by the team to
reduce the future impact.

## Vertical Sliced Story

A story should represent a response to a request that can be deployed
independently of other stories. It should be aligned across the tech stack so
that no other story needs to be deployed in concert to make the function work.

Examples:

- Submitting a search term and returning results.
- Requesting user information from a service and receiving a response.

## WIP

Work in progress is any work that has been started but not delivered to the end-user


> "Our research has uncovered 24 key capabilities that drive improvements in software delivery performance in a statistically significant way. Our book details these findings."

- Excerpt From: Nicole Forsgren PhD, Jez Humble & Gene Kim. [Accelerate](<https://learning.oreilly.com/library/view/accelerate/9781457191435/>)

---

## Continuous Delivery Capabilities

### Use version control for all production artifacts

Version control is the use of a version control system, such as GitHub or Subversion, for all production artifacts,
including application code, application configurations, system configurations, and scripts for automating build and
configuration of the environment.

### Automate your deployment process

Deployment automation is the degree to which deployments are fully automated and do not require manual intervention.

### Implement continuous integration

[Continuous integration](/docs/glossary/#continuous-integration) (CI) is the **first step** towards continuous delivery.
This is a development practice where code is regularly
checked in, and each check-in triggers a set of quick tests to discover serious regressions, which developers fix immediately. The
CI process creates canonical builds and packages that are ultimately deployed and released.

### Use trunk-based development methods

Trunk-based development has been shown to be a predictor of high performance in software development and delivery. It is
characterized by fewer than three active branches in a code repository; branches and forks having very short lifetimes
(e.g., less than a day) before being merged into trunk; and application teams rarely or never having code lock periods
when no one can check in code or do pull requests due to merging conflicts, code freezes, or stabilization phases.

### Implement test automation

Test automation is a practice where software tests are run automatically (not manually) continuously throughout the
development process. Effective test suites are reliable—that is, tests find real failures and only pass releasable code.
Note that developers should be primarily responsible for creation and maintenance of automated test suites.

### Support test data management

Test data requires careful maintenance, and test data management is becoming an increasingly important part of automated
testing. Effective practices include having adequate data to run your test suite, the ability to acquire necessary data
on demand, the ability to condition your test data in your pipeline, and the data not limiting the amount of tests you
can run. We do caution, however, that teams should minimize, whenever possible, the amount of test data needed to run
automated tests.

### Shift left on security

Integrating security into the design and testing phases of the software development process is key to driving IT
performance. This includes conducting security reviews of applications, including the Infosec team in the design and
demo process for applications, using pre-approved security libraries and packages, and testing security features as a
part of the automated testing suite.

### Implement continuous delivery (CD)

CD is a development practice where software is in a deployable state throughout its lifecycle, and the team prioritizes keeping the
software in a deployable state over working on new features. Fast feedback on the quality and deployability of the system is
available to all team members, and when they get reports that the system isn't deployable, fixes are made quickly.
Finally, the system can be deployed to production or end users at any time, on demand.

---

## Architecture Capabilities

### Use a loosely coupled architecture

This affects the extent to which a team can test and deploy their applications on demand, without requiring orchestration with other
services. Having a loosely coupled architecture allows your teams to work independently, without relying on other teams for support
and services, which in turn enables them to work quickly and deliver value to the organization.

### Architect for empowered teams

Our research shows that teams that can choose which tools to use do better at continuous delivery and, in turn, drive
better software development and delivery performance. No one knows better than practitioners what they need to be
effective.

---

## Product and Process Capabilities

### Gather and implement customer feedback

Our research has found that whether organizations actively and regularly seek customer feedback and incorporate this
feedback into the design of their products is important to software delivery performance.

### Make the flow of work visible through the value stream

Teams should have a good understanding of and visibility into the flow of work from the business all the way through to
customers, including the status of products and features. Our research has found this has a positive impact on IT
performance.

### Work in small batches

Teams should slice work into small pieces that can be completed in a week or less. The key is to have work decomposed
into small features that allow for rapid development, instead of developing complex features on branches and releasing
them infrequently. This idea can be applied at the feature and the product level. (An MVP is a prototype of a product
with just enough features to enable validated learning about the product and its business model.) Working in small
batches enables short lead times and faster feedback loops.

### Foster and enable team experimentation

Team experimentation is the ability of developers to try out new ideas and create and update specifications during the
development process, without requiring approval from outside of the team, which allows them to innovate quickly and
create value. This is particularly impactful when combined with working in small batches, incorporating customer
feedback, and making the flow of work visible.

---

## Lean Management and Monitoring Capabilities

### Have a lightweight change approval process

Our research shows that a lightweight change approval process based on peer review (pair programming or intra-team code
review) produces superior IT performance than using external change approval boards (CABs).

### Monitor across application and infrastructure to inform business decisions

Use data from application and infrastructure monitoring tools to take action and make business decisions. This goes
beyond paging people when things go wrong.

### Check system health proactively

Monitor system health, using threshold and rate-of-change warnings, to enable teams to preemptively detect and mitigate problems.

### Improve processes and manage work with work-in-progress (WIP) limits

The use of work-in-progress limits to manage the flow of work is well known in the Lean community. When used
effectively, this drives process improvement, increases throughput, and makes constraints visible in the system.

### Visualize work to monitor quality and communicate throughout the team

Visual displays, such as dashboards or internal websites, used to monitor quality and work in progress have been shown
to contribute to software delivery performance.

---

## Cultural Capabilities

### Support a generative culture (as outlined by Westrum)

This measure of organizational culture is based on a typology developed by Ron Westrum, a sociologist who studied
safety-critical complex systems in the domains of aviation and healthcare. Our research has found that this measure of
culture is predictive of IT performance, organizational performance, and decreasing burnout. Hallmarks of this measure
include good information flow, high cooperation and trust, bridging between teams, and conscious inquiry.

### Encourage and support learning

Is learning, in your culture, considered essential for continued progress? Is learning thought of as a cost or an
investment? This is a measure of an organization’s learning culture.

### Support and facilitate collaboration among teams

This reflects how well teams, which have traditionally been siloed, interact in development, operations, and information security.

### Provide resources and tools that make work meaningful

This particular measure of job satisfaction is about doing work that is challenging and meaningful, and being empowered
to exercise your skills and judgment. It is also about being given the tools and resources needed to do your job well.

### Support or embody transformational leadership

Transformational leadership supports and amplifies the technical and process work that is so essential in DevOps. It is
comprised of five factors: vision, intellectual stimulation, inspirational communication, supportive leadership, and
personal recognition.


- [Cloud Native checklist](#cloud-native-checklist)
- [Principles and Practices](#principles-and-practices)
  - [Small, autonomous, highly-cohesive services](#small-autonomous-highly-cohesive-services)
  - [Hypermedia-driven service interactions](#hypermedia-driven-service-interactions)
  - [Modeled around business concepts](#modeled-around-business-concepts)
  - [Hide internal implementation details](#hide-internal-implementation-details)
  - [Decentralize everything](#decentralize-everything)
  - [Deploy independently](#deploy-independently)
  - [Isolate failure](#isolate-failure)
  - [Highly observable](#highly-observable)
  - [Culture of automation](#culture-of-automation)
  - [References](#references)

## Cloud Native checklist

| Capability                                             | Yes / No |
| ------------------------------------------------------ | -------- |
| Domain Context diagram current with dependencies shown |          |
| Exception logging                                      |          |
| Logs stream or self-purge                              |          |
| Dynamically configurable log levels                    |          |
| Database connections self-heal                         |          |
| Dependency connections self-heal                       |          |
| Service auto-restarts on failure                       |          |
| Automated resource and performance monitoring          |          |
| Have NFRs & SLAs defined for each service              |          |
| Automated alerting for SLAs and NFRs                   |          |
| No manual install steps                                |          |
| Utilize Correlation ID                                 |          |
| Load balanced                                          |          |
| Automated smoke tests after each deployment            |          |
| Heartbeat responds in less than 1 minute after startup |          |
| No start-up ordering required                          |          |
| Minimal critical dependencies                          |          |
| Graceful degradation for non-critical dependencies     |          |
| Circuit breakers and request throttles in place        |          |

## Principles and Practices

While practices may change over time, principles are expected to be less volatile.

### Small, autonomous, highly-cohesive services

- Prefer event-driven, asynchronous communications between services.
- Prefer eventual consistency / replication of select data elements over shared data structures.
- Be cautious about creating shared binary dependencies across services.
- Services are able to be checked out and run locally using embedded DBs, and/or mocked endpoint dependencies as necessary.

### Hypermedia-driven service interactions

- Model resources on the domain.
- Use embedded links to drive resource state transitions.
- [HATEOAS Reference](http://restcookbook.com/Basics/hateoas/)

### Modeled around business concepts

- Produce a system context diagram to understand your system boundaries. Consider following c4 architecture diagramming techniques.
- Follow Domain Driven Design practices to understand your domain early in development, and model your domain in your code.
- Use bounded contexts to isolate service boundaries and converse with canonical-model-based systems.

### Hide internal implementation details

- Model bounded contexts
- Use packaging to scope components.
- Services own their data & hide their databases.
- No database-driven integration.
- Technology-agnostic APIs (ReST).

### Decentralize everything

- Self-service whenever possible.
- Teams own their services (but also consider internal open source practices).
- Align teams to the organization.
- Prefer choreography over orchestration.
- Dumb middleware, smart endpoints.
- Deployable to cloud and local (DC/store) environments

### Deploy independently

- Coexist versioned endpoints.
- Prefer targeted releases of individual services over habitual mass-installs of several services at once.
- Avoid tightly bound client/server stub generation.
- One service per host.
- Blue/green release testing techniques.
- Consumer-driven upgrade decisions.

### Isolate failure

- Don't treat remote calls like local calls.
- Set timeouts appropriately (consider TCP connect and read timeouts in the 90ish-percentiles)
- Apply bulk-heading & circuit breaker patterns to limit fallout of failure.
- Understand and design for what should happen during network partitioning (network failures)
- Use redundancy & load balancing

### Highly observable

- Monitored endpoints.
- Use synthetic transactions to simulate real user behavior.
- Aggregate logs and statistics.
- Use correlation IDs to trace calls throughout the system.

### Culture of automation

- Automated developer driven testing: unit, functional, contract, integration, performance, & etc.
- Deploy the same way everywhere.
- Implement continuous delivery practices.
- [Trunk based development](https://trunkbaseddevelopment.com/) over branching by feature/team/release to promote continuous integration practices.
- **In the face of a lack of automation/provisioning/monitoring, prefer a properly structured monolith over many segregated smaller services.**

### References

- [Building Microservices](http://shop.oreilly.com/product/0636920033158.do) by Sam Newman
- [12 Factor Application](https://12factor.net)
- [Choosing an HTTP Status Code](https://www.codetinkerer.com/2015/12/04/choosing-an-http-status-code.html)


These are the core skills we recommend everyone learn to execute CD.

## Behavior-Driven Development

Every step in CD requires clear, testable acceptance criteria as a prerequisite. BDD is not test automation. BDD is the
discussion that informs acceptance test driven development.

- Videos
  - [What is BDD](https://www.youtube.com/watch?v=zYj70EsD7uI) Dave Farley co-author of [Continuous Delivery](https://continuousdelivery.com) - 16:28 min
  - [Acceptance Testing](https://www.youtube.com/watch?v=JDD5EEJgpHU)
    By Dave Farley - 14:49 min
- Recommended Reading
  - [BDD In Action](https://www.manning.com/books/bdd-in-action) by John Ferguson Smart
  - [Behavior-Driven Development with Cucumber: Better Collaboration for Better Software](https://www.amazon.com/Behavior-Driven-Development-Cucumber-Specification-Example/dp/0321772636)
    by Richard Lawrence, Paul Rayner

## Continuous Integration

Continuous integration is a requirement for CD. It requires very frequent integration of non-breaking code.

- Videos
  - [Top 10 Rules For Continuous Integration](https://www.youtube.com/watch?v=Xl62gQpAl1w) Dave Farley - 17 min.
  - [Continuous-Integration-Practices](https://www.linkedin.com/learning/devops-foundations/continuous-integration-practices?u=26192810)
    on Linkedin Learning. Instructed by Ernest Mueller and James Wickett - 4 min.
  - [Continuous-Integration](https://www.linkedin.com/learning/devops-foundations-microservices/continuous-integration?u=26192810)
    on Linkedin Learning. Instructor by Laura Stone - 4 min.
- Recommended Reading
  - [Continuous Integration: Improving Software Quality and Reducing Risk](https://www.amazon.com/Continuous-Integration-Improving-Software-Reducing/dp/0321336380)
    by Paul M. Duvall, Steve Matyas, Andrew Glover.

## Conway's law

"Any organization that designs a system will produce a design whose structure is a copy of the
organization's communication structure." - Melvin Conway

Loosely coupled teams create loosely coupled systems. The opposite is also true.

- Videos
  - [Don't Forget Conway's Law](https://www.youtube.com/watch?v=zA1EXJV1JWQ) Sarah Novotny - 8:50 mins.
- Recommended Reading
  - [Building Microservices - Ch 10](https://www.oreilly.com/library/view/building-microservices/9781491950340/ch10.html) by Sam Newman.

## Domain-Driven Design

This is another key design tool both for organizational and system design. This is a critical skill for developing microservices.

- Videos
  - [What is DDD](https://www.youtube.com/watch?v=pMuiVlnGqjk) Eric Evans - 57:06 min.
  - [Software Architecture: Domain-Driven Design](https://www.linkedin.com/learning/software-architecture-domain-driven-design/better-apps-with-domain-driven-design?u=26192810) LinkedIn Training Course.
- Recommended Reading
  - [What Is Domain-Driven Design?](https://www.oreilly.com/library/view/what-is-domain-driven/9781492057802/preface01.html#:~:text=DDD%20is%20a%20methodology%20that,domain%2C%20needs%2C%20and%20strategy) by Vladik Khononov.

## Pipeline Steps

Architecting a system of delivery is about designing efficient quality gates for the system's context.

- Videos
  - [Understanding A DevOps Pipeline](https://www.youtube.com/watch?v=MnyvgFDh-kw) David Farley - 13:24 mins.
- Recommended Reading
  - [Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation](https://learning.oreilly.com/library/view/continuous-delivery-reliable/9780321670250/) Jez Humble and David Farley

## Test-Driven Development

TDD highly correlates with application architecture that is easy to maintain and easy to upgrade.

- Videos
  - [Does TDD Lead to Better Software Design?](https://www.youtube.com/watch?v=fSvQNG7Rz-8) Dave Farley co-author of
    [Continuous Delivery](https://learning.oreilly.com/library/view/continuous-delivery-reliable/9780321670250/) - 18:32 min.
  - [Three Mindsets of TDD](https://www.youtube.com/watch?v=xUi2951ufaw) Dave Farley co-author of
    [Continuous Delivery](https://learning.oreilly.com/library/view/continuous-delivery-reliable/9780321670250/) - 18:57 min.
  - [TDD and DDD with .NET Core and VSCode](https://www.youtube.com/watch?v=ORe0r4bpfac) - 1 hour
- Recommended Reading
  - [Test Driven Development: By Example](https://learning.oreilly.com/library/view/test-driven-development/0321146530/) by Kent Beck.

## Three Ways

The core principles that define DevOps:

1. Consider the system of delivery as a whole
2. Amplify feedback loops
3. Continuously learn and improve the delivery system

- Videos
  - [The 3 Ways of The Phoenix Project](https://www.youtube.com/watch?v=nUOXDEvplRc) co-author [Gene Kim](https://learning.oreilly.com/library/view/the-phoenix-project/9781457191350/) - 3:30 mins.
- Recommended Reading
  - [The Three Ways: The Principles Underpinning DevOps](https://itrevolution.com/the-three-ways-principles-underpinning-devops/) by Gene Kim
  - [The DevOps Handbook](https://itrevolution.com/product/the-devops-handbook-second-edition/) - Gene Kim et al

## Value Stream Mapping

The primary process analysis tool used to help identify and attack constraints to delivery.

- Videos
  - [How we used Value Stream Mapping to accelerate DevOps adoption](https://www.youtube.com/watch?v=OXMdSe1_wc0) Marcus Robinson - 45:26 min.
- Recommended Reading
  - [Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation](https://learning.oreilly.com/api/v1/dashboard/continue/9780071828918) - Karen Martin and Mike Osterling

## Wastes

Our goal is to remove waste daily. We must first learn to recognize it.

- Videos
  - [The 7 Types of Waste in Software Development](https://www.youtube.com/watch?v=c8tAKBHO2i8) Alex Green - 10:34 mins.
- Recommended Reading
  - [Making Work Visible](https://learning.oreilly.com/library/view/making-work-visible/9781457191428/10-part-1.xhtml) by Dominica DeGrandis.
  - [The Art of Lean Software Development](https://learning.oreilly.com/library/view/the-art-of/9780596155711/ch02.html) by Curt Hibbs; Mike Sullivan; Steve Jewett.


Making work visible to ourselves, as well as our stakeholders is imperative in
our workflow management process. People are visual beings. Workflows give
everyone a sense of ownership and accountability.

---

## Make use of a Kanban board

Kanban boards help you to make work and problems visible and improve workflow
efficiency.

Kanban boards are a recommended practice for all agile development methods. Kanban signals your availability to do work. When an individual pulls
something from the backlog into progress, they are committing to being
available to do the work the card represents.

With Kanban boards, your team knows who's working on what, what the status of
that work is, and how long that work has been in progress.

---

### Building a Kanban Board

To make a Kanban board you need to create lanes on your board that represent
your team's workflow. Adding work in progress (WIP) limits to swim-lanes will
enhance the visibility of your team's workflow.

The team only works on cards that are in the "Ready to Start" lane and
team members always pick from the top. No "Cherry Picking".

The following is a good starting point for most teams.

- Backlog
- Ready to Start
- Development
- Ready to Review
- Blocked
- Done

---

## Tips

Track everything:

- Stories, tasks, spikes, etc.
- Improvement items
- Training development
- Extra meetings

Work is work, and without visibility to all of the team's work it's impossible to identify and reduce the waste created by unexpected work.

Bring visibility to dependencies across teams, to help people anticipate
what's headed their way, and prevent delays from unknowns and invisible work.

---

## References

[Making Work Visible](https://itrevolution.com/book/making-work-visible/) - Dominica DeGrandis


Unplanned work is any interruption that prevents us from finishing something as planned. There are times when unplanned work is necessary and understandable, but you
should be wary of increased risk, uncertainty, and reduced predictability.

---

### Cost of Delay

Work that has not been prioritized is work that has not been planned. When there are
competing features, requests, support tickets, etc., it can be difficult to prioritize
what should come first.

Most of the time, teams prioritize based on what the customer wants, what the
stakeholders want, etc.

Cost of Delay makes it easier to decide priorities based on value and urgency. How much money are we costing (or saving) the organization if _Feature A_ is
delivered over _Feature B_?

---

### Capacity Planning

The most common pitfall that keeps teams from delivering work is unrealistic
capacity planning.

Teams that plan for 100% of their capacity are unable to fit unknowns
into their cadence, whether that be unplanned work, spikes, or continuous experimentation
and learning.

Planned capacity should fall between 60% and 80% of a team's max capacity.

---

### Tips

- Plan for unplanned work. Pay attention to the patterns that present themselves, and analyze
  what kind of unplanned work is making it to your team's backlog.
- Make work visible, planned and unplanned, and categorize unplanned work based on value and urgency.

---


**_Delivery and quality are significantly impacted by teams sharing
ownership of the source code. This adds process overhead to ensure everyone knows
what's happening in the code and dilutes quality responsibility._**

## Recommended Practices

- Utilize automated pipelines to help validate that the product remains releasable before and after any code is merged to the trunk.
- Limit ownership of a repository to a single "Two Pizza Team" that decides what code to merge.
- Give all developers on the team access to merge code to the trunk. Give read access to everyone else.
- Use an [innersourcing](https://innersourcecommons.org/) policy so that people outside of the team know how to contribute to your product.

## Tips

- Teams looking to create an [InnerSourcing](https://innersourcecommons.org/) policy can start by applying their Definition of Done to any external contributions.
- No contributions will bypass the team's quality process.
- Automated pipelines validate that PRs from internal and external contributors conform to quality standards.
- All team members have access to merge to the trunk.
- [InnerSourcing](https://innersourcecommons.org/) and/or external contributions **fork the repository they do not branch**.
- Teams no larger than 10 people, including all roles.

## References

- See the [CD Common Problems](/docs/cd/cd-problems)
  page to learn about [team structure](/docs/cd/cd-problems#team-structure)
  problems and many others to avoid in your journey.

---


**Retrospectives are critical** for teams that are serious about continuous
improvement. They allow the team an opportunity to take a moment to inspect and
adapt how they work. The importance of this cannot be overstated. Entropy is
always at work, so we must choose to change so that change doesn't choose us.

---

## Recommended Practices

### Successful Retrospectives

A successful retrospective has five parts:

1. Go over the mission of the team and the purpose of retrospective.
2. The team owns where they are right now using Key Performance Indicators
   (KPIs) they've agreed on as a team.
3. The team identifies whether experiments they are running are working or not.
   1. If an experiment is working, the team works to standardize the changes as
      part of daily work.
   2. If an experiment is not working, the team either adjusts the experiment
      based on feedback or abandons the experiment to try something else.
   3. Both are totally acceptable and expected results. In either case, the
      learnings should be shared publicly so that anyone in the organization can
      benefit from them.
4. The team determines whether they are working towards the right goal and
   whether the experiments they are working on are moving them towards it.
   1. If answer to either of the questions is "No." then the team adjusts as necessary.
5. Open and honest conversation about wins and opportunities throughout.

### Example Retro Outline

- Go over the team's mission statement and the purpose of retrospective (2 min)
- Go over the team's Key Performance Indicators and make sure everyone knows
  where we are (5-10 min)
- Go over what experiments the team decided to run and what we expected to
  happen (5 minutes)
- What did we learn this week? (10-15 minutes)
  - Should we modify any team documents? (2 minutes)
- What went well this week? (5-10 minutes)
- What sinks our battleship? (5-10 minutes)
- Are we working towards the right things? What are we going to try this week?
  How will we measure it? (10-15 minutes)

### Organizing Retros

There are some important things to consider when scheduling a retrospective.

1. Ensure Psychological Safety
   1. If the team feels like they can't speak openly on honestly, they won't.
   2. Any issues with psychological safety must be addressed before any real
      progress can be made.
2. Make them Regular
   1. Agree to a time, day, frequency as a team to meet.
3. Include everyone responsible for delivery
   1. Ideally this will include business colleagues (PO), operations, testing,
      and developers involved in the process.
   2. If there are more than 10-12 people in the meeting, your team is
      probably too big.
4. Co-location concerns
   1. If the team is split across timezones, then accommodations
      should be made so that the team can effectively communicate.
   2. If the time separation is extreme (i.e. India/US), then in may be better
      to have each hemisphere retro separately and compare notes
      asynchronously.
   3. Schedule meetings to be inclusive of the most remote. Don't schedule rooms
      with bad audio/no video if there are remote participants. Have it via a
      remote meeting solution (Zoom, etc.)

## Tips

- Create cards on whatever board you are using to track your work for action
  items that come out of retrospective
- Treating team improvement as a deliverable will help the team treat them
  more seriously.
- Do not work on more than a few actions/experiments at a time
- If the retrospective has remote attendees, ask that everyone turn on their
  cameras so that the team can look everyone in the eyes.
- Outcome over output: If the format of retro isn't helping you improve, change
  it or seek help on how to make it better. The teams that cancel retro are
  almost always the teams that need it most.

---

## Known Impediments

### "Typical" Retrospectives

Normally, a scrum-like retro involves 3 questions about the previous iteration:

- What went well?
- What could we improve?
- What are some actions we can take?

This is pretty open ended format that is very simple to go over in a training
class. The challenge is the nuance of facilitating the format.

While it can be effective, what we have found is that this particular format can
actually stunt the improvement of many teams when used incorrectly. And since
the format is so open ended, that's extremely easy to do.

Retrospectives that follow the above format are something that many teams
struggle with. They can...

- Feel Ineffective, where the same issues crop up again and again without resolution.
- End with a million action items that never get done or tracked.
- "Improve" things that don't actually move the needle on team productivity or happiness
- End up as a gripe session where there are no actionable improvements identified.

`This is such a waste of time. I'd rather be coding...`

It can be extremely frustrating to team members when it feels like
retrospectives are just another meeting that they have to go to. If that ever
becomes the case, that should signal a huge red flag! Something is wrong!

### Psychological Safety

If the team feels like they are going to be judged, punished, or generally
negatively affected by participating in retrospective, then they are going to
keep their opinions to themselves. Without the safety to have their voices heard
or take moderate, hypothesis driven, risk, the team will not improve as fast as
they can (if at all).

However, if leadership feels like they are being disrespected, they aren't being
listened to/considered, or feel like they are going to be negatively impacted by
the outcomes of the team they are more likely to restrain a team from their full
potential.

It's a delicate balancing act that takes trust, respect, and empathy from all
sides to come to win-win solutions.


## Why Limit WIP?

Work in Progress is defined as work that has started but is not yet finished. Limiting WIP helps teams reduce context switching, find workflow issues, and keep teams focused on collaboration and finishing work.

---

### How do we limit WIP?

- Start with one lane on your board.
- Set your WIP limit to N+2 ("N" being the number of people contributing to that lane)
- Continue setting WIP lower.
- Once the WIP limit is reached, no more cards can enter that lane until one exits.

---

### Capacity Utilization

There is a direct correlation between WIP and capacity utilization.
Attempting to load people and resources to 100% capacity utilization creates
wait times. Unpredictable events equal variability, which equals capacity overload.
The more individuals and resources used, the higher the cost and risk.

In order to lessen work in progress, be aggressive in prioritization, push
back when necessary, and set hard WIP limits. Select a WIP limit that is
doable but challenges you to say no some of the time.

---

### Conflicting Priorities

When we start a new task before finishing an older task, our work in
progress goes up and things take longer. Business value that could have been
realized sooner gets delayed because of too much WIP.

Be wary of falling back into the old habit of starting everything because of
the pressure to say yes to everything.

Look at priority ways of working:

- Assigned priority
- Cost of delay
- First-in, first-out

---

### Tips

#### Swarming Stories

Having more than one person work on a task at the same time avoids situations
where team understanding is mostly limited to a subset of what's being built.
With multiple people involved early, there is less chance that rework will
be needed later.

By having more than one developer working on a task, you are getting a
real-time code review.

#### Story assignment

Visually distinguish important information.

- Who's working on what?
- Has this work been in progress for too long?
- Is this work blocked from progressing?
- Have we reached our WIP limit?

---

## References

[Making Work Visible](https://itrevolution.com/book/making-work-visible/) - Dominica DeGrandis


> Is it __DONE__, __DONE DONE__, or is it __DONE DONE DONE__?

All teams need a Definition of Done. The Definition of Done is an agreement made between the team
that a unit of work isn't complete without meeting certain conditions.

## Recommended Practices

We use the Definition of Done most commonly for user stories. The team and
product owner must agree that the story has met all criteria for it to be
considered done.

A definition of done can include anything a team cares about, but must include
these criteria:

- All tests passed
- All acceptance criteria have been met
- Code reviewed by team member and merged to trunk
- Demoed to team/stakeholders as close to prod as possible
- All code associated with the acceptance criteria deployed to production

Once your team has identified all criteria that a unit of work needs to be
considered done, you must hold yourself accountable to your Definition of Done.

## Value

As a development team, we want to understand our team's definition of done, so
that we can ensure a unit of work is meeting the criteria acceptable for it to
be delivered to our customers.

## Acceptance Criteria

- Identify what your team cares about as a Definition of Done.
- Use your Definition of Done as a tool to ensure quality stories are being
  released into production.
- Revisit and evaluate your Definition of Done.


## Recommended Practices

- Small changes allow for faster code review and enhance the feedback loops.
- Everyone on the team is capable of performing code review.
- Code reviews are the second highest priority for a team behind blocked issues and
  ahead of [WIP](/docs/metrics/work-in-progress).

## Tips

- Automate coding standards instead of reviewing for them.
- Focus the review on the tests and code readability. The tests should meet the acceptance criteria agreed upon by
  the team.
- Keep pull requests small. Look into [Work Decomposition](/docs/work-decomposition/work-breakdown)
  for guidance.
- Use synchronous code review to remove communication delays.
- As the person being reviewed, remember the 10 Commandments of Code Review
  - Thou shalt not take it personally
  - Thou shalt not marry thy code
  - Thou shalt consider all feedback
  - Thou shalt articulate thy rationale
  - Thou shalt be willing to compromise
  - Thou shalt contribute to others’ code reviews
  - Thou shalt treat submitters how thou would like to be treated
  - Thou shalt not be intimidated by the number of comments
  - Thou shalt not repeat the same mistakes
  - Thou shalt embrace the nits

---

## References

- [The 10 Commandments of Navigating Code Reviews](https://techbeacon.com/app-dev-testing/10-commandments-navigating-code-reviews)

---


## Use Trunk Based Development

- All branches originate from the trunk
- All branches merge into the trunk
- Branches, if used, are very short-lived
  - The smaller the PR, the easier it is to identify issues. The smaller the change, the less risk associated with that change.
- The trunk can always be built and deployed without breaking production.
  - When needed, use techniques such as [Branch by Abstraction](https://www.branchbyabstraction.com/) or feature flags to ensure backward compatibility.
- The change includes __all__ appropriate automated tests to validate that the change is deliverable.
  - [Unit tests](/docs/testing/unit)
  - [Functional test](/docs/testing/functional)
  - [Contract tests](/docs/testing/contract)
  - etc.
  
## Branching vs. Forking

Use the right pattern for the right reason. Branches are the primary flow for CI
  and are critical for allowing the team to have visibility to work in progress that the team is responsible for completing. Forks
  are how proposed, unplanned changes are made from outside the team to ensure quality control and to reduce confusion from
  unexpected branches.

- Use forks for:
  - Contribution from a contributor outside the team to ensure proper quality controls are followed and to prevent
      cluttering up the team's repository with external contributions that may be abandoned.
- Use branches for:
  - All internal work to keep that work visible to the team.

### Tips

- [Story Slicing](/docs/work-decomposition/story-slicing) helps break
  development work into more easily consumable, testable chunks.
- You don't have to wait for a story/feature to be complete as long as you have tested
  that won't break production.
- Pull requests should be small and should be prioritized over starting any new development.

### Common Issues

Trunk-based development and continuous integration often take workflow adjustments on the team.
The main reasons teams struggle with CI are:

- [Test architecture](/docs/testing)
- [Work that is too big and/or lacks proper refinement](/docs/work-decomposition/work-breakdown)
- Issues with [source code ownership](/docs/workflow-management/source-ownership) (one repo owned by more than one team)
- [Workflow management](/docs/workflow-management/) within the team

---

## References

- [Trunk Based Development](https://trunkbaseddevelopment.com/).
- [Branching by Abstraction](https://www.branchbyabstraction.com/).
- [Feature Flags/Toggles](https://martinfowler.com/articles/feature-toggles.html).

## FAQ

- [Pre-requisites for TBD](https://trunkbaseddevelopment.com/deciding-factors/)
- [Benefits of using TBD](https://trunkbaseddevelopment.com/5-min-overview/)
- [Releasing From Trunk](https://trunkbaseddevelopment.com/release-from-trunk/)
- [Handling Infrequent Releases](https://trunkbaseddevelopment.com/youre-doing-it-wrong/#cherry-pick-of-bug-fixes-from-release-branches-to-the-trunk)
- [Handling Bug Fixes](https://trunkbaseddevelopment.com/branch-for-release/#fix-production-bugs-on-trunk)
- [Handling Incomplete Code/Features](https://trunkbaseddevelopment.com/feature-flags/)
- [Validating Release Quality](https://trunkbaseddevelopment.com/continuous-integration/#ci-services-bots-verifying-human-actions)
- [Transitioning to Trunk Based Development](https://medium.com/super-dispatch/the-transition-to-trunk-based-development-c131fd3ae361)
- [Trunk Based Development- You're doing it wrong](https://trunkbaseddevelopment.com/youre-doing-it-wrong/)

---


Working together as a team is how we move things from "In Progress" to "Done", as rapidly as possible in value sequence. It's important for minimizing WIP that the team looks at the backlog as the team's work and does not pre-assign work to individuals.

## Make Work Visible

To create and maintain the flow of delivery, we need the following:

- [Definition of Done](/docs/workflow-management/definition-of-done)
- [A way to visualize the workflow](/docs/workflow-management/visualizing-workflow), virtual or physical, with a
  prioritized backlog that has not been refined too far in the future.

---

### Plan Work

Unplanned work is _anything_ coming into the backlog that has not been committed
to, or prioritized. This can include feature requests, support tickets, etc.

Common struggles teams face with unplanned work can be:

- [Work that has not been prioritized](/docs/workflow-management/unplanned-work)
- [Work that has not been decomposed](/docs/work-decomposition/work-breakdown)
- [Work that is unplanned](/docs/workflow-management/unplanned-work)

---

### Do Work

Completed work meets the [Definition of Ready](/docs/work-decomposition/definition-of-ready)
when work begins, the [Definition of Done](/docs/workflow-management/definition-of-done) when work
is delivered, and can be completed in less than two days.

Process smells identified for completing work include:

- Context switching
- Ineffective demos that prevent early feedback
- Multiple teams own pieces of the process (Build, Test, Deploy, etc.)
- [Status and visibility of work is unclear](/docs/workflow-management/visualizing-workflow)
- Siloed work on the team

---

### Improve Work

In order to plan and complete work effectively, there must be [an improvement
process](/docs/cd/delivery-system-improvement-journey#3-continuous-improvement) in place. The improvement process is centered around feedback loops.

Challenges associated with the improvement process:

- Infrequent or nonexistent demos
- [Infrequent or unactionable retrospectives](/docs/workflow-management/retrospective)

---

### Measuring Your Workflow

A good measure to implement in your team's workflow is [WIP](/docs/workflow-management/limiting-wip).
Limiting work in progress can help reduce constraints in your workflow.

[Development cycle time](/docs/metrics/development-cycle-time) is a key
measure of success when trying to optimize and automate your team's workflow.


In order to effectively understand and implement the work breakdown flow, the
team needs to have the following prerequisites and understandings.

- [Definition of Ready](/docs/work-decomposition/definition-of-ready)
- [Definition of Done](/docs/workflow-management/definition-of-done)
- Backlog refinement cadence with the appropriate team members and stakeholders involved

---

## Work Breakdown Process

The goal of the work breakdown process is to decompose work into small batches
that can be delivered frequently, multiple times a week, to deliver value faster with less rework.

The general work breakdown process involves:

![Work Breakdown Flow](/images/work-breakdown.png#width=80%)

It is important that the team keep these tips in mind when decomposing work:

1. Known poor quality should not flow downstream. This includes acceptance criteria that require interpretation. If the
   acceptance criteria cannot be understood by the whole team then we are developing defects, not value.
2. Refining work requires significant brainpower and is the primary quality process. Meetings should be planned around
   this. Hold them when people are mentally alert and time box them to prevent mental fatigue.
3. Good acceptance criteria come from good communication. Avoid the following anti-patterns:
   1. Someone outside the team writes acceptance criteria and hands it to the team. Since the team was not involved with
      the conversation, there's no chance to uncover assumptions and the team has less investment in the outcomes.
   2. One person on the team writes acceptance criteria. The same problem is above.
   3. Each team member is assigned work based on their expertise. This removes communication and also ensures that
      people are only focused on understanding **their** tasks. Again, the team as a whole isn't invested in the
      outcomes. This typically results in finger-pointing when something fails. Also, if someone is unavailable, the
      rest of the team lacks context to pick it up.
4. Refining should be focused on outcomes, not volume. If we have a 1-hour meeting and 10 stories to refine, it's better
   to have one fully refined story we can work on than 10 partially refined stories that we'll "figure out during
   development". Stop refining a story when we agree on the acceptance criteria or agree it's blocked and needs more
   information. Only then should we move to the next story. Stop the meeting at the scheduled time.

![Workflow](/images/work-breakdown-flow.png#width=10%)

### Intake/Product Ideas

Ideas become epics with defined outcomes, clear goals and value.
Epics become a list of features.

Common struggles for teams when breaking down ideas into epics and features:

- [Unclear requirements](/docs/work-decomposition/behavior-driven-development)
- [Unclear goals](/docs/work-decomposition/defining-product-goals)

---

### Refining Epics/Features into Stories

Stories are observable changes that have clear acceptance criteria and can be
completed in less than two days. Stories are made up of one or more tasks.

Typical problems teams experience with decomposition are:

- [Stories are too big or complex](/docs/work-decomposition/story-slicing)
- [Stories lack testable acceptance criteria](/docs/work-decomposition/behavior-driven-development)
- [Lack of dependency knowledge](/docs/work-decomposition/contract-driven-development)
- [Managing research tasks](/docs/work-decomposition/spikes)

---

### Refining Stories into Development Tasks

- Tasks are independently deployable changes that can be merged to trunk daily.
- Breaking stories down into tasks gives teams the ability to swarm work and deliver value faster.
- For teams to visualize tasks required to implement scenarios, they need to understand what a [good task](/docs/work-decomposition/task-decomposition) looks like.

---

### Measuring Success

Tracking the team's [Development Cycle Time](/docs/metrics/development-cycle-time) is the best way to judge improvements
to decomposition. Stories should take 1-2 days to deliver and should not have rework, delays waiting for
explanations, or dependencies on other stories or teams.


## What does a good task look like?

A development task is the smallest independently deployable change to implement
acceptance criteria.

---

### Recommended Practices

Create tasks that are meaningful and take less than two days to complete.



Use [Definition of Done](/docs/workflow-management/definition-of-done) as your
checklist for completing a development task.

---

### Tips

- If a task includes integration to another dependency, add a simple contract
  mock to the task so that parallel development of the consumer and provider will
  result in minimal integration issues.
- Decomposing stories into tasks allows teams to swarm stories and deliver value
  faster

---


Story slicing is the activity of taking large stories and splitting them into
smaller, more predictable deliveries. This allows the team to deliver higher
priority changes more rapidly instead of tying those changes to others that may
be of lower relative value.

---

## Recommended Practices

Stories should be sliced vertically.
That is, the story should be aligned such that it fulfills a consumer request
without requiring another story being deployed. After slicing, they should still
meet the [INVEST principle](/docs/glossary).

Example stories:





Stories should **not** be sliced along tech stack layer or by activity. If you
need to deploy a UI story and a service story to implement a new behavior, you
have sliced horizontally.

### Do not slice by tech stack layer

- UI "story"
- Service "story"
- Database "story"

### Do not slice by activity

- Coding "story"
- Review "story"
- Testing "story"

## Tips

- If you're unsure if a story can be sliced thinner, look at the acceptance
  tests from the [BDD activity](/docs/work-decomposition/behavior-driven-development) and see if it
  makes sense to defer some of the tests to a later release.

- While stories should be sliced vertically, it's quite possible that multiple
  developers can work the story with each developer picking up a task that
  represents a layer of the slice.

- Minimize [hard dependencies](/docs/glossary/#dependency-hard) in a story. The odds of delivering on time for any
  activity are `1 in 2^n` where `n` is the number of hard dependencies.

---


Spikes are an exploration of potential solutions for work or research items that cannot be estimated. They
should be time-boxed in short increments (1-3 days).

---

## Recommended Practices

Since all work has some amount of uncertainty and risk, spikes should be used
infrequently when the team has no idea on how to proceed with a work item. They
should result in information that can be used to better refine work into something
valuable, for some iteration in the future.

Spikes should follow a [Definition of Done](/docs/workflow-management/definition-of-done),
with acceptance criteria, that can be demoed at the end of its timebox.

A spike should have a definite timebox with frequent feedback to the team on what's been learned so far. It can be
tempting to learn everything about the problem and all of the solutions before trying anything, but the best way to
learn is to learn using the problem in front of us right now. Batching learning is worse than batching other kinds of
work because effective learning requires applying the learning immediately or it's lost.

---

### Tips

- Use spikes sparingly, only when high uncertainty exists.
- Spikes should be focused on discovery and experimentation.
- Stay within the parameters of the spike. Anything else is considered a waste.

---


Aligning priorities across multi-team products can be challenging. However, the process used at the team level to decompose work
functions just as well at the program level.

## Program Roadmap

In order to have an effective work breakdown process, goals and priorities need
to be established and understood.

[![](/images/program-roadmap.png)](/images/program-roadmap.png)

Stakeholders and leadership teams must define the high-level initiatives, and
their priorities, so that work may be dispersed among product teams.

Leadership teams can be made up of a core group of product owners.

## Product Roadmap

The program roadmap should breakdown into the product roadmap, which includes
the prioritized list of epics for each product.

<img src="/images/product-vision.png" width="40%">

The leadership team should define the product vision, roadmap, and dependencies
for each product.

## Team Backlog

The team backlog should be comprised of the prioritized epics from the product roadmap.

<img src="/images/feature-backlog.png" width="50%">

The core group needed to effectively break down high level requirements so that
the team may decompose work includes product owners,
tech leads, and project managers.

Product teams should use the processes effective for
[Work Decomposition](/docs/work-decomposition/work-breakdown), to breakdown
epics into smaller epics, stories, and tasks.


_Is it REALLY Ready?_

A Definition of Ready is a set of criteria decided by the team that defines when
work is ready to begin. The goal of the Definition of Ready to help the team
decide on the level of uncertainty that they are comfortable with taking on with
respect to their work. Without that guidance, any work is fair game. That is a
recipe for confusion and disaster.

---

## Recommended Practices

When deciding on a Definition of Ready, there are certain minimum criteria that
should always be there. These are:

- Description of the value the work provides (Why do we want to do this?)
- Testable Acceptance Criteria (When do we know we've done what we need to?)
- The team has reviewed and agreed the work is ready (Has the team seen it?)

However, the context of a team can make many other criteria applicable. Other
criteria could include:

- Wireframes for new UI components
- Contracts for APIs/services we depend on
- All relevant test types identified for subtasks
- Team estimate of the size of the story is no more than 2 days

The Definition of Ready is a living document that should evolve over time as
the team works to make their delivery system more predictable. The most
important thing is to actually enforce the Definition of Ready. If it's not
enforced, it's completely useless.

1. If any work in "Ready to Start" does not meet the Definition of Ready, move
   it back to the Backlog until it is refined.
2. Any work that is planned for a sprint/iteration must meet the Definition of
   Ready. Do not accept work that isn't ready!
3. If work needs to be expedited, it needs to go through the same process.
   (Unless there is immediate production impact, of course)

---

## Tips

1. Using [Behavior Driven Development](/docs/work-decomposition/behavior-driven-development) is one
   of the best ways to define testable acceptance criteria.
2. Definition of Ready is also useful for support tickets or other types of work
   that the team can be responsible for. It's not just for development work!
3. It's up to everyone on the team, including the Product Owner, to make sure
   that non-ready work is refined appropriately.
4. The recommended DoR for CD is that any story can be completed, either by the team or a single developer, in 2 days or less

---


## Product Goals

Product goals are a way to turn your vision for your product into easy to
understand objectives that can be measured and achieved in a certain amount of time.



When generating product goals, you need to understand what problem you are
solving, who you are solving it for, and how you measure that you achieved the goals.

---

## Initiatives

Product goals can be broken down into initiatives, that when accomplished,
deliver against the product strategy.





Initiatives can then be broken down into epics, stories, tasks, etc. among
product teams, with high-level requirements associated.

---

## Epics

An epic is a complete business feature with outcomes defined **before**
stories are written. Epics should never be open ended buckets of work.



---

### Tips

- Product goals need a description and key results needed to achieve
  them.
- Initiatives need enough information to help the team understand the expected
  value, the requirements, measure of success, and the time frame associated to completion.

---


Contract Driven Development is the process of defining the contract changes
between two dependencies during design and prior to construction. This allows
the provider and consumer to work out how components should interact so that
mocks and fakes can be created that allow the components to be developed and
delivered asynchronously.

---

## Recommended Practices

For services, define the expected behavior changes for the affected verbs along
with the payload. These should be expressed as contract tests, the unit test of
an API, that both provider and consumer can use to validate the integration independently.

For more complicated interaction that require something more than simple canned
responses, a common repository that represents a fake of the new service or tools
like [Mountebank](http://www.mbtest.org/) or [WireMock](http://wiremock.org/)
can be used to virtualize more complex behavior. It's important that both
components are testing the same behaviors.

Contract tests should follow [Postel's Law](https://en.wikipedia.org/wiki/Robustness_principle):
`"Be conservative in what you do, be liberal in what you accept from others"`.

### Tips

- For internal services, define the payload and responses in the developer task
  along with the expected functional test for that change.
- For external services, use one of the open source tools that allow recording
  and replaying responses.
- Always create contract tests before implementation of behavior.

---


Behavior Driven Development is the collaborative process where we discuss the intent and behaviors of a feature and
document the understanding in a declarative, testable way. These testable acceptance criteria should be the
[Definition of Done](/docs/workflow-management/definition-of-done) for a
user story.
BDD is **not** a technology or automated tool. BDD is the process of **defining** the behavior. We can then
automate tests for those behaviors.

Example:



---

## Recommended Practices

Gherkin is the domain specific
language that allows acceptance criteria to be expressed in "Arrange, Act, Assert" in a
way that is understandable to all stakeholders.
Example:



---

### Using Acceptance Criteria to Negotiate and Split

With the above criteria, it may be acceptable to remove the time validation and accelerate the delivery of the time
logging ability. After delivery, we may learn that the range validation
isn't required. If true, we've saved money and time by NOT delivering
unneeded features.
First, we deliver the ability to clock in and see if we really do need the ability
to verify.



If, in production, we discover that the sanity check is required to prevent time
clock issues, we can quickly add that behavior.



---

### Tips

- Scenarios should be written from the point of view of the consumer. If the consumer; either a user, UI, or another service.
- Scenarios should be focused on a specific function and should not attempt to
  describe multiple behaviors.
- If a story has more than 6 acceptance criteria, it can probably be split.
- No acceptance test should contain more than 10 conditions. In fact, much less
  is recommended.
- Acceptance tests can be used to describe a full end-to-end user experience. They are also recommended for describing
  the behavior of a single component in the flow of the overall behavior.

---

## References

- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)
- [BDD Primer](https://lizkeogh.com/behaviour-driven-development/) - Liz Keogh
- [Better Executable Specifications](https://www.youtube.com/watch?v=5CXSEINRojM) - Dave Farley
- [A Real-world Example of BDD](https://www.youtube.com/watch?v=9P5WG8CkPrQ) - Dave Farley
- <a href="/assets/ATDD - How to Guide.pdf" target="_blank">ATDD - How to Guide</a> - Dave Farley

---


Reducing the batch size of delivered work is one of the most important things we can do to drive improved workflow,
quality, and outcomes. Why?

- We have fewer assumptions in the acceptance criteria because we had to define how to test them. The act of defining them as tests brings out questions. "How can we validate that?"
- We are less subject to hope creep. We can tell within a day that we bit off more than we thought and can communicate that.
- When we deliver and discover the story was wrong, we've invested less in money, time, and emotional attachment so we can easily pivot.
- It makes us predictable
- It helps to reset our brains on what "small" is. What many people consider small turns out to be massive once they see what small really is.

The following playbooks have proven useful in helping teams achieve this outcome.


> Unit tests are [deterministic tests](/docs/testing/glossary#deterministic-test) that exercise a discrete unit of the application, such as a function, method, or UI component, in isolation to determine whether it behaves as expected.
>
> -- [Testing Glossary](/docs/testing/glossary#unit-test)

When testing the specs of functions, prefer testing public API (methods, interfaces, functions) to private API: the spec of private functions and methods are meant to change easily in the future, and unit-testing them would amount to writing a Change Detector Test, which is an anti-pattern.

<img src="/images/testing-images/unit-test.png" width="50%" />

The purpose of unit tests are to:

- Verify the functionality of a unit (method, class, function, etc.) in isolation
- Good for testing hi-complexity logic where there may be many permutations (e.g. business logic)
- Keep Cyclomatic Complexity low through good separations of concerns and architecture

### Principles

- Unit tests are low-level and focus on discrete units of the application
- All dependencies are typically replaced with test-doubles to remove non-determinism
- Unit tests are fast to execute
- Test Suite is ran after every code change

## Recommended Best Practices

- Run a subset of your test suite based on the part of the code your are currently working on
  - Following TDD practices plus the watch functionality of certain testing frameworks is an easy way to achieve this
- Pre-commit hooks to run the test suite before committing code to version control
  - Verification during PR and during the CI build on the HEAD to verify that earlier verification happened and was effective.
- Discourage disabling of static tests (e.g. skipping tests, ignoring warnings, ignoring code on coverage evaluation, etc)
- Write custom rules (lint, formatting, etc) for common code review feedback

## Resources

- [Unit Testing by Martin Fowler](https://martinfowler.com/bliki/UnitTest.html)
- [xUnit Patterns](http://xunitpatterns.com/index.html)

## Examples

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="JavaScript" >}}
    // Example from lodash
    describe('castArray', () => {
        it('should wrap non-array items in an array', () => {
            const values = falsey.concat(true, 1, 'a', { a: 1 });
            const expected = lodashStable.map(values, (value) => [value]);
            const actual = lodashStable.map(values, castArray);

            expect(actual).toEqual(expected);
        });

        it('should return array values by reference', () => {
            const array = [1];
            expect(castArray(array)).toBe(array);
        });

        it('should return an empty array when no arguments are given', () => {
            expect(castArray()).toEqual([]);
        });
    });
  {{< /tab >}}
  {{< tab header="Java" >}}
    @Test
    // Mock the userService
    public void verifyMockedUserDetails() throws Exception {

      // ===============Arrange===============
      ObjectMapper mapper = new ObjectMapper();
      User userMockData = mapper.readValue(new File(TestConstants.DATA_FILE_ROOT + "user_mock.json"), User.class);

      // This code mocks the getUserInfo method for userService
      // Any call made to the getUserInfo will not make actual method call instead
      // returns the userMockData
      Mockito.when(userService.getUserInfo(TestConstants.userId)).thenReturn(userMockData);

      // ===============Act===============
      RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/user/" + TestConstants.userId)
      .accept(MediaType.APPLICATION_JSON);

      MvcResult mvcResponse = mockMvc.perform(requestBuilder).andReturn();
      String responsePayload = mvcResponse.getResponse().getContentAsString();
      String status = JsonPath.parse(responsePayload).read("$.STATUS");
        Map<String, String> userMap = JsonPath.parse(responsePayload).read("$.payload");

      // ===============Assert===============
      JSONAssert.assertEquals(TestConstants.PARTIAL_MOCK_SUCCESS_PAYLOAD, responsePayload, false); // disable strict
      // validate the expected userMockData is matching with actual userMap Data
      Assert.assertEquals(TestConstants.SUCCESS, status);
      Assert.assertEquals(userMockData.getManager(), userMap.get("manager"));
      Assert.assertEquals(userMockData.getVp(), userMap.get("vp"));
      Assert.assertEquals(userMockData.getOrganization(), userMap.get("organization"));
      Assert.assertEquals(userMockData.getDirector(), userMap.get("director"));
      Assert.assertEquals(userMockData.getCostcenter(), userMap.get("costcenter"));
    }
  {{< /tab >}}
{{< /tabpane >}}

## Recommended Tooling

| Platform   | Tools                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android    | **Framework:** JUnit5<br/>**Assertion:** Google Truth                                                                                                                                                |
| iOS        | XCTest                                                                                                                                                                                               |
| Web        | **Framework:** jest<br/>**Assertion & Mocking:** expect (jest), jest-dom, others as necessary<br/>**Code Coverage:** instanbul/nyc (jest)                                                            |
| Java BE    | **Framework:** TestNG, JUnit5<br/>**Code Coverage:** sonar (sonarlint)<br/>**Mocking:** Powermock, Mockitoi<br/>**Assertion:** REST Assured, Truth, TestNG/JUnit5                                    |
| JS/node BE | **Framework:** jest<br/>**Assertion & Mocking:** expect (jest) - generic, supertest or nock - http server endpoint, apollo - graphql server testing<br/>**Code Coverage:** instanbul/nyc (jest)<br/> |


> Test doubles are one of the main concepts we use to create fast, independent, deterministic and reliable tests. Similar to the way Hollywood uses a \_stunt double\* to film dangerous scenes in a movie to avoid the costly risk a high paid actor gets hurt, we use a _test double_ in early test stages to avoid the speed and dollar cost of using the piece of software the _test double_ is standing in for. We also use _test doubles_ to force certain conditions or states of the application we want to test. _Test doubles_ can be used in any stage of testing but in general, they are heavily used during the initial testing stages in our CD pipeline and used much less in the later stages. There are many different kinds of _test doubles_ such as _stubs_, _mocks_, _spies_, etc.
>
> -- [Testing Glossary](/docs/testing/glossary#test-doubles)

![Test Double](/images/testing-images/test-double.png)

- **<mark>Test Double</mark>**: A test double is a generic term for any case where you replace a production object for testing purposes.
- **<mark>Dummy</mark>**: A dummy is passed around but never actually used. Usually it is just used to fill parameter lists.
- **<mark>Fake</mark>**: A fake actually has a working implementation, but usually takes some shortcut which makes it not suitable for production (an InMemoryTestDatabase is a good example).
- **<mark>Stub</mark>**: A stub provides canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
- **<mark>Spy</mark>**: A spy is a stub that also records some information based on how it was called. One form of this might be an email service that records how many messages it was sent.
- **<mark>Mock</mark>**: A mock is pre-programmed with expectations which form a specification of the calls it is expected to receive. It can throw an exception if it receives a call it doesn't expect and is checked during verification to ensure it got all the calls it was expecting.

## Resources

- [Test Double Patterns](http://xunitpatterns.com/Test%20Double%20Patterns.html)
- [TestDouble](https://martinfowler.com/bliki/TestDouble.html)

## Examples

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="Java" >}}
    @Before
    public void init() throws Exception {

    // ===============Arrange===============
    userService = Mockito.spy(userService);
    ObjectMapper mapper = new ObjectMapper();
    // Here we are putting data from user_spy.json
    spyData = mapper.readValue(new File(TestConstants.DATA_FILE_ROOT + "user_spy.json"), User.class);
    Mockito.doReturn(spyData).when(userService).getUserInfo(TestConstants.userId);// spy json data for the user data
    }

    @Test
    // Mock the userService
    public void verifySpyUserDetails() throws Exception {
    
    // ===============Act===============
    User user = userService.getUserInfo(TestConstants.userId); // user data comes from spy
    verify(userService).getUserInfo(TestConstants.userId); // verify the userservice.getUserInfo method is called
    verify(userService, times(1)).getUserInfo(TestConstants.userId);// verify from spy the getUserInfo called one
    
    // ===============Assert===============
    // validate the expected spyData is matching with actual user Data
    Assert.assertEquals(spyData.getManager(), user.getManager());
    Assert.assertEquals(spyData.getVp(), user.getVp());
    Assert.assertEquals(spyData.getOrganization(), user.getOrganization());
    Assert.assertEquals(spyData.getDirector(), user.getDirector());
    Assert.assertEquals(spyData.getDirector(), user.getDirector());
    }

    @After
    public void cleanUp() {
    reset(userService);// Reseting the userServiceSpy
    }
  {{< /tab >}}
{{< /tabpane >}}

## Recommended Frameworks

### Platform Independent Mocking Frameworks

| Framework                                              | Reasoning                                                                                                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [JSON-Server](https://github.com/typicode/json-server) | <ul><li>Simple, great for scaffolding</li><li>Follows REST conventions</li><li>Stateful</li></ul>                                                                        |
| [Mountebank](https://github.com/bbyars/mountebank)     | <ul><li>Allows for more than just HTTP (multi-protocol)</li><li>Simple to use and configure</li><li>Large language support</li></ul>                                     |

### GraphQL

| Framework                                                   | Reasoning                                                                                                                                                                                                                                               |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GraphQL-Faker](https://github.com/APIs-guru/graphql-faker) | <ul><li>Supports proxying existing GraphQL APIs.</li><li>Simple GraphQL directive-based data mocking.</li><li>Uses faker.js under the hood.</li></ul>                                                                                                   |
| [GraphQL-Tools](https://github.com/ardatan/graphql-tools)   | <ul><li>Built-in utilities for mocking collections (MockList)</li><li>Great documentation and interoperability with existing GraphQL (NodeJS) solutions.</li></ul> |

### Platform Specific

#### Javascript

| Framework                                               | Reasoning                                              |
| ------------------------------------------------------- | ------------------------------------------------------ |
| [expect(jest)](https://jestjs.io/docs/expect)        | For all generic assertions/mocking                     |
| [jest-dom](https://github.com/testing-library/jest-dom) | For DOM assertions                                     |
| [supertest](https://github.com/visionmedia/supertest)   | For in-process test a http server                      |
| [nock](https://github.com/nock/nock)                    | for http server endpoint assertion/mocking with NodeJS |

For FE mocking, the recommendation is kept more open to allow for other frameworks as necessary, such as [msw](https://mswjs.io/) or [mirage](https://miragejs.com/)

#### Android

| Framework                                                                   | Reasoning                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MockK (Kotlin projects)](http://mockk.io/)                                 | <ul><li>Provides a common when this →then that mocking API in an Idiomatic Kotlin DSL</li><li>Built in support for mocking top level functions, extensions, static objects</li><li>Detailed documentation with examples of how to mock and verify different cases</li><li>Concise and descriptive exception logs</li><li>Minimal configuration per TestClass (limited to resetting state)</li></ul> |
| [MockWebServer](https://github.com/square/okhttp/tree/master/mockwebserver) | <ul><li>Process local mock server</li><li>Embedded in tests, no separate mock execution</li><li>Simplistic but powerful api that can support state</li><li>Easy to use. Start MWS before test, initialize netApi with the baseUrl of the MWS instance, configure in test's // GIVEN phase, stop server after.</li></ul>                                                                             |

#### iOS

For iOS, Apple test frameworks support a rich feature set, documentation and community. As a team we prefer using 1P tooling and adding Homegrown solution on top of it. The reason we do this is because Apple has been notorious in changing API's at rapid iterations. This also results us to constantly update 3P solutions which have a risk of getting discontinued and maintaining them is a challenge. Hence iOS team prefers to use more maintainable solution which would be 1P with additional Homegrown Utilities as required.

#### Java (BE)

| Framework                                                | Reasoning                                                                                                            |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [Powermock](https://github.com/powermock/powermock/wiki) | <ul><li>Power mock is actually superset of Mockito.</li><li>Provides Static mocking functionality</li></ul>          |
| [Mockito](https://site.mockito.org/)                     | <ul><li>Standard mocking tool</li><li>Has annotations for easy creation of many mocks at test construction</li></ul> |


> A static test is a test that evaluates non-running code against rules for known good practices to check for security, structure, or practice issues.
>
> -- [Testing Glossary](/docs/testing/glossary#static-test)

Static code analysis has many key purposes.

- It warns of excessive complexity in the code that will degrade the ability to change it safely.
- Identifies issues that could expose vulnerabilities
- Shows anti-patterns that violate good practices
- Alerts to issues with dependencies that may prevent delivery, create a vulnerability, or even expose the company to lawsuits.
- It catches errors

## Principles

- When implementing any test, the test should be designed to provide alerts as close to the moment of creation as possible.
- Static analysis, many scans can be run realtime in IDEs. Others during the build or as a pre-commit scan. Others require tooling that can only be used on the CI server. Whatever the test, drive it left.
- Recheck everything on CI while verifying HEAD

### Types of static tests

- **Linting**: This automates catching of common errors in code and the enforcement of best practices
- **Formatting**: Enforcement of code style rules. It removes subjectivity from code reviews
- **Complexity**: Are code blocks too deep or too long? Complexity causes defects and simple code is better.
- **Type checking**: Type checking can be a key validation to prevent hard to identify defects replacing certain classes of tests and logic otherwise required (e.g. unit tests validating internal APIs)
- **Security**: Checking for known vulnerabilities and coding patterns that provide attack vectors are critical
- **Dependency scanning** :
  - Are your dependencies up to date?
  - Has the dependency been hijacked?
  - Are there known security issues in this version that require immediate resolution?
  - Is it licensed appropriately?

## Recommended Best Practices

- IDE plugins to identify problems in realtime
- Pre-commit hooks to prevent committing problems
- Verification during PR and during the CI build on the HEAD to verify that earlier verification happened and was effective.
- Discourage disabling of static tests (e.g. skipping tests, ignoring warnings, ignoring code on coverage evaluation, etc)
- Write custom rules (lint, formatting, etc) for common code review feedback

## Recommended Tooling

| Platform   | Tools                                                                     |
| ---------- | ------------------------------------------------------------------------- |
| Android    | SonarQube, Lint, ktLink                                                   |
| iOS        | SonarQube, SwiftLint                                                      |
| Web        | **Linter:** eslint<br/>**Formatter:** prettier<br/>**Scanner:** SonarQube |
| Java BE    | Linter/Formatter: sonar, PMD                                              |
| JS/node BE | **Linter:** eslint<br/>**Formatter:** prettier<br/>**Scanner:** SonarQube |


> An integration test is a [deterministic](/docs/testing/glossary#deterministic-test) test to verify how the unit under test interacts with other units without directly accessing external sub-systems. For the purposes of clarity, "integration test" is not a test that broadly integrates multiple sub-systems. That is an [E2E test](/docs/testing/e2e).
>
> -- [Testing Glossary](/docs/testing/glossary#integration-test)

Some examples of an integration test are validating how multiple units work together (sometimes called a "sociable unit test") or validating the portion of the code that interfaces to an external network sub-system while using a test double to represent that sub-system.

<figure>
  <img src="/images/testing-images/integration-test.png" width="60%" />
  <figcaption>
    Validating the behavior of multiple units with no external sub-systems
  </figcaption>
</figure>

<figure>
  <img src="/images/testing-images/network-integration-test.png" width="15%" />
  <figcaption>
    Validating the portion of the code that interfaces to an external network
    sub-system
  </figcaption>
</figure>

When designing network integration tests, it's recommended to also have [contract tests](/docs/testing/glossary#contract-test) running asynchronously to validate the service test doubles.

## Recommended Best Practices

Integration tests provide the best balance of speed, confidence, and cost when building tests to ensure your system is properly functioning.  The goal of testing is to give developers confidence when refactoring, adding features or fixing bugs.  Integration tests that are decoupled from the implementation details will give you this confidence without giving you extra work when you refactor things.  Too many unit tests, however, will lead to very brittle tests.  If you refactor code (i.e. change the implementation w/out changing the functionality) the goal should be to NOT break any tests and ideally not even touch them at all.  If lots of tests are breaking when you refactor, it's probably a sign of too many unit tests and not enough integration tests.

* Tests should be written from the perspective of how the actor experiences it.
* Avoid hasty abstractions. Duplication in tests is not the enemy. In fact, it's often better to have duplicated code in tests than it is to have complex abstractions. Tests should be **damp**, not **DRY**.
* Design tests that alert to failure as close to defect creation as possible.
* "Don't poke too many holes in reality."  Only use mocks or test doubles when absolutely necessary to maintain determinism in your test. [Justin Searls has a great talk about this](https://blog.testdouble.com/talks/2018-03-06-please-dont-mock-me/).
* Flakey tests need to be corrected to prevent false positives that degrade the ability of the tests to act as an effective code gate.
* Write tests from the **actor's perspective** and **don't introduce a test user**.  (e.g. When I give this input, I expect this outcome)
  * End-User - when building a UI, what response will each input provide to the user?
  * Consumer - when building a library or service, what output will be expected for a given input?
  * Test User - a non-existent user/consumer that exists just for the purpose of writing a test.  **Avoid this type of user**.  [Kent Dodds has a great post about this user](https://kentcdodds.com/blog/avoid-the-test-user/).
* Don't test implementation details. Tests should focus on **what** the outcomes are, not **how** the outcomes occurred.
  * Examples of testing implementation details include:
    * internal state
    * private methods/properties etc
    * things a user won't see/know about.
* Integration tests are normally run with unit tests.

### Service Integration Tests

Service integration tests are focused on validating how the system under test responds to information from an external service and that service contracts can be consumed as expected. They should be deterministic and should not test the behavior of the external service. The integration can be from UI to service or service to service. A typical service integration test is a set of unit tests focused on interface schema and response codes for the expected interaction scenarios.

* Use virtual services or static mocks instead of live services to ensure the test is repeatable and deterministic.
* Implement contract tests to continuously validate the virtual service or mock is current.
* Don't over-test. When validating service interactions, testing that a dependency returns a specific value is testing the behavior of the dependency instead of the behavior of the SUT.

### Database Integration Tests

Test data management is one of the more complex problems, so whenever possible using live data should be avoided.

Good practices include:

* In-memory databases
* Personalized datasets
* Isolated DB instances
* Mocked data transfer objects

### Front End Driven Integration Tests

* Don't use tools like Enzyme that let you peek behind the curtain.
* Follow the Accessibility order of operations to get a reference to elements (in prioritized order):
  1. Things accessible to all users (Text, placeholder, label, etc)
  2. Accessibility features (role, title, alt tag, etc)
  3. Only after exhausting the first 2, then use test ID or CSS/XPath selectors as an escape hatch.  But remember, the user doesn't know about these so try to avoid them.

## Alternate Terms

* Sociable Unit Test

## Alternate Definitions

* When integrating multiple sub-systems into a larger system: this is an [End to End Test](/docs/testing/glossary#end-to-end-test).
* When testing all modules within a sub-system through the API or user interface: this is a [Functional Test](/docs/testing/glossary#functional-test).

## Resources

* [Integration Testing](https://martinfowler.com/bliki/IntegrationTest.html)
* [Testing Strategies in a Microservice Architecture: Integration Testing Introduction](https://martinfowler.com/articles/microservice-testing/#testing-integration-introduction)
* [Write tests, not too many, mostly integration](https://kentcdodds.com/blog/write-tests)

## Examples

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="JavaScript" >}}
    describe("retrieving Hygieia data", () => {
      it("should return counts of merged pull requests per day", async () => {
        const successStatus = 200;
        const result = await hygieiaConnector.getResultsByDay(
          hygieiaConnector.hygieiaConfigs.integrationFrequencyRoute,
          testConfig.HYGIEIA_TEAMS[0],
          testConfig.getTestStartDate(),
          testConfig.getTestEndDate()
        );

        expect(result.status).to.equal(successStatus);
        expect(result.data).to.be.an("array");
        expect(result.data[0]).to.haveOwnProperty("value");
        expect(result.data[0]).to.haveOwnProperty("dateStr");
        expect(result.data[0]).to.haveOwnProperty("dateTime");
        expect(result.team).to.be.an("object");
        expect(result.team).to.haveOwnProperty("totalAllocation");
      });

      it("should return an empty array if the team does not exist", async () => {
        const result = await hygieiaConnector.getResultsByDay(
          hygieiaConnector.hygieiaConfigs.integrationFrequencyRoute,
          0,
          testConfig.getTestStartDate(),
          testConfig.getTestEndDate()
        );
        expect(result.status).to.equal(successStatus);
        expect(result.data).to.be.an("array");
        expect(result.data.length).to.equal(0);
      });
    });
  {{< /tab >}}
{{< /tabpane >}}

## Recommended Tooling

Integration Tooling is the same as recommended for [Unit Tests](/docs/testing/unit)


Testing terms and they are notoriously overloaded. If you ask 3 people what integration testing means you will get 4 different answers. This ambiguity within an organization slows down the engineering process as the lack of ubiquitous language causes communication errors. For us to help each other improve our quality processes, it is important that we align on a common language. In doing so, we understand that many may not agree 100% on the definitions we align to. That is ok. It is more important to be aligned to consensus than to be 100% in agreement. We'll iterate and adjust as needed.

Note: Our definitions are based on the following sources:

- [Testing Categories](https://martinfowler.com/tags/test%20categories.html) by Martin Fowler
- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) by Ham Vocke
- [xUnit Test Patterns \* Refactoring Test Code](https://martinfowler.com/books/meszaros.html) by Gerard Meszaros

## Glossary

### Deterministic Test

A deterministic test is any test that always returns the same results for the same beginning state and action. Deterministic tests should always be able to run in any sequence or in parallel. Only deterministic tests should be executed in a CI build or automatically block delivery during CD.

### Non-deterministic Test

A non-deterministic test is any test that may fail for reasons unrelated to adherence to specification. Reasons for this could include network instability, availability of external dependencies, state management issues, etc.

### Static Test

A static test is a test that evaluates non-running code against rules for known good practices to check for security, structure, or practice issues.

### Unit Test

Unit tests are [deterministic tests](#deterministic-test) that exercise a discrete unit of the application, such as a function, method, or UI component, in isolation to determine whether it behaves as expected.

[More on Unit Testing](/docs/testing/unit)

### Integration Test

An integration test is a [deterministic](#deterministic-test) test to verify how the unit under test interacts with other units without directly accessing external sub-systems. For the purposes of clarity, "integration test" is not a test that broadly integrates multiple sub-systems. That is an [E2E test](#end-to-end-test).

[More on Integration Testing](/docs/testing/integration)

### Contract Test

A contract test is used to validate the test doubles used in a network [integration test](#integration-test). Contract tests are run against the live external sub-system and exercises the portion of the code that interfaces to the sub-system. Because of this, they are [non-deterministic tests](#non-deterministic-test) and should not break the build, but should trigger work to review why they failed and potentially correct the contract.

**A contact test validates contract format, not specific data.**

[More on Contract Testing](/docs/testing/contract)

### Functional Test

A functional test is a [deterministic test](#deterministic-test) that verifies that all modules of a sub-system are working together. They should avoid integrating with other sub-systems as this tends to reduce determinism. Instead, test doubles are preferred. Examples could include testing the behavior of a user interface through the UI or testing the business logic of individual services through the API.

[More on Functional Testing](/docs/testing/functional)

### End to End Test

End to end tests are typically [non-deterministic](#non-deterministic-test) tests that validate the software system along with its integration with external interfaces. The purpose of end-to-end Test is to exercise a complete production-like scenario. Along with the software system, it also validates batch/data processing from other upstream/downstream systems. Hence, the name "End-to-End". End to End Testing is usually executed after [functional testing](#functional-test). It uses actual production like data and test environment to simulate real-time settings.

[More on E2E Testing](/docs/testing/e2e)

### Customer Experience Alarms

Customer Experience Alarms are a type of active alarm. It is a piece of software that sends requests to your system much like a user would. We use it to test the happy-path of critical customer workflows. These requests happen every minute (ideally, but can be as long as every 5 minutes). If they fail to work, or fail to run, we emit metrics that cause alerts. We run these in all of our environments, not just production, to ensure that they work and we catch errors early.

[More on Customer Experience Alarms](/docs/testing/experience-alarms)

### Test Doubles

Test doubles are one of the main concepts we use to create fast, independent, deterministic and reliable tests. Similar to the way Hollywood uses a \_stunt double* to film dangerous scenes in a movie to avoid the costly risk a high paid actor gets hurt, we use a *test double* in early test stages to avoid the speed and dollar cost of using the piece of software the *test double* is standing in for. We also use *test doubles* to force certain conditions or states of the application we want to test. *Test doubles* can be used in any stage of testing but in general, they are heavily used during the initial testing stages in our CD pipeline and used much less in the later stages. There are many different kinds of *test doubles* such as *stubs*, *mocks*, *spies*, etc.

[More on Test Doubles](/docs/testing/test-doubles/)


> A functional test is a [deterministic test](/docs/testing/glossary#deterministic-test) that verifies that all modules of a sub-system are working together. They should avoid integrating with other sub-systems as this tends to reduce determinism. Instead, test doubles are preferred. Examples could include testing the behavior of a user interface through the UI or testing the business logic of individual services through the API.
>
> -- [Testing Glossary](/docs/testing/glossary#functional-test)

![Functional Test](/images/testing-images/functional-test.png)

At a high level functional testing is a means of verifying a systems specification and fundamental requirements in a systematic and deterministic way. Functional tests further unit and integration tests by introducing an actor, typically a user or service consumer, and validating the ingress and egress of that actor. Functional tests allow for capturing, within specific consumer environments, potential issues that are inherit to that context. More often than not a functional test will cover broad-spectrum behavioral tests such as UI interactions, presentation-logic, and business-logic and their respective side-effects; Side-effects at this level are mocked and do not cross or proxy to boundaries outside of the systems control – contrast that to [E2E tests](/docs/testing/e2e) where there are no mocks.

## Recommended Best Practices

- Tests should be written from the lens of an "actor" be that a user interacting with a UI component or a service interacting with a potentially stateful API.
- Proxying or otherwise real I/O should be avoided to reduce flakiness and ensure deterministic side-effects.
- [Test doubles](/docs/testing/test-doubles/) should generally always be used in the case where the system under test needs to interact with an out-of-context sub-system.
- [Test doubles](/docs/testing/

## Alternate Terms

- Component test

## Resources

- [Component Tests](https://martinfowler.com/bliki/ComponentTest.html)
- [Testing Strategies in a Microservice Architecture: Component Testing Introduction](https://martinfowler.com/articles/microservice-testing/#testing-component-introduction)

## Examples

🚧 Under Construction 🚧

## Recommended Tooling

| Platform   | Tools                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android    | Google Truth/JUnit 5<br/>Android Espresso                                                                                                                                                            |
| iOS        | XCTest<br/>XCUITest                                                                                                                                                                                  |
| Web        | Testcafe                                                                                                                                                                                             |
| Java BE    | TestNG, JUnit5                                                                                                                                                                                       |
| JS/node BE | **Framework:** jest<br/>**Assertion & Mocking:** expect (jest) - generic, supertest or nock - http server endpoint, apollo - graphql server testing<br/>**Code Coverage:** instanbul/nyc (jest)<br/> |


> Customer Experience Alarms are a type of active alarm. It is a piece of software that sends requests to your system much like a user would. We use it to test the happy-path of critical customer workflows. These requests happen every minute (ideally, but can be as long as every 5 minutes). If they fail to work, or fail to run, we emit metrics that cause alerts. We run these in all of our environments, not just production, to ensure that they work and we catch errors early.
>
> -- [Testing Glossary](/docs/testing/glossary#customer-experience-alarms)

These are different than having log-based alarms because we can't guarantee that someone is working through all of the golden-path workflows for our system at all times. If we rely entirely on logs, we wouldn't know if the golden workflows are accurate when we deploy at 3am on a Saturday due to an automated process.

These tests have a few important characteristics:

- They are run in all environments, including production.
- They aren't generated from UI workflows, but rather from direct API access
- They ideally run every minute.
- If they don't work (in production) they page someone. Even at 3am.

### Alternate Terms

- Synthetic Probes (Google)
- Canary (Amazon, although it doesn't mean what Canary means here)


> End to end tests are typically [non-deterministic](/docs/testing/glossary#non-deterministic-test) tests that validate the software system along with its integration with external interfaces. The purpose of end-to-end Test is to exercise a complete production-like scenario. Along with the software system, it also validates batch/data processing from other upstream/downstream systems. Hence, the name "End-to-End". End to End Testing is usually executed after [functional testing](/docs/testing/glossary#functional-test). It uses actual production like data and test environment to simulate real-time settings
>
> -- [Testing Glossary](/docs/testing/glossary#end-to-end-test)

End to end tests have the advantage of exercising the system in ways that [functional tests](/docs/testing/glossary#functional-test) cannot. However, they also have
the disadvantage of being slower to provide feedback, require more state management, constant maintenance, and can fail for reasons unrelated to code defects. As such, it is recommended
that they be the smallest number of tests executed.

!["E2E Test"](/images/testing-images/e2e-test.png)

End-to-end tests are segmented into two categories: vertical and horizontal tests.

### Vertical E2E Tests

Vertical tests are end to end tests which target features under the control of a single team. Examples of these may be "when I click the heart icon on an item, it's favorited and that persists across a refresh" or "a user can create a new saved list and add items to it".

### Horizontal E2E Tests

A horizontal test, by contrast, spans multiple teams. An example of this may be going from the homepage through checkout. That involves coordination across the homepage, item page, cart, and checkout teams.

Because of the inherent complexity of horizontal tests (multi-team), they are unsuitable for blocking release pipelines.

## Recommended Best Practices

* E2E tests should be the least used due to their cost in run time and in maintenance required.
* Focus on happy-path validation of business flows
* E2E tests can fail for reasons unrelated to the coding issues. Capture the frequency and cause of failures so that efforts can be made to make them more stable.
* Vertical E2E tests should be maintained by the team at the start of the flow and versioned with the component (UI or service).
* CD pipelines should be optimized for the rapid recovery of production issues. Therefore, horizontal E2E tests should not be used to block delivery due to their size and relative failure surface area.
* A team may choose to run vertical E2E in their pipeline to block delivery, but efforts must be made to decrease false positives to make this valuable.

## Alternate Terms

Integration test and end to end are often used internchangeably.

## Resources

* [Testing Strategies in a Microservice Architecture: E2E Introduction](https://martinfowler.com/articles/microservice-testing/#testing-end-to-end-introduction)
* [The Practical Test Pyramid: E2E Tests](https://martinfowler.com/articles/practical-test-pyramid.html#End-to-endTests)
* [Google Test Blog \* Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

## Examples

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="Java" >}}
    @Test(priority = 1, dependsOnMethods = { "navigate" })
    @Parameters({ "validUserId" })
    public void verifyValidUserId(@Optional(TestConstants.userId) String validUserId) throws Exception {

    // ************************************************************
    // Valid UserId Test
    // ************************************************************
    
    // ===============Act===============
    homePage.getUserData(validUserId);
    TestUtil.explicitWait(wait,By.xpath(TestConstants.NAME_XPATH));
    
    // ===============Assert===============
    Assert.assertEquals(homePage.getName(), TestConstants.NAME, TestConstants.NAME_CONFIRM);
    Assert.assertEquals(homePage.getManagerName(), TestConstants.MANAGER_NAME,
        TestConstants.MANAGER_NAME_CONFIRM);
    Assert.assertEquals(homePage.getVpName(), TestConstants.VP_NAME, TestConstants.VP_NAME_CONFIRM);
    Assert.assertEquals(homePage.getOrgName(), TestConstants.ORG_NAME, TestConstants.ORG_NAME_CONFIRM);
    Assert.assertEquals(homePage.getDirName(), TestConstants.DIR_NAME, TestConstants.DIR_NAME_CONFIRM);
    Assert.assertEquals(homePage.getCcName(), TestConstants.CC_NAME, TestConstants.CC_NAME_CONFIRM);
    }
  {{< /tab >}}
{{< /tabpane >}}


> A contract test is used to validate the test doubles used in a network [integration test](/docs/testing/glossary#integration-test). Contract tests are run against the live external sub-system and exercises the portion of the code that interfaces to the sub-system. Because of this, they are [non-deterministic tests](/docs/testing/glossary#non-deterministic-test) and should not break the build, but should trigger work to review why they failed and potentially correct the contract.
>
> **A contract test validates contract format, not specific data.**
>
> -- [Testing Glossary](/docs/testing/glossary#contract-test)

<figure>
  <img src="/images/testing-images/contract-test.png" width="40%" />
  <figcaption>
    Contract tests have two points of view, Provider and Consumer.
  </figcaption>
</figure>

### Provider

Providers are responsible for validating that all API changes are backwards compatible unless otherwise indicated by changing API
versions. Every build should validate the API contract to ensure no unexpected changes occur.

### Consumer

Consumers are responsible for validating that they can consume the properties they need (see [Postel's Law](https://en.wikipedia.org/wiki/Robustness_principle)) and that no change
breaks their ability to consume the defined contract.

## Recommended Best Practices

* Provider contract tests are typically implemented as unit tests of the schema and response codes of an interface. As such they should be deterministic and should run on every commit, pull request, and verification of the trunk.
* Consumer contract tests should avoid testing the behavior of a dependency, but should focus on comparing that the contract double still matches the responses from the dependency. This should be running on a schedule and any failures reviewed for cause. The frequency of the test run should be proportional to the volatility of the interface.
* When dependencies are tightly aligned, consumer-driven contracts should be used
  * The consuming team writes automated tests with all consumer expectations
  * They publish the tests for the providing team
  * The providing team runs the CDC tests continuously and keeps them green
  * Both teams talk to each other once the CDC tests break
* Provider Responsibilities:
  * Providers should publish machine-readable documentation of their interface to facilitate consumer testing and discoverability.
  * Even better, publish a dedicated [technical compatibility kit](https://paulhammant.com/2019/06/14/tcks-and-servirtium/) that is tested on every build that provides a trusted virtual service to eliminate the need for consumer contract testing.

## Resources

* [The Practical Test Pyramid: Contract Tests](https://martinfowler.com/articles/practical-test-pyramid.html#ContractTests)
* [Contract Tests by Martin Fowler](https://martinfowler.com/bliki/ContractTest.html)

## Examples

🚧 Under Construction 🚧


## General

| Recommendation                                                          | Benefits Gained                                                                                                                                                            |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Use case-centric tests](#use-case-coverage)                                | Lower cost to maintain, confidence                                                                                                                                         |
| [TDD & BDD](#test-first-approach-bdd-and-tdd)                                                               | Lower cost to maintain, confidence, stability                                                                                                                              |
| [Naming conventions](#naming-conventions)                                                      | Time to develop, lower cost to maintain                                                                                                                                    |
| [Testing your tests](#continuously-assess-your-tests-effectiveness)                                                      | Lower cost to maintain, confidence, stability                                                                                                                              |
| Follow test-type specific recommendations,<br/>[shifting left on testing](#continuously-assess-your-tests-effectiveness) | Lower cost to maintain, faster speed to execute, less time to develop, confidence, stability                                                                               |

## Use Case Coverage

One of the main points behind testing is to be able to code with confidence. Code coverage is one way developers have traditionally used to represent how confident they feel about working on a given code base. That said, how much confidence is needed will likely vary by team and the type of application being tested. E.g. if working on a life saving med tech piece of software, you probably want all of the confidence in the world. The following discusses how code coverage, if misused, can be misleading and create a false sense of confidence in the code being worked on and as a result, hurt quality. Recommendations on how to manage code coverage in a constructive way will be presented, along with concrete approaches on how to implement them.

In simple terms, coverage refers to a measurement of how much of your code is executed while tests are running. As such, it's entirely possible achieve 100% coverage by running through your code without really testing for anything, which is what opens the door for coverage having the potential of hurting quality if you don't follow best practices around it. **A recommended practice is to look at coverage from the perspective of the set of valid use cases supported by your code.** For this, you would follow an approach similar to what follows:

- Start writing code and writing tests to cover for the use cases you're supporting with your code.
- Refine this by going over the tests and making sure valid edge cases and alternative scenarios are covered as well.
- When done, look at your code's coverage report and identify gaps in your testing
- For each gap, decide if the benefit of covering it (odds of it failing and impact if it does) outweighs the cost (how complicated / time consuming would it be to cover it)
- Write more tests where appropriate

This practices shifts the value of coverage from being a representation of your code's quality to it being a tool for finding untested parts of your code. When looking at coverage through this lens, you might also uncover parts of the code with low coverage because it's not supporting a valid use case. **We recommend tests are not written for this, instead this code should be removed from the code base if at all possible.**

You might ask yourself ***"How do I know I have good coverage? What's the magic number?"***. We believe there's no magic number, as it'll all depend on your teams' needs. If you are writing tests for the use cases you build into your application, your team feels very confident when modifying the code base, and you're post-production error rate is very low, your coverage is probably fine, whatever the numbers say. In the end, forcing a coverage percentage is known to have the potential of hurting your quality. By chasing after every single code path, you can very well end up missing the use cases that if gone wrong, will hurt the most. Another consideration is the false sense of confidence you can get by high coverage numbers obtained by "gaming the system", or as Martin Fowler said, ***"The trouble is that high coverage numbers are too easy to reach with low quality testing"*** ([Fowler, 2012](https://martinfowler.com/bliki/TestCoverage.html)). We do recognize there is such a thing as too little coverage. If your coverage is very low (e.g. < 50%) there might be something off, like having a ton of unnecessary code you might want to get rid of, or your tests just not hitting all the critical use cases in your application. There are methods you can employ to make sure there are no instances of "gaming the system" in your test code. One of these is to create linting rules that look for these practices and fail the build when it finds them. **We recommend using plugins like [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) to make sure things like not expecting (asserting) or disabling of tests cause the build to break.**



**Another recommendation when managing your code coverage is to track when it goes down.** Generally it shouldn't and if / when it does, it should be explainable and trigger a build failure. Along this same line, raising the bar whenever coverage is increased is a good practice as it ensures the level of coverage in other areas is maintained as they were. **We recommend automating this so that whenever your coverage percentage increases, so do your minimum thresholds.** Once you have reached a certain level of coverage through the methods discussed above (e.g. covering for use cases, taking care of valid edge cases when appropriate, etc) **we don't recommend you actively work on increasing your code coverage percentages. Instead, the way we recommend coverage to go up is as a side effect of building good software.** This means that, as you increase your delivery frequency while monitoring your key stability metrics (e.g post-production defects, performance or service degradations, etc) you should see your code coverage increase.

## Test-First Approach: BDD and TDD

Defining tests prior to writing code is the best way to lock in behavior and produce clean code. BDD and TDD are complementary processes to accomplish this goal and we recommend teams use both to first uncover requirements (BDD) and then do development against these requirements (TDD).

### BDD

Behavior Driven Development is the process of defining business requirements as testable acceptance criteria and then implementing them using a test-first development approach. Examples and references for BDD can be found in the [playbook on BDD](/docs/work-decomposition/behavior-driven-development/).

When coding tests, the test statements should clearly describe what is being executed so that we can create a shared understanding of what's getting build by all stakeholders. Tests are the living documentation for what the application is doing and test results should be effective on-boarding documentation.

### TDD

Test-driven development is the practice of writing a failing test before the implementation of a feature or bug fix. **Red -> Green -> Refactor** refers to the TDD process of adding a failing (red) test, implementing that failing test to make it pass (green) and then cleaning up the code after that (refactor). This approach to testing gives you confidence as it avoids any false positives and also serves as a design mechanism to help you write code that is decoupled and free of unnecessary extra code. TDD also drives up code coverage organically due to the fact that each use case gets a new test added.

People often confuse writing tests in general with TDD. Writing tests after implementing a use case is not the same as TDD, that would be test oriented application development (TOAD) and like a toad, it has many warts. The process for toad would be green, green then refactor at a later date, maybe. The lack of a failing test in that process opens the door for false positive tests and often ends up taking more time as the code and tests end up needing to both be refactored. In addition, the design of an api is not considered as things are developed from the bottom up, not from the top down. This can lead to tight coupling, unnecessary logic and other forms of tech debt in the codebase.

## Naming Conventions

Test names should generally be descriptive and inclusive of what is being tested. A good rule of thumb when deciding a test name is to follow the "given-when-then" or "arrange-act-assert" conventions focusing on the "when" and "act" terms respectively. In both of these cases there is an implied action or generalized assertion that is expected, a test name should include this implication explicitly with an appropriate result effect description. For example:

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="JavaScript" >}}
    // Jest Example
    // "input validator with valid inputs should contain a single valid field caller receives success state"
    describe("input validator", () => {
      describe("with valid inputs", () => {
        it("should contain a single valid field caller receives success state", () => {});
      });
    });
  {{< /tab >}}
  {{< tab header="Java" >}}
    // JUnit Example
    // "input validator with valid inputs should contain a single valid field caller receives success state"

    @DisplayName("input validator") 
    public class InputValidationTest { 
        @Nested @DisplayName("with valid inputs") 
        class ValidScenarios { 
            @Test @DisplayName("should contain a single valid field caller receives success state") 
                public void containsSingleValidField() { 
                // 
            } 
        } 
    }
  {{< /tab >}}
{{< /tabpane >}}

### Casing

For test environments that require method names to describe its tests and suites it is recommended that they follow their language and environment conventions. See formatting under [static testing](/docs/testing/static/) for further best practices.

### Grouping

Where possible suites and their respective tests should be grouped to allow for higher readability and identification; If the environment supports it nested groups is also a useful and good practice to employ. For example a logical nesting of "unit-scenario-expectation" allows for encapsulating multiple scenarios that could potentially apply to a unit under test. For example:

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="JavaScript" >}}
    describe("unit-under-test", () => {
        describe("scenario-for-unit", () => {
            test("expectation-for-scenario", () => {});
        });
    });
  {{< /tab >}}
  {{< tab header="Java" >}}
    @DisplayName("unit-under-test")
    class ExampleTest {
        @Nested @DisplayName("scenario-for-unit")
        class ExampleScenario {
            @Test @DisplayName("expectation-for-scenario")
            void expectationForScenario() {
                //
            }
        }
    }
  {{< /tab >}}
{{< /tabpane >}}

## Continuously Assess your Tests Effectiveness

Prevent common anti-patterns like disabling, skipping, or commenting test cases or coverage gathering
Make sure it's still covering for valid use cases

## Shift Left

***["Write tests, not too many, mostly integration." - Kent C. Dodds](https://kentcdodds.com/blog/write-tests)***


There are common patterns to show how much of each kind of test is generally recommended. The most used are the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) and the [Test Trophy](https://kentcdodds.com/blog/write-tests). Both are trying to communicate the same thing: design a test suite that is fast, gives you confidence, and is not more expensive to maintain than the value it brings.

## Testing Principles

- Balance cost and confidence
- Move failure detection as close to the developer as possible
- Increase the speed of feedback
  - CI to take less than 10 minutes.

## Recommended Test Pattern

Most of the tests are [integration](/docs/testing/integration) tests and emphasize maximizing deterministic test coverage in process with the development cycle, so developers can find errors sooner. [E2E](/docs/testing/e2e) & [functional](/docs/testing/functional) tests should primarily focus on happy/critical path and tests that absolutely require a browser/app.

When executing continuous delivery, test code is a first class citizen that requires as much design and maintenance as production code. Flakey tests undermine confidence and should be terminated with extreme prejudice.

### Testing Matrix

| Feature                  | Static | Unit |  Integration   |   Functional   | Visual Regression |    Contract    | E2E |
| ------------------------ | :----: | :--: | :------------: | :------------: | :---------------: | :------------: | :-: |
| Deterministic            |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| PR Verify, Trunk Verify |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| Break Build              |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| Test Doubles             |  Yes   | Yes  |      Yes       |      Yes       |        Yes        | See Definition | No  |
| Network Access           |   No   |  No  | localhost only | localhost only |        No         |      Yes       | Yes |
| File System Access       |   No   |  No  |       No       |       No       |        No         |       No       | Yes |
| Database                 |   No   |  No  | localhost only | localhost only |        No         |      Yes       | Yes |

### Testing Anti-patterns

"Ice cream cone testing" is the **anti-pattern** where the most expensive, fragile, [non-deterministic](/docs/glossary#non-deterministic-test) tests are prioritized over faster and less expensive [deterministic](/docs/glossary#deterministic-test) tests because it "feels" right.

[Google Test Blog: Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

<img src="/images/testing-images/ice-cream-cones-software-testing.png" width="50%" />

### Testing Best Practices

General testing best practices are documented [here](/docs/testing/best-practices).  Best practices specific to test types are documented within each test type page.

## Test Pattern Resources

- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Testing Pyramids & Ice-Cream Cones](https://alisterscott.github.io/TestingPyramids.html)
- [Test Trophy](https://kentcdodds.com/blog/write-tests)


Whenever teams or areas want to improve their ability to deliver, there is a recommended order of operations to ensure the
improvement is effective. This value stream improvement journey's goal is to provide the steps and guide you to good implementation
practices.

Prerequisite: Please review the [CD Getting Started](/docs/cd) guide for context.

- [1. Build a Deployment Pipeline](#1-build-a-deployment-pipeline)
  - [Entangled Architecture - Requires Remediation](#entangled-architecture---requires-remediation)
    - [Common Entangled Practices](#common-entangled-practices)
    - [Improvement Plan](#improvement-plan)
  - [Tightly Coupled Architecture - Transitional](#tightly-coupled-architecture---transitional)
    - [Common Tightly Coupled Practices](#common-tightly-coupled-practices)
    - [Improvement Plan](#improvement-plan-1)
  - [Loosely Coupled Architecture - Goal](#loosely-coupled-architecture---goal)
    - [Common Loosely Coupled Practices](#common-loosely-coupled-practices)
- [2. Stabilize the Quality Signal](#2-stabilize-the-quality-signal)
  - [Remediating Test Instability](#remediating-test-instability)
- [3. Continuous Improvement](#3-continuous-improvement)
- [References](#references)

## 1. Build a Deployment Pipeline

Before any meaningful improvement can happen, the first constraint must be cleared. We need to make sure there is a single,
automated deployment pipeline to production. Human intervention after the code is integrated should be limited to approving
stage gates to trigger automation where needed.
A well-architected pipeline will build an artifact once and deploy that artifact to all required test environments for validation
and deliver changes safely to production.
It will also trigger all of the tests and provide rapid feedback as near the source of failure as possible. This is critical for
informing the developer who created the defect so that they have the chance to learn the reasons the defect was created and prevent
future occurrences.

### Entangled Architecture - Requires Remediation

[![Entangled Architecture](/images/entangled-pipelines.png)](/images/entangled-pipelines.png)

With an entangled architecture, there is no clear ownership of individual components or their quality. Every team could cause a
defect anywhere in the system because they are not working within product boundaries. The pipeline's quality signal will
be delayed compared to better-optimized team architectures. When a defect is found, it will require effort to identify
which team
created the defect and a multi-team effort to improve the development process to prevent regression. [Continuous delivery](/docs/testing/glossary#continuous-delivery)
is difficult with this architecture.

The journey to CD begins with each team executing [continuous
integration](/docs/glossary/#continuous-integration) on a team branch and those branches are
integrated automatically into a master CI flow daily.

[![Multi-team Branching](/images/multi-team-branching.png)](/images/multi-team-branching.png)

Any breaks in the pipeline should be addressed immediately by the team who owns the branch.

#### Common Entangled Practices

**Team Structure**: Feature teams focused on cross-cutting deliverables instead of product ownership and capability expertise.

**Development **Process**: Long-lived feature branches integrated after features are complete

**Branching**: Team branches with each team working towards CI on their branch and daily integration of team branches
to the trunk that re-runs the team-level tests.

**[Inverted Test Pyramid](https://alisterscott.github.io/TestingPyramids.html)**: The "ice cream cone testing" anti-pattern is
common. However, the teams should be focusing on improving the quality feedback and engineering tests that alert earlier
in the build cycle.

**Pipeline**: Establishing reliable build/deploy automation is a high priority.

**Deploy Cadence / Risk**: Delivery cadence in this architecture tends to be extended. This in turn leads to large code
change delta and high risk.

#### Improvement Plan

Find the architectural boundaries in the application that can be used to divide sub-systems between the
teams to create product teams. This step will realign the teams to a [tightly coupled
architecture](#tightly-coupled-architecture---transitional) with defined ownership, will improve quality outcomes, and
allow them to further decouple the system using the [Strangler](https://martinfowler.com/bliki/StranglerFigApplication.html)](https://martinfowler.com/bliki/StranglerFigApplication.html) process

---

### Tightly Coupled Architecture - Transitional

[![coupled pipelines](/images/coupled-pipelines.png)](/images/coupled-pipelines.png)

With tightly coupled architecture, changes in one portion of the application can cause unexpected changes in another portion of
the application. It's quite common for even simple changes to take days or weeks of analysis to verify the implications of the
change.

Tightly coupled applications have sub-assemblies assigned to product teams along logical application boundaries. This enables each
team to establish a quality signal for their components and have the feedback required for improving their quality process. This
architecture requires a more complicated integration pipeline to make sure each of the components can be tested
individually and as a larger application. Simplifying the pipelines and decoupling the application will result in higher
quality with less overhead.

#### Common Tightly Coupled Practices

**Team Structure**: Product teams focused on further de-coupling sub-systems

**Development Process**: [Continuous integration](/docs/glossary#continuous-integration). Small, tested changes are applied to the trunk as soon as complete on each product team. In addition, a larger CI pipeline is required to frequently run larger tests on the
integrated system, at least once per day.

**Branching**: Because [CI](/docs/glossary#continuous-integration) requires frequent updates to the trunk, [Trunk-Based](https://trunkbaseddevelopment.com)
Development](https://trunkbaseddevelopment.com) is used for CI.

**[Developer Driven Testing](https://medium.com/@LaSoft/developer-driven-testing-991ca1dab63a)**: The team is responsible for
architecting and continuously improving a suite of tests that give rapid feedback on quality issues. The team is also responsible
for the outcomes of poor testing, such as L1 support. This is a critical feedback loop for quality improvement.

**Pipeline**: CI pipeline working to progress to continuous delivery.

**Deploy Cadence / Risk**: Deliveries can be more frequent. Risk is inversely proportional to delivery frequency.

#### Improvement Plan

1. As more changes are needed, the team continues extracting independent domain
   services](https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577) with
   [well-defined APIs](https://www.openapis.org/)
2. For infrequently changed portions of the application that are poorly tested, re-writing may result in lost business
   capabilities. Wrapping these components in an API without re-architecting may be a better solution.

---

### Loosely Coupled Architecture - Goal

[![](/images/decoupled-pipelines.png)](/images/decoupled-pipelines.png)

With a loosely coupled architecture, components are delivered independently of each other in any sequence. This reduces
complexity and improves quality feedback loops. This not only relies on clean separations of teams and sub-assemblies but also on mature testing practices that include the use of virtual services to verify integration.

It's critical when planning to decompose to smaller services that [Domain Driven
Design](/docs#domain-driven-design) is used to inform service boundaries, value objects, and team
ownership. Services should use [good micro-service design patterns](/docs/cloud-checklist)

Once we have built our production deployment pipeline, the next most critical constraint to address is the trustworthiness of our
tests.

#### Common Loosely Coupled Practices

**Team Structure**: Product teams maintain independent components with well-defined APIs.

**Development Process**: [Continuous integration](/docs/glossary#continuous-integration). Small, tested changes are applied to the trunk as soon as complete on each product team.

**Branching**: Because [CI](/docs/glossary#continuous-integration) requires frequent updates to the trunk, [Trunk-Based](https://trunkbaseddevelopment.com)
Development](https://trunkbaseddevelopment.com) is used for CI.

**[Developer Driven Testing](https://medium.com/@LaSoft/developer-driven-testing-991ca1dab63a)**: The team is responsible for
architecting and continuously improving a suite of tests that give rapid feedback on quality issues. The team is also responsible
for the outcomes of poor testing, such as L1 support. This is a critical feedback loop for quality improvement.

**Pipeline**: One or more CD pipelines that are independently deployable at any time in any sequence.

**Deploy Cadence / Risk**: Deliveries can occur on demand or immediately after being verified by the pipeline. Risk is
inversely proportional to delivery frequency.

## 2. Stabilize the Quality Signal

Establishing a production pipeline allows us to evaluate and improve our quality signal. Quality gates should
be designed to inform the team of poor quality as close to the source as possible. This goal will be disrupted by
unstable tests.

### Remediating Test Instability

Unstable test results will create a lack of trust in the test results and encourage bypassing test failure. To correct this:

- Remove flaky tests from the pipeline
  to ensure that tests in the pipeline are trusted by the team
- Identify the causes for test instability and take corrective action
  - If the test can be stabilized and provides value, correct it and move it back into the pipeline
  - If it cannot be stabilized but is required, schedule it to run outside the pipeline
  - If not required, remove it

In general, bias should be towards testing **enough**, but not over-testing. Tracking the
duration of the pipeline and enacting a quality gate for maximum pipeline duration (from PR merge to production) is a good way to keep testing efficient.

After stabilizing the quality signal, we can track where most of the defects are detected and the type of defects they
are. Start tracking the trends for the number of defects found in each environment and the root cause distribution of
the defects to inform the test suite improvement plan. Then focus the improvements on moving the majority of defect detection closer to the developer. The ultimate goal is for most defects to be trapped in the developer's environment and not leak into the
deployment pipeline.

## 3. Continuous Improvement

After removing noise from the quality signal, we need to find and remove more waste on a
continuous basis. We start by mapping the deployment process from coding to production delivery and identifying the choke points
that are constraining the entire flow. The process for doing this and the effectiveness are documented in Goldratt's ["Theory of
Constraints" (TOC)](https://www.tocinstitute.org/theory-of-constraints.html). The TOC states that the entire system is constrained
by one constraint and improvement of the system will only be effective once that constraint is resolved.

1. [Identify the system constraint](/docs/vsm).
2. Decide how to exploit the system constraint.
3. Subordinate everything else to the above decisions.
4. Elevate the constraint.
5. If, in the previous steps, a constraint has been broken, go
   back to step one but do not allow the inertia to cause a system constraint.

Some common constraints are:

- **Resource Constraints** - resources such as the number of people who can perform the task, access to environments, etc. which
  block the flow based on its limited capacity for the desired outcomes.
- **Policy Constraints** - policies, practices or metrics that artificially impede flow due to their poor alignment with the overall performance of the system.

Working daily to relentlessly remove constraints is the most important work a team can do. Doing so means they are constantly
testing their improved delivery system by delivering value and constantly improving their ability to do so. Quality, predictability,
stability, and speed all improve.

## References

|Title|Author|
|---|---|
| [Accelerate](https://itrevolution.com/product/accelerate/) | Forsgren, Humble, & Kim - 2018|
| [Engineering the Digital Transformation](https://garygruver.com/engineering-digital-transformation.php)| Gruver - 2019|
|[A Practical Approach to Large-Scale Agile Development: <br> How HP Transformed LaserJet FutureSmart Firmware](https://www.amazon.com/Practical-Approach-Large-Scale-Agile-Development/dp/0321821726)| Gruver et al - 2012|
| [Theory of Constraints](https://www.tocinstitute.org/theory-of-constraints.html)| Goldratt|


The following are very frequent issues that teams encounter when working to improve the flow of delivery.

## Work Breakdown

### Stories without testable acceptance criteria

All stories should be defined with [declarative and testable acceptance criteria](/docs/work-decomposition/behavior-driven-development). This reduces the amount
of waiting and rework once coding begins and enables a much smoother testing workflow.

Acceptance criteria should define "done" for the story. No behavior other than that specified by the acceptance
criteria should be implemented. This ensures we are consistently delivering what was agreed to.

### Stories too large

It's common for teams using two week sprints to have stories that require five to ten days to complete. Large stories hide complexity, uncertainty, and dependencies.

- Stories represent the smallest user observable behavior change.
- To enable rapid feedback, higher quality acceptance
  criteria, and more predictable delivery, Stories should require no more than two days for a team to deliver.

### No definition of "ready"

Teams should have a working agreement about the definition of "ready" for a story or task. Until the team agrees it has
the information it needs, no commitments should be made and the story should not be added to the "ready" backlog.



### No definition of "Done"

Having an explicit definition of done is important to keeping [WIP](/docs/glossary#WIP) low and finishing work.



## Team Workflow

### Assigning tasks for the sprint

Work should always be pulled by the next available team member. Assigning tasks results in each team member working in isolation on a task list instead of the team
focusing on delivering the next high value item. It also means that people are less invested in the work other people
are doing. New work should be started only after helping others
complete work in progress.

### Co-dependant releases

Multi-component release trains increase batch size and reduce delivered quality. Teams cannot improve efficiency if they
are constantly waiting. Handle dependencies with code, do not manage them with process. If you need a person to
coordinate releases, things are seriously broken.

### Handoffs to other teams

If the normal flow of work requires waiting on another team then batch sizes increase and quality is reduced. Teams
should be organized so they can deliver their work without coordinating outside the team.

### Early story refining

As soon as we decide a story has been refined to where we can begin developing it, the information begins to age because
we will never fully capture everything we decided on. The longer a story is "ready" before we being working, the less
context we retain from the conversation. Warehoused stories age like milk. Limit the inventory and spend more time on
delivering current work.

## Manual test as a stage gate

In this context, a __test__ is a repeatable, deterministic activity to verify the releasability of the system. There are
manual activities related to exploration of edge cases and how usable the application is for the intended consumer, but these
are not tests.

There should be no manual validation as a step before we deploy a change. This includes, but is not limited to manual
acceptance testing, change advisory boards (CAB), and manual security testing.

## Meaningless retrospectives

Retrospectives should be metrics driven. Improvement items should be treated as business features.

## Hardening / Testing / Tech Debt Sprints

**Just no.** These are not real things. Sprints represent work that can be
delivered to production.

## Moving "resources" on and off teams to meet "demand"

Teams take time to grow, they cannot be "constructed". Adding or removing anyone
from a team lowers the team's maturity and average problem space expertise. Changing too many people on a team
reboots the team.

## One delivery per sprint

Sprints are planning increments, not delivery increments. Plan what will be delivered daily during the sprint.

## Skipping demo

If the team has nothing to demo, demo that. Never skip demo.

## Committing to distant dates

Uncertainty increases with time. Distant deliverables need detailed analysis.

## Not committing to dates

Commitments drive delivery. Commit to the next Minimum Viable Feature.

## Velocity as a measure of productivity

Velocity is planning metric. "We can typically get this much done in this much time." It's an estimate of relative
capacity for new work that tends to change over time and these changes don't necessarily indicate a shift in productivity. It's
also an arbitrary measure that varies wildly between organizations, teams and products. There's no credible means of
translating it into a normalized figure that can be used for meaningful comparison.

By equating velocity with productivity there is created an incentive to optimize velocity at the expense of developing quality software.

---

## CD Anti-Patterns

### Work Breakdown

| Issue                 | Description                                      | Good Practice                                                                                                                     |
| --------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Unclear requirements  | Stories without testable acceptance criteria     | Work should be defined with acceptance tests to improve clarity and enable developer driven testing.                              |
| Long development Time | Stories take too long to deliver to the end user | Use BDD to decompose work to testable acceptance criteria to find smaller deliverables that can be completed in less than 2 days. |

### Workflow Management

| Issue                                   | Description                                                                                                                                                                                                           | Good Practice                                                                                                                                                                                |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rubber band scope                       | Scope that keeps expanding over time                                                                                                                                                                                  | Use BDD to clearly define the scope of a story and never expand it after it begins.                                                                                                          |
| Focusing on individual productivity     | Attempting to manage a team by reporting the "productivity" of individual team members. This is the fastest way to destroy teamwork.                                                                                  | Measure team efficiency, effectiveness, and morale                                                                                                                                           |
| Estimation based on resource assignment | Pre-allocating backlog items to the people based on skill and hoping that those people do not have life events.                                                                                                       | The whole team should own the team's work. Work should be pulled in priority sequence and the team should work daily to remove knowledge silos.                                             |
| Meaningless retrospectives              | Having a retrospective where the outcome does not results in team improvement items.                                                                                                                                  | Focus the retrospective on the main constraints to daily delivery of value.                                                                                                                  |
| Skipping demo                           | No work that can be demoed was completed.                                                                                                                                                                             | Demo the fact that no work is ready to demo                                                                                                                                                  |
| No definition of "Done" or "Ready"      | Obvious                                                                                                                                                                                                               | Make sure there are clear entry gates for "ready" and "done" and that the gates are applied without exception                                                                                |
| One or fewer deliveries per sprint      | The sprint results in one or fewer changes that are production ready                                                                                                                                                  | Sprints are planning increments, not delivery increments. Plan what will be delivered daily during the sprint. Uncertainty increases with time. Distant deliverables need detailed analysis. |
| Pre-assigned work                       | Assigning the list of tasks each person will do as part of sprint planning. This results in each team member working in isolation on a task list instead of the team focusing on delivering the next high value item. | The whole team should own the team's work. Work should be pulled in priority sequence and the team should work daily to remove knowledge silos.                                             |

### Teams

| Issue                | Description                                                                                                                                                                                       | Good Practice                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unstable Team Tenure | People are frequently moved between teams                                                                                                                                                         | Teams take time to grow. Adding or removing anyone from a team lowers the team's maturity and average expertise in the solution. Be mindful of change management |
| Poor teamwork        | Poor communication between team members due to time delays or "expert knowledge" silos                                                                                                            | Make sure there is sufficient time overlap and that specific portions of the system are not assigned to individuals                                              |
| Multi-team deploys   | Requiring more than one team to deliver synchronously reduces the ability to respond to production issues in a timely manner and delays delivery of any feature to the speed of he slowest teams. | Make sure all dependencies between teams are handled in ways that allow teams to deploy independently in any sequence.                                           |

### Testing Process

| Issue              | Description                                                                                                | Good Practice                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Outsourced testing | Some or all of acceptance testing performed by a different team or an assigned subset of the product team. | Building in the quality feedback and continuously improving the same is the responsibility of the development team.                                                        |
| Manual testing     | Using manual testing for functional acceptance testing.                                                    | Manual tests should only be used for things that cannot be automated. In addition, manual tests should not be blockers to delivery but should be asynchronous validations. |





- [Introduction to CD](#introduction-to-cd)
- [Goals](#goals)
- [CD Maturity](#cd-maturity)
  - [Minimums](#minimums)
  - [Good](#good)
  - [Continuous Integration](#continuous-integration)
  - [Continuous Delivery/Deploy](#continuous-deliverydeploy)
- [Recommended Practices](#recommended-practices)
  - [Pipeline](#pipeline)
  - [Short CI Cycle Time](#short-ci-cycle-time)
  - [Integrate outside the pipeline. Virtualize inside the pipeline](#integrate-outside-the-pipeline-virtualize-inside-the-pipeline)
  - [All test automation pre-commit](#all-test-automation-pre-commit)
- [Tips](#tips)
- [References](#references)

## Introduction to CD

Continuous delivery is the ability to deliver the latest changes on-demand. CD is not build/deploy automation. It is the continuous flow of changes to the end-user with no human touchpoints between code integrating to the trunk and delivery to production. This can take the form of triggered delivery of small batches or the immediate release of the most recent code change.

CD is not a reckless throwing of random change into production. Instead, it is a disciplined team activity of relentlessly automating all of the validations required for a release candidate, improving the speed and reliability of quality feedback, and collaborating to improve the quality of the information used to develop changes.

CD is based on and extends the extreme programming practice of continuous integration. There is no CD without CI.

The path to continuous integration and continuous delivery may seem daunting to teams that are just starting out. We offer this guide to getting started with a focus on outcome metrics to track progress.

![CD Pipeline](/images/CD_Pipeline_Full_Transparent.png "CD_Pipeline_Full_Transparent.png")

Continuous Delivery is far more than automation. It is the entire cycle of identifying value, delivering the value, and verifying
with the end user that we delivered the expected value. The shorter we can make that feedback loop, the better our bottom line will
be.

---

## Goals

Both CI and CD are behaviors intended to improve certain goals. CI is very effective at uncovering issues in work decomposition and testing within the team's processes so that the team can improve them. CD is effective at uncovering external dependencies, organizational process issues, and test architecture issues that add waste and cost.

The relentless improvement of how we implement CD reduces overhead, improves quality feedback, and improves both the outcomes of the end-user and the work/life balance of the team.

## CD Maturity

It has been common for organizations to apply "maturity models" to activities such as CD. However, this has been found to lead to cargo culting and aligning goals to the process instead of the outcomes. Understanding what capabilities you have and what capabilities need to be added to fully validate and operate changes are important, but the goals should always align to improving the flow of value delivery to the end-user. This requires analyzing every process from idea to delivery and identifying what should be removed, what should be automated, and how we can continuously reduce the size of changes delivered.

There should never be an understanding that we are "mature" or "immature" with delivery. We can always improve. However, there should be an understanding of what competency looks like.

### Minimums

- Each developer integrates tested changes to the trunk at least daily.
- Changes always use the same process to deliver.
- There are no process differences between deploying a feature or a fix.
- There are no manual quality gates.
- All test and production environments use the same artifact.
- If the release cadence requires release branches, then the release branches deploy to all test environments and production.

### Good

- New work requires less than 2 days from start to delivery
- All changes deliver from the trunk
- The time from committing change and delivery to production is less than 60 minutes
- Less than 5% of changes require remediation
- The time to restore service is less than 60 minutes.

### Continuous Integration

This working agreement for CI focuses on developing teamwork and delivering quality outcomes while removing waste.

- Branches originate from the trunk.
- Branches are deleted in less than 24 hours.
- Changes must be tested and not break existing tests before merging to the trunk.
- Changes are not required to be "feature complete".
- Helping the team complete work in progress (code review, pairing) is more important than starting
  new work.
- Fixing a broken build is the team's highest priority.

**Desired outcomes:**

- [More frequent](/docs/metrics/integration-frequency) integration of smaller, higher quality, lower risk changes.
- More efficient and effective test architecture
- [Lean code review process](/docs/workflow-management/code-review)
- Reduced [Work In Progress](/docs/workflow-management/limiting-wip) (WIP)

### Continuous Delivery/Deploy

- Increased [delivery frequency](/docs/metrics/release-frequency)
- [Increased stability](/docs/metrics/quality)
- Improved [deploy success](/docs/metrics/change-fail-rate)
- Reduced [development cycle time](/docs/metrics/development-cycle-time)
- Improved [time to restore service](/docs/metrics/mean-time-to-repair)
- Reduced process waste
- Smaller, less risky production releases.
- Small, cohesive, high morale, high-performing product teams with business domain expertise.

---

## Recommended Practices

While implementation is contextual to the product, there are key
steps that should be done whenever starting the CD journey.

- [Value Stream Map](/docs/vsm): This is a standard Lean tool to make visible
  the development process and highlight any constraints the team has. This is a
  critical step to begin improvement.
Build a road map of the constraints and use a disciplined improvement process
  to remove the constraints.
- Align to the Continuous Integration team working agreement and use the
  impediments to feed the team's improvement process.
- We always branch from Trunk.
- Branches last less than 24 hours.
- Changes must be tested and not break existing tests.
- Changes are not required to be "feature complete".
- Code review is more important than starting new work.
- Fixing a broken build is the team's highest priority.
- Build and continuously improve a single CD automated pipeline for each
  repository. There should only be a single configuration for each repository
  that will deploy to all test and production environments.

**A valid CD process will have only a single method to build and deploy any
change. Any deviation for emergencies indicates an incomplete CD process that
puts the team and business at risk and must be improved.**

---

### Pipeline

Focus on hardening the pipeline. Its job is to block bad changes. The team's job is to develop its ability to do that. Only use the emergency process. If a process will not be used to resolve a critical outage, it should not be happening in the CD pipeline.

Integrate outside the pipeline. Virtualize inside the pipeline. Direct integration is not a good testing method for validating behavior because the data returned is not controlled. It **IS** a good way to validate service mocks. However, if done in the pipeline it puts fixing production at risk if the dependency is unavailable.

There should be one or fewer stage gates. Until release and deploy are decoupled, one approval for production. No other stage gates.

Developers are responsible for the full pipeline. No handoffs. Handoffs cause delays and dilute ownership. The team owns its pipelines and the applications they deploy from birth to death.

### Short CI Cycle Time

CI cycle time should be less than 10 minutes from commit to artifact creation. CD cycle time should be less than 60 minutes from commit to Production.

### Integrate outside the pipeline. Virtualize inside the pipeline

Direct integration to stateful dependencies (end-to-end testing) should be avoided in the pipeline. Tests in the pipeline should be deterministic and the larger the number of integration points the more difficult it is to manage state and maintain determinism. It is a good way to validate service mocks. However, if done in the pipeline it puts fixing production at risk if the dependency is unstable/unavailable.

### All test automation pre-commit

Tests should be co-located with the system under test and all acceptance testing should be done by the development team. The goal is not 100% coverage. The goal is efficient, fast, effective testing.

No manual steps
There should be no manual intervention after the code is integrated into the trunk. Manual steps inject defects.

---

## Tips

Use [trunk merge frequency](/docs/metrics/integration-frequency),
[development cycle time](/docs/metrics/development-cycle-time), and
[delivery frequency](/docs/metrics/release-frequency) to uncover pain points. The team has
complete control merge frequency and development cycle time and can
uncover most issues by working to improve those two metrics.

Make sure to keep all metrics visible and refer to them often to help drive the
change.

See [CD best practices](/docs/cd/#recommended-practices) and [CD Roadblocks](/docs/cd/cd-problems) for more tips on effectively introducing CICD improvements to your team processes.

---

## References

- [Continuous Delivery](https://continuousdelivery.com/)
- [Jez Humble: Continuous Delivery sounds great, but it won't work here @ DevOn Summit 2017](https://www.youtube.com/watch?v=837Z_oehhRg)

---


Work in Progress (WIP) is the total work that has been started but not
completed. This includes **all** work, defects, tasks, stories, etc.

## What is the intended behavior?

Focus the team on finishing work and delivering it rather than switching between tasks but not finishing them.

## How to improve it

- The team should focus on finishing items closest to being ready for
  production.
  - Prioritize code review over starting new work
  - Prioritize pairing to solve a problem over starting new work
- Set and do not exceed WIP limits for the team.
  - Total WIP should not exceed team size.
- Keep the Kanban board visible at all times to monitor WIP

## How to game it

- Update incomplete work to "done" before it is delivered to production.
- Create stories for each step of development instead of for value to be delivered.
- Do not update work to "in progress" when working on it.


The average amount of the backlog delivered during a sprint by the team. Used by the product team for planning. There is no such thing as good or bad velocity. This is commonly misunderstood to be a productivity metric. It is not.

## What is the intended behavior?

After a team stabilizes, the standard deviation should be low. This will enable realistic planning of future
deliverables based on relative complexity. Find ways to increase this over time by reducing waste, improving planning,
and focusing on teamwork.

## How to improve it

- Reduce story size so they are easier to understand and more predictable.
- Minimize [hard dependencies](/docs/glossary/#dependency-hard). Each hard dependency reduces the odds of on-time
  delivery by 50%.
- Swarm stories by decomposing them into tasks that can be executed in parallel so that the team is working as a unit to deliver faster.

## How to game it

- Cherry pick easy, low priority items.
- Increase story points
- Skip quality steps.
- Prematurely sign-off work only to have defects reported later.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/quality) defect ratio goes up as more defects are reported.
- [WIP](/docs/metrics/work-in-progress) increases as teams start more work to look more
  busy.

## References

[Harvard Business Review: Six Myths of Product Development](https://hbr.org/2012/05/six-myths-of-product-development)
[Scrum.org: Velocity](https://www.scrum.org/resources/blog/agile-metrics-velocity#:~:text=Velocity%20is%20an%20indication%20of,Velocity%20or%20a%20Bad%20Velocity)


How frequently per day the team releases changes to production.

### What is the intended behavior?

Small changes deployed very frequently to exercise the ability to fix production
rapidly, reduce [MTTR](/docs/metrics/mean-time-to-repair), increase quality, and reduce risk.

### How to improve it

- Reduce [Development Cycle Time](/docs/metrics/development-cycle-time).
- Remove handoffs to other teams.
- Remove manual processes.
- Improve testing and move quality ownership into the team.
- Move [hard dependencies](/docs/glossary/#dependency-hard) to [soft dependencies](/docs/glossary/#dependency-soft) with [feature flags](https://martinfowler.com/articles/feature-toggles.html) and [service virtualization](https://www.digitalocean.com/community/tutorials/how-to-mock-services-using-mountebank-and-node-js).
- Focus on [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html) with small changes integrated to the trunk continuously.
- Use [Trunk Based Development](https://trunkbaseddevelopment.com/) to reduce the risk of lost changes and process overhead.

### How to game it

- Re-deploying the same artifact repeatedly.
- Building new artifacts that contain no changes.

### Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Change Fail Rate](/docs/metrics/change-fail-rate) increases as focus shifts to speed instead of quality.
- [Quality](/docs/metrics/defect-rate) decreases if steps are skipped in refining work for the sake of output.


Quality is measured as the percentage of finished work that is unused, unstable, unavailable, or defective according to the end user.

## What is the intended behavior?

Continuously improve the quality steps in the construction process, reduce the size of delivered change, and increase
the speed of feedback from the end user. Improving this cycle improves roadmap decisions.

## How to improve it

- Add automated checks to the pipeline to prevent re-occurrence of root causes.
- Only begin new work with testable acceptance criteria.
- Accelerate feedback loops at every step to alert to quality, performance, or availability issues.

## How to game it

- Log defects as new features

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Delivery [frequency](/docs/metrics/release-frequency) may be reduced if more manual quality steps are added
- [Build cycle time](/docs/metrics/build-duration) may increase as additional tests are added to the pipeline
- [Lead time](/docs/metrics/lead-time) can increase as more time is spent on business analysis


## Organizational Metrics

These metrics are important for teams and management to track the health of the delivery system

| Metric                                                      | Meaning                                                                      | Goal of Measuring                                                                                                                                            | Guardrail Metrics                               |
|-------------------------------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| [Integration/Merge Frequency](/docs/metrics/integration-frequency) | How frequently code changes are integrated to the trunk for testing          | Reduce the size of change to improve quality and reduce risk                                                                                                 | Defect Rates should not increase                |
| [Build Cycle Time](/docs/metrics/build-duration)                   | Total duration from commit to production delivery                            | Improve the ability to deliver changes to improve feedback and reduce MTTR                                                                                   | Defect Rates should not increase                |
| [Change Fail %](/docs/metrics/change-fail-rate)                    | The % of production deploys that are reverted                                | Improve the upstream quality processes                                                                                                                       | Development Cycle Time should not increase      |
| [Code Inventory](/docs/metrics/code-inventory)                     | Lines of code added or removed that have not been delivered to production    | Reduce the amount of code inventory and move closer to Just In Time delivery.                                                                                | Change Fail % & Defect Rate should not increase |
| [Defect Rate](/docs/metrics/defect-rate)                           | Number of defects created during a set interval                              | Improve the quality processes in the delivery flow                                                                                                           | Delivery Frequency should not reduce            |
| [Development Cycle Time](/docs/metrics/development-cycle-time)     | Time from when a story is started until marked "done"                        | Reduce the size of work to improve the feedback from the end user on the value of the work and to improve the quality of the acceptance criteria and testing | Defect Rate should not increase                 |
| [MTTR](/docs/metrics/mean-time-to-repair)                          | The time from when customer impact begins until it is resolved               | Improve the stability and resilience of both the application and the system of delivery                                                                      | Quality should not decrease                     |
| [Delivery Frequency](/docs/metrics/release-frequency)              | The frequency that changes are delivered to production                       | Reduce the size of delivered change, improve the feedback loop on quality and increase the speed of value delivery.                                          | Defect Rates should not degrade                 |
| [Work in Progress](/docs/metrics/work-in-progress)                 | The number of items in progress on the team relative to the size of the team | Reduce the number of items in progress so that the team can focus on completing work vs/ being busy.                                                         | Delivery frequency should not degrade           |

## Team Metrics

These metrics should only be used by teams to inform decision making. They are ineffective for measuring quality, productivity, or
delivery system health.

| Metric                                 | Meaning                                                                                                                                                         | Goal of Measuring                                                                     | Issues with Metric                                                                                |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [Code Coverage](/docs/metrics/code-coverage)  | The % of code that us executed by test code                                                                                                                     | Prevent unexpected reduction of code coverage. Find code that should be better tested | When coverage goals are set, can generate tests that meet the goals but are ineffective as tests. |
| [Velocity/Throughput](/docs/metrics/velocity) | The average amount of the backlog delivered during a sprint by the team. Used by the product team for planning. There is no such thing as good or bad velocity. |                                                                                       |                                                                                                   |


Mean Time to Repair is the average time between when a incidents is
detected and when it is resolved.

"Software delivery performance is a combination of three metrics: [lead time](/docs/metrics/development-cycle-time), [release
frequency](/docs/metrics/release-frequency), and MTTR. [Change fail rate](/docs/metrics/change-fail-rate) is not included, though it
is highly correlated."

["Accelerate"](https://itrevolution.com/book/accelerate/) uses Lead Time for [Development Cycle Time](/docs/metrics/development-cycle-time).

## What is the intended behavior?

Improve the ability to more rapidly resolve system instability and service outages.

## How to improve it

- Make sure the pipeline alway deployable.
- Keep [build cycle time](/docs/metrics/build-duration) short to allow roll-forward.
- Implement feature flags for larger feature changes to allow the them to be deactivated without re-deploying.
- Identify stability issues and prioritize them in the backlog.

## How to game it

- Updating support incidents to "closed" before service is restored.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) decreases if issues re-occur due to lack of improving pipeline quality gates.

## References

- ["Accelerate" Ch2: Measuring
  Performance](https://learning.oreilly.com/library/view/accelerate/9781457191435/13-ch2.xhtml) - Nicole Forsgren PhD, Jez Humble & Gene Kim


This shows the average time it takes for a new request to be delivered. This is
measured from the creation date to release date for each unit of work and includes [Development Cycle Time](/docs/metrics/development-cycle-time).

## What is the intended behavior?

Identify over utilized teams, backlogs that need more Product Owner attention,
or in conjunction with [velocity](/docs/metrics/velocity) to help teams optimize their processes.

## How to improve it

Relentlessly remove old items from the backlog.
Improve team processes to reduce [Development Cycle Time](/docs/metrics/development-cycle-time).
Use Innersourcing to allow other teams to help when surges of work arrive.
Re-assign, carefully, some components to another team to scale delivery.

## How to game it

- Requests can be tracked in spreadsheet or other locations and then added to
  the backlog just before development. This can be identified by decreased
  customer satisfaction.
- Reduce feature refining rigour.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) is reduced if less time is spent refining and defining
  testable requirements.

## References

- [InnerSourcing](https://paypal.github.io/InnerSourceCommons/).


The average number of production-ready pull requests a team closes per day, normalized by the number of developers on
the team. On a team with 5 developers, healthy CI practice is
at least 5 per day.

## What is the intended behavior?

- Increase the frequency of code integration
- Reduce the size of each change
- Improve code review processes
- Remove unneeded processes
- Improve quality feedback

## How to improve it

- Decompose code changes into smaller units to incrementally deliver features.
- Use [BDD](/docs/work-decomposition/behavior-driven-development) to aid functional breakdown.
- Use TDD to design more modular code that can be integrated more frequently.
- USe feature flags, branch by abstraction, or other coding techniques to control the release of new features.

## How to game it

- Meaningless changes integrated to trunk.
- Breaking changes integrated to trunk.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) decreases if testing is skipped.

## Recommended Practices

- [Trunk Based Development](https://trunkbaseddevelopment.com/)
- [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html)
- [Feature Flagging](https://martinfowler.com/articles/feature-toggles.html)


The average time from starting work until release to production.

## What is the intended behavior?

Reduce the time it takes to deliver refined work to production to mitigate the effects of priorities changing and get
rapid feedback on quality.

## How to improve it

- Decompose work so it can be delivered in smaller increments and by more team members.
- Identify and remove process waste, handoffs, and delays in the construction process.
- Improve test design.
- Automate and standardize the build and deploy pipeline.

## How to game it

- Move things to "Done" status that are not in production.
- Move items directly from "Backlog" to "Done" after deploying to production.
- Split work into functional tasks that should be considered part of development (development task, testing task,
  etc.).

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) decreases if quality processes are skipped.
- Standard deviation of the control chart can show issues being closed too rapidly.

## References

- ["Accelerate" Ch2: Measuring
  Performance](https://learning.oreilly.com/library/view/accelerate/9781457191435/13-ch2.xhtml) - Nicole Forsgren PhD, Jez Humble & Gene Kim


Defect rates are the total number of defects by severity reported for a period of time.

`Defect count / Time range`

## What is the intended behavior?

Use defect rates and trends to inform improvement of upstream quality processes.

Defect rates in production indicate how effective our overall quality process is. Defect rates in lower environments inform us of
specific areas where quality process can be improved. The goal is to push detection closer to the developer.

## How to improve it

Track trends over time and identify common issues for the defects Design test design changes that would reduce the time
to detect defects.

## How to game it

- Mark defects as enhancement requests
- Don't track defects
- Deploy changes that do not modify the application to improve the percentage

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Delivery frequency](/docs/metrics/release-frequency) is reduced if too much emphasis is place on zero defects. This can be
  self-defeating as large change batches will contain more defects.


The lines of code that have been changed but have not been delivered to production. This can be measured at several points in the
delivery flow, starting with code not merged to trunk.

## What is the intended behavior?

Reduce the size of individual changes and reduce the duration of branches to improve quality feedback. We also want to
eliminate stale branches that represent risk of lost change or merge conflicts that result in additional
manual steps that add risk.

## How to improve it

- Improve [continuous integration](/docs/metrics/integration-frequency) behavior where changes are integrated to the trunk and
  verified multiple times per day.

## How to game it

- Use forks to hide changes.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) can decrease as quality steps are skipped or batch size increases.


A measure of the amount of code that is executed by test code.

## What is the intended behavior?

Inform the team of risky or complicated portions of the code that are not sufficiently covered by tests. Care should be
taken not to confuse high coverage with good testing.

## How to improve it

- Write tests for code that SHOULD be covered but isn't
- Refactor the application to improve testability
- Remove unreachable code
- Delete pointless tests
- Refactor tests to test behavior rather than implementation details

## How to game it

- Tests are written for code that receives no value from testing.
- Test code is written without assertions.
- Tests are written with meaningless assertions.

Example: The following test will result in 100% function, branch, and line coverage with no behavior tested.



The following is an example of test code with no assertions. This will also produce 100% code coverage reporting but does not test anything because there are no assertions to cause the test to fail.



## Guardrail Metrics

Test coverage should never be used as a goal or an indicator of application health. Measure outcomes. If testing is poor, the following metrics will show poor results.

- [Defect Rates](/docs/metrics/defect-rate) will increase as poor-quality tests are created to meet coverage targets that do not reliably catch defects.
- [Development Cycle Time](/docs/metrics/development-cycle-time) will increase as more emphasis is placed on improper testing methods (manual functional testing, testing teams, etc.) to overcome the lack of reliable tests.


The percentage of changes that result in negative customer impact, or rollback.

`changeFailRate = failedChangeCount / changeCount`

## What is the intended behavior?

Reduce the percentage of failed changes.

## How to improve it

- Release more, smaller changes to make quality steps more effective and reduce the impact of failure.
- Identify root cause for each failure and improve the automated quality checks.

## How to game it

- Deploy fixes without recording the defect.
- Create defect review meetings and re-classify defects as feature requests.
- Re-deploy the latest working version to increase deploy count.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Delivery frequency](/docs/metrics/release-frequency) can decrease if focus is placed on "zero defect" changes.
- [Defect rates](/docs/metrics/defect-rate) can increase as reduced delivery frequency increases code change batch size and delivery risk.

## References

- ["Accelerate" Ch2: Measuring
  Performance](https://learning.oreilly.com/library/view/accelerate/9781457191435/13-ch2.xhtml) - Nicole Forsgren PhD, Jez Humble & Gene Kim


The time from code commit to production deploy. This is the minimum time changes can be applied to production. This is
referenced as "hard lead time" in Accelerate

## What is the intended behavior?

Reduce pipeline duration to improve [MTTR](/docs/metrics/mean-time-to-repair) and improve test efficiency to
give the team more rapid feedback to any issues. Long build cycle times delay quality feedback
and create more opportunity for defect penetration.

## How to improve it

- Identify areas of the build that can run concurrently.
- Replace end to end tests in the pipeline with virtual services and move end to end testing to an asynchronous process.
- Break down large services into smaller sub-domains that are easier and faster to build / test.
- Add alerts to the pipeline if a maximum duration is exceeded to inform test refactoring priorities.

## How to game it

- Reduce the number of tests running or test types executed.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Defect rates](/docs/metrics/defect-rate) increase if quality gates are skipped to reduce build time.


The average length of time between when a build breaks and when it is fixed.

## What is the intended behavior?

Keep the pipelines always deployable by fixing broken builds as rapidly as possible. Broken builds are the highest priority since
they prevent production fixes from being deployed in a safe, standard way.

## How to improve it

- Refactor to improve testability and modularity.
- Improve tests to locate problems more rapidly.
- Decrease the size of the component to reduce complexity.
- Add automated alerts for broken builds.
- Ensure the proper team practice is in place to support each other in solving the problem as a team.

## How to game it

- Re-build the previous version.
- Remove tests that are failing.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Integration Frequency](../integration-frequency) decreases as additional manual or automated process overhead is
  added before integration to trunk.


Metrics are key to organizational improvement. If we do not measure, then any attempt at improvement is aimless.
Metrics, like any tool, must be used correctly to drive the improvement we need. It's important to use metrics in
offsetting groups and to focus improvement efforts on the group of metrics as a whole, not as individual measures.

The [Metrics Cheat Sheet](/docs/metrics//metrics-cheat-sheet) has a high-level view of the key metrics, their intent, and how to
use them appropriately.

![Goodhart's Law](/images/Goodharts-law.jpg#width=50%)

## CD Execution

When measuring the performance of continuous delivery, we are measuring our ability to reliably and sustainably deliver high-quality changes. We do this by focusing on very frequent small batches of high-quality delivery.

- Change frequency is important to make sure that waste is driven out of the process. This reduces costs, improves the
  sustainability of flow, and ensures there is a verified quality process for emergency changes.
- Small batches are easier to inspect for quality and limit the impact of any quality issues.
- Change success is an important offsetting metric. If we only focus on change size and change frequency,
  quality will suffer. If we only focus on reducing the number of defects and eliminating impacting changes, batch size
  and frequency suffer. The data shows that this results in more defects and more costs.

### Throughput

- [Development Cycle Time](/docs/metrics//development-cycle-time): Time from when a task is started until it is "Done". The
    suggested definition of "Done" is delivered to production. KPI for how big a unit of work is. Indicator of
    possible upstream quality issues with requirements definition and teamwork.
- [Delivery Frequency](/docs/metrics//release-frequency): KPI for batch size, cost, and efficient quality process.

### Stability

- [Change Failure Rate](/docs/metrics//change-fail-rate): Percentage of changes that require remediation. KPI for the effectiveness of the quality process.
- [Defect Rate](/docs/metrics//defect-rate): Rate of defect creation over time relative to change frequency, generally P1 and P2.
- [Mean Time to Repair](/docs/metrics//mean-time-to-repair): KPI for the maturity of our disaster response preparations and
    the forethought to design for recovery instead of just for delivery.

## CI Execution

Continuous delivery stands on the bedrock of continuous integration. If code is not continuously integrating, it cannot
be safely delivered.

The focus of CI is to amplify quality feedback. The more frequently code is integrated and tested, the sooner any
quality issues will be found and the smaller those issues will be.

### [Integration Frequency](/docs/metrics//integration-frequency): Frequency of code integrating to the trunk. KPI for efficacy of

  refining requirements, quality process, and teamwork.

- When a team is mob programming, this should occur several times a day.
- When a team is pair programming, this should occur several times a day per pair.
- When the team is working on individual tasks, this should occur several times a day per developer.

### [Build Cycle Time](/docs/metrics//build-duration): Time from commit to production deploy. KPI for the stability of the

  pipeline and efficiency of the quality process. Long build cycle times have a direct negative impact on MTTR, and
  batch size. This encourages abandoning defined quality checks in emergencies. This makes emergency changes the
  riskiest changes to make.

## Workflow Management

### [Velocity / Throughput](/docs/metrics/velocity): Planning metric to allow the team to predict date ranges for delivery. The

  standard deviation of this metric is a KPI for predictability. The average value of the metric has no meaning outside
  the team.

### [Lead Time](/docs/metrics/lead-time): Total time from when a request is made until it is delivered. KPI for team over-utilization

  As the team's utilization approaches 100%, this metric approaches infinity.
  
### [Work In Process (WIP)](/docs/metrics//work-in-progress): Key flow metric. Excessive WIP results in rework and delivery delays
