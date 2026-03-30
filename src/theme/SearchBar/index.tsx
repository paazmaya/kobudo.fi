import React, { useEffect, useRef, useState, type ReactElement } from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { useLocation } from "@docusaurus/router";
import { DocsPreferredVersionContextProvider } from "@docusaurus/plugin-content-docs/client";
import ForkedSearchBar from "./ForkedSearchBar";
import styles from "./styles.module.css";

type Props = {
  handleSearchBarToggle?: (active: boolean) => void;
};

export default function SearchBar(props: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeModal = () => {
    setIsOpen(false);
    props.handleSearchBarToggle?.(false);
    window.setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  };

  const openModal = () => {
    setIsOpen(true);
    props.handleSearchBarToggle?.(true);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open search (works globally)
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        if (!isOpen) {
          openModal();
        }
        return;
      }

      if (!isOpen) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const current = document.activeElement as HTMLElement | null;

        if (event.shiftKey && current === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && current === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("kb-search-modal-open");

    const focusTimer = window.setTimeout(() => {
      // Use requestAnimationFrame for Safari compatibility - ensures DOM is painted
      requestAnimationFrame(() => {
        const input = modalRef.current?.querySelector<HTMLInputElement>(
          'input.navbar__search-input, input[aria-label="Search"]',
        );
        // Safari requires element to be visible and focusable
        if (input && input.offsetParent !== null) {
          input.focus();
        }
      });
    }, 50);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("kb-search-modal-open");
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      closeModal();
    }
    // Close the modal after navigating to a search result.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={clsx("clean-btn", styles.searchTrigger)}
        aria-label={translate({
          id: "theme.SearchBar.label",
          message: "Search",
          description: "The ARIA label and placeholder for search button",
        })}
        onClick={openModal}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0-2a9 9 0 1 0 5.65 16l4.68 4.69a1 1 0 0 0 1.42-1.42l-4.69-4.68A9 9 0 0 0 11 2Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} role="presentation" onClick={closeModal}>
          <div
            className={styles.modalDialog}
            role="dialog"
            aria-modal="true"
            aria-label={translate({
              id: "theme.SearchBar.modal.label",
              message: "Search",
              description: "Accessible label for the search modal dialog",
            })}
            onClick={(event) => event.stopPropagation()}
            ref={modalRef}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderText}>
                <strong>
                  {translate({
                    id: "theme.SearchBar.modal.title",
                    message: "Search site",
                    description: "Title shown in the search modal",
                  })}
                </strong>
                <span className={styles.modalHeaderHint}>
                  {translate({
                    id: "theme.SearchBar.modal.hint",
                    message: "Esc to close",
                    description: "Hint for closing the search modal with Escape key",
                  })}
                </span>
              </div>
              <button
                type="button"
                className={clsx("clean-btn", styles.closeButton)}
                aria-label={translate({
                  id: "theme.common.close",
                  message: "Close",
                  description: "Accessible label for close buttons",
                })}
                onClick={closeModal}
              >
                x
              </button>
            </div>
            <div className={styles.searchContainer}>
              <DocsPreferredVersionContextProvider>
                <ForkedSearchBar handleSearchBarToggle={props.handleSearchBarToggle} />
              </DocsPreferredVersionContextProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
