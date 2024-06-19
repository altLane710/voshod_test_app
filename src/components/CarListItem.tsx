import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import { ICar } from "@/common/types";
import { formatPrice } from "@/common/utils";
import noPhotographyImage from "@/common/images/image-placeholder.svg";
import { useState } from "react";

export default function CarListItem(props: { car: ICar }) {
  const { id, image, brand, model, number, price, tarif } = props.car;
  const [error, setError] = useState(false);

  return (
    <Card>
      <Link
        href={`/catalog/${id}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <CardActionArea>
          <Box sx={{ position: "relative", height: 190 }}>
            {image ? (
              <Image
                fill
                objectFit="cover"
                src={error ? noPhotographyImage : image}
                alt={brand + "-" + model}
                onError={() => setError(true)}
              />
            ) : (
              <Image
                fill
                objectFit="cover"
                src={noPhotographyImage}
                alt="np image"
              />
            )}
          </Box>
          <CardContent>
            <Typography sx={{ minHeight: "2rem" }}>
              {tarif.join(" ")}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {brand} {model}
            </Typography>

            <Typography gutterBottom variant="subtitle1" component="div">
              {number}
            </Typography>

            <Divider sx={{ margin: "1rem 0" }} />

            <Typography gutterBottom>
              {price ? formatPrice(price) : "Цена не известна"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
