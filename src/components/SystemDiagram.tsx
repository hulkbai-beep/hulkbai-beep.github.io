export function SystemDiagram() {
  return (
    <figure
      className="system-diagram"
      aria-label="Project approach: market APIs and documents flow through Python computation and schema validation into structured data and AI interpretation."
    >
      <div className="diagram-topline">
        <span className="mono">SYSTEMS, WITH INTENTION</span>
        <span className="diagram-symbol" aria-hidden="true">
          ⌘
        </span>
      </div>
      <div className="diagram-canvas" aria-hidden="true">
        <div className="diagram-orbit orbit-one" />
        <div className="diagram-orbit orbit-two" />
        <div className="diagram-input input-one">
          <span className="node-icon">{'{ }'}</span>Market APIs
        </div>
        <div className="diagram-input input-two">
          <span className="node-icon">≡</span>Documents
        </div>
        <div className="connection connection-one" />
        <div className="connection connection-two" />
        <div className="system-core">
          <span className="core-glyph">✳</span>
          <span>
            COMPUTE
            <br />& VALIDATE
          </span>
        </div>
        <div className="connection connection-three" />
        <div className="diagram-output">
          <span className="output-dot" />
          Structured data
          <span className="output-divider" />
          AI interpretation
        </div>
        <span className="canvas-coordinate">INPUT → REASONING → OUTPUT</span>
      </div>
      <figcaption>
        <span className="diagram-status" />
        Deterministic foundations. AI-assisted insight.
      </figcaption>
    </figure>
  )
}
