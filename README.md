
# 🧼 Band Box Drycleaners – Full-Stack Business Web App

A production-ready, full-stack web application built for a local dry cleaning business. Features include real-time billing, order tracking, and admin dashboard for managing services and transactions.

> 🧾 Developed with **React**, **Django**, and **PostgreSQL** | Deployed on **Fly.io** and **GitHub Pages**

---

## 🔗 Live Demo

🌐 [BandBoxDrycleaners-Visit the App](https://rahules24.github.io/bandboxdrycleaners/)

---

## Local Development

#### 1. Setup ```.env.development```
- look at ```.env.example```
#### 2. Start the development server
- ```npm run dev```: This server runs in "development mode" by default. It looks for ```.env.development``` and load its variables.

#### Optional:
- Setup ```.env.production```
  - **Test Production Build Locally:** If you run ```npm run build``` locally, that command will look for a ```.env.production``` file.

---

## Production

#### 1. Store the Variable in GitHub
- In ```user/bandboxdrycleaners``` repository, go to ```Settings > Secrets and variables > Actions```. Create a new repository secret called ```REACT_APP_API_URL``` and set its value to the live backend URL.

#### 2. Use the Secret in Your Workflow
- Add a step to create ```.env.production``` in the workflow file, ```deploy.yml``` before the build step.

    ```
    - name: Create .env.production file
      run: |
        echo "VITE_API_URL=${{ secrets.VITE_API_URL }}" > .env.production
    ```

#### 3. Run GitHub Actions workflow
- ```npm run build```: It triggers a production build. The build script is programmed to run in "production mode". It looks for ```.env.production``` to get its variables.


#### Workflow:
  - ```Code pushed``` -> ```GitHub Action runs``` -> ```Creates .env.production from a secret``` -> ```npm run build``` uses that file -> Resulting static code has the production URL baked in.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, TailwindCSS (deployed via GitHub Pages)
- **Backend:** Django + Django REST Framework (hosted on Fly.io)
- **Database:** PostgreSQL (billing and analytics)
- **APIs:** RESTful API for GET/POST/PUT operations
- **Hosting:** GitHub Pages (frontend), Fly.io (backend)

---

## 📌 Features

- 👕 Order placement with customer details & service types
- 🧾 Billing system with dynamic pricing logic
- 📊 Admin dashboard for tracking orders & payments
- 🔐 Secure login for admins and business staff
- 🔄 Synchronized frontend and backend APIs
- 📈 Billing analytics with database integration