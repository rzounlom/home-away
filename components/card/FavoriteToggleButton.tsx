import { Button } from "@/components/ui/button";
import { CardSignInButton } from "../form/Buttons";
import { FaHeart } from "react-icons/fa";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { auth } from "@clerk/nextjs/server";
import { fetchFavoriteId } from "@/utils/actions";

async function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ propertyId });

  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
}
export default FavoriteToggleButton;
