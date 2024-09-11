# **Live The Code 3.O Global Hackathon: Blockchain-Based Water Quality Monitoring System**

# **WEB3

## **Brief Explanation of Idea**

- **Preventing Unauthorized Meters**: This system uses smart contracts to manage and verify authorized IoT devices reporting data to the blockchain. Only regulators can register these devices, ensuring data integrity and security.

- **Detecting IoT Meter Tampering and Data Fraud**: We use Exponentially Weighted Moving Averages (EWMA) to predict water volume at future timestamps. Deviations beyond a set threshold trigger alerts, enabling quick response to potential tampering or data fraud.

- **Smart Contracts Between Regulators & Organizations**: Smart contracts enforce compliance with water quality standards set by regulators, ensuring transparent and accountable relationships between organizations and regulators.

- **Data Transparency with Blockchain**: Water usage and quality data are stored on the blockchain, providing immutable records and full transparency.

## **Newly Integrated Features**

- **Tampering Probability Indicator**: Utilizes a TensorFlow model to assess the probability of tampering based on water usage patterns. This helps predict and detect fraudulent activities.

- **Visual Tampering Indicator**: Displays a real-time visual indicator (color-coded) showing the validity of meter data—green for valid, red for tampered. This improves clarity for regulators and organizations.

- **Real-Time Monitoring Dashboard**: Built with React.js and Web3.js, this dashboard provides live views of water usage data, tampering status, and alerts. Chart.js is used for data visualization.

- **Email and SMS Alert System**: Integrates with Twilio and SendGrid to send SMS and email notifications when tampering or unusual water usage is detected. This ensures timely communication with authorities.

## **Technical Architecture**

1. **Smart Contract for Device Authorization**: Manages the registration of IoT devices on the blockchain, controlled by regulators.

2. **Tampering Detection**: Applies EWMA to forecast water usage and identifies deviations. Alerts are generated for unusual patterns.

3. **Smart Contracts for Water Quality Compliance**: Enforces regulatory criteria on water processing, ensuring adherence to set standards.

4. **Data Storage on Blockchain**: Provides immutable and transparent storage for water usage data.

5. **Tampering Alerts and Notifications**: Automated alerts via SMS and email for detected tampering, supported by a tampering probability indicator.

## **Tech Stack**

- Ethereum
- Solidity
- Python
- React.js
- Node.js
- Web3.js
- MetaMask
- TensorFlow
- Azure SaaS
- Chart.js
- Twilio (for SMS alerts)
- SendGrid (for email alerts)

## **Screenshots**

### **Real-Time Monitoring Dashboard**
![Real-Time Monitoring Dashboard](https://res2.weblium.site/res/5eafe6572ef5d600210c6d9f/620a0daff5aaa100229e509b_optimized)

### **Tampering Probability Indicator**
![Tampering Probability Indicator](https://s3.amazonaws.com/s3-biz4intellia/images/live-location-tracking-of-tanks-with-volume-status.png)

### **Visual Tampering Indicator**
![Visual Tampering Indicator](https://www.researchgate.net/publication/356567003/figure/fig2/AS:1095141611831296@1638113515679/Smart-Water-Management-System-9.jpg)

### **Email and SMS Alerts**
![Email and SMS Alerts](https://www.boltiot.com/hs-fs/hubfs/Projects%20images%20and%20videos/IoT%20Based%20Flood%20Monitoring%20And%20Alerting%20System/Demonstration.jpg?width=585&name=Demonstration.jpg)

![Water Quality Dashboard](https://github.com/user-attachments/assets/8819b736-12df-45a7-a5c4-16e7da403ae8) ![...](https://github.com/user-attachments/assets/5a8613cc-71d4-4107-8c67-e68d03d9e1f7) ![](https://github.com/user-attachments/assets/bbad5af1-2c75-43e1-af1b-9f968e1e50f1) ![]




## **How to Run the Project**

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root of the project and add the following:
   ```
   TWILIO_ACCOUNT_SID=<Your-Twilio-Account-SID>
   TWILIO_AUTH_TOKEN=<Your-Twilio-Auth-Token>
   TWILIO_PHONE_NUMBER=<Your-Twilio-Phone-Number>
   SENDGRID_API_KEY=<Your-SendGrid-API-Key>
   ALERT_EMAIL_RECIPIENT=<Email-Recipient>
   ```

4. **Set Up Twilio for SMS Alerts**
   - [Create a Twilio Account](https://www.twilio.com/try-twilio).
   - Obtain your Account SID, Auth Token, and a Twilio Phone Number.
   - Add these details to the `.env` file.

5. **Set Up SendGrid for Email Alerts**
   - [Create a SendGrid Account](https://signup.sendgrid.com/).
   - Generate an API key from the SendGrid dashboard.
   - Add the API key and recipient email to the `.env` file.

6. **Run the Application**
   ```bash
   npm run dev
   ```

7. **Access the Application**
   Open your browser and navigate to `http://localhost:8001` to view the real-time dashboard and manage tampering detection and alerts.

8. **Generate Reports**
   ```bash
   npm run generate-report
   ```

## **Implementation Challenges**

- **Tamper-Proof IoT Sensors**: Ensuring IoT sensors are tamper-proof can be costly and varies with deployment scale.

- **Manual Verification**: Despite automated detection, physical checks by regulatory officials may still be necessary, introducing potential delays.

## **Contributors**

- Yugh Juneja (https://github.com/yugh88)
- Aditya Raj  (https://github.com/ArkhamBat)
- Priyanshu Joshi (https://github.com/TASS33)
- Mansi Kapse  (https://github.com/Mansi-91)

