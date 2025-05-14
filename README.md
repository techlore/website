<h1>
	<picture>
	  <source media="(prefers-color-scheme: dark)" srcset="assets/images/github-readme-dark.png">
	  <img alt="Techlore | Digital rights for all" src="assets/images/github-readme-light.png">
	</picture>
</h1>

Techlore is educating people about digital rights, privacy, security, digital control, and other important topics to push the world towards a safer internet.

This website is using HTML, vanilla JavaScript, [Bulma.io](https://bulma.io/) framework and its components and static website generator [Jekyll](https://jekyllrb.com/).

## Contributing

- Fork this repository
- [Install and run it locally](#installation-and-local-development)
- **Read our [contribution guide 📝](contribution/index.md)**
- Edit the project to include improvements and/or features.
- Make a pull request with detailed changes
- Wait for our team to evaluate the changes

#### Have you found a bug or want to suggest a feature?

- Create an issue
- Fill the required questions in the form

---
## Installation and local development

Because we are using a static website generator, the installation requires a little bit more work.

### Jekyll

For Jekyll installation follow the instruction on the [Jekyll website](https://jekyllrb.com/docs/)

### Node.js 22.x:

We also need Node to install the latest version of Bulma.

#### MacOs / Linux

> - installs nvm (Node Version Manager)
	`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash`
> - download and install Node.js (you may need to restart the terminal)
	`nvm install 22`
> - verifies the right Node.js version is in the environment
	`node -v` should print `v22.9.0`
> - verifies the right npm version is in the environment
	`npm -v` should print `10.8.3`

ℹ️ _Installation instructions for all platforms are available on the [NodeJS.org website](https://nodejs.org/en/download/package-manager)_

### Bulma framework installation

The final step is to run `npm install`.

### View website locally

Run `bundle exec jekyll serve` and the site should be available at [http://localhost:4000](http://localhost:4000).

---
## Libraries & other projects included

- [Iconoir](https://iconoir.com/) - A high-quality selection of free open source icons
- [Jekyll](https://jekyllrb.com/) - Simple, blog-aware, static sites
- Orbot icon by [Arcticons](https://github.com/Arcticons-Team/Arcticons)

