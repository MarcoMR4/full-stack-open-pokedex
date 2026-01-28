
## CI/CD workflows on a software development team with 6 people

CI or **continuous integration** is an important part when working in a team of various people contributing on a software project within the same repository. Every change is likely to break or create a new bug.

The process includes important steps, such as:

- **Linting:** When we need to ensure that the format, syntax, and language/tech conventions are being followed by all the members of the team.
- **Testing:** To be sure that not only new functions and their logic work correctly, but also the original ones are working in the expected way.

Another important step is **building the app**. This part is crucial to allow our software to work in the server or cloud platform that will deploy it later. The tools we may choose are GitHub Actions, or the DevOps pipelines that different cloud platforms offer (e.g., GCP, AWS, and Azure). Each of them has its specific tools to create and manage pipelines.

In my opinion, CI is more relevant than CD since here is where we define the right building process, dependencies, and code quality. CD, or **continuous delivery**, depends completely on CI having succeeded.

Finally, for a small project which involves just 6 people, a cloud service would fit perfectly to avoid higher costs that a self-hosted server may include. GitHub Actions fits right in a small project if we don't hire a big cloud service. In other cases, it's worth it to check our cloud services' tools for DevOps.