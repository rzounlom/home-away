import EmptyList from "./EmptyList";
import PropertiesList from "./PropertiesList";
import type { PropertyCardProps } from "@/utils/types";
import { fetchProperties } from "@/utils/actions";

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filters"
      />
    );
  }

  return <PropertiesList properties={properties} />;
}
export default PropertiesContainer;