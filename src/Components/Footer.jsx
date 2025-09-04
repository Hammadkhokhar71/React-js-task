import React from 'react';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="apple-footer">
      {/* Top Disclaimer Section */}
      <div className="footer-disclaimer">
        <p className="disclaimer-text">
          1. Available for Qualified Purchasers only. Qualified Purchasers purchasing an eligible Mac/iPad
          (“Eligible Product”) with eligible AirPods/accessory (“Promotion Product”) from a Qualifying Location
          through September 30, 2025 will receive Promotion Savings (up to $199, not to exceed the price of the
          Promotion Product). Customers will be charged for all items in their cart, including the Promotion
          Product. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to
          availability. While supplies last. Additional restrictions apply. View full offer terms here.
        </p>
        <p className="disclaimer-text">
          2. Trade-in values will vary based on the condition, year, and configuration of your eligible
          trade-in device. Not all devices are eligible for credit. You must be at least the age of majority
          to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied
          toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is
          based on receipt of a qualifying device matching the description provided when estimate was made.
          Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires
          presentation of a valid photo ID (local law may require saving this information). Offer may not be
          available in all stores, and may vary between in-store and online trade-in. Apple or its trade-in
          partners reserve the right to refuse, cancel, or limit quantity of any trade-in transaction for any
          reason. More details are available from Apple’s trade-in partner for trade-in and recycling of
          eligible devices. Restrictions and limitations may apply.
        </p>
        <p className="disclaimer-text">
          To access and use all Apple Card features and products available only to Apple Card users, you must
          add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or
          iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the
          United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p className="disclaimer-text">
          Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank
          USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a
          bank.
        </p>
        <p className="disclaimer-text">
          If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions
          about Apple Card.
        </p>
        <p className="disclaimer-text">
          Learn more about how Apple Card applications are evaluated at{" "}
          <a href="#" className="footer-link">support.apple.com/kb/HT209218</a>.
        </p>
        <p className="disclaimer-text">
          Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max,
          iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set
          to the same supported language, as part of an iOS 18, iPadOS 18, and macOS Sequoia software update.
          Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish,
          Japanese, Korean, and Chinese (Simplified). More languages are coming over the course of the year,
          including Vietnamese. Some features may not be available in all regions or languages.
        </p>
        <p className="disclaimer-text">
          A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.
        </p>
        <p className="disclaimer-text">
          Features are subject to change. Some features, applications, and services may not be available in
          all regions or all languages.
        </p>
      </div>

      {/* Bottom Links Section */}
      <div className="footer-links">
        {/* Column 1 */}
        <div className="footer-column">
          <h3 className="footer-heading">Shop and Learn</h3>
          <ul className="footer-list">
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>Vision</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>AirTag</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
          <h3 className="footer-heading">Apple Wallet</h3>
          <ul className="footer-list">
            <li>Wallet</li>
            <li>Apple Card</li>
            <li>Apple Pay</li>
            <li>Apple Cash</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3 className="footer-heading">Account</h3>
          <ul className="footer-list">
            <li>Manage Your Apple Account</li>
            <li>Apple Store Account</li>
            <li>iCloud.com</li>
          </ul>
          <h3 className="footer-heading">Entertainment</h3>
          <ul className="footer-list">
            <li>Apple One</li>
            <li>Apple TV+</li>
            <li>Apple Music</li>
            <li>Apple Arcade</li>
            <li>Apple Fitness+</li>
            <li>Apple News+</li>
            <li>Apple Podcasts</li>
            <li>Apple Books</li>
            <li>App Store</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3 className="footer-heading">Apple Store</h3>
          <ul className="footer-list">
            <li>Find a Store</li>
            <li>Genius Bar</li>
            <li>Today at Apple</li>
            <li>Group Reservations</li>
            <li>Apple Camp</li>
            <li>Apple Store App</li>
            <li>Certified Refurbished</li>
            <li>Apple Trade In</li>
            <li>Financing</li>
            <li>Carrier Deals at Apple</li>
            <li>Order Status</li>
            <li>Shopping Help</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3 className="footer-heading">For Business</h3>
          <ul className="footer-list">
            <li>Apple and Business</li>
            <li>Shop for Business</li>
          </ul>
          <h3 className="footer-heading">For Education</h3>
          <ul className="footer-list">
            <li>Apple and Education</li>
            <li>Shop for K-12</li>
            <li>Shop for College</li>
          </ul>
          <h3 className="footer-heading">For Healthcare</h3>
          <ul className="footer-list">
            <li>Apple and Healthcare</li>
          </ul>
          <h3 className="footer-heading">For Government</h3>
          <ul className="footer-list">
            <li>Apple and Government</li>
            <li>Shop for Veterans and Military</li>
            <li>Shop for State and Local Employees</li>
            <li>Shop for Federal Employees</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="footer-column">
          <h3 className="footer-heading">Apple Values</h3>
          <ul className="footer-list">
            <li>Accessibility</li>
            <li>Education</li>
            <li>Environment</li>
            <li>Inclusion and Diversity</li>
            <li>Privacy</li>
            <li>Racial Equity and Justice</li>
            <li>Supply Chain Innovation</li>
          </ul>
          <h3 className="footer-heading">About Apple</h3>
          <ul className="footer-list">
            <li>Newsroom</li>
            <li>Apple Leadership</li>
            <li>Career Opportunities</li>
            <li>Investors</li>
            <li>Ethics & Compliance</li>
            <li>Events</li>
            <li>Contact Apple</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
