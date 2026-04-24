function Projects() {
  return (
    <div className="container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-gap"></div>

      <section className="card">
        <h2>NLP Contract Analyzer</h2>
        <p>
          Full-stack legal document analyzer that extracts clauses,
          flags risky terms, and scores compliance using NLP.
        </p>
        <p className="tech-tags">
            React • Python • Flask • OCR • NLP
        </p>
        <a href="https://github.com/rishabhm005/nlp-contract-analyzer" target="_blank" rel="noreferrer">
          View GitHub
        </a>
      </section>

      <section className="card">
        <h2>FIFA World Cup Analytics Dashboard</h2>
        <p>
          Interactive sports analytics dashboard exploring FIFA World Cup data with Python visualizations.
        </p>
        <p className="tech-tags">
            Python • Pandas • Matplotlib • Data Viz
        </p>
        <a href="https://github.com/rishabhm005/fifa-analytics-dashboard" target="_blank" rel="noreferrer">
          View GitHub
        </a>
      </section>

      <section className="card">
        <h2>XML Product Catalog System</h2>
        <p>
          Built a product catalog platform using XML-based data storage with validation via DTD/XSD, XPath search queries, XSLT rendering, and a Node.js backend.
        </p>
        <p className="tech-tags">
            XML • XSD • DTD • XPath • XSLT • Node.js • Express
        </p>
        <a href="https://github.com/rishabhm005/xml-product-catalog-system" target="_blank" rel="noreferrer">
          View GitHub
        </a>
      </section>
    </div>
  );
}

export default Projects;