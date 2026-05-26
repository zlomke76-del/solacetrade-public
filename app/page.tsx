const features = [
  {
    title: "Guided intake",
    body: "A cleaner customer path for trade-in details, photos, VIN, mileage, and condition context.",
  },
  {
    title: "Dealer clarity",
    body: "Transforms scattered trade interest into structured opportunities dealers can review faster.",
  },
  {
    title: "Workflow control",
    body: "Designed around appraisal readiness, dealer review, and operational speed without generic lead-form friction.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="wrap">
        <nav className="nav">
          <div className="brand">SolaceTrade.ai</div>
          <div className="pill">Public product surface</div>
        </nav>

        <section className="hero">
          <div>
            <div className="eyebrow">Automotive retail workflow infrastructure</div>
            <h1>Real trade clarity before the desk conversation.</h1>
            <p>
              SolaceTrade.ai helps dealerships turn customer trade-in interest into structured,
              reviewable appraisal opportunities with guided vehicle intake and evidence capture.
            </p>
            <div className="cta">
              <a className="button" href="#workflow">View workflow</a>
              <a className="button secondary" href="#scope">Repository scope</a>
            </div>
          </div>

          <div className="card">
            <div className="steps">
              <div className="step">
                <strong>1. Customer starts trade intake</strong>
                <span>Simple guided flow instead of an incomplete form.</span>
              </div>
              <div className="step">
                <strong>2. Vehicle evidence is captured</strong>
                <span>Photos, VIN, mileage, and condition context are organized.</span>
              </div>
              <div className="step">
                <strong>3. Dealer reviews structured opportunity</strong>
                <span>The desk receives clearer context for appraisal follow-up.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid" id="workflow">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </section>

        <section className="section" id="scope">
          <h2>Public repository boundary</h2>
          <p>
            This repository contains a public-facing product surface and sanitized demo structure.
            Private dealer authentication, billing, CRM integrations, valuation services, storage,
            webhooks, customer data, and operational infrastructure remain outside this public release.
          </p>
        </section>

        <footer className="footer">
          © 2026 Moral Clarity AI. SolaceTrade.ai public repository.
        </footer>
      </div>
    </main>
  );
}
