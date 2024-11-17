# Contribution guide
This contribution guide is designed to help you understand the structure of the project and how to contribute effectively.

## Structure
A simplified structure with organized and relevant folders.

- `_data` data and text of the project
- `_includes` all the components *
  - `c_some-component.html` - reusable component
  - `some-component.html` - unique component (eg. Official acounts)
- `_sass` SASS partials
- `_assets` static assets
- `videos` videos collections (Acme, Acme Clips, Guides and Surveillance Report)

### Main configuration
>`_config.yml` ([source file](../_config.yml))

Explained in more details [here](globals.md).

---
## Content files in `_data/_en/`

### Main content
>`content.yml` ([source file](../_data/_en/content.yml))

This file contains the copy for all pages of the project, including elements such as buttons and titles. Additionally, it includes content for the 'Feature Box' component ([source file](../c_feature-box.html)), which consists of an icon, title, text, and associated). It also lists the names of all social media platforms utilized in the project.

### Navigation
>`navigation.yml` ([source file](../_data/_en/navigation.yml))

File contains data for site navigation, organized into two key sections:
- `mainNav` - used to generate the main menu
- `hiddenNav` - includes all other links used throughout the project globally, which do not appear in the main menu

### Affiliates
This folder contains a list of all affiliate links ([techlore.tech/affiliates](https://techlore.tech/affiliates)), organized into two categories:
> `production.yml` ([source file](../_data/_en/affiliates/production.yml)) - production tools
> 
> `tools.yml` ([source file](../_data/_en/affiliates/tools.yml)) - privacy & security tools

ℹ️ **Icons/logos** ([Icons guide](icons.md)) are located in the `/assets/affiliates/icons` folder. To associate the appropriate icon, the 'slugified name' of the tool is used (e.g., `Acme Corporation` => `acme-corporation.svg`).

### Knowledgebase
Folder `/knowledgebase` contains all the data for the knowledge base on the **Resources page** ([techlore.tech/resources](https://techlore.tech/resources)). The data is organized into folders by section and files by category. The `c_knowledgebase.html` component ([source file](../_includes/c_knowledgebase.html)) processes this information, sorting it into sections and categories, and generates all the links as well as both navigations (section navigation and floating navigation panel on the right side). <br>
The names of the categories, titles and other text is located in `knowledgebase-text.yml` ([source file](../_data/_en/knowledgebase-text.yml)).

ℹ️ **Icons/logos** ([Icons guide](icons.md)) are located in the `/assets/knowledgebase/icons` folder. To associate the appropriate icon, the 'slugified name' of the tool is used (e.g., `Acme Corporation` => `acme-corporation.svg`).

### Other files
>`faq.yml` ([source file](../_data/_en/faq.yml))
> 
>`patreons.yml` ([source file](../_data/_en/patreons.yml)) - list of patreons on the homepage
> 
>`goincognitotable.yml` ([source file](../_data/_en/goincognitotable.yml))
>
>`spa-quiz.yml` ([source file](../_data/_en/spa-quiz.yml))
> 
>`support.yml` ([source file](../_data/_en/support.yml)) - section "We proudly support"
>
>`team.yml` ([source file](../_data/_en/team.yml))


## Video Markdown & Thumbnail Tool
Tool for administrators. Explained in more details [here](admintool.md).

