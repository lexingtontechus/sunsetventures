import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function MyCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "sunset/meeting",
        buttonText: "Book Us",
        buttonColor: "#18181b",
        buttonTextColor: "#fafafa",
        buttonPosition: "bottom-left",
      });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#18181b" },
        },
      });
    })();
  }, []);
}
