import React, { ReactNode } from 'react';
import { Diamond, Gift, Trophy, Users, Gamepad, Sun, Menu, Search} from 'lucide-react';
import styles from './GamingFlatform.module.scss';

interface GameCard {
  id: number;
  title: string;
  provider: string;
  image: string;
  isHot?: boolean;
  isNew?: boolean;
}

interface Providers {
  id: number;
  name: string;
  gamesCount: string;
  image: string;
}

interface Platform{
  icon: ReactNode,
  label: string,
  bool:boolean,
  className?: string
}

const GamingPlatform = () => {
  const navigationItems:Platform[] = [
    { icon: <Diamond className="w-5 h-5" />, label: 'Diamond mine', bool: false },
    { icon: <Gift className="w-5 h-5" />, label: 'VIP', bool: false },
    { icon: <Gift className="w-5 h-5" />, label: 'Promotion', bool: false },
    { icon: <Trophy className="w-5 h-5" />, label: 'Hot Match', bool: false },
    { icon: <Users className="w-5 h-5" />, label: 'P2P Transaction', bool: false },
    { icon: <Gamepad className="w-5 h-5" />, label: 'Games', bool: true, className: styles.games},
    { icon: <Sun className="w-5 h-5" />, label: 'Providers', bool: true, className: styles.providers},
  ];

  const games: GameCard[] = [
    {
      id: 1,
      title: "Bluechip Space",
      provider: "100PP GAMING",
      image: "/src/assets/images/games/game.png",
      isHot: true
    },
    {
      id: 2, 
      title: "Trouble Jet",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game1.png",
      isHot: true
    },
    {
      id: 3,
      title: "Deep Dive",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game2.png",
      isNew: true
    },
    {
      id: 4,
      title: "Match",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game3.png",
    },
    {
      id: 5,
      title: "Fury Balloon",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game2.png",
      isHot: true
    },
    {
      id: 6,
      title: "Fury Balloon",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game1.png",
    },
    {
      id: 7,
      title: "Fury Balloon",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game.png",
      isHot: true
    },
    {
      id: 8,
      title: "Fury Balloon",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game1.png",
    },
    {
      id: 7,
      title: "Fury Balloon",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game.png",
      isHot: true
    },
    {
      id: 8,
      title: "Fury Balloon",
      provider: "VELIPLAY",
      image: "/src/assets/images/games/game1.png",
    },
  ];

  const providers: Providers[] = [
    {
      id: 1,
      name: 'Evolution',
      gamesCount: '312 games',
      image: "/src/assets/images/providers/p_evolution.png",
    },
    {
      id: 2,
      name: 'Spribe',
      gamesCount: '12 games',
      image: "/src/assets/images/providers/p_spribe.png",
    },
    {
      id: 3,
      name: 'VeliPlay',
      gamesCount: '9 games',
      image: "/src/assets/images/providers/p_veliplay.png",
    },
    {
      id: 4,
      name: 'Turbo Games',
      gamesCount: '36 games',
      image: "/src/assets/images/providers/p_turbogames.png",
    },
    {
      id: 5,
      name: 'SmartSoft',
      gamesCount: '37 games',
      image: "/src/assets/images/providers/p_smartsoft.png",
    },
    {
      id: 6,
      name: '100HP Gaming',
      gamesCount: '7 games',
      image: "/src/assets/images/providers/p_100hp.png",
    },
    {
      id: 7,
      name: 'BGaming',
      gamesCount: '166 games',
      image: "/src/assets/images/providers/p_gaming.png",
    },
    {
      id: 8,
      name: 'Wazdan',
      gamesCount: '199 games',
      image: "/src/assets/images/providers/p_wazdan.png",
    },
    // Add more providers
  ];

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <button className={`${styles.navButton} ${styles.search}`}>
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
        {navigationItems.map((item, index) => (
          <button key={index} className={`${styles.navButton} ${item.className || ""}`} style={{ backgroundColor: item.bool ? '#12294A':'initial' }}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      {/* Exclusive Games Section */}
      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Exclusive Games</h2>
          <button className={styles.seeAll}>SEE ALL <Menu /></button>
        </div>

        <div className={styles.wrap}>
          <div className={styles.grid}>
            {games.map((game, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img src={game.image} alt={game.image}/>
                  </div>
                  
                  <div className={styles.tags}>
                    {game.isHot && (
                      <span className={`${styles.tag} ${styles.hotTag}`}>
                        HOT
                      </span>
                    )}
                    {game.isNew && (
                      <span className={`${styles.tag} ${styles.newTag}`}>
                        NEW
                      </span>
                    )}
                  </div>

                  <div className={styles.info}>
                    <h3 className={styles.title}>
                      {game.title}
                    </h3>
                    <p className={styles.provider}>
                      {game.provider}
                    </p>
                  </div>
                </div>

                <div className={styles.hoverEffect} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>All Providers</h2>
          <button className={styles.seeAll}>SEE ALL <Menu className="w-5 h-5" /></button>
        </div>
        <div className={styles.wrap}>
          <div className={styles.providersGrid}>
            {providers.map((provider, index) => (
              <div key={index} className={styles.providerCard}>
                <div className={styles.providerLogo}>
                  <img src={provider.image} alt={provider.image}/>
                </div>
                <div className={styles.providerContent}>
                  <h3 className={styles.providerName}>{provider.name}</h3>
                  <p className={styles.providerGames}>{provider.gamesCount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamingPlatform;