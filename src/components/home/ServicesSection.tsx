import { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  FileText,
  Heart,
  House,
  MapPin,
  Search,
  ShieldCheck,
  Store,
  Users,
  Utensils,
  X,
} from 'lucide-react';
import {
  services,
  type ServiceCategory,
  type ServiceIcon,
  type TaclobanService,
} from '../../data/tacloban-services';

interface ServicesSectionProps {
  query?: string;
  onQueryChange?: (query: string) => void;
  initialCategory?: string;
  full?: boolean;
  title?: string;
  description?: string;
}

type CategoryFilter = 'all' | ServiceCategory;

const categories: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All services' },
  { value: 'residents', label: 'For residents' },
  { value: 'business', label: 'For businesses' },
  { value: 'visitors', label: 'For visitors' },
];

const icons = {
  document: FileText,
  store: Store,
  home: House,
  heart: Heart,
  users: Users,
  map: MapPin,
  briefcase: BriefcaseBusiness,
  building: Building2,
  shield: ShieldCheck,
  book: BookOpen,
  utensils: Utensils,
  bed: BedDouble,
} satisfies Record<ServiceIcon, typeof FileText>;

function categoryFrom(value?: string): CategoryFilter {
  return categories.find(category => category.value === value)?.value ?? 'all';
}

// Match natural phrases such as "birth certificate" and "birth certificates".
function searchWords(value: string): string[] {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map(word =>
      word.length > 4 && word.endsWith('ies')
        ? `${word.slice(0, -3)}y`
        : word.length > 3 && word.endsWith('s') && !word.endsWith('ss')
          ? word.slice(0, -1)
          : word
    );
}

export default function ServicesSection({
  query,
  onQueryChange,
  initialCategory = 'all',
  full = false,
  title = 'How can we help you today?',
  description = 'A clearer path to the city services you need. Start here.',
}: ServicesSectionProps) {
  const [localQuery, setLocalQuery] = useState('');
  const activeQuery = query ?? localQuery;
  const [category, setCategory] = useState<CategoryFilter>(() =>
    categoryFrom(initialCategory)
  );
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<TaclobanService | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const dialogTitleId = useId();
  const servicesTitleId = useId();
  const searchId = useId();
  const hasQuery = activeQuery.trim().length > 0;

  useEffect(() => {
    setCategory(categoryFrom(initialCategory));
  }, [initialCategory]);

  useEffect(() => {
    if (activeQuery.trim()) setCategory('all');
  }, [activeQuery]);

  useEffect(() => {
    if (!selected || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const opener = openerRef.current;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [selected]);

  const filtered = useMemo(() => {
    const words = searchWords(activeQuery);
    return services.filter(service => {
      if (category !== 'all' && service.category !== category) return false;
      const searchable = searchWords(
        [
          service.title,
          service.description,
          service.office,
          service.category,
          ...service.keywords,
        ].join(' ')
      );
      return words.every(word =>
        searchable.some(candidate => candidate.includes(word))
      );
    });
  }, [activeQuery, category]);

  const showAll = full || hasQuery || category !== 'all' || expanded;
  const displayed = showAll ? filtered : filtered.slice(0, 6);
  const countLabel =
    hasQuery || category !== 'all'
      ? `${filtered.length} ${filtered.length === 1 ? 'service' : 'services'} found`
      : `${services.length} useful starting points`;

  function changeQuery(value: string) {
    setLocalQuery(value);
    onQueryChange?.(value);
  }

  function clearFilters() {
    changeQuery('');
    setCategory('all');
  }

  const SelectedIcon = selected ? icons[selected.icon] : FileText;

  return (
    <section
      className="section services-section container"
      id="services"
      aria-labelledby={servicesTitleId}
    >
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="blue-dot" aria-hidden="true" /> YOUR CITY, MADE
            SIMPLE
          </div>
          <h2 id={servicesTitleId}>{title}</h2>
          <p>{description}</p>
        </div>
        <a
          className="text-link"
          href="https://tacloban.gov.ph/citizens-charter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Citizen’s Charter <ArrowUpRight className="icon" aria-hidden="true" />
        </a>
      </div>

      {full && (
        <form
          className="search-form services-search"
          role="search"
          onSubmit={event => event.preventDefault()}
        >
          <label className="sr-only" htmlFor={searchId}>
            Search Tacloban services
          </label>
          <span className="search-icon">
            <Search className="icon" aria-hidden="true" />
          </span>
          <input
            id={searchId}
            type="search"
            value={activeQuery}
            onChange={event => changeQuery(event.target.value)}
            placeholder="Search permits, certificates, city services…"
          />
          <button type="submit" aria-label="Search services">
            <ArrowRight className="icon" aria-hidden="true" />
          </button>
        </form>
      )}

      <div className="service-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filter services">
          {categories.map(item => (
            <button
              type="button"
              key={item.value}
              className={category === item.value ? 'selected' : ''}
              aria-pressed={category === item.value}
              onClick={() => setCategory(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span id="service-count" aria-live="polite" aria-atomic="true">
          {countLabel}
        </span>
      </div>

      {hasQuery && (
        <div className="search-status">
          <span id="query-label">
            Search results for “{activeQuery.trim()}”
          </span>
          <button type="button" onClick={() => changeQuery('')}>
            Clear search <span aria-hidden="true">×</span>
          </button>
        </div>
      )}

      <div className="service-grid" id="service-grid">
        {displayed.map(service => {
          const Icon = icons[service.icon];
          return (
            <button
              className={`service-card ${service.category}`}
              type="button"
              key={service.id}
              aria-haspopup="dialog"
              onClick={event => {
                openerRef.current = event.currentTarget;
                setSelected(service);
              }}
            >
              <span className="service-card-top">
                <span className="service-card-icon">
                  <Icon className="icon" aria-hidden="true" />
                </span>
                <ArrowUpRight className="icon" aria-hidden="true" />
              </span>
              <strong className="service-card-title">{service.title}</strong>
              <span className="service-card-description">
                {service.description}
              </span>
              <span className="service-meta">
                <Building2 className="icon" aria-hidden="true" />{' '}
                {service.category === 'visitors'
                  ? 'City tourism guide'
                  : service.url.includes('eboss.')
                    ? 'eBOSS service pathway'
                    : 'City service guide'}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <span>
            <Search className="icon" aria-hidden="true" />
          </span>
          <h3>No services found</h3>
          <p>Try a shorter search, like “birth”, “permit”, or “hotel”.</p>
          <button
            className="primary-button"
            type="button"
            onClick={clearFilters}
          >
            Show all services <ArrowRight className="icon" aria-hidden="true" />
          </button>
        </div>
      )}

      {!showAll && filtered.length > displayed.length && (
        <button
          className="load-more"
          type="button"
          onClick={() => setExpanded(true)}
        >
          Explore all {services.length} services{' '}
          <ArrowRight className="icon" aria-hidden="true" />
        </button>
      )}

      {selected && (
        <dialog
          ref={dialogRef}
          aria-labelledby={dialogTitleId}
          onClose={() => setSelected(null)}
          onCancel={() => setSelected(null)}
          onClick={event => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div className="dialog-shell">
            <button
              className="dialog-close"
              type="button"
              aria-label="Close service details"
              onClick={() => setSelected(null)}
              autoFocus
            >
              <X className="icon" aria-hidden="true" />
            </button>
            <div className={`dialog-icon ${selected.category}`}>
              <SelectedIcon className="icon" aria-hidden="true" />
            </div>
            <div className="eyebrow">{selected.office}</div>
            <h2 id={dialogTitleId}>{selected.title}</h2>
            <p>{selected.description}</p>
            <h3>Where to start</h3>
            <ol className="step-list">
              {selected.steps.map(step => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="dialog-source">
              <ShieldCheck className="icon" aria-hidden="true" /> Source:{' '}
              {selected.sourceLabel}
            </div>
            <a
              className="primary-button"
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selected.linkLabel}{' '}
              <ArrowUpRight className="icon" aria-hidden="true" />
            </a>
            <p className="dialog-fineprint">
              This preview helps you find the right starting point. The linked
              city website provides the current requirements and service
              details.
            </p>
          </div>
        </dialog>
      )}
    </section>
  );
}
