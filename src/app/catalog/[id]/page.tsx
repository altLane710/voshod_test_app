import Link from "next/link";
import { redirect } from "next/navigation";
import { EmblaOptionsType } from "embla-carousel";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { ICarDetail } from "@/common/types";
import { formatPrice } from "@/common/utils";
import Slider from "@/components/Slider/Slider";
import noPhotographyImage from "@/common/images/image-placeholder.svg";

interface ICatalogCarResponse {
  item: ICarDetail;
}

async function getCatalogDetails(
  id: string
): Promise<ICatalogCarResponse | null> {
  const url = `https://test.taxivoshod.ru/api/test/?w=catalog-car&id=${id}`;

  const res = await fetch(url);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

const options: EmblaOptionsType = {};

export default async function Page({ params }: { params: { id: string } }) {
  const catalogDetails = await getCatalogDetails(params.id);

  if (!catalogDetails) {
    redirect("/");
  }

  const { images, brand, model, number, price, tarif } = catalogDetails.item;
  const slides = images
    ? Array.from(images.map((i) => i.image))
    : [noPhotographyImage];

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            color: "inherit",
            textDecoration: "inherit",
            alignSelf: "flex-start",
            marginBottom: "2rem",
          }}
        >
          <Button variant="outlined">Назад</Button>
        </Link>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Slider slides={slides} options={options} />
          </Grid>

          <Grid item xs={12} sm={6}>
            {tarif.length > 0 && (
              <Typography sx={{ minHeight: "2rem" }}>
                {tarif.join(" ")}
              </Typography>
            )}

            <Typography gutterBottom variant="h5" component="div">
              {brand} {model}
            </Typography>

            {number && (
              <Typography gutterBottom variant="subtitle1" component="div">
                {number}
              </Typography>
            )}

            <Divider sx={{ my: 2 }} />

            <Typography gutterBottom>
              {price ? formatPrice(price) : "Цена не известна"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
