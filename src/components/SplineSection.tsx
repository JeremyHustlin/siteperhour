declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
      };
    }
  }
}

const SplineSection = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <spline-viewer
          url="https://prod.spline.design/vx1RgeVjLhe8q1H4/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-8 left-8 z-10 bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-xs text-white/90">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">How to interact:</p>
          <ul className="text-xs space-y-1 text-white/80">
            <li>• Click and drag to rotate view</li>
            <li>• Scroll to zoom in/out</li>
            <li>• Double click to focus</li>
            <li>• Right click to pan</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SplineSection; 