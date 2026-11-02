import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Icon from './ui/CityIcon';
import { PreviewContext, type Info } from './usePreview';
export function PreviewProvider({ children }: { children: ReactNode }) {
  const [info, setInfo] = useState<Info | null>(null);
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!info) return;
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      if (previous?.isConnected) previous.focus();
    };
  }, [info]);
  return (
    <PreviewContext.Provider value={{ openInfo: setInfo }}>
      {children}
      {info && (
        <dialog
          ref={ref}
          aria-labelledby="info-title"
          onCancel={() => setInfo(null)}
          onClose={() => setInfo(null)}
          onClick={event => {
            if (event.target === event.currentTarget) setInfo(null);
          }}
        >
          <div className="dialog-shell">
            <button
              className="dialog-close"
              type="button"
              aria-label="Close information"
              onClick={() => setInfo(null)}
              autoFocus
            >
              <Icon name="close" />
            </button>
            <div className="dialog-icon">
              <Icon
                name={
                  info === 'emergency'
                    ? 'phone'
                    : info === 'credits'
                      ? 'book'
                      : 'sun'
                }
              />
            </div>
            {info === 'about' && (
              <>
                <div className="eyebrow">A COMMUNITY IDEA FOR OUR CITY</div>
                <h2 id="info-title">BetterTaclobanCity.</h2>
                <p>
                  A simpler way to find city services, discover local places,
                  and access public information. Built for the people who call
                  Tacloban home, and everyone who comes to visit.
                </p>
                <div className="about-points">
                  <div>
                    <Icon name="users" />
                    <span>
                      <strong>Independent and community built</strong>This is a
                      local preview, separate from the City Government and
                      BetterGov.ph.
                    </span>
                  </div>
                  <div>
                    <Icon name="shield" />
                    <span>
                      <strong>Official sources, easier to reach</strong>Service
                      applications, account registration, and payments happen on
                      the official provider’s website.
                    </span>
                  </div>
                  <div>
                    <Icon name="building" />
                    <span>
                      <strong>Built on BetterLGU’s starter</strong>A customized
                      fork of iyanski/betterlocalgov, listed in the BetterLGU
                      community templates.
                    </span>
                  </div>
                </div>
                <div className="dialog-links">
                  <a
                    href="https://github.com/MinariSystems/BetterTaclobanCity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View BetterTaclobanCity on GitHub <Icon name="arrow-up" />
                  </a>
                  <a
                    href="https://lgu.bettergov.ph/TEMPLATES"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore the BetterLGU community <Icon name="arrow-up" />
                  </a>
                </div>
              </>
            )}
            {info === 'emergency' && (
              <>
                <div className="eyebrow">NATIONAL EMERGENCY HOTLINE</div>
                <h2 id="info-title" className="emergency-number">
                  911
                </h2>
                <p className="emergency-description">
                  For an emergency in the Philippines, call 911. Give the
                  responder your location and describe what is happening.
                </p>
                <a className="primary-button" href="tel:911">
                  <Icon name="phone" /> Call 911
                </a>
                <div className="dialog-links">
                  <a
                    href="https://ehotlines.e.gov.ph/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Philippine emergency directory{' '}
                    <Icon name="arrow-up" />
                  </a>
                  <a
                    href="https://pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read official PAGASA weather bulletins{' '}
                    <Icon name="arrow-up" />
                  </a>
                </div>
                <p className="dialog-fineprint">
                  This preview does not receive reports or dispatch emergency
                  services.
                </p>
              </>
            )}
            {info === 'credits' && (
              <>
                <div className="eyebrow">
                  GOOD INFORMATION STARTS WITH ITS SOURCE
                </div>
                <h2 id="info-title">Sources & credits.</h2>
                <div className="credit-text">
                  <p>
                    Service pathways were checked against{' '}
                    <a
                      href="https://eboss.tacloban.gov.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tacloban eBOSS
                    </a>
                    , the{' '}
                    <a
                      href="https://tacloban.gov.ph/citizens-charter/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      City’s Citizen’s Charter
                    </a>
                    , and the{' '}
                    <a
                      href="https://tacloban.gov.ph/departments/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      official departments directory
                    </a>
                    . Links reviewed November 3, 2026. Check the official
                    provider for current requirements.
                  </p>
                  <h3>San Juanico Bridge photography</h3>
                  <p>
                    “San Juanico Bridge from above” by{' '}
                    <a
                      href="https://commons.wikimedia.org/wiki/File:San_Juanico_Bridge_from_above.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mermarquez / Wikimedia Commons
                    </a>
                    . Licensed under{' '}
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CC BY-SA 4.0
                    </a>
                    . Resized, compressed, and cropped for this layout; the
                    image remains under the same license.
                  </p>
                  <h3>Open source foundation</h3>
                  <p>
                    Forked from{' '}
                    <a
                      href="https://github.com/iyanski/betterlocalgov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Better Local Gov
                    </a>
                    , released under CC0. Built with React, TypeScript,
                    Tailwind, Kapwa, and Lucide icons. Figtree fonts are self
                    hosted under the SIL Open Font License.
                  </p>
                </div>
              </>
            )}
          </div>
        </dialog>
      )}
    </PreviewContext.Provider>
  );
}
