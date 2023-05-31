import React from "react";
import NewSeasonSaleBanner from "../../components/NewSeasonSaleBanner";
import Catalog from "../../components/Catalog";
import FirstOrderSaleBanner from "../../components/FirstOrderSaleBanner";
import Sale from "../../components/Sale";

export default function HomePage() {
  return (
    <div>
      <NewSeasonSaleBanner />
      <Catalog />
      <FirstOrderSaleBanner />
      <Sale />
    </div>
  );
}
