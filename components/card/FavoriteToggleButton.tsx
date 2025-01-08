import { Button } from "@/components/ui/button";
import { CardSignInButton } from "../form/Buttons";
import { FaHeart } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";
function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
export default FavoriteToggleButton;
