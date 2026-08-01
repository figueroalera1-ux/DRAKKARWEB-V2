import { catalogContent, catalogFilters } from "../data/catalog";

export type ActiveFilters = {
  categories: string[];
  prices: string[];
  materials: string[];
  colors: string[];
  availability: string[];
};

type Props = {
  value: ActiveFilters;
  onChange: (filters: ActiveFilters) => void;
  onClear: () => void;
};

export const emptyFilters: ActiveFilters = {
  categories: [],
  prices: [],
  materials: [],
  colors: [],
  availability: [],
};

export function CatalogFilters({ value, onChange, onClear }: Props) {
  const toggle = (group: keyof ActiveFilters, option: string) =>
    onChange({
      ...value,
      [group]: value[group].includes(option)
        ? value[group].filter((item) => item !== option)
        : [...value[group], option],
    });
  const groups = [
    {
      key: "categories" as const,
      title: catalogContent.filterGroups.categories,
      options: catalogFilters.categories.map((item) => ({
        label: item,
        value: item,
      })),
    },
    {
      key: "prices" as const,
      title: catalogContent.filterGroups.price,
      options: catalogFilters.prices,
    },
    {
      key: "materials" as const,
      title: catalogContent.filterGroups.material,
      options: catalogFilters.materials.map((item) => ({
        label: item,
        value: item,
      })),
    },
    {
      key: "colors" as const,
      title: catalogContent.filterGroups.color,
      options: catalogFilters.colors.map((item) => ({
        label: item,
        value: item,
      })),
    },
    {
      key: "availability" as const,
      title: catalogContent.filterGroups.availability,
      options: catalogFilters.availability.map((item) => ({
        label: item,
        value: item,
      })),
    },
  ];
  return (
    <aside className="catalog-filters">
      <div className="catalog-filters__header">
        <h2>{catalogContent.filtersTitle}</h2>
        <button type="button" onClick={onClear}>
          {catalogContent.clearFilters}
        </button>
      </div>
      {groups.map((group) => (
        <fieldset key={group.key}>
          <legend>{group.title}</legend>
          {group.options.map((option) => (
            <label key={option.value}>
              <input
                type="checkbox"
                checked={value[group.key].includes(option.value)}
                onChange={() => toggle(group.key, option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </fieldset>
      ))}
    </aside>
  );
}
