import React from "react";
import { useTranslation } from "react-i18next";

import ProgressCounter from "../ProgressCounter";
import Support from "./Support";
import { useCampaignConfig } from "../../hooks/useConfig";

export default function SignatureForm(props) {
  const { t } = useTranslation();
  const config = useCampaignConfig();
  return (
    <React.Fragment>
      <ProgressCounter actionPage={config.component.eci.actionpage} />
      <Support {...props} buttonText={t("Sign the ECI!")} />
    </React.Fragment>
  );
}
