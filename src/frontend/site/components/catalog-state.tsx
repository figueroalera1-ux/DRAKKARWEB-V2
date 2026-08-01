import { catalogContent } from "../data/catalog";

type CatalogStateProps = {
  type: "empty" | "loading" | "error";
  onRetry?: () => void;
};

export function CatalogState({ type, onRetry }: CatalogStateProps) {
  const state =
    type === "empty"
      ? {
          title: catalogContent.states.emptyTitle,
          description: catalogContent.states.emptyDescription,
        }
      : type === "loading"
        ? {
            title: catalogContent.states.loadingTitle,
            description: catalogContent.states.loadingDescription,
          }
        : {
            title: catalogContent.states.errorTitle,
            description: catalogContent.states.errorDescription,
          };
  return (
    <div
      className={`catalog-state catalog-state--${type}`}
      role={type === "error" ? "alert" : "status"}
    >
      <span className="catalog-state__mark" aria-hidden="true">
        {type === "loading" ? "···" : type === "error" ? "!" : "◇"}
      </span>
      <h2>{state.title}</h2>
      <p>{state.description}</p>
      {type === "error" && onRetry && (
        <button
          className="ds-button ds-button--primary"
          type="button"
          onClick={onRetry}
        >
          {catalogContent.states.retry}
        </button>
      )}
    </div>
  );
}
