"use client";

import { useState, useEffect, useRef } from "react";
import { getForeignExchangeRates } from "@/utils/api";
import Link from "next/link";
import styles from "./ForeignExchangeSlider.module.css";

export default function ForeignExchangeSlider() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const fetchedRates = await getForeignExchangeRates();
        setRates(fetchedRates);
      } catch (error) {
        console.error("Error fetching foreign exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    
    // Refresh rates every 5 minutes
    const interval = setInterval(fetchRates, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || rates.length === 0) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(autoScroll, 30);

    return () => clearInterval(intervalId);
  }, [rates]);

  if (loading) {
    return (
      <div className={styles.forexTicker}>
        <div className="container">
          <div className={styles.forexContent}>
            <div className={styles.forexLabelBtn}>
              <span>Forex Market</span>
            </div>
            <div className={styles.forexScroll}>
              <div className={styles.forexScrollInner}>
                <div className={styles.forexItem}>
                  <div className={styles.forexRate}>
                    <span>Loading rates...</span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/foreign-exchange" className={styles.forexViewAll}>
              View All
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (rates.length === 0) {
    return null;
  }

  const duplicatedRates = [...rates, ...rates];

  return (
    <div className={styles.forexTicker}>
      <div className="container">
        <div className={styles.forexContent}>
          <div className={styles.forexLabelBtn}>
            <span>Forex Market</span>
          </div>
          
          <div className={styles.forexScroll} ref={scrollRef}>
            <div className={styles.forexScrollInner}>
              {duplicatedRates.map((rate, index) => (
                <div key={`${rate.currency}-${index}`} className={styles.forexItem}>
                  <div className={styles.forexRate}>
                    <span className={styles.forexFlag}>{rate.flag || '💱'}</span>
                    <span className={styles.forexCurrency}>{rate.currency}:</span>
                    <span className={styles.forexType}>Buy</span>
                    <span className={styles.forexValue}>{rate.buyRate?.toFixed(2) || '0.00'}</span>
                    <span className={styles.forexSeparator}>-</span>
                    <span className={styles.forexType}>Sell</span>
                    <span className={styles.forexValue}>{rate.sellRate?.toFixed(2) || '0.00'}</span>
                  </div>
                  <div className={styles.forexDivider}></div>
                </div>
              ))}
            </div>
          </div>
          
          <Link href="/foreign-exchange" className={styles.forexViewAll}>
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
