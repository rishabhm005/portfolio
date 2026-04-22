function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <section className="card">
        <h2>FIFA World Cup Analytics Dashboard</h2>
        <p>
          Interactive dashboard analyzing FIFA World Cup statistics using Python and data visualization.
        </p>
        <a href="https://github.com/yourusername/fifa-dashboard" target="_blank">
          View GitHub
        </a>
      </section>

      <section className="card">
        <h2>Alzheimer's Disease Detection using GNN</h2>
        <p>
          Research project using Graph Neural Networks for explainable medical diagnosis.
        </p>
        <a href="https://github.com/yourusername/alzheimers-gnn" target="_blank">
          View GitHub
        </a>
      </section>

      <section className="card">
        <h2>Contract Clause Analyzer</h2>
        <p>
          NLP-based tool that extracts risky and missing clauses from contracts.
        </p>
        <a href="https://github.com/yourusername/contract-analyzer" target="_blank">
          View GitHub
        </a>
      </section>
    </div>
  );
}

export default Projects;