import React, { useState } from "react";

import { Button } from "@material-ui/core";
import { useTranslation } from "./hooks/useEciTranslation";

import Dialog from "../Dialog";
import Details from "./Details";

export default function More(props) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        dialog={open}
        close={handleClose}
        name={t("eci:common.head-title.home")}
      >
        <Details />
      </Dialog>
      <Button onClick={handleClick}>{t("eci:common.more_info")}</Button>
    </>
  );
}
