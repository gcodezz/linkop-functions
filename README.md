# Linkop Client



# App Details
 Linkop-function is the server-side of the linkop application; A social media app where you can meet new friends, share posts, comment on posts, etc. It's developed with Nodejs, express, firebase functionalities and firestore


# Proposed Stack

JavaScript (Nodejs)

# Proposed Technologies

Firestore

Firebase technologies


# Top-level directory layout

    📦linkop-functions
        ┣📦functions
            ┣📦handlers
                ┣ 📜screams.js
                ┗ 📜users.js
            ┣📦utils
                ┣ 📜admin.js
                ┣ 📜config.js
                ┣ 📜fbAuth.js
                ┗ 📜validators.js
            ┣ 📜.gitignore
            ┣ 📜index.js
            ┣ 📜package-lock.json
            ┗ 📜package.json
        ┣ 📜.firebaserc
        ┣ 📜.gitignore
        ┣ 📜dbschema.js
        ┣ 📜firebaserc
        ┣ 📜package-lock.json
        ┗ 📜README.md


# How to setup project and run locally

### Clone the repository 

```
git clone https://github.com/gcodezz/Linkop-functions.git

```

### Install all dependencies

Using npm

```
npm install
```

### Start watching the file and changes

Using npm

```
npm start --reset-cache
```
