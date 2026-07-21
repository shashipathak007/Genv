import { useParams, Link } from 'react-router-dom';

const insights: Record<string, { title: string; date: string; author: string; body: string; disclaimer: string }> = {
  'market-volatility': {
    title: 'Navigating Market Volatility: A Guide for Investors',
    date: 'May 15, 2025',
    author: 'Genvest Team',
    body: `<p>Market volatility, characterized by periods of unpredictable and sometimes sharp price movements, is an inherent part of investing. While it can be unsettling, understanding its nature and having a sound strategy can help investors navigate these times with greater confidence. This article explores what drives market volatility and offers timeless principles for managing your investments during turbulent periods.</p>
    <h2>Understanding the Drivers</h2><p>Several factors can contribute to market volatility, including economic data releases (like inflation reports or employment figures), geopolitical events, changes in interest rates, industry-specific news, and even broad shifts in investor sentiment. During such times, it's common to see heightened market reactions, both positive and negative.</p>
    <h2>Key Principles for Management</h2><p>One of the cornerstones of managing volatility is maintaining a long-term perspective. Short-term market fluctuations are often noise rather than fundamental shifts in long-term value. Investors who have a clear investment plan aligned with their long-term goals are generally better equipped to look past immediate turbulence.</p>
    <p>Diversification also plays a crucial role. A well-diversified portfolio, spread across different asset classes (like stocks, bonds, and potentially alternatives) and geographies, can help cushion the impact of poor performance in any single area. Furthermore, regular portfolio reviews and rebalancing can ensure your asset allocation remains consistent with your risk tolerance and objectives, especially after significant market moves.</p>
    <h2>Conclusion</h2><p>While no one can predict market movements with certainty, reacting emotionally to volatility can often lead to poor investment decisions. Instead, focusing on your long-term strategy, ensuring your portfolio is well-diversified, and resisting the urge to make impulsive changes are key to successfully navigating an ever-changing market landscape. At Genvest, we believe in empowering our clients with the knowledge and strategies to invest confidently, through all market cycles.</p>`,
    disclaimer: 'Disclaimer: This article is for informational purposes only and should not be considered investment advice. Always consult with a qualified financial advisor before making investment decisions.',
  },
  'long-term-investing': {
    title: 'Key Principles of Long-Term Investing Success',
    date: 'May 05, 2025',
    author: 'Genvest Team',
    body: `<p>In a world of instant information and rapidly changing headlines, it can be tempting to adopt a short-term focus with investments. However, history has consistently shown that a disciplined, long-term approach is one of the most effective paths to building significant wealth. This article highlights some key principles that underpin long-term investing success.</p>
    <h2>1. Define Clear Financial Goals</h2><p>Firstly, define clear financial goals and a corresponding timeline. Are you investing for retirement in 30 years, a down payment on a house in 10 years, or your children's education? Clear goals help determine your investment strategy and appropriate risk level.</p>
    <h2>2. Embrace the Power of Compounding</h2><p>Secondly, embrace the power of compounding. Compounding occurs when your investment returns themselves start earning returns. Over long periods, this effect can be incredibly powerful, turning modest regular investments into substantial sums. The earlier you start, the more significant the impact of compounding.</p>
    <h2>3. Maintain Discipline and Consistency</h2><p>Thirdly, maintain discipline and consistency. This means sticking to your investment plan even during periods of market volatility. Making emotional decisions based on short-term market noise is often detrimental. Regular, planned investments (like through systematic investment plans - SIPs) can help average out purchase prices over time and keep you invested.</p>
    <h2>4. Focus on Quality and Fundamentals</h2><p>Finally, focus on quality and fundamentals. Whether investing in stocks, bonds, or other assets, understanding the underlying quality and long-term prospects is crucial. Chasing fleeting trends or "hot tips" rarely aligns with a sound long-term strategy.</p>
    <h2>Conclusion</h2><p>Long-term investing requires patience, discipline, and a focus on your overarching financial objectives. It's about time <em>in</em> the market, not timing the market. By adhering to these fundamental principles, investors can significantly increase their probability of achieving their financial aspirations. Genvest is committed to guiding our clients with a long-term perspective, helping them build and preserve wealth for generations to come.</p>`,
    disclaimer: 'Disclaimer: This article is for informational purposes only and should not be considered investment advice. Past performance is not indicative of future results. Always consult with a qualified financial advisor.',
  },
  'diversification-power': {
    title: 'The Power of Diversification: Building a Resilient Investment Portfolio',
    date: 'April 25, 2025',
    author: 'Genvest Team',
    body: `<p>You've likely heard the adage, "Don't put all your eggs in one basket." In the investment world, this wisdom is encapsulated by the principle of diversification. It's a fundamental strategy for managing risk and is key to building a resilient portfolio capable of weathering various market conditions. Let's delve into why diversification is so crucial.</p>
    <h2>Understanding Diversification</h2><p>At its core, diversification means spreading your investments across a variety of asset classes, industries, and geographic regions. The primary goal is to reduce the impact that any single investment's poor performance might have on your overall portfolio. Different asset classes often behave differently under various economic conditions; for instance, when stocks might be down, bonds might be stable or even up, and vice-versa.</p>
    <h2>Building a Diversified Portfolio</h2><p>A diversified portfolio might include a mix of domestic and international stocks (large-cap, mid-cap, small-cap), government and corporate bonds, real estate (directly or through REITs), and potentially commodities or other alternative investments. The specific mix will depend on an individual's investment goals, risk tolerance, and time horizon.</p>
    <p>It's important to note that diversification does not guarantee profits or protect against all losses, especially in widespread market downturns. However, it can significantly reduce the volatility of your portfolio and improve the consistency of returns over the long term. By not over-concentrating your capital in one area, you mitigate the risk of a substantial loss if that particular investment performs poorly.</p>
    <h2>Conclusion</h2><p>Building a truly diversified portfolio requires careful planning and ongoing management. It involves understanding the correlations between different asset classes and periodically rebalancing to maintain your desired allocation. At Genvest, we work with our clients to construct diversified portfolios tailored to their individual needs, helping them manage risk effectively while pursuing their long-term financial ambitions.</p>`,
    disclaimer: 'Disclaimer: This article is for informational purposes only and should not be considered investment advice. Asset allocation and diversification do not assure a profit or protect against loss. Always consult with a qualified financial advisor.',
  },
};

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? insights[slug] : undefined;

  if (!insight) {
    return (
      <section className="section-padding text-center" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '2.5em', color: '#115e59' }}>Insight Not Found</h1>
          <p>The requested article could not be found.</p>
          <Link to="/insights" className="btn btn-primary" style={{ marginTop: 20 }}>Back to Insights</Link>
        </div>
      </section>
    );
  }

  return (
    <section id="single-insight-content" className="section-padding" style={{ padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>
        <article className="insight-full-article">
          <header className="article-full-header" style={{ marginBottom: 40 }}>
            <h1 className="article-full-title" style={{ fontSize: '2.5em', color: '#115e59', marginBottom: 16 }}>{insight.title}</h1>
            <p className="article-full-meta" style={{ color: '#64748b', fontSize: '0.95rem' }}>
              <span className="publish-date">Published: {insight.date}</span> | <span className="author-name">By {insight.author}</span>
            </p>
          </header>
          <div className="article-full-body" dangerouslySetInnerHTML={{ __html: insight.body }} />
          <p style={{ fontStyle: 'italic', fontSize: '0.9em', color: '#777', marginTop: 30 }}>
            <em>{insight.disclaimer}</em>
          </p>
          <footer className="article-full-footer" style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid #eee' }}>
            <Link to="/insights" className="btn btn-secondary">&larr; Back to Insights</Link>
          </footer>
        </article>
      </div>
    </section>
  );
}
