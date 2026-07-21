import { useState } from 'react';

interface ScripData {
  name: string;
  symbol: string;
  sector: string;
  ltp: string;
  open: string;
  high: string;
  low: string;
  close: string;
  prevClose: string;
  change: string;
  percentChange: string;
  volume: string;
  turnover: string;
  floorsheet: { contract: string; buyer: string; seller: string; qty: string; rate: string; amount: string }[];
}

const mockData: Record<string, ScripData> = {
  NABIL: {
    name: 'Nabil Bank Limited', symbol: 'NABIL', sector: 'Commercial Bank',
    ltp: '1050.50', open: '1040.00', high: '1060.00', low: '1035.00',
    close: '1050.00', prevClose: '1038.00', change: '+12.50', percentChange: '+1.20',
    volume: '15,780', turnover: '16,500,390.00',
    floorsheet: [
      { contract: '2025051501001234', buyer: '58', seller: '45', qty: '100', rate: '1050.00', amount: '105,000.00' },
      { contract: '2025051501001235', buyer: '33', seller: '58', qty: '50', rate: '1051.00', amount: '52,550.00' },
    ],
  },
  HDL: {
    name: 'Himalayan Distillery Ltd.', symbol: 'HDL', sector: 'Manufacturing & Processing',
    ltp: '1050.50', open: '1040.00', high: '1060.00', low: '1035.00',
    close: '1050.00', prevClose: '1038.00', change: '+12.50', percentChange: '+1.20',
    volume: '15,780', turnover: '16,500,390.00',
    floorsheet: [
      { contract: '2025051501001234', buyer: '58', seller: '45', qty: '100', rate: '1050.00', amount: '105,000.00' },
      { contract: '2025051501001235', buyer: '33', seller: '58', qty: '50', rate: '1051.00', amount: '52,550.00' },
    ],
  },
};

export default function MarketData() {
  const [symbol, setSymbol] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ScripData | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sym = symbol.toUpperCase().trim();
    setSearched(true);
    setLoading(true);
    setError(false);
    setData(null);

    setTimeout(() => {
      setLoading(false);
      if (mockData[sym]) {
        setData(mockData[sym]);
      } else {
        setError(true);
      }
    }, 1500);
  };

  return (
    <>
      <section id="market-data-hero" className="hero-section text-center" style={{ textAlign: 'center' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h1 className="hero-title" style={{ color: '#115e59', marginBottom: 24, lineHeight: 1.1, fontSize: '3rem' }}>Market Data & Scrip Analysis</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#334155', marginBottom: 40, lineHeight: 1.6 }}>Enter a stock symbol below to view its latest trading information and historical performance.</p>
        </div>
      </section>

      <section id="scrip-search-section" className="section-padding" style={{ padding: '100px 0 30px' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <form onSubmit={handleSubmit} className="scrip-search-form">
            <label htmlFor="scrip-symbol-input" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>Scrip Symbol</label>
            <input
              type="text" id="scrip-symbol-input" name="scripSymbol"
              placeholder="Enter Scrip Symbol (e.g., NABIL)"
              value={symbol} onChange={(e) => setSymbol(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Get Details</button>
          </form>
        </div>
      </section>

      <section id="scrip-results-section" className="section-padding" style={{ paddingTop: 0, padding: '100px 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          {!searched && !loading && (
            <p style={{ textAlign: 'center', color: '#64748b' }}>Please enter a scrip symbol above to view its market data.</p>
          )}

          {loading && (
            <div style={{ textAlign: 'center', padding: 20 }}>
              <p>Fetching data, please wait...</p>
            </div>
          )}

          {error && (
            <div style={{ textAlign: 'center', padding: 20, color: 'red' }}>
              <p>Error: Scrip not found or data unavailable. Please check the symbol and try again.</p>
            </div>
          )}

          {data && (
            <div>
              <header className="scrip-header" style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: '2em', color: '#115e59' }}>{data.name} (<span>{data.symbol}</span>)</h2>
                <p style={{ color: '#64748b', fontWeight: 500 }}>Sector: {data.sector}</p>
              </header>
              <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0' }} />

              <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: 20, marginBottom: 30 }}>
                {[
                  { label: 'Last Traded Price (LTP)', value: data.ltp },
                  { label: 'Open', value: data.open },
                  { label: 'High', value: data.high },
                  { label: 'Low', value: data.low },
                  { label: 'Close / Previous Close', value: `${data.close} / ${data.prevClose}` },
                  { label: 'Change / % Change', value: `${data.change} (${data.percentChange}%)` },
                  { label: 'Volume Traded', value: data.volume },
                  { label: 'Turnover', value: data.turnover },
                ].map((item) => (
                  <div key={item.label} className="card">
                    <div className="card-content">
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748b', marginBottom: 8 }}>{item.label}</h4>
                      <p className="data-value" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#115e59', marginBottom: 0 }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chart-placeholder card" style={{ marginBottom: 30 }}>
                <div className="card-content">
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748b', marginBottom: 8 }}>Price History Chart</h4>
                  <div style={{ width: '100%', height: 300, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                    Chart will be displayed here
                  </div>
                </div>
              </div>

              <div className="floorsheet-placeholder card">
                <div className="card-content">
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748b', marginBottom: 8 }}>Recent Trades (Floorsheet Highlights)</h4>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr>
                          {['Contract No', 'Buyer', 'Seller', 'Quantity', 'Rate', 'Amount'].map((h) => (
                            <th key={h} style={{ border: '1px solid #ddd', padding: 8, textAlign: h === 'Quantity' || h === 'Rate' || h === 'Amount' ? 'right' : 'left' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.floorsheet.map((row) => (
                          <tr key={row.contract}>
                            <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.contract}</td>
                            <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.buyer}</td>
                            <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.seller}</td>
                            <td style={{ border: '1px solid #ddd', padding: 8, textAlign: 'right' }}>{row.qty}</td>
                            <td style={{ border: '1px solid #ddd', padding: 8, textAlign: 'right' }}>{row.rate}</td>
                            <td style={{ border: '1px solid #ddd', padding: 8, textAlign: 'right' }}>{row.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
