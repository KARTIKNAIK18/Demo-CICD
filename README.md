# 🚀 Demo-CICD: Interactive Web Application

A modern, interactive web application built with Node.js and Express, featuring a clean UI with multiple interactive components. Perfect for demonstrating CI/CD pipelines and modern web development practices.

## ✨ Features

This application includes three main interactive components:

### 🔢 Interactive Counter
- Increment and decrement counter with smooth button interactions
- Real-time value updates
- Clean, modern button design

### 🎨 Dynamic Color Changer
- Click to cycle through 6 beautiful background colors
- Smooth color transitions
- Vibrant color palette

### ✅ Todo List Manager
- Add new tasks with Enter key or button click
- Delete tasks with individual delete buttons
- Clean, card-based design
- Real-time task management

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla HTML5, CSS3, and JavaScript
- **Testing**: Jest with Supertest
- **Package Management**: npm

## 📋 Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 🚀 Quick Start

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KARTIKNAIK18/Demo-CICD.git
   cd Demo-CICD
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 🧪 Testing

Run the test suite to ensure everything is working correctly:

```bash
# Run all tests
npm test

# Run tests in watch mode (if configured)
npm run test:watch
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/`      | Serves the main application interface |
| `GET`  | `/public/*` | Serves static assets (CSS, JS, images) |

## 📁 Project Structure

```
Demo-CICD/
├── 📄 README.md              # Project documentation
├── 📦 package.json           # Dependencies and scripts
├── 🚀 app.js                 # Express server configuration
├── 🧪 app.test.js            # API tests
├── 📁 public/                # Static web assets
│   ├── 🏠 index.html         # Main HTML page
│   ├── 🎨 styles.css         # CSS styles and layouts
│   └── ⚡ script.js          # Client-side JavaScript
├── 🔒 .gitignore             # Git ignore rules
└── 📋 package-lock.json      # Dependency lock file
```

## 🔧 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the production server |
| `npm test` | Run the test suite |
| `npm stop` | Stop the server process |

### Development Workflow

1. **Make your changes** to the codebase
2. **Test your changes** with `npm test`
3. **Start the server** with `npm start`
4. **Verify functionality** at `http://localhost:3000`

### Code Style Guidelines

- Use consistent indentation (2 spaces)
- Follow ES6+ JavaScript standards
- Write descriptive variable and function names
- Add comments for complex functionality

## 🚢 Deployment

This application is designed to be easily deployed to various platforms:

### Local Deployment
```bash
npm start
```

### Production Deployment
The application can be deployed to platforms like:
- **Heroku**: Add a `Procfile` with `web: node app.js`
- **Vercel**: Works out of the box with zero configuration
- **Railway**: Direct deployment from GitHub
- **DigitalOcean App Platform**: Using the provided `package.json`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test them
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Contribution Guidelines

- Ensure all tests pass before submitting
- Follow the existing code style
- Add tests for new functionality
- Update documentation as needed

## 🐛 Troubleshooting

### Common Issues

**Port already in use**:
```bash
# Kill any process using port 3000
npm run stop
# Or manually kill the process
lsof -ti :3000 | xargs kill
```

**Dependencies not found**:
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

This project is licensed under the ISC License - see the `package.json` file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for CI/CD demonstration
- Perfect for learning web development fundamentals

---

**Happy Coding!** 🎉

For questions or support, please open an issue in the GitHub repository.
