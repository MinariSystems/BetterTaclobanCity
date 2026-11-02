import { Directory, OpenCity, Safety } from '../components/home/CitySections';
import SEO from '../components/SEO';
export default function Government() {
  return (
    <main id="main">
      <SEO title="City offices & public information" />
      <Directory />
      <div className="section">
        <OpenCity />
      </div>
      <Safety />
    </main>
  );
}
