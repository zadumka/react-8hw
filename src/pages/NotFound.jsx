import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <p>
        Oops! Page Not Found... Unfortunately, the page you requested is missing
        or has been moved.
      </p>
      <Link to="/"> Return to homepage?</Link>
    </div>
  );
}
