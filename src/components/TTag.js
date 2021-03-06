import React from "react";
import { Trans, useTranslation } from "react-i18next";
import _snarkdown from "snarkdown";

const snarkdown = (md) => {
  const htmls = md
    .split(/(?:\r?\n){2,}/)
    .map((l) =>
      [" ", "\t", "#", "-", "*"].some((ch) => l.startsWith(ch))
        ? _snarkdown(l)
        : `<p>${_snarkdown(l)}</p>`
    );

  return htmls.join("\n\n");
};

const TTag = (props) => {
  const { t } = useTranslation();
  //const tbr = (key) => t(key).replace(/\n- /g, "<li>").replace(/\n/g, "<br>");
  const tbr = (key) => snarkdown(t(key));
  return <Trans t={tbr} i18nKey={props.message}></Trans>;
  //return /* i18next-extract-disable-line */ t(props.message);
};

export default TTag;
