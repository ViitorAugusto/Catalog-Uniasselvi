import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroCardProps {
  title: string;
  description: string;
  image: string;
}

export const HeroCard = ({ description, image, title }: HeroCardProps) => {
  return (
    <Card>
      <Image
        alt="Product 1"
        className="rounded-t-xl object-cover bg-contain bg-center "
        height={300}
        src={image}
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
        width={500}
        priority
        quality={80}
      />
      <CardContent className="pt-4">
        <CardTitle className="font-dm_sans pb-1">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Button variant="link">
          <Link href="/catalog">Comprar agora</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
