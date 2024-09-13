# Deployment Guide for Colorizer Project

Follow these steps to deploy the Colorizer project using GitHub Pages:

1. Navigate to the project directory:
   ```bash
   cd path/to/colorizer
   ```

2. Install the `gh-pages` package as a development dependency:
   ```bash
   npm install gh-pages --save-dev
   ```

3. Open `package.json` and add the following scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     // ... other existing scripts
   }
   ```

4. In `package.json`, add a `homepage` field:
   ```json
   "homepage": "https://yourusername.github.io/colorizer"
   ```
   Replace `yourusername` with your actual GitHub username.

5. Build and deploy the app:
   ```bash
   npm run deploy
   ```

6. Go to your GitHub repository settings:
   - Navigate to Settings > Pages
   - Set the source to the `gh-pages` branch
   - Save the changes

Your app should now be live at `https://yourusername.github.io/colorizer`.

## Alternative Deployment Options

### Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository
3. Set the build command to `npm run build`
4. Set the publish directory to `build`
5. Deploy

### Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Vercel will automatically detect it's a React app and set up the build settings
4. Deploy

Both Netlify and Vercel will automatically redeploy when you push changes to your repository.

## Important Notes

- Always run `npm run build` before deploying manually
- Ensure all changes are committed and pushed to GitHub before deploying
- Check your deployed site to ensure everything works as expected
