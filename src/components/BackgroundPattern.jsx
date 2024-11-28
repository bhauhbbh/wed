const BackgroundPattern = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, #FF9999 2px, transparent 0),
            radial-gradient(circle at 75px 75px, #FF9999 2px, transparent 0)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #FF6B6B 25%, transparent 25%),
            linear-gradient(-45deg, #FF6B6B 25%, transparent 25%)
          `,
          backgroundSize: '60px 60px',
          transform: 'rotate(45deg)'
        }}
      />
    </div>
  );
  
  export default BackgroundPattern;