import { Helmet } from 'react-helmet-async';
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
}
export default function SEO({
  title,
  description = 'An independent community starting point for Tacloban City services, local places, and public information. Local preview.',
  keywords = 'Tacloban, city services, BetterLGU, community, transparency',
  image = '/assets/tacloban/san-juanico.webp',
  siteName = 'BetterTaclobanCity',
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} — A better everyday.`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="noindex, nofollow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="theme-color" content="#204cc7" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Helmet>
  );
}
