# CashCow: Smart Financial Management & Budgeting

![CashCow Logo](https://via.placeholder.com/150?text=CashCow)

## 🏆 HackIllinois 2024 Project

Welcome to **CashCow**, your ultimate companion for mastering personal finance! Designed to empower users with cutting-edge technology, CashCow combines traditional budgeting tools with blockchain innovation and AI-driven insights to redefine financial management.

## 💡 Project Vision

In a world where financial literacy is more crucial than ever, CashCow aims to:

1. **Simplify Financial Tracking**: Through intuitive interfaces and automation, we make managing money effortless.
2. **Incentivize Good Financial Habits**: Leverage blockchain rewards and gamification to encourage smart financial decisions.
3. **Provide Actionable Insights**: Use AI-powered analytics to offer personalized financial advice.
4. **Create a Seamless Experience**: Integrate all financial management tasks into one cohesive platform.

## 🌟 Features

### Financial Management
- **Transaction Tracking**: Effortlessly record and categorize all your financial transactions.
- **Receipt Scanning**: Use AI to automatically extract and categorize expenses from receipts.
- **Spending Analytics**: Visualize your spending patterns with interactive, easy-to-understand charts.
- **Budget Planning**: Create and manage budgets tailored to your lifestyle.

### Blockchain Integration
- **SOL Staking**: Stake your Solana (SOL) directly from the app and watch your investments grow.
- **NFT Rewards**: Earn unique NFTs as you achieve financial milestones.
- **Secure Transactions**: Enjoy peace of mind with secure and transparent blockchain operations.

### Productivity Tools
- **Financial Goals**: Set and track progress towards your financial aspirations.
- **Achievement System**: Earn achievements for cultivating good financial habits.
- **Voice Commands**: Use voice input for quick and hands-free transaction recording.
- **Chat System**: Get real-time assistance from our AI-powered financial advisor.

## 📊 Application Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                           USER ONBOARDING                               │
│                                                                         │
│  ┌──────────┐      ┌──────────────┐      ┌────────────┐     ┌────────┐ │
│  │  Create  │ ──▶  │  Dashboard   │ ──▶  │    Set     │ ──▶ │ Connect│ │
│  │ Account  │      │ Introduction │      │   Goals    │     │Accounts│ │
│  └──────────┘      └──────────────┘      └────────────┘     └────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                             MAIN DASHBOARD                              │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  ┌──────────┐   ┌──────────┐   ┌──────────┐    ┌──────────────┐  │   │
│  │  │ Financial│   │Transaction│  │ Budget   │    │ Achievement  │  │   │
│  │  │ Overview │   │  History  │  │ Tracking │    │   Progress   │  │   │
│  │  └──────────┘   └──────────┘  └──────────┘    └──────────────┘  │   │
│  │                                                                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                │            │             │              │
                ▼            ▼             ▼              ▼
┌───────────────────┐ ┌─────────────┐ ┌──────────┐ ┌─────────────────────┐
│                   │ │             │ │          │ │                     │
│  TRANSACTION      │ │  FINANCIAL  │ │ BUDGET   │ │     BLOCKCHAIN      │
│   MANAGEMENT      │ │   INSIGHTS  │ │ PLANNING │ │      FEATURES       │
│                   │ │             │ │          │ │                     │
│ ┌───────────────┐ │ │ ┌─────────┐ │ │┌────────┐│ │ ┌─────────────────┐ │
│ │ Manual Entry  │ │ │ │ Spending│ │ ││Category││ │ │   SOL Staking   │ │
│ └───────────────┘ │ │ │ Charts  │ │ ││Budgets ││ │ └─────────────────┘ │
│ ┌───────────────┐ │ │ └─────────┘ │ │└────────┘│ │ ┌─────────────────┐ │
│ │Receipt Scanner│ │ │ ┌─────────┐ │ │┌────────┐│ │ │   NFT Rewards   │ │
│ └───────────────┘ │ │ │ AI Tips │ │ ││Savings ││ │ └─────────────────┘ │
│ ┌───────────────┐ │ │ └─────────┘ │ ││ Goals  ││ │ ┌─────────────────┐ │
│ │Voice Commands │ │ │ ┌─────────┐ │ │└────────┘│ │ │ Achievement     │ │
│ └───────────────┘ │ │ │ Alerts  │ │ │          │ │ │ Tracking        │ │
│                   │ │ └─────────┘ │ │          │ │ └─────────────────┘ │
└───────────────────┘ └─────────────┘ └──────────┘ └─────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                           AI ASSISTANT                                  │
│                                                                         │
│  ┌──────────────┐   ┌───────────────┐   ┌────────────────────────────┐ │
│  │  Financial   │   │  Budgeting    │   │  Personalized Financial    │ │
│  │  Questions   │──▶│  Advice       │──▶│  Recommendations           │ │
│  └──────────────┘   └───────────────┘   └────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## 🏗️ Technical Architecture

### Frontend
- **Framework**: React with TypeScript and Vite for a modern, fast, and scalable UI.
- **State Management**: Custom app store using React hooks for efficient state handling.
- **UI Components**: Custom components with responsive design to ensure a seamless user experience.
- **Charts**: Chart.js for dynamic and interactive data visualization.

### Backend
- **Database**: PostgreSQL with robust tables for:
  - Financial transactions
  - Visualization configurations
  - Staking events
  - NFT mints
  - Achievements
- **AI Integration**: 
  - OpenAI GPT-4o for advanced natural language processing.
  - Gemini API for precise receipt scanning and categorization.
  - Whisper API for accurate voice transcription.

### Blockchain Integration
- **Network**: Solana (Devnet for hackathon) for cutting-edge blockchain features.
- **Features**:
  - SOL staking with validator selection for secure investments.
  - NFT minting for achievements to gamify financial success.
  - Transaction verification to ensure transparency and security.

## 🚀 Getting Started for Developers

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Solana CLI tools** (optional, for blockchain development)
- **OpenAI and Gemini API keys**

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/CashCow.git
   cd CashCow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a cred-config.ts file with the following variables
   export const OPENAI_API_KEY = "your_openai_api_key";
   export const GEMINI_API_KEY = "your_gemini_api_key";
   ```

4. **Start the development server**
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
- **Natural Language Processing**: Leverage GPT-4o to process user queries and provide insightful financial advice.
- **Receipt Processing**: Utilize Gemini API to extract detailed information from receipts, categorizing expenses automatically.
- **Voice Commands**: Implement Whisper API to enable hands-free operation, making financial management more accessible.

### Blockchain Implementation
- **Solana Integration**: Directly connect to the Solana blockchain for seamless staking and NFT operations.
- **Staking**: Empower users to stake SOL and earn rewards, enhancing their investment portfolio.
- **NFT Rewards**: Mint custom NFTs as users achieve financial goals, adding a layer of gamification.
- **Transaction Verification**: Ensure all blockchain transactions are verified on-chain for maximum security.

### Database Operations
- **Transaction Recording**: Record all financial movements with detailed categories for comprehensive tracking.
- **Analytics**: Generate insightful data visualizations through SQL queries.
- **Achievement Tracking**: Monitor user progress towards financial goals, encouraging continuous improvement.

## 🔄 User Flow

### First-time Setup
1. **Create Account**: Sign up with email or connect your Solana wallet for a personalized experience.
2. **Dashboard Introduction**: Get a guided tour of the main dashboard features to maximize usability.
3. **Set Financial Goals**: Define your savings targets and spending limits to stay on track.
4. **Connect Accounts**: Link your financial accounts or start tracking manually for a holistic view.

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

- **API Keys**: Stored securely and never exposed to the client.
- **Blockchain Transactions**: Require explicit user confirmation to ensure security.
- **Data Encryption**: All data is encrypted in transit and at rest to protect user information.
- **Input Validation**: All user inputs are validated to prevent injection attacks, ensuring data integrity.

## 🧠 Future Enhancements

- **Multi-chain Support**: Expand beyond Solana to other blockchains for broader reach.
- **Financial Forecasting**: Implement AI-powered prediction of future expenses to aid in planning.
- **Social Features**: Enable users to share achievements and compete with friends for added motivation.
- **Mobile Application**: Develop a native mobile experience for iOS and Android for on-the-go access.
- **Automated Investments**: Provide smart investment recommendations based on spending habits to optimize portfolios.

## 👨‍💻 For Hackathon Judges

### Technical Challenges Overcome
1. **AI Integration**: Seamlessly combining multiple AI services for different tasks.
2. **Blockchain Operations**: Implementing secure staking and NFT minting.
3. **Real-time Analytics**: Processing financial data for immediate insights.
4. **Voice Processing**: Creating a natural voice interface for financial management.

### Innovation Highlights
1. **Incentivized Financial Management**: Using blockchain rewards to encourage good habits.
2. **AI-Powered Categorization**: Automatic expense categorization using advanced AI.
3. **Voice-First Approach**: Enabling hands-free financial management.
4. **Gamified Finance**: Making budgeting engaging through achievements and rewards.

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