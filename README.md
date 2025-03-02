# CashCow: Smart Financial Management & Budgeting

![CashCow Logo](https://via.placeholder.com/150?text=CashCow)

## 🏆 HackIllinois 2024 Project

CashCow is a comprehensive financial management application designed to help users take control of their finances, optimize budgeting, and boost productivity through smart money management. By combining traditional budgeting tools with blockchain technology and AI-powered insights, CashCow offers a unique approach to personal finance.

## 💡 Project Vision

In today's fast-paced world, managing finances effectively is a challenge for many. CashCow aims to revolutionize personal finance by:

1. **Simplifying financial tracking** through intuitive interfaces and automation
2. **Incentivizing good financial habits** using blockchain rewards and gamification
3. **Providing actionable insights** through AI-powered analytics
4. **Creating a seamless experience** across financial management tasks

## 🌟 Features

### Financial Management
- **Transaction Tracking**: Record and categorize all your financial transactions
- **Receipt Scanning**: Automatically extract and categorize expenses from receipts using AI
- **Spending Analytics**: Visualize your spending patterns with interactive charts
- **Budget Planning**: Create and manage budgets for different expense categories

### Blockchain Integration
- **SOL Staking**: Stake your Solana (SOL) directly from the application
- **NFT Rewards**: Earn unique NFTs when you achieve financial goals or complete staking
- **Secure Transactions**: All blockchain operations are secure and transparent

### Productivity Tools
- **Financial Goals**: Set and track progress towards your financial goals
- **Achievement System**: Earn achievements for good financial habits
- **Voice Commands**: Use voice input for quick transaction recording
- **Chat System**: AI-powered assistant to help with financial questions

## 🏗️ Technical Architecture

### Frontend
- **Framework**: React with TypeScript and Vite
- **State Management**: Custom app store using React hooks
- **UI Components**: Custom components with responsive design
- **Charts**: Chart.js for data visualization

### Backend
- **Database**: PostgreSQL with tables for:
  - Financial transactions
  - Visualization configurations
  - Staking events
  - NFT mints
  - Achievements
- **AI Integration**: 
  - OpenAI GPT-4o for natural language processing
  - Gemini API for receipt scanning and categorization
  - Whisper API for voice transcription

### Blockchain Integration
- **Network**: Solana (Devnet for hackathon)
- **Features**:
  - SOL staking with validator selection
  - NFT minting for achievements
  - Transaction verification

## 🚀 Getting Started for Developers

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database
- Solana CLI tools (optional, for blockchain development)
- OpenAI and Gemini API keys

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/CashCow.git
   cd CashCow
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   # Create a cred-config.ts file with the following variables
   export const OPENAI_API_KEY = "your_openai_api_key";
   export const GEMINI_API_KEY = "your_gemini_api_key";
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

### Project Structure
```
CashCow/
├── src/
│   ├── components/         # UI components
│   ├── postgres-proxy/     # Database utilities
│   ├── postgres-db/        # Database schema and setup
│   ├── scripts/            # Utility scripts
│   ├── styles/             # CSS and styling
│   ├── utils/              # Helper functions
│   ├── firebase/           # Firebase integration
│   ├── layouts/            # Page layouts
│   ├── chat-system/        # AI chat functionality
│   ├── cred-config.ts      # API key configuration
│   ├── seed-data.ts        # Initial data for the app
│   ├── sol_fetch.ts        # Solana blockchain integration
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Entry point
└── ...
```

## 🧪 Implementation Details

### AI Integration
- **Natural Language Processing**: We use GPT-4o to process user queries about their finances and provide insights
- **Receipt Processing**: Gemini API extracts merchant, items, and prices from receipt images
- **Voice Commands**: Whisper API transcribes voice to text for hands-free operation

### Blockchain Implementation
- **Solana Integration**: Direct connection to Solana blockchain for staking and NFT operations
- **Staking**: Users can stake SOL to earn rewards
- **NFT Rewards**: Custom NFTs are minted when users achieve financial goals
- **Transaction Verification**: All blockchain transactions are verified on-chain

### Database Operations
- **Transaction Recording**: All financial movements are recorded with categories
- **Analytics**: SQL queries generate data for visualization
- **Achievement Tracking**: System tracks user progress towards financial goals

## 🔄 User Flow

### First-time Setup
1. **Create Account**: Sign up with email or connect your Solana wallet
2. **Dashboard Introduction**: Get a tour of the main dashboard features
3. **Set Financial Goals**: Define your savings targets and spending limits
4. **Connect Accounts**: Link your financial accounts or start tracking manually

### Daily Usage
1. **Dashboard Overview**: 
   - View your financial summary
   - Check recent transactions
   - Monitor progress towards goals
   - See spending by category

2. **Record Transactions**: 
   - Manually add transactions with category and description
   - Scan receipts for automatic entry
   - Use voice commands for quick entry
   - Import transactions from connected accounts

3. **Financial Insights**:
   - Review spending patterns in interactive charts
   - Receive AI-powered suggestions for budget optimization
   - Get alerts for unusual spending patterns
   - Track monthly trends against your budget

4. **Budget Management**:
   - Adjust category budgets based on spending patterns
   - Set up savings goals with target dates
   - Create custom categories for specialized tracking
   - Receive notifications when approaching budget limits

### Blockchain Features
1. **Staking SOL**:
   - Navigate to the Staking section
   - Connect your Solana wallet if not already connected
   - Select amount to stake
   - Choose a validator (or use our recommended one)
   - Confirm transaction
   - Receive confirmation and track staking rewards

2. **Earning NFTs**:
   - Complete financial goals or staking milestones
   - Receive notification of NFT reward
   - View your NFT collection in the Achievements section
   - Share your achievements on social media (optional)

3. **AI Assistant**:
   - Ask questions about your finances
   - Get personalized advice on budgeting
   - Request explanations of financial terms
   - Receive suggestions for improving financial health

## 🔒 Security Considerations

- **API Keys**: Stored securely and never exposed to the client
- **Blockchain Transactions**: Require explicit user confirmation
- **Data Encryption**: All data is encrypted in transit and at rest
- **Input Validation**: All user inputs are validated to prevent injection attacks

## 🧠 Future Enhancements

- **Multi-chain Support**: Expand beyond Solana to other blockchains
- **Financial Forecasting**: AI-powered prediction of future expenses
- **Social Features**: Share achievements and compete with friends
- **Mobile Application**: Native mobile experience for iOS and Android
- **Automated Investments**: Smart investment recommendations based on spending habits

## 👨‍💻 For Hackathon Judges

### Technical Challenges Overcome
1. **AI Integration**: Seamlessly combining multiple AI services for different tasks
2. **Blockchain Operations**: Implementing secure staking and NFT minting
3. **Real-time Analytics**: Processing financial data for immediate insights
4. **Voice Processing**: Creating a natural voice interface for financial management

### Innovation Highlights
1. **Incentivized Financial Management**: Using blockchain rewards to encourage good habits
2. **AI-Powered Categorization**: Automatic expense categorization using advanced AI
3. **Voice-First Approach**: Enabling hands-free financial management
4. **Gamified Finance**: Making budgeting engaging through achievements and rewards

## 🤝 Contributing

We welcome contributions to CashCow! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Team Member 1](https://github.com/teammember1) - Role
- [Team Member 2](https://github.com/teammember2) - Role
- [Team Member 3](https://github.com/teammember3) - Role

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub or contact our support team at support@cashcow.app.

---

CashCow - Your path to financial freedom and productivity. 