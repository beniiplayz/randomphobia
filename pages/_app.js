import '../styles/globals.css';

// Main application component for the RandomPhobia app
function RandomPhobia({ Component, pageProps }) {
  // Render the current page component with its props
  return <Component {...pageProps} />;
}

export default RandomPhobia;