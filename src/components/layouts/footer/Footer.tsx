import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faTwitter, faInstagram, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';function Footer() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    if (activeDropdown === section) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(section);
    }
  };

  const footerData = {
    games: {
      title: 'Games',
      items: ['Game 1', 'Game 2', 'Game 3', 'Game 13'],
    },
    about: {
      title: 'About',
      items: [
        'About Us',
        'Promotions',
        'VIP',
        'Help Center',
        'Awards & Certificates',
        'App',
      ],
    },
    legal: {
      title: 'Legal Information',
      items: [
        'General Term & Conditions',
        'Responsible Gaming Policy',
        'Sport Betting Rules',
        'Privacy And Cookies Policy',
        'Payment Method',
        'Limits',
      ],
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Desktop View */}
        <div className={styles.desktopView}>
          <div className={styles.helpSection}>
            <h2>Help Center</h2>
            <p>If you have any question?</p>
            <button className={styles.btnAnswer}>GET ANSWERS</button>
            <div className={styles.socialIcons}>
              <a className={styles.brand}href="#">
                <FontAwesomeIcon icon={faTelegramPlane}/>
              </a>
              <a className={styles.brand}href="#">
                <FontAwesomeIcon icon={faFacebookF}/>
              </a>
              <a className={styles.brand}href="#">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
              <a className={styles.brand}href="#">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </div>
          </div>

          {Object.entries(footerData).map(([key, section]) => (
            <div key={key} className={styles.footerColumn}>
              <h3>{section.title}</h3>
              <div className={styles.linkGroup}>
                {section.items.map((item, index) => (
                  <a key={index} href="#">{item}</a>
                ))}
              </div>
            </div>
          ))}
          {/* App Download Section */}
          <div className={styles.appSection}>
            <div className={styles.macBox}>
              <FontAwesomeIcon icon={faApple} />
              <span>BlueChip App for Mac OS</span>
            </div>
            <div className={styles.mobileApps}>
              <div className={styles.androidBox}>
                <FontAwesomeIcon icon={faAndroid} />
                <span>Android</span>
              </div>
              <div className={styles.iosBox}>
                <FontAwesomeIcon icon={faApple} />
                <span>iOS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className={styles.mobileView}>
          {Object.entries(footerData).map(([key, section]) => (
            <div key={key} className={styles.dropdownContainer}>
              <button
                onClick={() => toggleDropdown(key)}
                className={styles.dropdownButton}
              >
                {section.title}
                {activeDropdown === key ? (
                  <ChevronUpIcon className={styles.icon} />
                ) : (
                  <ChevronDownIcon className={styles.icon} />
                )}
              </button>
              {activeDropdown === key && (
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownLinks}>
                    {section.items.map((item, index) => (
                      <a key={index} href="#">{item}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className={styles.mobileFollowSection}>
            <h4>Follows Us</h4>
            <div className={styles.mobileSocialIcons}>
              {/* Social Icons */}
              <a className={styles.brand}href="#">
                <FontAwesomeIcon icon={faTelegramPlane}/>
              </a>
              <a className={styles.brand}href="#">
                <FontAwesomeIcon icon={faFacebookF}/>
              </a>
              <a className={styles.brand}href="#">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
              <a className={styles.brand}href="#">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </div>
          </div>

          <div className={styles.mobileHelpSection}>
            <div className={styles.helpContent}>
              <h5>Help Center</h5>
              <p>If you have any question?</p>
            </div>
            <button className={styles.btnAnswer}>GET ANSWERS</button>
          </div>

          {/* App Download Section */}
          <div className={styles.AppSection}>
            <div className={styles.mobileApps}>
              <div className={styles.androidBox}>
                <FontAwesomeIcon icon={faAndroid} />
                <div className={styles.mobileContent}>
                  <h4 className={styles.contentApp}>BlueChip App</h4>
                  <span>for Android</span>
                </div>
              </div>
              <div className={styles.iosBox}>
                <FontAwesomeIcon icon={faApple} />
                <div className={styles.mobileContent}>
                  <h4 className={styles.contentApp}>BlueChip App</h4>
                  <span>for iOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;