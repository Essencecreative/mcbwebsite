'use client'

import Layout from "@/components/layout/Layout"
import { useState, useEffect } from "react"
import { getForeignExchangeRates } from "@/utils/api"

export default function ForeignExchangePage() {
    const [rates, setRates] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRates = async () => {
            try {
                setLoading(true)
                setError(null)
                const fetchedRates = await getForeignExchangeRates()
                setRates(fetchedRates)
            } catch (err) {
                console.error("Error fetching foreign exchange rates:", err)
                setError("Failed to load foreign exchange rates. Please try again later.")
            } finally {
                setLoading(false)
            }
        }

        fetchRates()
        
        // Refresh rates every 5 minutes
        const interval = setInterval(fetchRates, 5 * 60 * 1000)
        
        return () => clearInterval(interval)
    }, [])

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <Layout 
            headerStyle={1} 
            footerStyle={1} 
            breadcrumbTitle="Foreign Exchange" 
            breadcrumbSubTitle="Currency Exchange Rates" 
            breadcrumbLink="/foreign-exchange"      
            backgroundImage="/assets/images/backgrounds/Investor-Banner.png"
        >
            <div>
                <section className="cards-area" style={{ marginTop: 100, marginBottom: 100 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="sec-title text-center">
                                    <h2>Foreign Exchange Rates</h2>
                                    <div className="sub-title">
                                        <p>Current exchange rates against Tanzanian Shilling (TZS)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {loading ? (
                            <div className="row">
                                <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                    <p>Loading exchange rates...</p>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="row">
                                <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                    <p className="text-red-600">{error}</p>
                                </div>
                            </div>
                        ) : rates.length === 0 ? (
                            <div className="row">
                                <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                    <p>No exchange rates available at the moment.</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="forex-table-container">
                                            <table className="forex-table">
                                                <thead>
                                                    <tr>
                                                        <th>Currency</th>
                                                        <th>Currency Name</th>
                                                        <th>Buy Rate (TZS)</th>
                                                        <th>Sell Rate (TZS)</th>
                                                        <th>Last Updated</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {rates.map((rate) => (
                                                        <tr key={rate._id}>
                                                            <td>
                                                                <div className="forex-currency-cell">
                                                                    <span className="forex-flag-large">{rate.flag || '💱'}</span>
                                                                    <span className="forex-code">{rate.currency}</span>
                                                                </div>
                                                            </td>
                                                            <td>{rate.currencyName || rate.currency}</td>
                                                            <td className="forex-buy">{rate.buyRate?.toFixed(2) || '0.00'}</td>
                                                            <td className="forex-sell">{rate.sellRate?.toFixed(2) || '0.00'}</td>
                                                            <td className="forex-date">
                                                                {formatDate(rate.lastUpdated || rate.updatedAt)}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-xl-12">
                                        <div className="forex-disclaimer">
                                            <p>
                                                <strong>Disclaimer:</strong> Exchange rates are indicative and may vary. 
                                                Rates are updated periodically. Please contact your branch for the most 
                                                current rates before making a transaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </div>

            <style jsx>{`
                .forex-table-container {
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    margin-top: 30px;
                }

                .forex-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .forex-table thead {
                    background: linear-gradient(0deg, rgb(10, 59, 115) 0%, rgb(14, 81, 154) 100%);
                    color: #fff;
                }

                .forex-table th {
                    padding: 18px 20px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .forex-table tbody tr {
                    border-bottom: 1px solid #e5e7eb;
                    transition: background-color 0.2s ease;
                }

                .forex-table tbody tr:hover {
                    background-color: #f9fafb;
                }

                .forex-table tbody tr:last-child {
                    border-bottom: none;
                }

                .forex-table td {
                    padding: 18px 20px;
                    font-size: 15px;
                    color: #1f2937;
                }

                .forex-currency-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .forex-flag-large {
                    font-size: 28px;
                }

                .forex-code {
                    font-weight: 600;
                    font-size: 16px;
                    color: #1f2937;
                }

                .forex-buy {
                    color: #22c55e;
                    font-weight: 600;
                }

                .forex-sell {
                    color: #ef4444;
                    font-weight: 600;
                }

                .forex-date {
                    color: #6b7280;
                    font-size: 14px;
                }

                .forex-disclaimer {
                    background: #f3f4f6;
                    padding: 20px;
                    border-radius: 8px;
                    border-left: 4px solid #e97927;
                }

                .forex-disclaimer p {
                    margin: 0;
                    color: #4b5563;
                    font-size: 14px;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .forex-table-container {
                        overflow-x: auto;
                    }

                    .forex-table {
                        min-width: 600px;
                    }

                    .forex-table th,
                    .forex-table td {
                        padding: 12px 15px;
                        font-size: 13px;
                    }
                }
            `}</style>
        </Layout>
    )
}

