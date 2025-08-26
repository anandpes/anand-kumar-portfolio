# 🚀 DEPLOYMENT GUIDE - FREE TIER

## 📋 PRE-DEPLOYMENT CHECKLIST

✅ **Portfolio Ready**
- ✅ Professional design complete
- ✅ Contact form functional
- ✅ All sections populated with content
- ✅ Mobile responsive design
- ✅ Production configuration files created

## 🗂️ DEPLOYMENT FILES CREATED

- ✅ `vercel.json` - Frontend deployment configuration
- ✅ `railway.json` - Backend deployment configuration  
- ✅ `backend/Dockerfile` - Backend container configuration
- ✅ `.env.example` - Environment variables template
- ✅ Production-ready FastAPI backend with contact form API

---

## 🌐 STEP 1: DATABASE SETUP (MongoDB Atlas - FREE)

### 1.1 Create MongoDB Atlas Account
1. Go to [https://www.mongodb.com/atlas/database](https://www.mongodb.com/atlas/database)
2. Click **"Try Free"**
3. Sign up with your email or Google account
4. Choose **"Shared Clusters"** (FREE tier)

### 1.2 Create Database Cluster
1. Select **AWS** as provider
2. Choose **region closest to you** (Singapore/Sydney)
3. Cluster Tier: **M0 Sandbox (FREE Forever)**
4. Cluster Name: `portfolio-cluster`
5. Click **"Create Cluster"** (takes 3-5 minutes)

### 1.3 Create Database User
1. Go to **Database Access** → **Add New Database User**
2. Username: `portfolio-user`
3. Password: **Generate secure password** (copy and save it!)
4. Database User Privileges: **Read and write to any database**
5. Click **"Add User"**

### 1.4 Configure Network Access  
1. Go to **Network Access** → **Add IP Address**
2. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
3. Comment: "Portfolio App Access"
4. Click **"Confirm"**

### 1.5 Get Connection String
1. Go to **Database** → **Connect** → **Connect your application**
2. Select **Python** and version **3.6 or later**
3. Copy the connection string:
   ```
   mongodb+srv://portfolio-user:<password>@portfolio-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. **Replace `<password>` with your actual password!**
5. **Save this connection string** - you'll need it for Railway

---

## 🚂 STEP 2: BACKEND DEPLOYMENT (Railway - FREE)

### 2.1 Create Railway Account
1. Go to [https://railway.app](https://railway.app)
2. Click **"Start a New Project"**
3. Sign up with **GitHub** (recommended for easy deployments)

### 2.2 Deploy Backend
1. Click **"Deploy from GitHub repo"**
2. Connect your GitHub account (if not already connected)
3. Select **"Deploy from GitHub repo"**
4. Choose your repository or upload these files to a new GitHub repo
5. Railway will auto-detect the Dockerfile

### 2.3 Configure Environment Variables
1. Go to your **Railway project** → **Variables**
2. Add these environment variables:
   ```
   MONGO_URL=mongodb+srv://portfolio-user:YOUR_PASSWORD@portfolio-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   DB_NAME=portfolio
   PORT=8000
   ```
3. **Replace YOUR_PASSWORD** with your actual MongoDB password
4. Click **"Deploy"**

### 2.4 Get Backend URL
1. Railway will provide a URL like: `https://your-app-name.up.railway.app`
2. **Copy this URL** - you'll need it for frontend deployment
3. Test backend by visiting: `https://your-app-name.up.railway.app/api/`
4. Should show: `{"message": "ANAND KUMAR Portfolio API is running successfully!", "status": "healthy"}`

---

## ⚡ STEP 3: FRONTEND DEPLOYMENT (Vercel - FREE)

### 3.1 Create Vercel Account
1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Start Deploying"**
3. Sign up with **GitHub** (recommended)

### 3.2 Prepare Frontend
1. Update `frontend/.env` with your Railway backend URL:
   ```
   REACT_APP_BACKEND_URL=https://your-app-name.up.railway.app
   ```

### 3.3 Deploy Frontend
1. Click **"New Project"** in Vercel dashboard
2. **Import Git Repository** (connect GitHub if needed)
3. Select your portfolio repository
4. **Framework Preset**: Create React App
5. **Root Directory**: `frontend` (IMPORTANT!)
6. **Build Command**: `npm run build`
7. **Output Directory**: `build`

### 3.4 Configure Environment Variables
1. In Vercel project settings → **Environment Variables**
2. Add:
   ```
   REACT_APP_BACKEND_URL=https://your-app-name.up.railway.app
   ```
3. Click **"Deploy"**

### 3.5 Get Portfolio URL
1. Vercel will provide a URL like: `https://anandkumar-portfolio.vercel.app`
2. **This is your live portfolio URL!** 🎉

---

## 🎯 STEP 4: CUSTOM DOMAIN (Optional - $10-15/year)

### 4.1 Buy Domain
- **Namecheap**: anandkumar.dev (~$12/year)
- **GoDaddy**: anandkumararchitect.com (~$15/year)
- **Google Domains**: anandkumar.tech (~$12/year)

### 4.2 Configure Domain in Vercel
1. Vercel Dashboard → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL automatically configured by Vercel

---

## ✅ FINAL CHECKLIST

After deployment, verify:

- [ ] **Backend Health**: `https://your-backend.railway.app/api/` shows success message
- [ ] **Frontend Loading**: Portfolio loads without errors
- [ ] **Contact Form**: Submit test message (check Railway logs for submissions)
- [ ] **Mobile Responsive**: Test on different screen sizes
- [ ] **All Sections**: Hero, About, Skills, Experience, Projects, Contact work
- [ ] **Navigation**: Smooth scrolling between sections
- [ ] **Performance**: Fast loading times

---

## 💰 COST BREAKDOWN

| Service | Free Tier | Limitations |
|---------|-----------|-------------|
| **MongoDB Atlas** | FREE | 512MB storage |
| **Railway** | FREE | 500 hours/month |
| **Vercel** | FREE | Unlimited deployments |
| **Domain** (Optional) | $10-15/year | - |
| **TOTAL** | **FREE** | Perfect for portfolio |

---

## 🔧 TROUBLESHOOTING

### Backend Issues:
- Check Railway logs for errors
- Verify MongoDB connection string
- Ensure all environment variables are set

### Frontend Issues:
- Check Vercel function logs
- Verify `REACT_APP_BACKEND_URL` is correct
- Check browser console for errors

### Contact Form Issues:
- Verify backend `/api/contact` endpoint works
- Check CORS configuration in backend
- Test backend endpoint directly with Postman

---

## 🚀 GOING LIVE

**Your portfolio will be live at:**
- **Frontend**: `https://anandkumar-portfolio.vercel.app`
- **Backend API**: `https://your-backend.railway.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

**Ready to impress employers and clients!** 🎉

---

## 📞 NEED HELP?

If you encounter any issues during deployment:
1. Check the specific service documentation
2. Verify all environment variables
3. Test each component individually
4. Check logs for detailed error messages

**Your professional portfolio is deployment-ready!** 🚀